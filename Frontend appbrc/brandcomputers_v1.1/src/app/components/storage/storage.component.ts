import {HttpErrorResponse, HttpParams} from '@angular/common/http';
import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {EnumService} from 'app/helper/enum.service';
import {FilterService} from 'app/helper/filter.service';
import {EnumState} from 'app/model/enum/EnumState';
import {GenerateProductCodeService} from 'app/services/components/generate-product-code.service';
import {StorageService} from 'app/services/components/storage.service';
import {ReloadPageService} from 'app/services/reload-page.service';
import {TokenStorageService} from 'app/services/token-storage.service';
import {Storage} from '../../model/components/Storage';
import Swal from 'sweetalert2';
import {Location} from '@angular/common';
import { GenerateProductCode } from 'app/model/components/GenerateProductCode';

@Component({
    selector: 'app-storage',
    templateUrl: './storage.component.html',
    styleUrls: ['./storage.component.css',
        '../../../assets/css/_modal_filter.css',
        '../../../assets/css/_table_format.css',
        '../../../assets/css/_tab_pane_custom.css',
        '../../../assets/css/_fav_icons_custom.css',
        '../../../assets/css/_pagination_custom.css']
})
export class StorageComponent implements OnInit {

    @ViewChild('inputSearch') inputSearch: ElementRef;
    @ViewChild('inputSearchStock') inputSearchStock: ElementRef;
    @ViewChild('closeAddEditModal') closeAddEditModal;

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
    selectedProductCode = new GenerateProductCode();
    productCodesList = [];
    productCodesListInactive = [];
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
            generateProductCode: new FormControl({value: '', disabled: true}, Validators.required),
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
            quantity: new FormControl('', Validators.required),
            unitOfMeasurement: new FormControl('', Validators.required),
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
        this.closeAddEditModal.nativeElement.click();

        if (this.isSerialNumberPresent) {
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
        this.getStorageSearchResult();
    }

    goBack() {
        if (this.getProductCode) {
            this.getProductCode = null;
            this.toggleProductCodeTable();

        }

    }

    /************************** End General Functions ******************************************************/

    /************************** Create, Update, Delete, Submit, Patch Form ****************************************************/

    private addStorage(): void {
        this.validatingForm.get('createdBy').setValue(this.tokenService.getUser().firstName + ' ' + this.tokenService.getUser().lastName);

        this.formFields.generateProductCode.enable();
        this.formFields.productName.disable();
        this.validatingForm.get('generateProductCode').setValue(this.selectedProductCode);

        this.storageService.add(this.validatingForm.value)
            .toPromise()
            .then((response) => {
                this.closeAddEditModal.nativeElement.click();
                this.isSerialNumberPresent = false;
                this.formFields.generateProductCode.disable();
                this.formFields.productName.enable()
                this.getStorageSearchResult();
                this.getAllProductCodesWithStock();
            }).catch((error: HttpErrorResponse) => {
            this.isSerialNumberPresent = true;
            this.errorMessage = error.error.message;
            document.getElementById('addStorage-btn').setAttribute('data-backdrop', 'static');
        });
    }

    private editStorage(): void {
        this.validatingForm.get('updatedBy').setValue(this.tokenService.getUser().firstName + ' ' + this.tokenService.getUser().lastName);

        this.formFields.generateProductCode.enable();
        this.formFields.productName.disable();
        this.validatingForm.get('generateProductCode').setValue(this.selectedProductCode);

        this.storageService.editById(this.id, this.validatingForm.value)
            .toPromise()
            .then((response) => {
                this.closeAddEditModal.nativeElement.click();
                this.isAddMode = true;
                this.isSerialNumberPresent = false;
                this.formFields.generateProductCode.disable();
                this.formFields.productName.enable()
                this.getStorageSearchResult();
                this.getAllProductCodesWithStock();
                this.router.navigate([], {});
            }).catch((error: HttpErrorResponse) => {

            this.isSerialNumberPresent = true;
            this.errorMessage = error.error.message;
            document.getElementById('editStorage-btn').setAttribute('data-backdrop', 'static');
        });
    }

    deleteStorage(storage: Storage) {
        Swal.fire({
            title: 'Esti sigur?',
            text: 'Inregistrarea va fi stearsa definitiv si produsele asociate!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Da, sterge!'
        }).then((willDelete) => {
            if (willDelete.isConfirmed) {
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

    patchForm(storage: any, param: any) {
        this.isAddMode = false;

        const productCodeInactive = this.productCodesListInactive
            .find(s => s.productCode === storage.generateProductCode.productCode);
        const productCodeActive = this.productCodesList
            .find(s => s.productCode === storage.generateProductCode.productCode);

        if (productCodeInactive !== undefined && productCodeInactive.state === false) {
            this.productCodeService.inactiveProductCode(param, productCodeInactive);
            return;
        }

        this.selectedProductCode = storage.generateProductCode;
        this.validatingForm.patchValue(storage);
        this.validatingForm.get('productName')
            .setValue(productCodeActive);

        this.router.navigate(['components/storage'], {queryParams: {id: storage.id}});

    }

    getAllGenerateProductCodes(): void {
        this.productCodeService.getAll(Storage.generateProductURL).subscribe((data: any) => {
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
        this.selectedProductCode = this.productCodesList.find(p => p.productName == event.productName);

    }

    /***********************End Create, Update, Delete ****************************************************/
}
