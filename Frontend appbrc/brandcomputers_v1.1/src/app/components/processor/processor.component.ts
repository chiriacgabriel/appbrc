import {HttpErrorResponse, HttpParams} from '@angular/common/http';
import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {FilterService} from 'app/helper/filter.service';
import {EnumService} from 'app/helper/enum.service';
import {ProcessorService} from 'app/services/components/processor.service';
import {ReloadPageService} from 'app/services/reload-page.service';
import {TokenStorageService} from 'app/services/token-storage.service';
import {GenerateProductCodeService} from 'app/services/components/generate-product-code.service';
import {EnumState} from 'app/model/enum/EnumState';
import {Processor} from 'app/model/components/Processor';
import Swal from 'sweetalert2';
import {Location} from '@angular/common';
import { GenerateProductCode } from 'app/model/components/GenerateProductCode';


@Component({
    selector: 'app-processor',
    templateUrl: './processor.component.html',
    styleUrls: ['./processor.component.css',
        '../../../assets/css/_modal_filter.css',
        '../../../assets/css/_table_format.css',
        '../../../assets/css/_tab_pane_custom.css',
        '../../../assets/css/_fav_icons_custom.css',
        '../../../assets/css/_pagination_custom.css']
})
export class ProcessorComponent implements OnInit {

    @ViewChild('inputSearch') inputSearch: ElementRef;
    @ViewChild('inputSearchStock') inputSearchStock: ElementRef;
    @ViewChild('closeAddEditModal') closeAddEditModal;

    id: number;
    processorList = [];
    pageSizeProcessor = 10;
    pageProcessor = 1;
    count: any;
    isTableProductCodeSelected = true;
    productCodesWithStock = [];

    query = '';
    isFiltered: boolean = false;

    manufacturersList: string[] = [];
    socketsList: string[] = [];
    modelsList: string[] = [];
    numberOfCpuCoresList: number[] = [];
    numberOfThreadsList: number[] = [];
    baseClocksList: number[] = [];
    boostsClocksList: number[] = [];
    frequenciesList: number[] = [];
    litographyList: number[] = [];
    typeOfMemoryRamList: string[] = [];


    pageSizeProductCodeWithStock = 10;
    pageProductCodeWithStock = 1;
    countProductCodeWithStock: any;
    processorListByProductCode = [];

    pageSizeProcessorByProductCode = 10;
    pageProcessorByProductCode = 1;
    countProcessorByProductCode: any;

    isAddMode: boolean;
    isSearchProductCodeWithStock = false;
    validatingForm: FormGroup;
    selectedProductCode = new GenerateProductCode();
    getProductCode: string;
    productCodesList: GenerateProductCode[] = [];
    productCodesListInactive: GenerateProductCode[] = [];
    stateList: string[] = [];

    errorMessage = '';

    params = new HttpParams();

    constructor(private processorService: ProcessorService,
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
        this.processorForm();
        this.getProcessorSearchResult();
        this.getAllGenerateProductCodes();
        this.getAllManufacturers();
        this.getAllSockets();
        this.getAllModels();
        this.getAllNumberOfCpuCores();
        this.getAllNumberOfThreads();
        this.getAllBaseClocks();
        this.getAllMaxBoostClocks();
        this.getAllFrequencies();
        this.getAllLithography();
        this.getAllTypeOfMemoryRam();
        this.getAllProductCodesWithStock();

    }

    /************************** FORM ****************************************************/

    get formFields() {
        return this.validatingForm.controls;
    }

