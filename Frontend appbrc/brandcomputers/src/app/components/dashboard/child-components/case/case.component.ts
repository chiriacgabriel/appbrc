import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {HttpErrorResponse, HttpParams} from '@angular/common/http';
import {Motherboard} from '../../../../model/Motherboard';
import swal from 'sweetalert';
import {CaseService} from '../../../../services/components/case.service';
import {TokenStorageService} from '../../../../services/token-storage.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ReloadPageService} from '../../../../services/reload-page.service';
import {ActivatedRoute} from '@angular/router';
import { Router } from '@angular/router';
import {EnumService} from '../../../../../../../brandcomputers_v1.1/src/app/services/enum.service';
import {FilterService} from '../../../../../../../brandcomputers_v1.1/src/app/services/filter.service';
import {Location} from '@angular/common';
import { Case } from 'src/app/model/Case';
import {EnumState} from '../../../../model/enum/EnumState';
import {EnumCompatibleMotherboardPC} from '../../../../model/enum/EnumCompatibleMotherboardPC';
import {EnumCompatibleMotherboardServer} from '../../../../model/enum/EnumCompatibleMotherboardServer';
import {style} from '@angular/animations';
import { GenerateProductCode } from 'src/app/model/GenerateProductCode';
import { GenerateProductCodeService } from 'src/app/services/components/generate-product-code.service';
import {GenerateProductCodeCaseComponent} from './generate-product-code-case/generate-product-code-case.component';

@Component({
  selector: 'app-case',
  templateUrl: './case.component.html',
  styleUrls: ['./case.component.scss']
})
export class CaseComponent implements OnInit {

  @ViewChild('inputSearch') inputSearch: ElementRef;
  @ViewChild('inputSearchStock') inputSearchStock: ElementRef;

  id: number;
  selectedProductCode = new GenerateProductCode();
  getProductCode: string;

  caseList = [];
  stateList: string[] = [];
  productCodesWithStock = [];
  caseListByProductCode = [];
  formatCaseList = ['PC', 'Server'];
  motherboardCompatibleList = [];
  compatibleMotherboardPcList: string[] = [];
  compatibleMotherboardServerList: string[] = [];
  productCodeList: GenerateProductCode[] = [];

  validatingForm: FormGroup;

  errorMessage = '';
  query = '';

  isAddMode: boolean;
  isTableProductCodeSelected = true;
  isFiltered: boolean = false;
  isCompatibleMotherboardPC = true; // this will remain TRUE as it is the default shown value
  isCompatibleMotherboardServer = false;
  isSearchProductCodeWithStock = false;

  pageSizeCase = 10;
  pageCase = 1;
  count: any;

  pageSizeProductCodeWithStock = 10;
  pageProductCodeWithStock = 1;
  countProductCodeWithStock: any;

  pageSizeCasesByProductCode = 10;
  pageCasesByProductCode = 1;
  countCasesByProductCode: any;

  params = new HttpParams();

  constructor(private caseService: CaseService,
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
    this.compatibleMotherboardPcList = this.enumService.getValues(EnumCompatibleMotherboardPC);
    this.compatibleMotherboardServerList = this.enumService.getValues(EnumCompatibleMotherboardServer);

    this.getRouting();
    this.caseForm();
    this.getCaseSearchResult();
    this.getAllProductCodesWithStock();
    this.getAllCompatibleMotherboards();
    this.getAllGenerateProductCodes();
  }

  /************************** FORM ****************************************************/
  get formFields() {
    return this.validatingForm.controls;
  }

  caseForm(): void {
    this.validatingForm = this.formBuilder.group({
      generateProductCodeCase: new FormControl({value: '', disabled: true}, Validators.required),
      productName: new FormControl('', Validators.required),
      manufacturer: new FormControl('', Validators.required),
      caseType: new FormControl('', Validators.required),
      compatibleMotherboard: new FormControl({value:'', disabled: true}, Validators.required),
      powerSourceIncluded: new FormControl('', Validators.required),
      sourcePower: new FormControl('', Validators.required),
      priceIn: new FormControl('', Validators.required),
      productInformation: new FormControl('', Validators.required),
      state: new FormControl('', Validators.required),
      createdBy: new FormControl(''),
      updatedBy: new FormControl('')
    });

  }
  /************************** END FORM ****************************************************/

