import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpErrorResponse, HttpParams} from '@angular/common/http';
import {TokenStorageService} from '../../../../services/token-storage.service';
import {ReloadPageService} from '../../../../services/reload-page.service';
import {ActivatedRoute, Router} from '@angular/router';
import {EnumService} from '../../../../../../../brandcomputers_v1.1/src/app/services/enum.service';
import {FilterService} from '../../../../../../../brandcomputers_v1.1/src/app/services/filter.service';
import {Location} from '@angular/common';
import { MemoryRamService } from 'src/app/services/components/memory-ram.service';
import {EnumState} from '../../../../model/enum/EnumState';
import swal from 'sweetalert';
import { MemoryRam } from 'src/app/model/MemoryRam';
import { GenerateProductCode } from 'src/app/model/GenerateProductCode';
import { GenerateProductCodeService } from 'src/app/services/components/generate-product-code.service';
import {EnumRamModules} from '../../../../model/enum/EnumRamModules';
import {EnumTypeOfMemoryRam} from '../../../../model/enum/EnumTypeOfMemoryRam';

@Component({
  selector: 'app-memory-ram',
  templateUrl: './memory-ram.component.html',
  styleUrls: ['./memory-ram.component.scss']
})
export class MemoryRamComponent implements OnInit {

  @ViewChild('inputSearch') inputSearch: ElementRef;
  @ViewChild('inputSearchStock')inputSearchStock: ElementRef;

  id: number;
  selectedProductCode = new GenerateProductCode();
  getProductCode: string;
  query = '';
  errorMessage = '';

  memoryRamList = [];
  manufacturersList = [];
  modulesList = [];
  ramTypesList = [];
  frequenciesList = [];
  capacitiesList = [];
  stateList: string[] = [];
  ramModuleList: string[] = [];
  typeOfMemoryRamList: string[] = [];
  productCodesWithStock = [];
  memoryRamListByProductCode = [];
  productCodesList: GenerateProductCode[] = [];

  pageSizeMemoryRam = 10;
  pageMemoryRam = 1;
  count: any;

  pageSizeProductCodeWithStock = 10;
  pageProductCodeWithStock = 1;
  countProductCodeWithStock: any;

  pageSizeMemoryRamByProductCode = 10;
  pageMemoryRamByProductCode = 1;
  countMemoryRamByProductCode: any;

  isAddMode: boolean;
  isTableProductCodeSelected = true;
  isSearchProductCodesWithStock = false;
  isFiltered: boolean = false;
  isSerialNumberPresent: boolean = false;

  validatingForm: FormGroup;

  params = new HttpParams();

  constructor(private memoryRamService: MemoryRamService,
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
    this.ramModuleList = this.enumService.getValues(EnumRamModules);
    this.typeOfMemoryRamList = this.enumService.getValues(EnumTypeOfMemoryRam);

    this.getRouting();
    this.memoryRamForm();
    this.getAllGenerateProductCodes();
    this.getMemoryRamSearchResult();
    this.getAllManufacturers();
    this.getAllModules();
    this.getAllRamTypes();
    this.getAllFrequencies();
    this.getAllCapacities();
    this.getAllProductCodesWithStock();
  }

  get formFields(){
    return this.validatingForm.controls;
  }

  memoryRamForm(){
    this.validatingForm = this.formBuilder.group({
      generateProductCodeMemoryRam: new FormControl({value: '', disabled: true}, Validators.required),
      productName: new FormControl('', Validators.required),
      serialNumber: new FormControl('', Validators.required),
      manufacturer: new FormControl('', Validators.required),
      module: new FormControl('', Validators.required),
      ramType: new FormControl('', Validators.required),
      frequency: new FormControl('', Validators.required),
      capacity: new FormControl('', Validators.required),
      productInformation: new FormControl('', Validators.required),
      priceIn: new FormControl('', Validators.required),
      state: new FormControl('', Validators.required),
      createdBy: new FormControl(''),
      updatedBy: new FormControl('')
    });
  }

