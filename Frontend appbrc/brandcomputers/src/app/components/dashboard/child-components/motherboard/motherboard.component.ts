import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MotherboardService} from '../../../../services/components/motherboard.service';
import {ReloadPageService} from '../../../../services/reload-page.service';
import {ActivatedRoute, Router} from '@angular/router';
import {EnumService} from '../../../../../../../brandcomputers_v1.1/src/app/services/enum.service';
import {FilterService} from '../../../../../../../brandcomputers_v1.1/src/app/services/filter.service';
import {TokenStorageService} from '../../../../services/token-storage.service';
import {HttpErrorResponse, HttpParams} from '@angular/common/http';
import {Motherboard} from '../../../../model/Motherboard';
import {Location} from '@angular/common';
import swal from 'sweetalert';
import {EnumState} from '../../../../model/enum/EnumState';
import {EnumChipset} from '../../../../model/enum/EnumChipset';
import { GenerateProductCode } from 'src/app/model/GenerateProductCode';
import { GenerateProductCodeService } from 'src/app/services/components/generate-product-code.service';
import {EnumRamModules} from '../../../../model/enum/EnumRamModules';

@Component({
  selector: 'app-motherboard',
  templateUrl: './motherboard.component.html',
  styleUrls: ['./motherboard.component.scss']
})
export class MotherboardComponent implements OnInit {
  @ViewChild('inputSearch') inputSearch: ElementRef;
  @ViewChild('inputSearchStock') inputSearchStock: ElementRef;

  id: number;
  getProductCode: string;

  validatingForm: FormGroup;

  errorMessage = '';
  query = '';

  chipsetList: any;
  selectedProductCode = new GenerateProductCode();

  motherboardList = [];
  productCodeList: GenerateProductCode[] = [];
  socketList: string[] = [];
  manufacturersList: string[] = [];
  stateList: string[] = [];
  productCodesWithStock = [];
  motherboardListByProductCode = [];

  isAddMode: boolean;
  isSerialNumberPresent = false;
  isFiltered = false;
  isTableProductCodeSelected = true;
  isSearchProductCodeWithStock = false;

  pageSizeProductCodeWithStock = 10;
  pageProductCodeWithStock = 1;
  countProductCodeWithStock: any;

  pageSizeMotherboardsByProductCode = 10;
  pageMotherboardsByProductCode = 1;
  countMotherboardsByProductCode: any;

  pageSizeMotherboard = 10;
  pageMotherboard = 1;
  count: any;

  params = new HttpParams();

  constructor(private motherboardService: MotherboardService,
              private reloadPageService: ReloadPageService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private formBuilder: FormBuilder,
              private enumService: EnumService,
              private filterService: FilterService,
              private tokenService: TokenStorageService,
              private productCodeService: GenerateProductCodeService,
              private location: Location) { }

  ngOnInit(): void {
    this.stateList = this.enumService.getValues(EnumState);
    this.chipsetList = this.enumService.getValues(EnumChipset);

    this.getRouting();
    this.motherboardForm();
    this.getAllManufacturers();
    this.getAllCpuSockets();
    this.getAllProductCodesWithStock();
    this.getMotherboardSearchResults();
    this.getAllGenerateProductCodes();
  }

  get formFields() {
    return this.validatingForm.controls;
  }

  motherboardForm(): void {
    this.validatingForm = this.formBuilder.group({
      generateProductCodeMotherboard: new FormControl({value: '', disabled: true}, Validators.required),
      productName: new FormControl('', Validators.required),
      serialNumber: new FormControl('', Validators.required),
      manufacturer: new FormControl('', Validators.required),
      model: new FormControl('', Validators.required),
      formFactor: new FormControl('', Validators.required),
      socket: new FormControl('', Validators.required),
      numberOfSockets: new FormControl('', Validators.required),
      chipset: new FormControl('', Validators.required),
      numberOfSlotMemoryRAM: new FormControl('', Validators.required),
      maxMemoryRAM: new FormControl('', Validators.required),
      priceIn: new FormControl('', Validators.required),
      productInformation: new FormControl('', Validators.required),
      state: new FormControl('', Validators.required),
      createdBy: new FormControl(''),
      updatedBy: new FormControl('')
    });
  }

  onSubmit() {
    if (this.validatingForm.invalid){
      return;
    }

    if (this.isAddMode){
      this.addMotherboard();
    }else {
      this.editMotherboard();
    }
  }

