import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {HttpErrorResponse, HttpParams} from '@angular/common/http';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {GenerateProductCode} from '../../model/components/GenerateProductCode';
import {FanCaseService} from '../../services/components/fan-case.service';
import {ReloadPageService} from '../../services/reload-page.service';
import {ActivatedRoute, Router} from '@angular/router';
import {GenerateProductCodeService} from '../../services/components/generate-product-code.service';
import {EnumService} from '../../helper/enum.service';
import {FilterService} from '../../helper/filter.service';
import {TokenStorageService} from '../../services/token-storage.service';
import {FanCase} from '../../model/components/FanCase';
import Swal from 'sweetalert2';
import {Location} from '@angular/common';
import { EnumState } from 'app/model/enum/EnumState';

@Component({
  selector: 'app-fan-case',
  templateUrl: './fan-case.component.html',
  styleUrls: ['./fan-case.component.css',
    '../../../assets/css/_modal_filter.css',
    '../../../assets/css/_table_format.css',
    '../../../assets/css/_tab_pane_custom.css',
    '../../../assets/css/_fav_icons_custom.css',
    '../../../assets/css/_pagination_custom.css']
})
export class FanCaseComponent implements OnInit {

  @ViewChild('inputSearch') inputSearch: ElementRef;
  @ViewChild('inputSearchStock') inputSearchStock: ElementRef;
  params = new HttpParams();
  validatingForm: FormGroup;
  id: number;
  isAddMode: boolean;
  errorMessage = '';
  query = '';

  fanCaseList = [];
  fanCaseFilter = [];
  pageSizeFanCase = 10;
  pageFanCase = 1;
  count: any;

  selectedProductCode = new GenerateProductCode();
  productCodesList: GenerateProductCode[] = [];
  productCodeListInactive: GenerateProductCode[] = [];
  stateList: any;

  isFiltered = false;

  getProductCode: string;
  isTableProductCodeSelected = true;

  productCodesWithStock = [];
  pageSizeProductCodeWithStock = 10;
  pageProductCodeWithStock = 1;
  countProductCodeWithStock: any;
  isSearchProductCodesWithStock = false;

  fanCasesListByProductCode = [];
  pageSizeFanCasesByProductCode = 10;
  pageFanCasesByProductCode = 1;
  countFanCasesByProductCode: any;
  dimensionsFanCases = [];
  constructor(private fanCaseService: FanCaseService,
              private reloadPageService: ReloadPageService,
              private activatedRoute: ActivatedRoute,
              private productCodeService: GenerateProductCodeService,
              private router: Router,
              private location: Location,
              private formBuilder: FormBuilder,
              private enumService: EnumService,
              private filterService: FilterService,
              private tokenService: TokenStorageService) { }

  // tslint:disable-next-line:typedef
  get formFields() {
    return this.validatingForm.controls;
  }

  ngOnInit(): void {
    this.getRouting();
    this.fanCaseForm();
    this.getAllGenerateProductCodes();
    this.getFanCaseSearchResult();
    this.getAllDimensions();
    this.getAllProductCodesWithStock();
    this.stateList = this.enumService.getValues(EnumState);
  }

  fanCaseForm(): void {
    this.validatingForm = this.formBuilder.group({
      generateProductCode: new FormControl({value: '', disabled: true}, Validators.required),
      productName: new FormControl('', Validators.required),
      manufacturer: new FormControl('', Validators.required),
      dimension: new FormControl('', Validators.required),
      productInformation: new FormControl('', Validators.required),
      quantity: new FormControl('', Validators.required),
      unitOfMeasurement: new FormControl('', Validators.required),
      priceIn: new FormControl('', Validators.required),
      state: new FormControl('', Validators.required),
      createdBy: new FormControl(''),
      updatedBy: new FormControl('')
    });
  }


  /***************************** Search, Filter, Pagination for main table tab ***************************/

  getFanCaseSearchResult() {
    const params = this.getPaginationParams(this.pageFanCase, this.pageSizeFanCase);
    this.fanCaseService.getSearchResults(this.query, params).subscribe((data: any) => {
      this.fanCaseList = data.content;
      this.count = data.totalElements;

      if (this.query !== '') {
        this.fanCaseList = [];

        for (let item of data.content) {
          this.fanCaseList.push(item);
        }

        this.count = data.totalElements;
        this.inputSearch.nativeElement.value = '';

      }
    }, (error: HttpErrorResponse) => {
      this.errorMessage = error.error.message;
    });
  }

  getFanCaseFilterResults(): void {
    let pageParams = this.getPaginationParams(this.pageFanCase, this.pageSizeFanCase);
    this.fanCaseService.getFilter(this.params, pageParams).subscribe((data: any) => {

      this.count = data.totalElements;
      this.fanCaseList = [];
      for (const item of data.content) {
        this.fanCaseList.push(item);
      }

      this.query = '';
    }, (error: HttpErrorResponse) => {
      this.errorMessage = error.error.message;
    });
  }