  /***************************** Search, Filter, Pagination for main table tab ***************************/
  getCaseSearchResult() {
    const params = this.getPaginationParams(this.pageCase, this.pageSizeCase);
    this.caseService.getSearchResult(this.query, params).subscribe((data: any) => {
      this.caseList = data.content;
      this.count = data.totalElements;
      if (this.query !== '') {
        this.caseList = [];
        for (let item of data.content) {
          this.caseList.push(item);
        }
        this.count = data.totalElements;
        this.inputSearch.nativeElement.value = '';
      }
    }, (error: HttpErrorResponse) => {
      this.caseList = JSON.parse(error.message).message;
    });
  }

  getCaseFilterResults(): void {
    const pageParams = this.getPaginationParams(this.pageCase, this.pageSizeCase);
    this.caseService.getFilter(this.params, pageParams).subscribe((data: any) => {
      this.count = data.totalElements;
      this.caseList = [];
      for (let item of data.content){
        this.caseList.push(item);
      }
      this.query = '';
    }, (error: HttpErrorResponse) => {
      this.errorMessage = error.error.message;
    });
  }

  getAllCompatibleMotherboards(){
    this.caseService.getCompatibleMotherboards().subscribe((data: any) => {
      this.motherboardCompatibleList = data;
    }, (error: HttpErrorResponse) => {
      this.errorMessage = error.error.message;
    });
  }

  getEventSearchResult(event: any) {
    this.isFiltered = false;
    this.query = event.target.value;
    this.getCaseSearchResult();
  }

  handlePageChangeSearchAndFilter(event) {
    this.pageCase = event;
    if (this.isFiltered) {
      this.getCaseFilterResults();
    } else {
      this.getCaseSearchResult();
    }
  }

  handlePageSizeChangeSearchAndFilter(event) {
    this.pageSizeCase = event.target.value;
    this.pageCase = 1;
    if (this.isFiltered) {
      this.getCaseFilterResults();
    } else {
      this.getCaseSearchResult();
    }
  }

  getRequestParamsForFilter(event: any) {
    this.isFiltered = true;
    if (event.target.checked){
      this.params = this.filterService.setParamsFilter(event);
      this.getCaseFilterResults();
    }

    if (!event.target.checked){
      this.params = this.filterService.deleteFilter(event);
      this.getCaseFilterResults();
    }
  }

  resetFilters() {
    this.isFiltered = false;
    window.location.reload();

    // TODO:
    //  refactor code to not load the entire page, just refresh the component
  }

  selectedPowerSourceIncluded(event: any) {
    const includedPowerSource = event.target.id == 'powerSourceIncluded';
    const bool = event.target.value == 'false';
    if (includedPowerSource && bool) {
      this.formFields.sourcePower.setValue(0);
    }
  }
  /***************************** End Search, Filter, Pagination for main table tab ************************/

  /************************** Create, Update, Delete, Submit, Patch Form ****************************************************/
  private addCase(): void {
    this.validatingForm.get('createdBy').setValue(this.tokenService.getUser().firstName + ' ' + this.tokenService.getUser().lastName);

    this.formFields.generateProductCodeCase.enable();
    this.formFields.productName.disable();
    this.validatingForm.get('generateProductCodeCase').setValue(this.selectedProductCode);

    this.caseService.add(this.validatingForm.value)
      .toPromise()
      .then((response) => {
        this.reloadPageService.reload();
        document.querySelector('.modal-backdrop').remove();
      }).catch((error: HttpErrorResponse) => {
      this.errorMessage = error.error.message;
      document.getElementById('addCase-btn').setAttribute('data-backdrop', 'static');
    });
  }

  private editCase(): void {
    this.validatingForm.get('updatedBy').setValue(this.tokenService.getUser().firstName + ' ' + this.tokenService.getUser().lastName)

    this.formFields.generateProductCodeCase.enable();
    this.formFields.productName.disable();
    this.validatingForm.get('generateProductCodeCase').setValue(this.selectedProductCode);

    this.caseService.editById(this.id, this.validatingForm.value)
      .toPromise()
      .then((response) => {
        this.router.navigate(['dashboard/case']).finally(() => this.reloadPageService.reload());
        this.isAddMode = true;
        document.querySelector('.modal-backdrop').remove();
      }).catch((error: HttpErrorResponse) => {
      this.errorMessage = error.error.message;
      document.getElementById('editCase-btn').setAttribute('data-backdrop', 'static');
    });
  }

