import { HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {ActivatedRoute, Router } from '@angular/router';
import { EnumService } from 'app/helper/enum.service';
import { FilterService } from 'app/helper/filter.service';
import { EnumState } from 'app/model/enum/EnumState';
import { PowerSource } from 'app/model/components/PowerSource';
import { GenerateProductCodeService } from 'app/services/components/generate-product-code.service';
import { PowerSourceService } from 'app/services/components/power-source.service';
import { ReloadPageService } from 'app/services/reload-page.service';
import { TokenStorageService } from 'app/services/token-storage.service';
import Swal from 'sweetalert2';
import {Location} from '@angular/common';
import { GenerateProductCode } from 'app/model/components/GenerateProductCode';

@Component({
  selector: 'app-power-source',
  templateUrl: './power-source.component.html',
  styleUrls: ['./power-source.component.css',
    '../../../assets/css/_modal_filter.css',
    '../../../assets/css/_table_format.css',
    '../../../assets/css/_tab_pane_custom.css',
    '../../../assets/css/_fav_icons_custom.css',
    '../../../assets/css/_pagination_custom.css']
})
export class PowerSourceComponent implements OnInit {

  @ViewChild('inputSearch') inputSearch: ElementRef;
  @ViewChild('inputSearchStock') inputSearchStock: ElementRef;
  @ViewChild('closeAddEditModal') closeAddEditModal;
  @ViewChild('productCode') htmlElementProductCode: ElementRef;

  validatingForm: FormGroup;
  id: number;
  isAddMode: boolean;
  loading = false;
  errorMessage = '';
  powerSourcesList = [];
  powerSourcesFilter = [];
  powerSourcesSearchResult = [];
  powerSourcesListByProductCode = [];
  manufacturersList: string[] = [];
  sourceTypesList: string[] = [];
  productCodesList: GenerateProductCode[] = [];
  productCodesListInactive: GenerateProductCode[] = [];
  query = '';
  preselectedPowerValues = ['Sub 500', '500 - 800', '801 - 1000', 'Peste 1000'];
  isFiltered = false;
  params = new HttpParams();
  pagePowerSources = 1;
  pageSizePowerSources = 10;
  count: any;
  pageProductCodeWithStock = 1;
  pageSizeProductCodeWithStock = 10;
  countProductCodeWithStock: any;
  pagePowerSourcesByProductCode = 1;
  pageSizePowerSourcesByProductCode = 10;
  countPowerSourcesByProductCode: any;
  stateList: string[] = [];
  productCodesWithStock = [];
  stock = 0;
  getProductCode: string;
  isSerialNumberPresent = false;
  selectedProductCode =new GenerateProductCode();
  isSearchProductCodeWithStock = false;
  isTableProductCodeSelected = true;

  constructor(private powerSourceService: PowerSourceService,
              private reloadPageService: ReloadPageService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private fromBuilder: FormBuilder,
              private enumService: EnumService,
              private filterService: FilterService,
              private productCodeService: GenerateProductCodeService,
              private tokenService: TokenStorageService,
              private location: Location) {
  }

  // tslint:disable-next-line:typedef
  get formFields() {
    return this.validatingForm.controls;
  }

  ngOnInit(): void {
    this.getRouting();
    this.stateList = this.enumService.getValues(EnumState);
    this.powerSourceForm();
    this.getAllManufacturers();
    this.getAllSourceTypes();
    this.getPowerSourceSearchResults();
    this.getAllProductCodesWithStock();
    this.getAllGenerateProductCodes();

  }

  powerSourceForm(): void {
    this.validatingForm = this.fromBuilder.group({
      generateProductCode: new FormControl({value: '', disabled: true}, Validators.required),
      productName: new FormControl('', Validators.required),
      serialNumber: new FormControl('', Validators.required),
      manufacturer: new FormControl('', Validators.required),
      model: new FormControl('', Validators.required),
      power: new FormControl('', Validators.required),
      sourceType: new FormControl('', Validators.required),
      priceIn: new FormControl('', Validators.required),
      quantity: new FormControl('', Validators.required),
      unitOfMeasurement: new FormControl('', Validators.required),
      productInformation: new FormControl('', Validators.required),
      state: new FormControl('', Validators.required),
      createdBy: new FormControl(''),
      updatedBy: new FormControl('')
    });
  }

  // tslint:disable-next-line:typedef
  onSubmit() {
    if (this.validatingForm.invalid) {
      return;
    }

    if (this.isAddMode) {
      this.addPowerSource();
    } else {
      this.editPowerSource();
    }
  }

  /***************************** Search, Filter, Pagination for main table tab ***************************/
  getAllManufacturers(): void {
    this.powerSourceService.getManufacturers().subscribe((data: any) => {
      this.manufacturersList = data;
    }, (error: HttpErrorResponse) => {
      this.errorMessage = error.error.message;
    });
  }

  getAllSourceTypes(): void {
    this.powerSourceService.getSourceTypes().subscribe((data: any) => {
      this.sourceTypesList = data;
    }, (error: HttpErrorResponse) => {
      this.errorMessage = error.error.message;
    });
  }

  getAllGenerateProductCodes(): void {
    this.productCodeService.getAllByCategory(GenerateProductCode.productCodeCategoryURI, new HttpParams().set('category', 'Power Source')).subscribe((data: any) =>{
      this.productCodesList = data.filter(productCode => productCode.state === true);
      this.productCodesListInactive = data.filter(productCode => productCode.state === false);
    }, (err: HttpErrorResponse) => {
      this.errorMessage = err.error.message;
    });
  }

  getPowerSourceSearchResults(): void {
    const params = this.getPaginationParams(this.pagePowerSources, this.pageSizePowerSources);
    this.powerSourceService.getSearchResults(this.query, params).subscribe((data: any) => {
      this.powerSourcesList = data.content;
      this.count = data.totalElements;
      if (this.query !== '') {
        this.powerSourcesList = [];
        for (const item of data.content) {
          this.powerSourcesList.push(item);
        }
        this.count = data.totalElements;
        this.inputSearch.nativeElement.value = '';
      }
    }, (error: HttpErrorResponse) => {
      this.powerSourcesList = JSON.parse(error.message).message;
    });
  }

  getPowerSourceFilterResults(): void {
    const pageParams = this.getPaginationParams(this.pagePowerSources, this.pageSizePowerSources);
    this.powerSourceService.getFilter(this.params, pageParams).subscribe((data: any) => {
      this.count = data.totalElements;
      this.powerSourcesList = [];
      for (const item of data.content) {
        this.powerSourcesList.push(item);
      }
      this.query = '';
    }, (error: HttpErrorResponse) => {
      this.errorMessage = error.error.message;
    });
  }

  getEventSearchResult(event: any): void {
    this.isFiltered = false;
    this.query = event.target.value;
    this.getPowerSourceSearchResults();
  }

  // tslint:disable-next-line:typedef
  handlePageChangeSearchAndFilter(event) {
    this.pagePowerSources = event;
    if (this.isFiltered) {
      this.getPowerSourceFilterResults();
    } else {
      this.getPowerSourceSearchResults();
    }
  }

  // tslint:disable-next-line:typedef
  handlePageSizeChangeSearchAndFilter(event) {
    this.pageSizePowerSources = event.target.value;
    this.pagePowerSources = 1;
    if (this.isFiltered) {
      this.getPowerSourceFilterResults();
    } else {
      this.getPowerSourceSearchResults();
    }
  }

  getRequestParamsForFilter(event: any) {
    this.isFiltered = true;
    if (event.target.checked) {
      this.params = this.filterService.setParamsFilter(event);
      this.getPowerSourceFilterResults();
    }
    if (!event.target.checked) {
      this.params = this.filterService.deleteFilter(event);
      this.getPowerSourceFilterResults();
    }
  }

  patchForm(powerSource, param: any) {
    this.isAddMode = false;

    const productCodeInactive = this.productCodesListInactive
        .find(s => s.productCode === powerSource.generateProductCode.productCode);
    const productCodeActive = this.productCodesList
        .find(s => s.productCode === powerSource.generateProductCode.productCode);

    if (productCodeInactive !== undefined && productCodeInactive.state === false) {
      this.productCodeService.inactiveProductCode(param, productCodeInactive);
      return;
    }

    this.selectedProductCode = powerSource.generateProductCode;
    this.validatingForm.patchValue(powerSource);
    this.validatingForm.get('productName')
        .setValue(productCodeActive);

    this.router.navigate(['components/power-source'], {queryParams: {id: powerSource.id}});
  }

  /***************************** End Search, Filter, Pagination for main table tab ************************/
  /***************************** Search, Pagination, Filter for second table tab **************************/
  getAllProductCodesWithStock(): void {
    const params = this.getPaginationParams(this.pageProductCodeWithStock, this.pageSizeProductCodeWithStock);
    this.powerSourceService.getAllProductCodesWithStock(params).subscribe((data: any) => {

      this.productCodesWithStock = data.content;
      this.countProductCodeWithStock = data.totalElements;
    }, (error: HttpErrorResponse) => {
      this.errorMessage = error.error.message;
    });
  }

  getSearchResultProductCodesWithStock(event: any){
    this.isSearchProductCodeWithStock = true;
    this.query = event.target.value;
    this.params = this.params.set('search', this.query);
    this.getAllSearchProductCodesWithStock();
  }

  getAllSearchProductCodesWithStock(){
    const pageParams = this.getPaginationParams(this.pageProductCodeWithStock, this.pageSizeProductCodeWithStock);
    this.powerSourceService.getAllSearchProductCodesWithStock(this.params, pageParams)
        .subscribe((data: any) => {

          this.productCodesWithStock = [];
          this.productCodesWithStock = data.content;
          this.countProductCodeWithStock = data.totalElements;
          this.inputSearchStock.nativeElement.value = '';

        }, (err: HttpErrorResponse) => {
          this.errorMessage = err.error.message;
        });
  }

  // tslint:disable-next-line:typedef
  handlePageChangeProductCodesWithStock(event) {
    this.pageProductCodeWithStock = event;

    if (this.isSearchProductCodeWithStock){
      this.getAllSearchProductCodesWithStock();
    } else {
      this.getAllProductCodesWithStock();
    }
  }

  // tslint:disable-next-line:typedef
  handlePageSizeChangeProductCodesWithStock(event) {
    this.pageSizeProductCodeWithStock = event.target.value;
    this.pageProductCodeWithStock = 1;

    if (this.isSearchProductCodeWithStock){
      this.getAllSearchProductCodesWithStock();
    }else {
      this.getAllProductCodesWithStock();
    }

  }

  /************************** End Search, Pagination, Filter for second table tab *************************/

  getPowerSourcesByProductCode(productCode: string): void {
    this.toggleProductCodeTable();
    this.getProductCode = productCode;
    const params = this.getPaginationParams(this.pagePowerSourcesByProductCode, this.pageSizePowerSourcesByProductCode);
    this.powerSourceService.getByProductCode(productCode, params).subscribe((data: any) => {
      this.powerSourcesListByProductCode = data.content;
      this.countPowerSourcesByProductCode = data.totalElements;
    }, (error: HttpErrorResponse) => {
      this.errorMessage = error.error.message;
    });
  }

  // tslint:disable-next-line:typedef
  handlePageChangePowerSourcesByProductCode(event) {
    this.pagePowerSourcesByProductCode = event;
    this.getPowerSourcesByProductCode(this.getProductCode);
    this.toggleProductCodeTable();
  }

  // tslint:disable-next-line:typedef
  handlePageSizeChangePowerSourcesByProductCode(event) {
    this.pageSizePowerSourcesByProductCode = event.target.value;
    this.pagePowerSourcesByProductCode = 1;
    this.getPowerSourcesByProductCode(this.getProductCode);
    this.toggleProductCodeTable();
  }

  /************************** Create, Update, Delete ****************************************************/
  // tslint:disable-next-line:typedef
  deletePowerSource(powerSource: PowerSource) {
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
            this.powerSourceService.deleteById(Number(powerSource.id)).subscribe(response => {
              this.reloadPageService.reload();
            }, (err: HttpErrorResponse) => {
              this.errorMessage = err.error.message;
            });
          }
        });
  }

  private addPowerSource(): void {
    this.validatingForm.get('createdBy').setValue(this.tokenService.getUser().firstName + ' ' + this.tokenService.getUser().lastName);

    this.formFields.generateProductCode.enable();
    this.formFields.productName.disable();
    this.validatingForm.get('generateProductCode').setValue(this.selectedProductCode);

    this.powerSourceService.add(this.validatingForm.value)
        .toPromise()
        .then((response) => {
          this.closeAddEditModal.nativeElement.click();
          this.formFields.generateProductCode.disable();
          this.formFields.productName.enable();
          this.isSerialNumberPresent = false;
          this.getPowerSourceSearchResults();
          this.getAllProductCodesWithStock();
          this.router.navigate([], {});
        }).catch((error) => {

      this.isSerialNumberPresent = true;
      this.errorMessage = error.error.message;
      document.getElementById('addPowerSource-btn').setAttribute('data-backdrop', 'static');
    });

  }

  private editPowerSource() {
    this.validatingForm.get('updatedBy').setValue(this.tokenService.getUser().firstName + ' ' + this.tokenService.getUser().lastName);

    this.formFields.generateProductCode.enable();
    this.formFields.productName.disable();
    this.validatingForm.get('generateProductCode').setValue(this.selectedProductCode);

    this.powerSourceService.editById(this.id, this.validatingForm.value)
        .toPromise()
        .then((response) => {
          this.closeAddEditModal.nativeElement.click();
          this.formFields.generateProductCode.disable();
          this.formFields.productName.enable();
          this.isAddMode = true;
          this.isSerialNumberPresent = false;
          this.getAllProductCodesWithStock();
          this.getPowerSourceSearchResults();
          this.router.navigate([], {});

        }).catch((error: HttpErrorResponse) => {
      this.isSerialNumberPresent = true;
      this.errorMessage = error.error.message;
      document.getElementById('editPowerSource-btn').setAttribute('data-backdrop', 'static');
    });
  }

  /***********************End Create, Update, Delete ****************************************************/
  /************************** General Functions **********************************************************/
  // tslint:disable-next-line:typedef
  getPaginationParams(page, pageSize) {
    const params = {};
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
    this.getPowerSourceSearchResults();
  }

  clearSearchProductCodeWithStock(){
    this.query = '';
    this.getAllProductCodesWithStock();
  }

  resetFilters(): void {
    this.isFiltered = false;
    window.location.reload();
    // TODO:
    //  refactor code to not load the entire page, just refresh the component
  }

  closeModal() {
    this.isAddMode = true;
    this.validatingForm.reset();
    this.closeAddEditModal.nativeElement.click();
    this.router.navigate([], {});

    if (this.isSerialNumberPresent){
      this.isSerialNumberPresent = false;
      this.errorMessage = '';
    }

  }

  getRouting() {
    this.activatedRoute.queryParams.subscribe(param => {
      this.id = param['id'];
    });
    if (!this.id) {
      this.isAddMode = true;
    }else {
      this.isAddMode = false;
    }
  }

  setGeneratedProductCode(event: any) {
    if (event === undefined || event === null){
      return;
    }

    this.htmlElementProductCode.nativeElement.value = event.productCode;
    this.selectedProductCode = event;

  }

  toggleProductCodeTable(){
    this.isTableProductCodeSelected = !this.isTableProductCodeSelected;
  }

  goBack(){
    if (this.getProductCode) {
      this.getProductCode = null;
      this.isTableProductCodeSelected = !this.isTableProductCodeSelected;
    }
  }
  /***********************End General Functions **********************************************************/

}