    processorForm(): void {
        this.validatingForm = this.formBuilder.group({
            generateProductCode: new FormControl({value: '', disabled: true}, Validators.required),
            productName: new FormControl('', Validators.required),
            manufacturer: new FormControl('', Validators.required),
            socket: new FormControl('', Validators.required),
            model: new FormControl('', Validators.required),
            baseClock: new FormControl('', Validators.required),
            maxBoostClock: new FormControl('', Validators.required),
            typeOfMemoryRAM: new FormControl('', Validators.required),
            maxMemoryFrequency: new FormControl('', Validators.required),
            numberOfCpuCores: new FormControl('', Validators.required),
            numberOfThreads: new FormControl('', Validators.required),
            cache: new FormControl('', Validators.required),
            coolerIncluded: new FormControl('', Validators.required),
            lithography: new FormControl('', Validators.required),
            thermalDesignPower: new FormControl('', Validators.required),
            priceIn: new FormControl('', Validators.required),
            quantity: new FormControl('', Validators.required),
            unitOfMeasurement: new FormControl('', Validators.required),
            productInformation: new FormControl('', Validators.required),
            state: new FormControl('', Validators.required),
            createdBy: new FormControl(''),
            updatedBy: new FormControl('')
        });
    }

    /************************** END FORM ****************************************************/

    /***************************** Search, Filter, Pagination for main table tab ***************************/

    getProcessorSearchResult() {
        const params = this.getPaginationParams(this.pageProcessor, this.pageSizeProcessor);
        this.processorService.getSearchResult(this.query, params).subscribe((data: any) => {
            this.processorList = data.content;
            this.count = data.totalElements;
            if (this.query !== '') {
                this.processorList = [];
                for (let item of data.content) {
                    this.processorList.push(item);
                }
                this.count = data.totalElements;
                this.inputSearch.nativeElement.value = '';
            }
        }, (error: HttpErrorResponse) => {
            this.errorMessage = error.error.message;
        });
    }

    getProcessorFilterResults(): void {
        const pageParams = this.getPaginationParams(this.pageProcessor, this.pageSizeProcessor);
        this.processorService.getFilter(this.params, pageParams).subscribe((data: any) => {
            this.count = data.totalElements;
            this.processorList = [];
            for (let item of data.content) {
                this.processorList.push(item);
            }
            this.query = '';
        }, (error: HttpErrorResponse) => {
            this.errorMessage = error.error.message;
        });
    }

    getAllManufacturers() {
        this.processorService.getManufacturers().subscribe((data: any) => {
            this.manufacturersList = data;
        }, (error: HttpErrorResponse) => {
            this.errorMessage = error.error.message;
        });
    }

    getAllSockets() {
        this.processorService.getSockets().subscribe((data: any) => {
            this.socketsList = data;
        }, (error: HttpErrorResponse) => {
            this.errorMessage = error.error.message;
        });
    }

    getAllModels() {
        this.processorService.getModels().subscribe((data: any) => {
            this.modelsList = data;
        }, (error: HttpErrorResponse) => {
            this.errorMessage = error.error.message;
        });
    }

    getAllNumberOfCpuCores() {
        this.processorService.getNumberOfCpuCores().subscribe((data: any) => {
            this.numberOfCpuCoresList = data;
        }, (error: HttpErrorResponse) => {
            this.errorMessage = error.error.message;
        });
    }

    getAllNumberOfThreads() {
        this.processorService.getNumberOfThreads().subscribe((data: any) => {
            this.numberOfThreadsList = data;
        }, (error: HttpErrorResponse) => {
            this.errorMessage = error.error.message;
        });
    }

    getAllBaseClocks() {
        this.processorService.getBaseClocks().subscribe((data: any) => {
            this.baseClocksList = data;
        }, (error: HttpErrorResponse) => {
            this.errorMessage = error.error.message;
        });
    }

    getAllMaxBoostClocks() {
        this.processorService.getMaxBoostClocks().subscribe((data: any) => {
            this.boostsClocksList = data;
        }, (error: HttpErrorResponse) => {
            this.errorMessage = error.error.message;
        });
    }

    getAllFrequencies() {
        this.processorService.getMaxMemoryFrequencies().subscribe((data: any) => {
            this.frequenciesList = data;
        }, (error: HttpErrorResponse) => {
            this.errorMessage = error.error.message;
        });
    }