  getAllDimensions(): void {
    this.fanCaseService.getDimensions().subscribe((data: any) => {
      this.dimensionsFanCases = data;
    }, (error: HttpErrorResponse) => {
      this.errorMessage = error.error.message;
    })
  }

  getEventSearchResult(event: any) {
    this.isFiltered = false;
    this.query = event.target.value;
    this.getFanCaseSearchResult();
  }

  handlePageChangeSearchAndFilter(event) {
    this.pageFanCase = event;

    if (this.isFiltered) {
      this.getFanCaseFilterResults();
    } else {
      this.getFanCaseSearchResult();
    }
  }

  handlePageSizeChangeSearchAndFilter(event) {
    this.pageSizeFanCase = event.target.value;
    this.pageFanCase = 1;

    if (this.isFiltered) {
      this.getFanCaseFilterResults();
    } else {
      this.getFanCaseSearchResult();
    }
  }

  getRequestParamsForFilter(event) {
    this.isFiltered = true;
    if (event.target.checked) {
      this.params = this.filterService.setParamsFilter(event);
      this.getFanCaseFilterResults();
    }

    if (!event.target.checked) {
      this.params = this.filterService.deleteFilter(event);
      this.getFanCaseFilterResults();
    }
  }

  resetFilters() {
    this.isFiltered = false;
    window.location.reload();
  }

  /***************************** End Search, Filter, Pagination for main table tab ************************/


  /***************************** Search, Pagination, Filter for second table tab **************************/

  getAllProductCodesWithStock(): void {
    const params = this.getPaginationParams(this.pageProductCodeWithStock, this.pageSizeProductCodeWithStock);
    this.fanCaseService.getAllProductCodesWithStock(params).subscribe((data: any) => {
      this.productCodesWithStock = data.content;
      this.countProductCodeWithStock = data.totalElements;
    }, (error: HttpErrorResponse) => {
      this.errorMessage = error.error.message;
    });
  }

  getAllSearchProductCodesWithStock(): void {
    const pageParams = this.getPaginationParams(this.pageProductCodeWithStock, this.pageSizeProductCodeWithStock);
    this.fanCaseService.getAllSearchProductCodesWithStock(this.params, pageParams).subscribe((data: any) => {

      this.productCodesWithStock = [];
      this.productCodesWithStock = data.content;
      this.countProductCodeWithStock = data.totalElements;
      this.inputSearchStock.nativeElement.value = '';

    }, (error: HttpErrorResponse) => {
      this.errorMessage = error.error.message;
    });
  }

  getSearchResultProductCodesWithStock(event) {
    this.isSearchProductCodesWithStock = true;
    this.query = event.target.value;
    this.params = this.params.set('search', this.query);
    this.getAllSearchProductCodesWithStock();
  }

  handlePageChangeProductCodesWithStock(event) {
    this.pageProductCodeWithStock = event;
    if (this.isSearchProductCodesWithStock) {
      this.getAllSearchProductCodesWithStock();
    } else {
      this.getAllProductCodesWithStock();
    }
  }

  handlePageSizeChangeProductCodesWithStock(event) {
    this.pageSizeProductCodeWithStock = event.target.value;
    this.pageProductCodeWithStock = 1;

    if (this.isSearchProductCodesWithStock) {
      this.getAllSearchProductCodesWithStock();
    } else {
      this.getAllProductCodesWithStock();
    }
  }

  getFanCasesByProductCode(productCode: any) {

    this.toggleProductCodeTable();
    this.getProductCode = productCode;
    const params = this.getPaginationParams(this.pageFanCasesByProductCode, this.pageSizeFanCasesByProductCode);
    this.fanCaseService.getByProductCode(productCode, params).subscribe((data: any) => {
      this.fanCasesListByProductCode = data.content;
      this.countFanCasesByProductCode = data.totalElements;
    }, (error: HttpErrorResponse) => {
      this.errorMessage = error.error.message;
    });
  }

  clearSearchProductCodesWithStock() {
    this.query = '';
    this.getAllProductCodesWithStock();
  }

  handlePageSizeChangeFanCasesByProductCode(event) {
    this.pageSizeFanCasesByProductCode = event.target.value;
    this.pageFanCasesByProductCode = 1;

    this.getFanCasesByProductCode(this.getProductCode);
    this.toggleProductCodeTable();
  }

  handlePageChangeFanCasesByProductCode(event) {
    this.pageFanCasesByProductCode = event;
    this.getFanCasesByProductCode(this.getProductCode);
    this.toggleProductCodeTable();
  }
  /***************************** End Search, Pagination, Filter for second table tab **************************/


