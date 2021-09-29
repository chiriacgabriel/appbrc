import {HttpErrorResponse, HttpParams } from '@angular/common/http';
import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EnumService } from 'app/helper/enum.service';
import { FilterService } from 'app/helper/filter.service';
import { EnumState } from 'app/model/enum/EnumState';
import { CpuCoolerService } from 'app/services/components/cpu-cooler.service';
import { GenerateProductCodeService } from 'app/services/components/generate-product-code.service';
import { ReloadPageService } from 'app/services/reload-page.service';
import { TokenStorageService } from 'app/services/token-storage.service';
import {Location} from '@angular/common';
import { CpuCooler } from 'app/model/components/CpuCooler';
import Swal from 'sweetalert2';
import { GenerateProductCode } from 'app/model/components/GenerateProductCode';


@Component({
  selector: 'app-cpu-cooler',
  templateUrl: './cpu-cooler.component.html',
  styleUrls: ['./cpu-cooler.component.css',
    '../../../assets/css/_modal_filter.css',
    '../../../assets/css/_table_format.css',
    '../../../assets/css/_tab_pane_custom.css',
    '../../../assets/css/_fav_icons_custom.css',
    '../../../assets/css/_pagination_custom.css',
    ]
})
export class CpuCoolerComponent implements OnInit {

  @ViewChild('inputSearch') inputSearch: ElementRef;
  @ViewChild('inputSearchStock')inputSearchStock: ElementRef;
  @ViewChild('closeAddEditModal') closeAddEditModal;
  @ViewChild('productCode') htmlElementProductCode: ElementRef;

  id: number;
  selectedProductCode = new GenerateProductCode();
  getProductCode: string;
  query = '';
  errorMessage = '';

  cpuCoolerList = [];
  socketsCpuCooler = [];
  manufacturersList = [];
  stateList: string[] = [];
  productCodesWithStock = [];
  cpuCoolerListByProductCode = [];
  productCodesList: GenerateProductCode[] = [];
  productCodesListInactive: GenerateProductCode[] = [];

  pageSizeCpuCooler = 10;
  pageCpuCooler = 1;
  count: any;

  pageSizeProductCodeWithStock = 10;
  pageProductCodeWithStock = 1;
  countProductCodeWithStock: any;

  pageSizeCpuCoolerByProductCode = 10;
  pageCpuCoolerByProductCode = 1;
  countCpuCoolerByProductCode: any;

  isAddMode: boolean;
  isTableProductCodeSelected = true;
  isSearchProductCodesWithStock = false;
  isFiltered: boolean = false;

  validatingForm: FormGroup;
  params = new HttpParams();

  test: any;

  constructor(private cpuCoolerService: CpuCoolerService,
              private formBuilder: FormBuilder,
              private tokenService: TokenStorageService,
              private reloadPageService: ReloadPageService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private enumService: EnumService,
              private filterService: FilterService,
              private productCodeService: GenerateProductCodeService,
              private location: Location) {

  }

  ngOnInit(): void {
    this.stateList = this.enumService.getValues(EnumState);

    this.getRouting();
    this.cpuCoolerForm();
    this.getAllGenerateProductCodes();
    this.getCpuCoolerSearchResult();
    this.getAllSockets();
    this.getAllManufacturers();
    this.getAllProductCodesWithStock();
  }

  get formFields(){
    return this.validatingForm.controls;
  }

  cpuCoolerForm(){
    this.validatingForm = this.formBuilder.group({
      generateProductCode: new FormControl({value: '', disabled: true}, Validators.required),
      productName: new FormControl('', Validators.required),
      manufacturer: new FormControl('', Validators.required),
      socket: new FormControl('', Validators.required),
      productInformation: new FormControl('', Validators.required),
      priceIn: new FormControl('', Validators.required),
      quantity: new FormControl('', Validators.required),
      unitOfMeasurement: new FormControl('', Validators.required),
      state: new FormControl('', Validators.required),
      createdBy: new FormControl(''),
      updatedBy: new FormControl('')
    });
  }