    getAllLithography() {
        this.processorService.getLithography().subscribe((data: any) => {
            this.litographyList = data;
        }, (error: HttpErrorResponse) => {
            this.errorMessage = error.error.message;
        });
    }

    getAllTypeOfMemoryRam() {
        this.processorService.getTypeOfMemoryRam().subscribe((data: any) => {
            this.typeOfMemoryRamList = data;
        }, (error: HttpErrorResponse) => {
            this.errorMessage = error.error.message;
        });
    }

    getEventSearchResult(event: any) {
        this.isFiltered = false;
        this.query = event.target.value;
        this.getProcessorSearchResult();
    }

    handlePageChangeSearchAndFilter(event) {
        this.pageProcessor = event;
        if (this.isFiltered) {
            this.getProcessorFilterResults();
        } else {
            this.getProcessorSearchResult();
        }
    }

    handlePageSizeChangeSearchAndFilter(event) {
        this.pageSizeProcessor = event.target.value;
        this.pageProcessor = 1;
        if (this.isFiltered) {
            this.getProcessorFilterResults();
        } else {
            this.getProcessorSearchResult();
        }
    }

    getRequestParamsForFilter(event: any) {
        this.isFiltered = true;
        if (event.target.checked) {
            this.params = this.filterService.setParamsFilter(event);
            this.getProcessorFilterResults();
        }

        if (!event.target.checked) {
            this.params = this.filterService.deleteFilter(event);
            this.getProcessorFilterResults();
        }
    }

    resetFilters() {
        this.isFiltered = false;
        window.location.reload();

        // TODO:
        //  refactor code to not load the entire page, just refresh the component
    }

    /***************************** End Search, Filter, Pagination for main table tab ************************/

    /*********************** Search, pagination, Filter for second table tab ***************************/

    getAllProductCodesWithStock() {
        const params = this.getPaginationParams(this.pageProductCodeWithStock, this.pageSizeProductCodeWithStock);

        this.processorService.getAllProductCodesWithStock(params).subscribe((data: any) => {
            this.productCodesWithStock = data.content;
            this.countProductCodeWithStock = data.totalElements;
        }, (error: HttpErrorResponse) => {
            this.errorMessage = error.error.message;
        });
    }