  patchForm(motherboard: any) {
    this.isAddMode = false;
    const data = this.motherboardList.find(i => i.id == motherboard.id);

    this.selectedProductCode = data.generateProductCodeMotherboard;
    this.validatingForm.patchValue(data);
    this.validatingForm.get('productName')
      .setValue(this.productCodeList
        .find(s => s.productCode === data.generateProductCodeMotherboard.productCode));


    this.router.navigate(['dashboard/motherboard'], {queryParams: {id: motherboard.id}});
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

  getMotherboardSearchResults(): void {
    const params = this.getPaginationParams(this.pageMotherboard, this.pageSizeMotherboard);
    this.motherboardService.getSearchResult(this.query, params).subscribe((data: any) => {
      this.motherboardList = data.content;
      this.count = data.totalElements;

      if (this.query !== ''){
        this.motherboardList = [];
        for (let motherboard of data.content){
          this.motherboardList.push(motherboard);
        }
        // this.count = data.totalElements;
        this.inputSearch.nativeElement.value = '';
      }

    }, (error: HttpErrorResponse) => {
      this.errorMessage = error.error.message;
    });
  }

  getPaginationParams(page, pageSize) {
    const params = {};

    if (page) {
      params['page'] = page-1;
    }
    if (pageSize) {
      params['size'] = pageSize;
    }
    return params;
  }

  handlePageSizeChangeSearchAndFilter(event) {
    this.pageSizeMotherboard = event.target.value;
    this.pageMotherboard = 1;

    if (this.isFiltered) {
      this.getMotherboardFilterResults();
    } else {
      this.getMotherboardSearchResults();
    }
  }

  handlePageChangeSearchAndFilter(event) {
    this.pageMotherboard = event;

    if (this.isFiltered) {
      this.getMotherboardFilterResults();
    } else {
      this.getMotherboardSearchResults();
    }
  }

  getEventSearchResult(event) {
    this.isFiltered = false;
    this.query = event.target.value;
    this.getMotherboardSearchResults();
  }

  clearSearch() {
    this.query = '';
    this.getMotherboardSearchResults();
  }

  closeModal() {
    this.isAddMode = true;
    this.validatingForm.reset();
    this.reloadPageService.skipLocation('dashboard/motherboard');

    if (this.isSerialNumberPresent){
      this.isSerialNumberPresent = false;
      this.errorMessage = '';
    }
  }

  setGeneratedProductCode(event: any) {
    if (event === undefined || event === null){
      return;
    }
    this.selectedProductCode = this.productCodeList.find(p => p.productName === event.productName);
  }

  getAllGenerateProductCodes(): void {
    this.productCodeService.getAll(Motherboard.generateProductURL).subscribe((data: any) =>{
      this.productCodeList = data;
    }, (err: HttpErrorResponse) => {
      this.errorMessage = err.error.message;
    });
  }

  getAllManufacturers(): void {
    this.motherboardService.getManufacturers().subscribe((data: any) => {
      this.manufacturersList = data;
    }, (error: HttpErrorResponse) => {
      this.errorMessage = error.error.message;
    });
  }

  getAllCpuSockets(): void {
    this.motherboardService.getCpuSockets().subscribe((data: any) => {
      this.socketList = data;
    }, (error: HttpErrorResponse) => {
      this.errorMessage = error.error.message;
    });
  }

  getMotherboardFilterResults(): void {
    const pageParams = this.getPaginationParams(this.pageMotherboard, this.pageSizeMotherboard);
    this.motherboardService.getFilter(this.params, pageParams).subscribe((data: any) => {
      this.count = data.totalElements;
      this.motherboardList = [];
      for (let item of data.content){
        this.motherboardList.push(item);
      }
      this.query = '';
    }, (error: HttpErrorResponse) => {
      this.errorMessage = error.error.message;
    });
  }


  /************************** Create, Update, Delete ****************************************************/
  private addMotherboard(): void {
    this.validatingForm.get('createdBy').setValue(this.tokenService.getUser().firstName + ' ' + this.tokenService.getUser().lastName);

    this.formFields.generateProductCodeMotherboard.enable();
    this.formFields.productName.disable();
    this.validatingForm.get('generateProductCodeMotherboard').setValue(this.selectedProductCode);

    this.motherboardService.add(this.validatingForm.value)
      .toPromise()
      .then((response) => {
        this.reloadPageService.reload();
        this.isSerialNumberPresent = false;
        document.querySelector('.modal-backdrop').remove();
      }).catch((error: HttpErrorResponse) => {
        this.isSerialNumberPresent = true;
        this.errorMessage = error.error.message;
        document.getElementById('addMotherboard-btn').setAttribute('data-backdrop', 'static');
    });
  }

  private editMotherboard(): void {
    this.validatingForm.get('updatedBy').setValue(this.tokenService.getUser().firstName + ' ' + this.tokenService.getUser().lastName)

    this.formFields.generateProductCodeMotherboard.enable();
    this.formFields.productName.disable();
    this.validatingForm.get('generateProductCodeMotherboard').setValue(this.selectedProductCode);

    this.motherboardService.editById(this.id, this.validatingForm.value)
      .toPromise()
      .then((response) => {
        this.router.navigate(['dashboard/motherboard']).finally(() => this.reloadPageService.reload());
        this.isAddMode = true;
        this.isSerialNumberPresent = false;
        document.querySelector('.modal-backdrop').remove();
      }).catch((error: HttpErrorResponse) => {
       this.isSerialNumberPresent = true;
       this.errorMessage = error.error.message;
       document.getElementById('editMotherboard-btn').setAttribute('data-backdrop', 'static');
    });
  }

  deleteMotherboard(motherboard: Motherboard) {
    swal({
      title: 'Esti sigur ?',
      text: 'Inregistrarea va fi stearsa definitiv !',
      icon: 'warning',
      buttons: ['Anulare', 'Sterge'],
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete){
        this.motherboardService.deleteById(Number(motherboard.id)).subscribe( response => {
          this.reloadPageService.reload();
        }, (error: HttpErrorResponse) => {
          this.errorMessage = error.error.message;
        });
      }
    });
  }
  /***********************End Create, Update, Delete ****************************************************/