  /***************************** Search, Filter, Pagination for main table tab ***************************/
  getCpuCoolerSearchResult(){
    const params = this.getPaginationParams(this.pageCpuCooler, this.pageSizeCpuCooler);
    this.cpuCoolerService.getSearchResult(this.query, params).subscribe((data: any) => {
      this.cpuCoolerList = data.content;
      this.count = data.totalElements;

      if (this.query !== '') {
        this.cpuCoolerList = [];

        for (let item of data.content) {
          this.cpuCoolerList.push(item);
        }

        this.count = data.totalElements;
        this.inputSearch.nativeElement.value = '';

      }
    }, (error: HttpErrorResponse) => {
      this.errorMessage = error.error.message;
    });
  }

  getCpuCoolerFilterResults(): void {
    let pageParams = this.getPaginationParams(this.pageCpuCooler, this.pageSizeCpuCooler);
    this.cpuCoolerService.getFilter(this.params, pageParams).subscribe((data: any) => {

      this.count = data.totalElements;
      this.cpuCoolerList = [];
      for (const item of data.content) {
        this.cpuCoolerList.push(item);
      }

      this.query = '';
    }, (error: HttpErrorResponse) => {
      this.errorMessage = error.error.message;
    });
  }

  getAllSockets(){
    this.cpuCoolerService.getSockets().subscribe((data: any) => {
      this.socketsCpuCooler = data;
    }, (error: HttpErrorResponse) => {
      this.errorMessage = error.error.message;
    });
  }

  getAllManufacturers(){
    this.cpuCoolerService.getManufacturers().subscribe((data: any) => {
      this.manufacturersList = data;
    }, (error: HttpErrorResponse) => {
      this.errorMessage = error.error.message;
    });
  }

  getEventSearchResult(event) {
    this.isFiltered = false;
    this.query = event.target.value;
    this.getCpuCoolerSearchResult();
  }

  handlePageChangeSearchAndFilter(event) {
    this.pageCpuCooler = event;

    if (this.isFiltered) {
      this.getCpuCoolerFilterResults();
    } else {
      this.getCpuCoolerSearchResult();
    }
  }

  handlePageSizeChangeSearchAndFilter(event) {
    this.pageSizeCpuCooler = event.target.value;
    this.pageCpuCooler = 1;

    if (this.isFiltered) {
      this.getCpuCoolerFilterResults();
    } else {
      this.getCpuCoolerSearchResult();
    }
  }

