import {HttpErrorResponse, HttpParams} from '@angular/common/http';
import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {EnumChipset} from 'app/model/enum/EnumChipset';
import {EnumState} from 'app/model/enum/EnumState';
import {Motherboard} from 'app/model/components/Motherboard';
import Swal from 'sweetalert2';
import {Location} from '@angular/common';
import {GenerateProductCodeService} from 'app/services/components/generate-product-code.service';
import {TokenStorageService} from 'app/services/token-storage.service';
import {FilterService} from 'app/helper/filter.service';
import {EnumService} from 'app/helper/enum.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ReloadPageService} from 'app/services/reload-page.service';
import {MotherboardService} from 'app/services/components/motherboard.service';
import { GenerateProductCode } from 'app/model/components/GenerateProductCode';

@Component({
    selector: 'app-motherboard',
    templateUrl: './motherboard.component.html',
    styleUrls: ['./motherboard.component.css',
        '../../../assets/css/_modal_filter.css',
        '../../../assets/css/_table_format.css',
        '../../../assets/css/_tab_pane_custom.css',
        '../../../assets/css/_fav_icons_custom.css',
        '../../../assets/css/_pagination_custom.css']
})
export class MotherboardComponent implements OnInit {

    @ViewChild('inputSearch') inputSearch: ElementRef;
    @ViewChild('inputSearchStock') inputSearchStock: ElementRef;
    @ViewChild('closeAddEditModal') closeAddEditModal;
    @ViewChild('productCode') htmlElementProductCode: ElementRef;

    id: number;
    getProductCode: string;

    validatingForm: FormGroup;

    errorMessage = '';
    query = '';

    chipsetList: any;
    selectedProductCode = new GenerateProductCode();