  deleteCase(aCase: Case) {
    swal({
      title: 'Esti sigur ?',
      text: 'Inregistrarea va fi stearsa definitiv !',
      icon: 'warning',
      buttons: ['Anulare', 'Sterge'],
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete){
        this.caseService.deleteById(Number(aCase.id)).subscribe( response => {
          this.reloadPageService.reload();
        }, (error: HttpErrorResponse) => {
          this.errorMessage = error.error.message;
        });
      }
    });
  }

  onSubmit() {
    if (this.validatingForm.invalid){
      return;
    }

    if (this.isAddMode){
      this.addCase();
    }else {
      this.editCase();
    }
  }

  patchForm(aCase: any) {
    this.isAddMode = false;
    const data = this.caseList.find(i => i.id == aCase.id);

    this.selectedProductCode = data.generateProductCodeCase;
    this.validatingForm.patchValue(data);
    this.validatingForm.get('productName')
      .setValue(this.productCodeList
        .find(s => s.productCode === data.generateProductCodeCase.productCode));

    this.router.navigate(['dashboard/case'], {queryParams: {id: aCase.id}});

  }

  getAllGenerateProductCodes(): void {
    this.productCodeService.getAll(Case.generateProductURL).subscribe((data: any) =>{
      this.productCodeList = data;
    }, (err: HttpErrorResponse) => {
      this.errorMessage = err.error.message;
    });
  }

  setGeneratedProductCode(event: any) {
    if (event === undefined || event === null){
      return;
    }
    this.selectedProductCode = this.productCodeList.find(p => p.productName === event.productName);
  }

  /*********************** End Create, Update, Delete, Submit, Patch Form ****************************************************/
  /*********************** General Functions ******************************************************/
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

  closeModal() {
    this.isAddMode = true;
    this.validatingForm.reset();
    this.reloadPageService.skipLocation('dashboard/case');

  }

  clearSearch() {
    this.query = '';
    this.getCaseSearchResult();
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

  setCompatibleMotherboard(event: any) {

    this.formFields.compatibleMotherboard.enable();

    if (event == 'PC'){
      this.isCompatibleMotherboardPC = true;
      this.isCompatibleMotherboardServer = false;
    }

    if (event == 'Server'){
      this.isCompatibleMotherboardPC = false;
      this.isCompatibleMotherboardServer = true;
    }

  }

  /*********************** End General Functions ******************************************************/

  /*********************** Search, pagination, Filter for second table tab ***************************/

  getAllProductCodesWithStock(){
    const params = this.getPaginationParams(this.pageProductCodeWithStock, this.pageSizeProductCodeWithStock);

    this.caseService.getAllProductCodesWithStock(params).subscribe((data: any) => {
      this.productCodesWithStock = data.content;
      this.countProductCodeWithStock = data.totalElements;
    }, (error: HttpErrorResponse) => {
      this.errorMessage = error.error.message;
    });
  }

  getAllSearchProductCodesWithStock(){
    const pageParams = this.getPaginationParams(this.pageProductCodeWithStock, this.pageSizeProductCodeWithStock);
    this.caseService.getAllSearchProductCodesWithStock(this.params, pageParams).subscribe((data: any) => {
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

  getCasesByProductCode(productCode: any) {
    this.router.navigate(['dashboard/case'], {queryParams: {productCode: productCode}});

    this.toggleProductCodeTable();
    this.getProductCode = productCode;
    const params = this.getPaginationParams(this.pageCasesByProductCode, this.pageSizeCasesByProductCode);
    this.caseService.getByProductCode(productCode, params).subscribe((data: any) => {
      this.caseListByProductCode = data.content;
      this.countCasesByProductCode = data.totalElements;
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

  handlePageSizeChangeCasesByProductCode(event) {
    this.pageSizeCasesByProductCode = event.target.value;
    this.pageCasesByProductCode = 1;
    this.getCasesByProductCode(this.getProductCode);
    this.toggleProductCodeTable();
  }

  handlePageChangeCasesByProductCode(event) {
    this.pageCasesByProductCode = event;
    this.getCasesByProductCode(this.getProductCode);
    this.toggleProductCodeTable();
  }

  clearSearchProductCodeWithStock() {
    this.query = '';
    this.getAllProductCodesWithStock();
  }
  /*********************** End Search, pagination, Filter for second table tab ***************************/
}