  /***************************** Search, Filter, Pagination for main table tab ***************************/
  getMemoryRamSearchResult(){
    const params = this.getPaginationParams(this.pageMemoryRam, this.pageSizeMemoryRam);
    this.memoryRamService.getSearchResult(this.query, params).subscribe((data: any) => {
      this.memoryRamList = data.content;
      this.count = data.totalElements;

      if (this.query !== '') {
        this.memoryRamList = [];

        for (let item of data.content) {
          this.memoryRamList.push(item);
        }

        this.count = data.totalElements;
        this.inputSearch.nativeElement.value = '';

      }
    }, (error: HttpErrorResponse) => {
      this.errorMessage = error.error.message;
    });
  }

  getMemoryRamFilterResults(): void {
    let pageParams = this.getPaginationParams(this.pageMemoryRam, this.pageSizeMemoryRam);
    this.memoryRamService.getFilter(this.params, pageParams).subscribe((data: any) => {

      this.count = data.totalElements;
      this.memoryRamList = [];
      for (const item of data.content) {
        this.memoryRamList.push(item);
      }

      this.query = '';
    }, (error: HttpErrorResponse) => {
      this.errorMessage = error.error.message;
    });
  }

  getAllManufacturers(){
    this.memoryRamService.getManufacturers().subscribe((data: any) => {
      this.manufacturersList = data;
    }, (error: HttpErrorResponse) => {
      this.errorMessage = error.error.message;
    });
  }

  getAllModules(){
    this.memoryRamService.getModules().subscribe((data: any) => {
      this.modulesList = data;
    }, (error: HttpErrorResponse) => {
      this.errorMessage = error.error.message;
    });
  }

  getAllRamTypes(){
    this.memoryRamService.getRamTypes().subscribe((data: any) => {
      this.ramTypesList = data;
    }, (error: HttpErrorResponse) => {
      this.errorMessage = error.error.message;
    });
  }

  getAllFrequencies(){
    this.memoryRamService.getFrequencies().subscribe((data: any) => {
      this.frequenciesList = data;
    }, (error: HttpErrorResponse) => {
      this.errorMessage = error.error.message;
    });
  }

  getAllCapacities(){
    this.memoryRamService.getCapacities().subscribe((data: any) => {
      this.capacitiesList = data;
    }, (error: HttpErrorResponse) => {
      this.errorMessage = error.error.message;
    });
  }

  getEventSearchResult(event) {
    this.isFiltered = false;
    this.query = event.target.value;
    this.getMemoryRamSearchResult();
  }

  handlePageChangeSearchAndFilter(event) {
    this.pageMemoryRam = event;

    if (this.isFiltered) {
      this.getMemoryRamFilterResults();
    } else {
      this.getMemoryRamSearchResult();
    }
  }

  handlePageSizeChangeSearchAndFilter(event) {
    this.pageSizeMemoryRam = event.target.value;
    this.pageMemoryRam = 1;

    if (this.isFiltered) {
      this.getMemoryRamFilterResults();
    } else {
      this.getMemoryRamSearchResult();
    }
  }