    getAllSearchProductCodesWithStock() {
        const pageParams = this.getPaginationParams(this.pageProductCodeWithStock, this.pageSizeProductCodeWithStock);
        this.processorService.getAllSearchProductCodesWithStock(this.params, pageParams).subscribe((data: any) => {
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

    getProcessorByProductCode(productCode: any) {
        this.toggleProductCodeTable();
        this.getProductCode = productCode;
        const params = this.getPaginationParams(this.pageProcessorByProductCode, this.pageSizeProcessorByProductCode);
        this.processorService.getByProductCode(productCode, params).subscribe((data: any) => {
            this.processorListByProductCode = data.content;
            this.countProcessorByProductCode = data.totalElements;
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

    handlePageSizeChangeProcessorByProductCode(event) {
        this.pageSizeProcessorByProductCode = event.target.value;
        this.pageProcessorByProductCode = 1;
        this.getProcessorByProductCode(this.getProductCode);
        this.toggleProductCodeTable();
    }

    handlePageChangeProcessorByProductCode(event) {
        this.pageProcessorByProductCode = event;
        this.getProcessorByProductCode(this.getProductCode);
        this.toggleProductCodeTable();
    }

    clearSearchProductCodesWithStock() {
        this.query = '';
        this.getAllProductCodesWithStock();
    }

    /************************** Create, Update, Delete, Submit, Patch Form ****************************************************/
    private addProcessor(): void {
        this.validatingForm.get('createdBy').setValue(this.tokenService.getUser().firstName + ' ' + this.tokenService.getUser().lastName);

        this.formFields.generateProductCode.enable();
        this.formFields.productName.disable();
        this.validatingForm.get('generateProductCode').setValue(this.selectedProductCode);

        this.processorService.add(this.validatingForm.value)
            .toPromise()
            .then((response) => {
                this.closeAddEditModal.nativeElement.click();
                this.formFields.generateProductCode.disable();
                this.formFields.productName.enable();
                this.getProcessorSearchResult();
                this.getAllProductCodesWithStock();
            }).catch((error: HttpErrorResponse) => {
            this.errorMessage = error.error.message;
            document.getElementById('addProcessor-btn').setAttribute('data-backdrop', 'static');
        });
    }

    private editProcessor(): void {
        this.validatingForm.get('updatedBy').setValue(this.tokenService.getUser().firstName + ' ' + this.tokenService.getUser().lastName)

        this.formFields.generateProductCode.enable();
        this.formFields.productName.disable();
        this.validatingForm.get('generateProductCode').setValue(this.selectedProductCode);

        this.processorService.editById(this.id, this.validatingForm.value)
            .toPromise()
            .then((response) => {
                this.closeAddEditModal.nativeElement.click();
                this.formFields.generateProductCode.disable();
                this.formFields.productName.enable();
                this.isAddMode = true;
                this.getProcessorSearchResult();
                this.getAllProductCodesWithStock();
                this.router.navigate([], {});
            }).catch((error: HttpErrorResponse) => {
            this.errorMessage = error.error.message;
            document.getElementById('editProcessor-btn').setAttribute('data-backdrop', 'static');
        });
    }

    deleteProcessor(processor: Processor) {
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
                this.processorService.deleteById(Number(processor.id)).subscribe(response => {
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
            this.addProcessor();
        } else {
            this.editProcessor();
        }
    }

    patchForm(processor: any, param: any) {
        this.isAddMode = false;

        const productCodeInactive = this.productCodesListInactive
            .find(s => s.productCode === processor.generateProductCode.productCode);
        const productCodeActive = this.productCodesList
            .find(s => s.productCode === processor.generateProductCode.productCode);

        if (productCodeInactive !== undefined && productCodeInactive.state === false) {
            this.productCodeService.inactiveProductCode(param, productCodeInactive);
            return;
        }

        this.selectedProductCode = processor.generateProductCode;
        this.validatingForm.patchValue(processor);
        this.validatingForm.get('productName')
            .setValue(productCodeActive);

        this.router.navigate(['components/processor'], {queryParams: {id: processor.id}});
    }

    getAllGenerateProductCodes(): void {
        this.productCodeService.getAllByCategory(GenerateProductCode.productCodeCategoryURI, new HttpParams().set('category', 'Processor')).subscribe((data: any) => {
            this.productCodesList = data.filter(productCode => productCode.state === true);
            this.productCodesListInactive = data.filter(productCode => productCode.state === false);
        }, (err: HttpErrorResponse) => {
            this.errorMessage = err.error.message;
        });
    }

    setGeneratedProductCode(event: any) {
        if (event === undefined || event === null) {
            return;
        }

        this.selectedProductCode = this.productCodesList.find(p => p.productName === event.productName);
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

    /*********************** End Create, Update, Delete, Submit, Patch Form ****************************************************/

    /*********************** General Functions ******************************************************/
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

    closeModal() {
        this.isAddMode = true;
        this.validatingForm.reset();
        this.closeAddEditModal.nativeElement.click();
        this.router.navigate([], {});

    }

    clearSearch() {
        this.query = '';
        this.getProcessorSearchResult();
    }

    goBack() {
        if (this.getProductCode) {
            this.getProductCode = null;
            this.toggleProductCodeTable();
        }
    }

    toggleProductCodeTable() {
        this.isTableProductCodeSelected = !this.isTableProductCodeSelected;
    }

    /*********************** End General Functions ******************************************************/

}