  /************************** General Functions **********************************************************/

  closeModal() {
    this.isAddMode = true;
    this.validatingForm.reset();
    this.reloadPageService.skipLocation('components/fan-case');
  }

  getRouting() {
    this.activatedRoute.queryParams.subscribe(param => {
      this.id = param['id'];
    });
    if (!this.id) {
      this.isAddMode = true;
    } else {
      this.isAddMode = false;
    }
  }

  // tslint:disable-next-line:typedef
  getPaginationParams(page, pageSize) {
    let params = {};
    if (page) {
      params['page'] = page - 1;
    }
    if (pageSize) {
      params['size'] = pageSize;
    }
    return params;
  }

  clearSearch() {
    this.query = '';
    this.getFanCaseSearchResult();
  }

  goBack() {
    if (this.getProductCode) {
      this.getProductCode = null;
      this.toggleProductCodeTable();
    }
  }

  toggleProductCodeTable() {
    this.isTableProductCodeSelected = !this.isTableProductCodeSelected;
  }

  /************************** End General Functions ******************************************************/

  /************************** Create, Update, Delete, Submit, Patch Form ****************************************************/

  private addFanCase(): void {
    this.validatingForm.get('createdBy').setValue(this.tokenService.getUser().firstName + ' ' + this.tokenService.getUser().lastName);

    this.formFields.generateProductCode.enable();
    this.formFields.productName.disable()
    this.validatingForm.get('generateProductCode').setValue(this.selectedProductCode);

    this.fanCaseService.add(this.validatingForm.value)
        .toPromise()
        .then((response) => {
          this.reloadPageService.reload();
          document.querySelector('.modal-backdrop').remove();
        }).catch((error: HttpErrorResponse) => {
      this.errorMessage = error.error.message;
      document.getElementById('addFanCase-btn').setAttribute('data-backdrop', 'static');
    });
  }

  private editFanCase(): void {
    this.validatingForm.get('updatedBy').setValue(this.tokenService.getUser().firstName + ' ' + this.tokenService.getUser().lastName);

    this.formFields.generateProductCode.enable();
    this.formFields.productName.disable();
    this.validatingForm.get('generateProductCode').setValue(this.selectedProductCode);

    this.fanCaseService.editById(this.id, this.validatingForm.value)
        .toPromise()
        .then((response) => {
          this.router.navigate(['components/fan-case']).then(() => this.reloadPageService.reload());
          this.isAddMode = true;
          document.querySelector('.modal-backdrop').remove();
        }).catch((error: HttpErrorResponse) => {
      this.errorMessage = error.error.message;
      document.getElementById('editFanCase-btn').setAttribute('data-backdrop', 'static');
    });
  }

  deleteFanCase(fanCase: FanCase) {
    Swal.fire({
      title: 'Esti sigur?',
      text: "Inregistrarea va fi stearsa definitiv si produsele asociate!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Da, sterge!'
    })
        .then((willDelete) => {
          if (willDelete.isConfirmed) {
            this.fanCaseService.deleteById(Number(fanCase.id)).subscribe(response => {
              this.reloadPageService.reload();
            }, (error: HttpErrorResponse) => {
              this.errorMessage = error.error.message;
            });
          }
        });
  }

  onSubmit() {
    if (this.validatingForm.invalid) {
      return;
    }

    if (this.isAddMode) {
      this.addFanCase();
    } else {
      this.editFanCase();
    }
  }

  patchForm(fanCase: any, param: any) {
    const productCodeInactive = this.productCodeListInactive
        .find(s => s.productCode === fanCase.generateProductCode.productCode);

    const productCodeActive = this.productCodesList
        .find(s => s.productCode === fanCase.generateProductCode.productCode);

    if (productCodeInactive !== undefined && productCodeInactive.state === false){
      this.productCodeService.inactiveProductCode(param, productCodeInactive);
      return null;
    }

    this.isAddMode = false;
    this.selectedProductCode = fanCase.generateProductCode;
    this.validatingForm.patchValue(fanCase);
    this.validatingForm.get('productName')
        .setValue(productCodeActive);

    this.router.navigate(['components/fan-case'], {queryParams: {id: fanCase.id}});
  }

  getAllGenerateProductCodes(): void {
    this.productCodeService.getAll(FanCase.generateProductURL).subscribe((data: any) => {
      this.productCodesList = data.filter(productCode => productCode.state === true);
      this.productCodeListInactive = data.filter(productCode => productCode.state === false);
    }, (error: HttpErrorResponse) => {
      this.errorMessage = error.error.message;
    });
  }

  setGeneratedProductCode(event: any) {
    if (event === undefined || event === null) {
      return;
    }
    this.selectedProductCode = this.productCodesList.find(p => p.productName === event.productName);

  }
  /***********************End Create, Update, Delete ****************************************************/

}
