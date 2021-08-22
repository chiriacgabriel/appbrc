import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {EnumState} from '../../../../model/enum/EnumState';
import {EnumService} from '../../../../../../../brandcomputers_v1.1/src/app/services/enum.service';
import {HttpErrorResponse, HttpParams} from '@angular/common/http';
import {StorageService} from '../../../../services/components/storage.service';
import {TokenStorageService} from '../../../../services/token-storage.service';
import {ReloadPageService} from '../../../../services/reload-page.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FilterService} from '../../../../../../../brandcomputers_v1.1/src/app/services/filter.service';
import {GenerateProductCodeService} from '../../../../services/components/generate-product-code.service';
import {Location} from '@angular/common';
import {SoundCard} from '../../../../model/SoundCard';
import swal from 'sweetalert';
import {Storage} from '../../../../model/Storage';

@Component({
  selector: 'app-storage',
  templateUrl: './storage.component.html',
  styleUrls: ['./storage.component.scss']
})
export class StorageComponent implements OnInit {

  @ViewChild('inputSearch') inputSearch: ElementRef;
  @ViewChild('inputSearchStock') inputSearchStock: ElementRef;

  id: number;
  getProductCode: string;
  query = '';

  storageList = [];
  pageSizeStorage = 10;
  pageStorage = 1;
  count: any;

  isTableProductCodeSelected = true;
  productCodesWithStock = [];
  pageSizeProductCodeWithStock = 10;
  pageProductCodeWithStock = 1;
  countProductCodeWithStock: any;
  storageListByProductCode = [];
  pageSizeStorageByProductCode = 10;
  pageStorageByProductCode = 1;
  countStorageByProductCode: any;

  isAddMode: boolean;
  validatingForm: FormGroup;
  selectedProductCode: any;
  productCodesList = [];
  isSerialNumberPresent = false;
  errorMessage = '';
  stateList = [];

  manufacturersList = [];
  typesList = [];
  formsList = [];
  capacitiesList = [];
  rpmList = [];

  isFiltered: boolean = false;
  isSearchProductCodesWithStock = false;

  params = new HttpParams();

  constructor(private enumService: EnumService,
              private storageService: StorageService,
              private formBuilder: FormBuilder,
              private tokenService: TokenStorageService,
              private reloadPageService: ReloadPageService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private filterService: FilterService,
              private productCodeService: GenerateProductCodeService,
              private location: Location) {
  }

  ngOnInit(): void {

    this.stateList = this.enumService.getValues(EnumState);
    this.storageForm();
    this.getRouting();
    this.getAllGenerateProductCodes();
    this.getStorageSearchResult();
    this.getAllManufacturers();
    this.getAllTypes();
    this.getAllForms();
    this.getAllCapacities();
    this.getAllRpm();
    this.getAllProductCodesWithStock();
  }

  get formFields() {
    return this.validatingForm.controls;
  }

  storageForm() {
    this.validatingForm = this.formBuilder.group({
      productCode: new FormControl({value: '', disabled: true}, Validators.required),
      productName: new FormControl('', Validators.required),
      serialNumber: new FormControl('', Validators.required),
      manufacturer: new FormControl('', Validators.required),
      model: new FormControl('', Validators.required),
      type: new FormControl('', Validators.required),
      form: new FormControl('', Validators.required),
      capacity: new FormControl('', Validators.required),
      rpm: new FormControl('', Validators.required),
      productInformation: new FormControl('', Validators.required),
      priceIn: new FormControl('', Validators.required),
      state: new FormControl('', Validators.required),
      createdBy: new FormControl(''),
      updatedBy: new FormControl('')
    });
  }

  /***************************** Search, Filter, Pagination for main table tab ***************************/