    motherboardList = [];
    productCodesList: GenerateProductCode[] = [];
    productCodesListInactive: GenerateProductCode[] = [];
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
                private location: Location) {
    }

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
            generateProductCode: new FormControl({value: '', disabled: true}, Validators.required),
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
            quantity: new FormControl('', Validators.required),
            unitOfMeasurement: new FormControl('', Validators.required),
            productInformation: new FormControl('', Validators.required),
            state: new FormControl('', Validators.required),
            createdBy: new FormControl(''),
            updatedBy: new FormControl('')
        });
    }

    onSubmit() {
        if (this.validatingForm.invalid) {
            return;
        }

        if (this.isAddMode) {
            this.addMotherboard();
        } else {
            this.editMotherboard();
        }
    }

    patchForm(motherboard: any, param) {
        this.isAddMode = false;
        const productCodeInactive = this.productCodesListInactive
            .find(s => s.productCode === motherboard.generateProductCode.productCode);
        const productCodeActive = this.productCodesList
            .find(s => s.productCode === motherboard.generateProductCode.productCode);

        if (productCodeInactive !== undefined && productCodeInactive.state === false) {
            this.productCodeService.inactiveProductCode(param, productCodeInactive);
            return;
        }

        this.selectedProductCode = motherboard.generateProductCode;
        this.validatingForm.patchValue(motherboard);
        this.validatingForm.get('productName')
            .setValue(productCodeActive);


        this.router.navigate(['components/motherboard'], {queryParams: {id: motherboard.id}});
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

    getMotherboardSearchResults(): void {
        const params = this.getPaginationParams(this.pageMotherboard, this.pageSizeMotherboard);
        this.motherboardService.getSearchResult(this.query, params).subscribe((data: any) => {
            this.motherboardList = data.content;
            this.count = data.totalElements;

            if (this.query !== '') {
                this.motherboardList = [];
                for (let motherboard of data.content) {
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
            params['page'] = page - 1;
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
        this.closeAddEditModal.nativeElement.click();
        this.router.navigate([], {});

        if (this.isSerialNumberPresent) {
            this.isSerialNumberPresent = false;
            this.errorMessage = '';
        }
    }

    setGeneratedProductCode(event: any) {
        if (event === undefined || event === null) {
            return;
        }

        this.htmlElementProductCode.nativeElement.value = event.productCode;
        this.selectedProductCode = event;
    }

    getAllGenerateProductCodes(): void {
        this.productCodeService.getAllByCategory(GenerateProductCode.productCodeURI, 'motherboard').subscribe((data: any) => {
            this.productCodesList = data.filter(productCode => productCode.state === true);
            this.productCodesListInactive = data.filter(productCode => productCode.state === false);
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
            for (let item of data.content) {
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

        this.formFields.generateProductCode.enable();
        this.formFields.productName.disable();
        this.validatingForm.get('generateProductCode').setValue(this.selectedProductCode);

        this.motherboardService.add(this.validatingForm.value)
            .toPromise()
            .then((response) => {
                this.formFields.generateProductCode.disable();
                this.formFields.productName.enable();
                this.isSerialNumberPresent = false;
                this.closeAddEditModal.nativeElement.click();
                this.getMotherboardSearchResults();
                this.getAllProductCodesWithStock();
            }).catch((error: HttpErrorResponse) => {
            this.isSerialNumberPresent = true;
            this.errorMessage = error.error.message;
            document.getElementById('addMotherboard-btn').setAttribute('data-backdrop', 'static');
        });
    }

    private editMotherboard(): void {
        this.validatingForm.get('updatedBy').setValue(this.tokenService.getUser().firstName + ' ' + this.tokenService.getUser().lastName)

        this.formFields.generateProductCode.enable();
        this.formFields.productName.disable();
        this.validatingForm.get('generateProductCode').setValue(this.selectedProductCode);

        this.motherboardService.editById(this.id, this.validatingForm.value)
            .toPromise()
            .then((response) => {
                this.closeAddEditModal.nativeElement.click();
                this.getMotherboardSearchResults();
                this.getAllProductCodesWithStock();
                this.isAddMode = true;
                this.isSerialNumberPresent = false;
                this.formFields.generateProductCode.disable();
                this.formFields.productName.enable();
               this.router.navigate([], {});
            }).catch((error: HttpErrorResponse) => {
            this.isSerialNumberPresent = true;
            this.errorMessage = error.error.message;
            document.getElementById('editMotherboard-btn').setAttribute('data-backdrop', 'static');
        });
    }

    deleteMotherboard(motherboard: Motherboard) {
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
                this.motherboardService.deleteById(Number(motherboard.id)).subscribe(response => {
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
        }
    }

    /*********************** FILTER ****************************************************/
    getRequestParamsForFilter(event: any) {
        this.isFiltered = true;
        if (event.target.checked) {
            this.params = this.filterService.setParamsFilter(event);
            this.getMotherboardFilterResults();
        }

        if (!event.target.checked) {
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

    getAllProductCodesWithStock() {
        const params = this.getPaginationParams(this.pageProductCodeWithStock, this.pageSizeProductCodeWithStock);

        this.motherboardService.getAllProductCodesWithStock(params).subscribe((data: any) => {
            this.productCodesWithStock = data.content;
            this.countProductCodeWithStock = data.totalElements;
        }, (error: HttpErrorResponse) => {
            this.errorMessage = error.error.message;
        });
    }

    getAllSearchProductCodesWithStock() {
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

        if (this.isSearchProductCodeWithStock) {
            this.getAllSearchProductCodesWithStock();
        } else {
            this.getAllProductCodesWithStock();
        }
    }

    handlePageChangeProductCodesWithStock(event) {
        this.pageProductCodeWithStock = event;

        if (this.isSearchProductCodeWithStock) {
            this.getAllSearchProductCodesWithStock();
        } else {
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

    toggleProductCodeTable() {
        this.isTableProductCodeSelected = !this.isTableProductCodeSelected;
    }

    /*********************** END Product Code ****************************************************/

}