  getRequestParamsForFilter(event) {
    this.isFiltered = true;
    if (event.target.checked) {
      this.params = this.filterService.setParamsFilter(event);
      this.getMemoryRamFilterResults();
    }

    if (!event.target.checked) {
      this.params = this.filterService.deleteFilter(event);
      this.getMemoryRamFilterResults();
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
    this.memoryRamService.getAllProductCodesWithStock(params).subscribe((data: any) => {
      this.productCodesWithStock = data.content;
      this.countProductCodeWithStock = data.totalElements;
    }, (error: HttpErrorResponse) => {
      this.errorMessage = error.error.message;
    });
  }

  getAllSearchProductCodesWithStock(): void {
    const pageParams = this.getPaginationParams(this.pageProductCodeWithStock, this.pageSizeProductCodeWithStock);
    this.memoryRamService.getAllSearchProductCodesWithStock(this.params, pageParams).subscribe((data: any) => {

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

  getMemoryRamByProductCode(productCode: any) {
    this.toggleProductCodeTable();
    this.getProductCode = productCode;
    this.router.navigate(['dashboard/memory-ram'], {queryParams: {productCode: productCode}});
    const params = this.getPaginationParams(this.pageMemoryRamByProductCode, this.pageSizeMemoryRamByProductCode);
    this.memoryRamService.getByProductCode(productCode, params).subscribe((data: any) => {
      this.memoryRamListByProductCode = data.content;
      this.countMemoryRamByProductCode = data.totalElements;
    }, (error: HttpErrorResponse) => {
      this.errorMessage = error.error.message;
    });
  }

  clearSearchProductCodesWithStock() {
    this.query = '';
    this.getAllProductCodesWithStock();
  }

  handlePageSizeChangeMemoryRamByProductCode(event) {
    this.pageSizeMemoryRamByProductCode = event.target.value;
    this.pageMemoryRamByProductCode = 1;

    this.getMemoryRamByProductCode(this.getProductCode);
    this.toggleProductCodeTable();
  }

  handlePageChangeMemoryRamByProductCode(event) {
    this.pageMemoryRamByProductCode = event;
    this.getMemoryRamByProductCode(this.getProductCode);
    this.toggleProductCodeTable();
  }
  /***************************** End Search, Pagination, Filter for second table tab **************************/
  /************************** General Functions **********************************************************/
  closeModal() {
    this.isAddMode = true;
    this.validatingForm.reset();
    this.reloadPageService.skipLocation('dashboard/memory-ram');

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
    this.getMemoryRamSearchResult();
  }

  goBack() {
    if (this.getProductCode) {
      this.getProductCode = null;
      this.toggleProductCodeTable();
      this.location.back();
    }

    //TODO
    // redo the location.back it causes some errors
  }

  /************************** End General Functions ******************************************************/
  /************************** Create, Update, Delete, Submit, Patch Form ****************************************************/

  private addMemoryRam(): void {
    this.validatingForm.get('createdBy').setValue(this.tokenService.getUser().firstName + ' ' + this.tokenService.getUser().lastName);

    this.formFields.generateProductCodeMemoryRam.enable();
    this.formFields.productName.disable();
    this.validatingForm.get('generateProductCodeMemoryRam').setValue(this.selectedProductCode);

    this.memoryRamService.add(this.validatingForm.value)
      .toPromise()
      .then((response) => {
        this.reloadPageService.reload();
        this.isSerialNumberPresent = false;
        document.querySelector('.modal-backdrop').remove();
      }).catch((error: HttpErrorResponse) => {
      this.isSerialNumberPresent = true;
      this.errorMessage = error.error.message;
      document.getElementById('addMemoryRam-btn').setAttribute('data-backdrop', 'static');
    });
  }

  private editMemoryRam(): void {
    this.validatingForm.get('updatedBy').setValue(this.tokenService.getUser().firstName + ' ' + this.tokenService.getUser().lastName);

    this.formFields.generateProductCodeMemoryRam.enable();
    this.formFields.productName.disable();
    this.validatingForm.get('generateProductCodeMemoryRam').setValue(this.selectedProductCode);

    this.memoryRamService.editById(this.id, this.validatingForm.value)
      .toPromise()
      .then((response) => {
        this.router.navigate(['dashboard/memory-ram']).finally(() => this.reloadPageService.reload());
        this.isAddMode = true;
        this.isSerialNumberPresent = false;
        document.querySelector('.modal-backdrop').remove();
      }).catch((error: HttpErrorResponse) => {
        this.isSerialNumberPresent = true;
      this.errorMessage = error.error.message;
      document.getElementById('editMemoryRam-btn').setAttribute('data-backdrop', 'static');
    });
  }

  deleteMemoryRam(memoryRam: MemoryRam) {
    swal({
      title: 'Esti sigur ?',
      text: 'Inregistrarea va fi stearsa definitiv !',
      icon: 'warning',
      buttons: ['Anulare', 'Sterge'],
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          this.memoryRamService.deleteById(Number(memoryRam.id)).subscribe(response => {
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
      this.addMemoryRam();
    } else {
      this.editMemoryRam();
    }
  }

  patchForm(memoryRam: any) {
    this.isAddMode = false;
    const data = this.memoryRamList.find(i => i.id == memoryRam.id);

    this.selectedProductCode = data.generateProductCodeMemoryRam;
    this.validatingForm.patchValue(data);
    this.validatingForm.get('productName')
      .setValue(this.productCodesList
        .find(s => s.productCode === data.generateProductCodeMemoryRam.productCode));

    this.router.navigate(['dashboard/memory-ram'], {queryParams: {id: memoryRam.id}});
  }

  getAllGenerateProductCodes(): void {
    this.productCodeService.getAll(MemoryRam.generateProductURL).subscribe((data: any) => {
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