  getStorageSearchResult() {
    const params = this.getPaginationParams(this.pageStorage, this.pageSizeStorage);
    this.storageService.getSearchResult(this.query, params).subscribe((data: any) => {
      this.storageList = data.content;
      this.count = data.totalElements;

      if (this.query !== '') {
        this.storageList = [];

        for (let item of data.content) {
          this.storageList.push(item);
        }

        this.count = data.totalElements;
        this.inputSearch.nativeElement.value = '';

      }
    }, (error: HttpErrorResponse) => {
      this.errorMessage = error.error.message;
    });

  }

  getStorageFilterResults(): void {
    let pageParams = this.getPaginationParams(this.pageStorage, this.pageSizeStorage);
    this.storageService.getFilter(this.params, pageParams).subscribe((data: any) => {

      this.count = data.totalElements;
      this.storageList = [];
      for (const item of data.content) {
        this.storageList.push(item);
      }

      this.query = '';
    }, (error: HttpErrorResponse) => {
      this.errorMessage = error.error.message;
    });
  }

  getAllManufacturers() {
    this.storageService.getManufacturers().subscribe((data: any) => {
      this.manufacturersList = data;
    }, (error: HttpErrorResponse) => {
      this.errorMessage = error.error.message;
    });
  }

  getAllTypes() {
    this.storageService.getTypes().subscribe((data: any) => {
      this.typesList = data;
    }, (error: HttpErrorResponse) => {
      this.errorMessage = error.error.message;
    });
  }

  getAllForms() {
    this.storageService.getForms().subscribe((data: any) => {
      this.formsList = data;
    }, (error: HttpErrorResponse) => {
      this.errorMessage = error.error.message;
    });
  }

  getAllCapacities() {
    this.storageService.getCapacities().subscribe((data: any) => {
      this.capacitiesList = data;
    }, (error: HttpErrorResponse) => {
      this.errorMessage = error.error.message;
    });
  }

  getAllRpm() {
    this.storageService.getRpm().subscribe((data: any) => {
      this.rpmList = data;
    }, (error: HttpErrorResponse) => {
      this.errorMessage = error.error.message;
    });
  }

  getEventSearchResult(event) {
    this.isFiltered = false;
    this.query = event.target.value;
    this.getStorageSearchResult();
  }

  handlePageChangeSearchAndFilter(event) {
    this.pageStorage = event;

    if (this.isFiltered) {
      this.getStorageFilterResults();
    } else {
      this.getStorageSearchResult();
    }
  }

  handlePageSizeChangeSearchAndFilter(event) {
    this.pageSizeStorage = event.target.value;
    this.pageStorage = 1;

    if (this.isFiltered) {
      this.getStorageFilterResults();
    } else {
      this.getStorageSearchResult();
    }
  }