  getRequestParamsForFilter(event) {
    this.isFiltered = true;
    if (event.target.checked) {
      this.params = this.filterService.setParamsFilter(event);
      this.getCpuCoolerFilterResults();
    }

    if (!event.target.checked) {
      this.params = this.filterService.deleteFilter(event);
      this.getCpuCoolerFilterResults();
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
    this.cpuCoolerService.getAllProductCodesWithStock(params).subscribe((data: any) => {
      this.productCodesWithStock = data.content;
      this.countProductCodeWithStock = data.totalElements;
    }, (error: HttpErrorResponse) => {
      this.errorMessage = error.error.message;
    });
  }

  getAllSearchProductCodesWithStock(): void {
    const pageParams = this.getPaginationParams(this.pageProductCodeWithStock, this.pageSizeProductCodeWithStock);
    this.cpuCoolerService.getAllSearchProductCodesWithStock(this.params, pageParams).subscribe((data: any) => {

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

  getCpuCoolerByProductCode(productCode: any) {
    this.toggleProductCodeTable();
    this.getProductCode = productCode;
    const params = this.getPaginationParams(this.pageCpuCoolerByProductCode, this.pageSizeCpuCoolerByProductCode);
    this.cpuCoolerService.getByProductCode(productCode, params).subscribe((data: any) => {
      this.cpuCoolerListByProductCode = data.content;
      this.countCpuCoolerByProductCode = data.totalElements;
    }, (error: HttpErrorResponse) => {
      this.errorMessage = error.error.message;
    });
  }

  clearSearchProductCodesWithStock() {
    this.query = '';
    this.getAllProductCodesWithStock();
  }

  handlePageSizeChangeCpuCoolerByProductCode(event) {
    this.pageSizeCpuCoolerByProductCode = event.target.value;
    this.pageCpuCoolerByProductCode = 1;

    this.getCpuCoolerByProductCode(this.getProductCode);
    this.toggleProductCodeTable();
  }

  handlePageChangeCpuCoolerByProductCode(event) {
    this.pageCpuCoolerByProductCode = event;
    this.getCpuCoolerByProductCode(this.getProductCode);
    this.toggleProductCodeTable();
  }
  /***************************** End Search, Pagination, Filter for second table tab **************************/

  /************************** General Functions **********************************************************/
  closeModal() {
    this.isAddMode = true;
    this.validatingForm.reset();
    this.closeAddEditModal.nativeElement.click();
    this.router.navigate([], {queryParams: {}});
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

  toggleProductCodeTable() {
    this.isTableProductCodeSelected = !this.isTableProductCodeSelected;
  }

  clearSearch() {
    this.query = '';
    this.getCpuCoolerSearchResult();
  }

  goBack() {
    if (this.getProductCode) {
      this.getProductCode = null;
      this.toggleProductCodeTable();
    }

    //TODO
    // redo the location.back it causes some errors
  }

  /************************** End General Functions ******************************************************/

  /************************** Create, Update, Delete, Submit, Patch Form ****************************************************/

  private addCpuCooler(): void {
    this.validatingForm.get('createdBy').setValue(this.tokenService.getUser().firstName + ' ' + this.tokenService.getUser().lastName);

    this.formFields.generateProductCode.enable();
    this.formFields.productName.disable();
    this.validatingForm.get('generateProductCode').setValue(this.selectedProductCode);
    this.cpuCoolerService.add(this.validatingForm.value)
        .toPromise()
        .then((response) => {
          this.closeAddEditModal.nativeElement.click();
          this.formFields.generateProductCode.disable();
          this.formFields.productName.enable();
          this.getCpuCoolerSearchResult();
          this.getAllProductCodesWithStock();
        }).catch((error: HttpErrorResponse) => {
      this.errorMessage = error.error.message;
      document.getElementById('addCpuCooler-btn').setAttribute('data-backdrop', 'static');
    });
  }

  private editCpuCooler(): void {
    this.validatingForm.get('updatedBy').setValue(this.tokenService.getUser().firstName + ' ' + this.tokenService.getUser().lastName);

    this.formFields.generateProductCode.enable();
    this.formFields.productName.disable();
    this.validatingForm.get('generateProductCode').setValue(this.selectedProductCode);

    this.cpuCoolerService.editById(this.id, this.validatingForm.value)
        .toPromise()
        .then((response) => {
          this.closeAddEditModal.nativeElement.click();
          this.getCpuCoolerSearchResult();
          this.getAllProductCodesWithStock();
          this.isAddMode = true;
          this.router.navigate([], {queryParams: {}});
          this.formFields.generateProductCode.disable();
          this.formFields.productName.enable();
        }).catch((error: HttpErrorResponse) => {
      this.errorMessage = error.error.message;
      document.getElementById('editCpuCooler-btn').setAttribute('data-backdrop', 'static');
    });
  }

  deleteCpuCooler(cpuCooler: CpuCooler) {
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
            this.cpuCoolerService.deleteById(Number(cpuCooler.id)).subscribe(response => {
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
      this.addCpuCooler();
    } else {
      this.editCpuCooler();
    }
  }

  patchForm(cpuCooler: any, param: any) {
    this.isAddMode = false;
    const productCodeInactive = this.productCodesListInactive
        .find(s => s.productCode === cpuCooler.generateProductCode.productCode);
    const productCodeActive = this.productCodesList
        .find(s => s.productCode === cpuCooler.generateProductCode.productCode);

    if (productCodeInactive !== undefined && productCodeInactive.state === false) {
      this.productCodeService.inactiveProductCode(param, productCodeInactive);
      return;
    }

    this.selectedProductCode = cpuCooler.generateProductCode;
    this.validatingForm.patchValue(cpuCooler);
    this.validatingForm.get('productName')
        .setValue(productCodeActive);

    this.router.navigate(['components/cpu-cooler'], {queryParams: {id: cpuCooler.id}});
  }

  getAllGenerateProductCodes(): void {
    this.productCodeService.getAllByCategory(GenerateProductCode.productCodeURI, 'cpu-cooler').subscribe((data: any) => {
      this.productCodesList = data.filter(productCode => productCode.state === true);
      this.productCodesListInactive = data.filter(productCode => productCode.state === false);
    }, (error: HttpErrorResponse) => {
      this.errorMessage = error.error.message;
    });
  }

  setGeneratedProductCode(event: any) {
    if (event === undefined || event === null) {
      return;
    }

    this.htmlElementProductCode.nativeElement.value = event.productCode
    this.selectedProductCode = event;

  }
  /***********************End Create, Update, Delete ****************************************************/

}