  goBack(): void {
    if (this.getProductCode) {
      this.getProductCode = null;
      this.toggleProductCodeTable();
      this.location.back();
    }
  }

  /*********************** FILTER ****************************************************/
  getRequestParamsForFilter(event: any) {
    this.isFiltered = true;
    if (event.target.checked){
      this.params = this.filterService.setParamsFilter(event);
      this.getMotherboardFilterResults();
    }

    if (!event.target.checked){
      this.params = this.filterService.deleteFilter(event);
      this.getMotherboardFilterResults();
    }
  }

  resetFilters() {
    this.isFiltered = false;
    window.location.reload();

    // TODO:
    //  refactor code to not load the entire page, just refresh the component
  }
  /*********************** END FILTER ****************************************************/

  /*********************** Product Code ****************************************************/

  getAllProductCodesWithStock(){
    const params = this.getPaginationParams(this.pageProductCodeWithStock, this.pageSizeProductCodeWithStock);

    this.motherboardService.getAllProductCodesWithStock(params).subscribe((data: any) => {
      this.productCodesWithStock = data.content;
      this.countProductCodeWithStock = data.totalElements;
    }, (error: HttpErrorResponse) => {
      this.errorMessage = error.error.message;
    });
  }

  getAllSearchProductCodesWithStock(){
    const pageParams = this.getPaginationParams(this.pageProductCodeWithStock, this.pageSizeProductCodeWithStock);
    this.motherboardService.getAllSearchProductCodesWithStock(this.params, pageParams).subscribe((data: any) => {
      this.productCodesWithStock = [];
      this.productCodesWithStock = data.content;
      this.countProductCodeWithStock = data.totalElements;
      this.inputSearchStock.nativeElement.value = '';
    }, (error: HttpErrorResponse) => {
      this.errorMessage = error.error.message;
    });
  }

  getSearchResultProductCodesWithStock(event: any) {
    this.isSearchProductCodeWithStock = true;
    this.query = event.target.value;
    this.params = this.params.set('search', this.query);
    this.getAllSearchProductCodesWithStock();
  }

  getMotherboardsByProductCode(productCode: any) {
    this.router.navigate(['dashboard/motherboard'], {queryParams: {productCode: productCode}});

    this.toggleProductCodeTable();
    this.getProductCode = productCode;
    const params = this.getPaginationParams(this.pageMotherboardsByProductCode, this.pageSizeMotherboardsByProductCode);
    this.motherboardService.getByProductCode(productCode, params).subscribe((data: any) => {
      this.motherboardListByProductCode = data.content;
      this.countMotherboardsByProductCode = data.totalElements;
    }, (error: HttpErrorResponse) => {
      this.errorMessage = error.error.message;
    });
  }

  handlePageSizeChangeProductCodesWithStock(event) {
    this.pageSizeProductCodeWithStock = event.target.value;
    this.pageProductCodeWithStock = 1;

    if (this.isSearchProductCodeWithStock){
      this.getAllSearchProductCodesWithStock();
    }else {
      this.getAllProductCodesWithStock();
    }
  }

  handlePageChangeProductCodesWithStock(event) {
    this.pageProductCodeWithStock = event;

    if (this.isSearchProductCodeWithStock){
      this.getAllSearchProductCodesWithStock();
    }else {
      this.getAllProductCodesWithStock();
    }
  }

  handlePageSizeChangeMotherboardsByProductCode(event) {
    this.pageSizeMotherboardsByProductCode = event.target.value;
    this.pageMotherboardsByProductCode = 1;
    this.getMotherboardsByProductCode(this.getProductCode);
    this.toggleProductCodeTable();
  }

  handlePageChangeMotherboardsByProductCode(event) {
    this.pageMotherboardsByProductCode = event;
    this.getMotherboardsByProductCode(this.getProductCode);
    this.toggleProductCodeTable();
  }

  clearSearchProductCodeWithStock() {
    this.query = '';
    this.getAllProductCodesWithStock();
  }

  toggleProductCodeTable(){
    this.isTableProductCodeSelected = !this.isTableProductCodeSelected;
  }

  /*********************** END Product Code ****************************************************/
}