  getRequestParamsForFilter(event) {
    this.isFiltered = true;
    if (event.target.checked) {
      this.params = this.filterService.setParamsFilter(event);
      this.getStorageFilterResults();
    }

    if (!event.target.checked) {
      this.params = this.filterService.deleteFilter(event);
      this.getStorageFilterResults();
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
    this.storageService.getAllProductCodesWithStock(params).subscribe((data: any) => {
      this.productCodesWithStock = data.content;
      this.countProductCodeWithStock = data.totalElements;
    }, (error: HttpErrorResponse) => {
      this.errorMessage = error.error.message;
    });
  }

  getAllSearchProductCodesWithStock(): void {
    const pageParams = this.getPaginationParams(this.pageProductCodeWithStock, this.pageSizeProductCodeWithStock);
    this.storageService.getAllSearchProductCodesWithStock(this.params, pageParams).subscribe((data: any) => {

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

  getStorageByProductCode(productCode: any) {
    this.toggleProductCodeTable();
    this.getProductCode = productCode;
    this.router.navigate(['dashboard/storage'], {queryParams: {productCode: productCode}});
    const params = this.getPaginationParams(this.pageStorageByProductCode, this.pageStorageByProductCode);
    this.storageService.getByProductCode(productCode, params).subscribe((data: any) => {
      this.storageListByProductCode = data.content;
      this.countStorageByProductCode = data.totalElements;
    }, (error: HttpErrorResponse) => {
      this.errorMessage = error.error.message;
    });
  }

  clearSearchProductCodesWithStock() {
    this.query = '';
    this.getAllProductCodesWithStock();
  }

  handlePageSizeChangeStorageByProductCode(event) {
    this.pageSizeStorageByProductCode = event.target.value;
    this.pageStorageByProductCode = 1;

    this.getStorageByProductCode(this.getProductCode);
    this.toggleProductCodeTable();
  }

  handlePageChangeStorageByProductCode(event) {
    this.pageStorageByProductCode = event;
    this.getStorageByProductCode(this.getProductCode);
    this.toggleProductCodeTable();
  }

  /***************************** End Search, Pagination, Filter for second table tab **************************/

  /************************** General Functions **********************************************************/
  closeModal() {
    this.isAddMode = true;
    this.validatingForm.reset();
    this.reloadPageService.skipLocation('dashboard/storage');

    if (this.isSerialNumberPresent) {
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
    this.getStorageSearchResult();
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

  private addStorage(): void {
    this.validatingForm.get('createdBy').setValue(this.tokenService.getUser().firstName + ' ' + this.tokenService.getUser().lastName);
    this.formFields.productCode.enable();
    this.validatingForm.get('productCode').setValue(this.selectedProductCode);
    this.storageService.add(this.validatingForm.value)
      .toPromise()
      .then((response) => {
        this.reloadPageService.reload();
        this.isSerialNumberPresent = false;
        document.querySelector('.modal-backdrop').remove();
      }).catch((error: HttpErrorResponse) => {
      this.isSerialNumberPresent = true;
      this.errorMessage = error.error.message;
      document.getElementById('addStorage-btn').setAttribute('data-backdrop', 'static');
    });
  }

  private editStorage(): void {
    this.validatingForm.get('updatedBy').setValue(this.tokenService.getUser().firstName + ' ' + this.tokenService.getUser().lastName);
    this.formFields.productCode.enable();
    this.validatingForm.get('productCode').setValue(this.selectedProductCode);
    this.storageService.editById(this.id, this.validatingForm.value)
      .toPromise()
      .then((response) => {
        this.router.navigate(['dashboard/storage']).finally(() => this.reloadPageService.reload());
        this.isAddMode = true;
        this.isSerialNumberPresent = false;
        document.querySelector('.modal-backdrop').remove();
      }).catch((error: HttpErrorResponse) => {

      this.isSerialNumberPresent = true;
      this.errorMessage = error.error.message;
      document.getElementById('editStorage-btn').setAttribute('data-backdrop', 'static');
    });
  }

  deleteStorage(storage: Storage) {
    swal({
      title: 'Esti sigur ?',
      text: 'Inregistrarea va fi stearsa definitiv !',
      icon: 'warning',
      buttons: ['Anulare', 'Sterge'],
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          this.storageService.deleteById(Number(storage.id)).subscribe(response => {
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
      this.addStorage();
    } else {
      this.editStorage();
    }
  }

  patchForm(storage: any) {
    this.isAddMode = false;
    const data = this.storageList.find(i => i.id == storage.id);
    this.router.navigate(['dashboard/storage'], {queryParams: {id: storage.id}});
    this.validatingForm.patchValue(data);
  }

  getAllGenerateProductCodes(): void {
    this.productCodeService.getAll(Storage.generateProductURL).subscribe((data: any) => {
      this.productCodesList = data;
    }, (error: HttpErrorResponse) => {
      this.errorMessage = error.error.message;
    });
  }

  setGeneratedProductCode(event: any) {
    if (event === undefined || event === null) {
      return;
    }
    this.selectedProductCode = this.productCodesList.find(p => p.productName == event).productCode;

  }

  /***********************End Create, Update, Delete ****************************************************/
}
