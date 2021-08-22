import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {HttpErrorResponse, HttpParams} from '@angular/common/http';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {FanCaseService} from '../../../../services/components/fan-case.service';
import { ReloadPageService } from 'src/app/services/reload-page.service';
import { ActivatedRoute, Router } from '@angular/router';
import { EnumService } from '../brandcomputers_v1.1/src/app/services/enum.service';
import { FilterService } from '../brandcomputers_v1.1/src/app/services/filter.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import {Location} from '@angular/common';
import { EnumState } from 'src/app/model/enum/EnumState';
import {FanCase} from '../../../../model/FanCase';
import swal from 'sweetalert';
import { GenerateProductCode } from 'src/app/model/GenerateProductCode';
import { GenerateProductCodeService } from 'src/app/services/components/generate-product-code.service';

@Component({
  selector: 'app-fan-case',
  templateUrl: './fan-case.component.html',
  styleUrls: ['./fan-case.component.scss']
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
              private tokenService: TokenStorageService) {
  }

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
      generateProductCodeFanCase: new FormControl({value: '', disabled: true}, Validators.required),
      productName: new FormControl('', Validators.required),
      manufacturer: new FormControl('', Validators.required),
      dimension: new FormControl('', Validators.required),
      productInformation: new FormControl('', Validators.required),
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
    this.router.navigate(['dashboard/fan-case'], {queryParams: {productCode: productCode}});
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
    this.reloadPageService.skipLocation('dashboard/fan-case');
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
      this.location.back();
    }
  }

  toggleProductCodeTable() {
    this.isTableProductCodeSelected = !this.isTableProductCodeSelected;
  }

  /************************** End General Functions ******************************************************/

  /************************** Create, Update, Delete, Submit, Patch Form ****************************************************/

  private addFanCase(): void {
    this.validatingForm.get('createdBy').setValue(this.tokenService.getUser().firstName + ' ' + this.tokenService.getUser().lastName);

    this.formFields.generateProductCodeFanCase.enable();
    this.formFields.productName.disable()
    this.validatingForm.get('generateProductCodeFanCase').setValue(this.selectedProductCode);

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

    this.formFields.generateProductCodeFanCase.enable();
    this.formFields.productName.disable();
    this.validatingForm.get('generateProductCodeFanCase').setValue(this.selectedProductCode);

    this.fanCaseService.editById(this.id, this.validatingForm.value)
      .toPromise()
      .then((response) => {
        this.router.navigate(['dashboard/fan-case']).finally(() => this.reloadPageService.reload());
        this.isAddMode = true;
        document.querySelector('.modal-backdrop').remove();
      }).catch((error: HttpErrorResponse) => {
      this.errorMessage = error.error.message;
      document.getElementById('editFanCase-btn').setAttribute('data-backdrop', 'static');
    });
  }

  deleteFanCase(fanCase: FanCase) {
    swal({
      title: 'Esti sigur ?',
      text: 'Inregistrarea va fi stearsa definitiv !',
      icon: 'warning',
      buttons: ['Anulare', 'Sterge'],
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
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

  patchForm(fanCase: any) {
    this.isAddMode = false;
    const data = this.fanCaseList.find(i => i.id == fanCase.id);

    this.selectedProductCode = data.generateProductCodeFanCase;
    this.validatingForm.patchValue(data);
    this.validatingForm.get('productName')
      .setValue(this.productCodesList
        .find(s => s.productCode === data.generateProductCodeCpuCooler.productCode));

    this.router.navigate(['dashboard/fan-case'], {queryParams: {id: fanCase.id}});
  }

  getAllGenerateProductCodes(): void {
    this.productCodeService.getAll(FanCase.generateProductURL).subscribe((data: any) => {
      this.productCodesList = data;
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
