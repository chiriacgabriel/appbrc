import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {Location} from '@angular/common';
import { HttpErrorResponse, HttpParams } from '@angular/common/http';
import { OpticalUnit } from 'app/model/components/OpticalUnit';
import Swal from 'sweetalert2';
import {FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { EnumState } from 'app/model/enum/EnumState';
import { GenerateProductCodeService } from 'app/services/components/generate-product-code.service';
import { FilterService } from 'app/helper/filter.service';
import { EnumService } from 'app/helper/enum.service';
import {ActivatedRoute, Router } from '@angular/router';
import { ReloadPageService } from 'app/services/reload-page.service';
import { TokenStorageService } from 'app/services/token-storage.service';
import { OpticalUnitService } from 'app/services/components/optical-unit.service';
import { GenerateProductCode } from 'app/model/components/GenerateProductCode';

@Component({
  selector: 'app-optical-unit',
  templateUrl: './optical-unit.component.html',
  styleUrls: ['./optical-unit.component.css',
    '../../../assets/css/_modal_filter.css',
    '../../../assets/css/_table_format.css',
    '../../../assets/css/_tab_pane_custom.css',
    '../../../assets/css/_fav_icons_custom.css',
    '../../../assets/css/_pagination_custom.css']
})
export class OpticalUnitComponent implements OnInit {

  @ViewChild('inputSearch') inputSearch: ElementRef;
  @ViewChild('inputSearchStock')inputSearchStock: ElementRef;
  @ViewChild('closeAddEditModal') closeAddEditModal;
  @ViewChild('productCode') htmlElementProductCode: ElementRef;

  id: number;
  selectedProductCode = new GenerateProductCode();
  getProductCode: string;
  query = '';
  errorMessage = '';

  opticalUnitList = [];
  typeList = [];
  manufacturersList = [];
  stateList: string[] = [];
  productCodesWithStock = [];
  opticalUnitListByProductCode = [];
  productCodesList: GenerateProductCode[] = [];
  productCodesListInactive: GenerateProductCode[] = [];

  pageSizeOpticalUnit = 10;
  pageOpticalUnit = 1;
  count: any;

  pageSizeProductCodeWithStock = 10;
  pageProductCodeWithStock = 1;
  countProductCodeWithStock: any;

  pageSizeOpticalUnitByProductCode = 10;
  pageOpticalUnitByProductCode = 1;
  countOpticalUnitByProductCode: any;

  isAddMode: boolean;
  isTableProductCodeSelected = true;
  isSearchProductCodesWithStock = false;
  isFiltered: boolean = false;
  isSerialNumberPresent = false;

  validatingForm: FormGroup;

  params = new HttpParams();

  constructor(private opticalUnitService: OpticalUnitService,
              private formBuilder: FormBuilder,
              private tokenService: TokenStorageService,
              private reloadPageService: ReloadPageService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private enumService: EnumService,
              private filterService: FilterService,
              private productCodeService: GenerateProductCodeService,
              private location: Location) { }

  ngOnInit(): void {
    this.stateList = this.enumService.getValues(EnumState);

    this.getRouting();
    this.opticalUnitForm();
    this.getAllGenerateProductCodes();
    this.getOpticalUnitSearchResult();
    this.getAllTypes();
    this.getAllManufacturers();
    this.getAllProductCodesWithStock();
  }

  get formFields(){
    return this.validatingForm.controls;
  }

  opticalUnitForm(){
    this.validatingForm = this.formBuilder.group({
      generateProductCode: new FormControl({value: '', disabled: true}, Validators.required),
      productName: new FormControl('', Validators.required),
      serialNumber: new FormControl('', Validators.required),
      manufacturer: new FormControl('', Validators.required),
      type: new FormControl('', Validators.required),
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
  getOpticalUnitSearchResult(){
    const params = this.getPaginationParams(this.pageOpticalUnit, this.pageSizeOpticalUnit);
    this.opticalUnitService.getSearchResult(this.query, params).subscribe((data: any) => {
      this.opticalUnitList = data.content;
      this.count = data.totalElements;

      if (this.query !== '') {
        this.opticalUnitList = [];

        for (let item of data.content) {
          this.opticalUnitList.push(item);
        }

        this.count = data.totalElements;
        this.inputSearch.nativeElement.value = '';

      }
    }, (error: HttpErrorResponse) => {
      this.errorMessage = error.error.message;
    });
  }

  getOpticalUnitFilterResults(): void {
    let pageParams = this.getPaginationParams(this.pageOpticalUnit, this.pageSizeOpticalUnit);
    this.opticalUnitService.getFilter(this.params, pageParams).subscribe((data: any) => {

      this.count = data.totalElements;
      this.opticalUnitList = [];
      for (const item of data.content) {
        this.opticalUnitList.push(item);
      }

      this.query = '';
    }, (error: HttpErrorResponse) => {
      this.errorMessage = error.error.message;
    });
  }

  getAllTypes(){
    this.opticalUnitService.getTypes().subscribe((data: any) => {
      this.typeList = data;
    }, (error: HttpErrorResponse) => {
      this.errorMessage = error.error.message;
    });
  }

  getAllManufacturers(){
    this.opticalUnitService.getManufacturers().subscribe((data: any) => {
      this.manufacturersList = data;
    }, (error: HttpErrorResponse) => {
      this.errorMessage = error.error.message;
    });
  }

  getEventSearchResult(event) {
    this.isFiltered = false;
    this.query = event.target.value;
    this.getOpticalUnitSearchResult();
  }

  handlePageChangeSearchAndFilter(event) {
    this.pageOpticalUnit = event;

    if (this.isFiltered) {
      this.getOpticalUnitFilterResults();
    } else {
      this.getOpticalUnitSearchResult();
    }
  }

  handlePageSizeChangeSearchAndFilter(event) {
    this.pageSizeOpticalUnit = event.target.value;
    this.pageOpticalUnit = 1;

    if (this.isFiltered) {
      this.getOpticalUnitFilterResults();
    } else {
      this.getOpticalUnitSearchResult();
    }
  }

  getRequestParamsForFilter(event) {
    this.isFiltered = true;
    if (event.target.checked) {
      this.params = this.filterService.setParamsFilter(event);
      this.getOpticalUnitFilterResults();
    }

    if (!event.target.checked) {
      this.params = this.filterService.deleteFilter(event);
      this.getOpticalUnitFilterResults();
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
    this.opticalUnitService.getAllProductCodesWithStock(params).subscribe((data: any) => {
      this.productCodesWithStock = data.content;
      this.countProductCodeWithStock = data.totalElements;
    }, (error: HttpErrorResponse) => {
      this.errorMessage = error.error.message;
    });
  }

  getAllSearchProductCodesWithStock(): void {
    const pageParams = this.getPaginationParams(this.pageProductCodeWithStock, this.pageSizeProductCodeWithStock);
    this.opticalUnitService.getAllSearchProductCodesWithStock(this.params, pageParams).subscribe((data: any) => {

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

  getOpticalUnitByProductCode(productCode: any) {
    this.toggleProductCodeTable();
    this.getProductCode = productCode;
    const params = this.getPaginationParams(this.pageOpticalUnitByProductCode, this.pageSizeOpticalUnitByProductCode);
    this.opticalUnitService.getByProductCode(productCode, params).subscribe((data: any) => {
      this.opticalUnitListByProductCode = data.content;
      this.countOpticalUnitByProductCode = data.totalElements;
    }, (error: HttpErrorResponse) => {
      this.errorMessage = error.error.message;
    });
  }

  clearSearchProductCodesWithStock() {
    this.query = '';
    this.getAllProductCodesWithStock();
  }

  handlePageSizeChangeOpticalUnitByProductCode(event) {
    this.pageSizeOpticalUnitByProductCode = event.target.value;
    this.pageOpticalUnitByProductCode = 1;

    this.getOpticalUnitByProductCode(this.getProductCode);
    this.toggleProductCodeTable();
  }

  handlePageChangeOpticalUnitByProductCode(event) {
    this.pageOpticalUnitByProductCode = event;
    this.getOpticalUnitByProductCode(this.getProductCode);
    this.toggleProductCodeTable();
  }
  /***************************** End Search, Pagination, Filter for second table tab **************************/

  /************************** General Functions **********************************************************/
  closeModal() {
    this.isAddMode = true;
    this.validatingForm.reset();
    this.closeAddEditModal.nativeElement.click();
    this.router.navigate([], {});

    if (this.isSerialNumberPresent){
      this.isSerialNumberPresent = false;
      this.errorMessage = '';
    }

    this.router.navigate([], {});
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
    this.getOpticalUnitSearchResult();
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

  private addOpticalUnit(): void {
    this.validatingForm.get('createdBy').setValue(this.tokenService.getUser().firstName + ' ' + this.tokenService.getUser().lastName);

    this.formFields.generateProductCode.enable();
    this.formFields.productName.disable();
    this.validatingForm.get('generateProductCode').setValue(this.selectedProductCode);

    this.opticalUnitService.add(this.validatingForm.value)
        .toPromise()
        .then((response) => {
          this.closeAddEditModal.nativeElement.click();
          this.formFields.generateProductCode.disable();
          this.formFields.productName.enable();
          this.isSerialNumberPresent = false;
          this.getOpticalUnitSearchResult();
          this.getAllProductCodesWithStock();
        }).catch((error: HttpErrorResponse) => {
      this.isSerialNumberPresent = true;
      this.errorMessage = error.error.message;
      document.getElementById('addOpticalUnit-btn').setAttribute('data-backdrop', 'static');
    });
  }

  private editOpticalUnit(): void {
    this.validatingForm.get('updatedBy').setValue(this.tokenService.getUser().firstName + ' ' + this.tokenService.getUser().lastName);

    this.formFields.generateProductCode.enable();
    this.formFields.productName.disable();
    this.validatingForm.get('generateProductCode').setValue(this.selectedProductCode);

    this.opticalUnitService.editById(this.id, this.validatingForm.value)
        .toPromise()
        .then((response) => {
          this.closeAddEditModal.nativeElement.click();
          this.getOpticalUnitSearchResult();
          this.getAllProductCodesWithStock();
          this.isAddMode = true;
          this.isSerialNumberPresent = false;
          this.formFields.generateProductCode.disable();
          this.formFields.productName.enable();
          this.router.navigate([], {});
        }).catch((error: HttpErrorResponse) => {

      this.isSerialNumberPresent = true;
      this.errorMessage = error.error.message;
      document.getElementById('editOpticalUnit-btn').setAttribute('data-backdrop', 'static');
    });
  }

  deleteOpticalUnit(opticalUnit: OpticalUnit) {
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
            this.opticalUnitService.deleteById(Number(opticalUnit.id)).subscribe(response => {
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
      this.addOpticalUnit();
    } else {
      this.editOpticalUnit();
    }
  }

  patchForm(opticalUnit: any, param: any) {
    this.isAddMode = false;

    const productCodeInactive = this.productCodesListInactive
        .find(s => s.productCode === opticalUnit.generateProductCode.productCode);
    const productCodeActive = this.productCodesList
        .find(s => s.productCode === opticalUnit.generateProductCode.productCode);

    if (productCodeInactive !== undefined && productCodeInactive.state === false) {
      this.productCodeService.inactiveProductCode(param, productCodeInactive);
      return;
    }

    this.selectedProductCode = opticalUnit.generateProductCode;
    this.validatingForm.patchValue(opticalUnit);
    this.validatingForm.get('productName')
        .setValue(productCodeActive);

    this.router.navigate(['components/optical-unit'], {queryParams: {id: opticalUnit.id}});
  }

  getAllGenerateProductCodes(): void {
    this.productCodeService.getAllByCategory(GenerateProductCode.productCodeCategoryURI, new HttpParams().set('category', 'Optical Unit')).subscribe((data: any) => {
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

    this.htmlElementProductCode.nativeElement.value = event.productCode;
    this.selectedProductCode = event;

  }
  /***********************End Create, Update, Delete ****************************************************/

}
