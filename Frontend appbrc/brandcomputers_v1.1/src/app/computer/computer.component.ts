import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {GenerateProductCode} from '../model/components/GenerateProductCode';
import {HttpErrorResponse, HttpParams} from '@angular/common/http';
import {EnumService} from '../helper/enum.service';
import {ComputerService} from '../services/computer/computer.service';
import {TokenStorageService} from '../services/token-storage.service';
import {ReloadPageService} from '../services/reload-page.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FilterService} from '../helper/filter.service';
import {GenerateProductCodeService} from '../services/components/generate-product-code.service';
import {EnumState} from '../model/enum/EnumState';
import {Computer} from '../model/computer/Computer';
import Swal from 'sweetalert2';
import {NotificationService} from '../helper/notification.service';

@Component({
    selector: 'app-computer',
    templateUrl: './computer.component.html',
    styleUrls: ['./computer.component.css',
        '../../assets/css/_modal_filter.css',
        '../../assets/css/_table_format.css',
        '../../assets/css/_tab_pane_custom.css',
        '../../assets/css/_fav_icons_custom.css',
        '../../assets/css/_pagination_custom.css']
})
export class ComputerComponent implements OnInit {

    @ViewChild('inputSearch') inputSearch: ElementRef;
    @ViewChild('inputSearchStock') inputSearchStock: ElementRef;

    id: number;
    getProductCode: string;
    query = '';
    errorMessage = '';
    isAddMode: boolean;
    validatingForm: FormGroup;
    selectedProductCode = new GenerateProductCode();
    productCodesList = [];
    stateList = [];
    isSerialNumberPresent = false;
    isTableProductCodeSelected = true;
    computerList = [];
    productCodesWithStock = [];
    pageSizeComputer = 10;
    pageComputer = 1;
    count: any;

    pageSizeProductCodeWithStock = 10;
    pageProductCodeWithStock = 1;
    countProductCodeWithStock: any;

    computerListByProductCode = [];
    pageSizeComputerByProductCode = 10;
    pageComputerByProductCode = 1;

    computersDismantledList = [];
    pageSizeComputerDismantled = 10;
    pageComputerDismantled = 1;
    countComputerDismantled: any;

    countComputerByProductCode: any;
    params = new HttpParams();


    formList = [];
    manufacturerList = [];
    cpuModelList = [];
    memoryCapacityList = [];
    storageCapacityList = [];

    isFiltered: boolean = false;
    isSearchProductCodesWithStock = false;


    constructor(private enumService: EnumService,
                private computerService: ComputerService,
                private formBuilder: FormBuilder,
                private tokenService: TokenStorageService,
                private reloadPageService: ReloadPageService,
                private activatedRoute: ActivatedRoute,
                private router: Router,
                private filterService: FilterService,
                private notificationService: NotificationService,
                private productCodeService: GenerateProductCodeService) {
    }

    ngOnInit(): void {
        this.stateList = this.enumService.getValues(EnumState);
        this.computerForm();
        this.getComputerSearchResult();
        this.getAllDataForFilter();
        this.getAllProductCodesWithStock();
        this.getAllGenerateProductCodes();
        this.getRouting();
        this.getComputersDismantled();

    }

    get formFields() {
        return this.validatingForm.controls;
    }

    computerForm() {
        this.validatingForm = this.formBuilder.group({
            generateProductCode: new FormControl({value: '', disabled: true}, Validators.required),
            productName: new FormControl('', Validators.required),
            serialNumber: new FormControl('', Validators.required),
            manufacturer: new FormControl('', Validators.required),
            quantity: new FormControl('', Validators.required),
            unitOfMeasurement: new FormControl('', Validators.required),
            model: new FormControl('', Validators.required),
            form: new FormControl('', Validators.required),
            cpuType: new FormControl('', Validators.required),
            cpuModel: new FormControl('', Validators.required),
            memoryType: new FormControl('', Validators.required),
            memoryCapacity: new FormControl('', Validators.required),
            numberOfDIMM: new FormControl('', Validators.required),
            memoryFrequency: new FormControl('', Validators.required),
            storageExist: new FormControl('', Validators.required),
            storageType: new FormControl('', Validators.required),
            storageCapacity: new FormControl('', Validators.required),
            opticalUnitExist: new FormControl('', Validators.required),
            opticalUnit: new FormControl('', Validators.required),
            videoCardExist: new FormControl('', Validators.required),
            videoCard: new FormControl('', Validators.required),
            soundCardExist: new FormControl('', Validators.required),
            soundCard: new FormControl('', Validators.required),
            networkCardExist: new FormControl('', Validators.required),
            networkCard: new FormControl('', Validators.required),
            state: new FormControl('', Validators.required),
            productInformation: new FormControl('', Validators.required),
            priceIn: new FormControl('', Validators.required),
            dismantled: new FormControl(''),
            createdBy: new FormControl(''),
            updatedBy: new FormControl('')
        });
    }

    /***************************** Search, Filter, Pagination for main table tab ***************************/

    getComputerSearchResult() {
        const params = this.getPaginationParams(this.pageComputer, this.pageSizeComputer);
        this.computerService.getSearchResult(this.query, params).subscribe((data: any) => {
            this.computerList = data.content;
            this.count = data.totalElements;

            if (this.query !== '') {
                this.computerList = [];

                for (let item of data.content) {
                    this.computerList.push(item);
                }

                this.count = data.totalElements;
                this.inputSearch.nativeElement.value = '';

            }
        }, (error: HttpErrorResponse) => {
            this.errorMessage = error.error.message;
        });
    }

    getComputerFilterResults(): void {
        let pageParams = this.getPaginationParams(this.pageComputer, this.pageSizeComputer);
        this.computerService.getFilter(this.params, pageParams).subscribe((data: any) => {

            this.count = data.totalElements;
            this.computerList = [];
            for (const item of data.content) {
                this.computerList.push(item);
            }

            this.query = '';
        }, (error: HttpErrorResponse) => {
            this.errorMessage = error.error.message;
        });
    }

    getAllDataForFilter() {
        this.computerService.getDataForFilter().subscribe((data: any) => {
            this.manufacturerList = data.manufacturer;
            this.cpuModelList = data.cpuModel;
            this.memoryCapacityList = data.memoryCapacity;
            this.storageCapacityList = data.storageCapacity;
            this.formList = data.form;
        }, (error: HttpErrorResponse) => {
            this.errorMessage = error.error.message;
        });
    }

    getEventSearchResult(event) {
        this.isFiltered = false;
        this.query = event.target.value;
        this.getComputerSearchResult();
    }

    handlePageChangeSearchAndFilter(event) {
        this.pageComputer = event;

        if (this.isFiltered) {
            this.getComputerFilterResults();
        } else {
            this.getComputerSearchResult();
        }
    }

    handlePageSizeChangeSearchAndFilter(event) {
        this.pageSizeComputer = event.target.value;
        this.pageComputer = 1;

        if (this.isFiltered) {
            this.getComputerFilterResults();
        } else {
            this.getComputerSearchResult();
        }
    }

    getRequestParamsForFilter(event) {
        this.isFiltered = true;
        if (event.target.checked) {
            this.params = this.filterService.setParamsFilter(event);
            this.getComputerFilterResults();
        }
        if (!event.target.checked) {
            this.params = this.filterService.deleteFilter(event);
            this.getComputerFilterResults();
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
        this.computerService.getAllProductCodesWithStock(params).subscribe((data: any) => {
            this.productCodesWithStock = data.content;
            this.countProductCodeWithStock = data.totalElements;
        }, (error: HttpErrorResponse) => {
            this.errorMessage = error.error.message;
        });
    }

    getAllSearchProductCodesWithStock(): void {
        const pageParams = this.getPaginationParams(this.pageProductCodeWithStock, this.pageSizeProductCodeWithStock);
        this.computerService.getAllSearchProductCodesWithStock(this.params, pageParams).subscribe((data: any) => {

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

    getComputerByProductCode(productCode: any) {
        this.toggleProductCodeTable();
        this.getProductCode = productCode;
        const params = this.getPaginationParams(this.pageComputerByProductCode, this.pageSizeComputerByProductCode);
        this.computerService.getByProductCode(productCode, params).subscribe((data: any) => {
            this.computerListByProductCode = data.content;
            this.countComputerByProductCode = data.totalElements;
        }, (error: HttpErrorResponse) => {
            this.errorMessage = error.error.message;
        });
    }

    clearSearchProductCodesWithStock() {
        this.query = '';
        this.getAllProductCodesWithStock();
    }

    handlePageSizeChangeComputerByProductCode(event) {
        this.pageSizeComputerByProductCode = event.target.value;
        this.pageComputerByProductCode = 1;

        this.getComputerByProductCode(this.getProductCode);
        this.toggleProductCodeTable();
    }

    handlePageChangeComputerByProductCode(event) {
        this.pageComputerByProductCode = event;
        this.getComputerByProductCode(this.getProductCode);
        this.toggleProductCodeTable();
    }

    handlePageSizeChangeDismantled(event) {
        this.pageComputerDismantled = event;
        this.getComputersDismantled();
        this.toggleProductCodeTable();
    }
    /***************************** End Search, Pagination, Filter for second table tab **********************/


    /************************** General Functions **********************************************************/

    closeModal() {
        this.isAddMode = true;
        this.validatingForm.reset();
        this.reloadPageService.skipLocation('computer');

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
        this.getComputerSearchResult();
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

    private addComputer(): void {
        this.validatingForm.get('createdBy').setValue(this.tokenService.getUser().firstName + ' ' + this.tokenService.getUser().lastName);

        this.formFields.generateProductCode.enable();
        this.formFields.productName.disable();
        this.validatingForm.get('generateProductCode').setValue(this.selectedProductCode);

        this.computerService.add(this.validatingForm.value)
            .toPromise()
            .then((response) => {
                this.reloadPageService.reload();
                this.isSerialNumberPresent = false;
                document.querySelector('.modal-backdrop').remove();
            }).catch((error: HttpErrorResponse) => {
            this.isSerialNumberPresent = true;
            this.errorMessage = error.error.message;
            document.getElementById('addComputer-btn').setAttribute('data-backdrop', 'static');
        });
    }

    private editComputer(): void {
        this.validatingForm.get('updatedBy').setValue(this.tokenService.getUser().firstName + ' ' + this.tokenService.getUser().lastName);

        this.formFields.generateProductCode.enable();
        this.formFields.productName.disable();
        this.validatingForm.get('generateProductCode').setValue(this.selectedProductCode);

        this.computerService.editById(this.id, this.validatingForm.value)
            .toPromise()
            .then((response) => {
                this.router.navigate(['computer']).then(() => this.reloadPageService.reload());
                this.isAddMode = true;
                this.isSerialNumberPresent = false;
                document.querySelector('.modal-backdrop').remove();
            }).catch((error: HttpErrorResponse) => {

            this.isSerialNumberPresent = true;
            this.errorMessage = error.error.message;
            document.getElementById('editComputer-btn').setAttribute('data-backdrop', 'static');
        });
    }

    deleteComputer(computer: Computer) {
        Swal.fire({
            title: 'Esti sigur?',
            text: "Inregistrarea va fi stearsa definitiv si produsele asociate!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Da, sterge!'
        }).then((willDelete) => {
            if (willDelete.isConfirmed) {
                this.computerService.deleteById(Number(computer.id)).subscribe(response => {
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
            this.addComputer();
        } else {
            this.editComputer();
        }
    }

    patchForm(computer: any) {
        this.isAddMode = false;
        const data = this.computerList.find(i => i.id == computer.id);

        this.selectedProductCode = data.generateProductCode;
        this.validatingForm.patchValue(data);
        this.validatingForm.get('productName')
            .setValue(this.productCodesList
                .find(s => s.productCode === data.generateProductCode.productCode));

        this.router.navigate(['computer'], {queryParams: {id: computer.id}});
    }

    getAllGenerateProductCodes(): void {
        this.productCodeService.getAll(Computer.generateProductURL).subscribe((data: any) => {
            this.productCodesList = data.filter(productCode => productCode.state === true);
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

    /***********************End Create, Update, Delete *************************************************************************/

    getComputersDismantled() {
        const params = this.getPaginationParams(this.pageComputerDismantled, this.pageSizeComputerDismantled);
        this.computerService.getDismantled(params).subscribe((data: any) => {
            this.computersDismantledList = data.content;
            this.countComputerDismantled = data.totalElements;
        }, (error: HttpErrorResponse) => {
            this.errorMessage = error.error.message;
        });
    }

    dismantlingComputer(computer: Computer) {
        const id = computer.id;
        computer.dismantled = true;
        let dismantled = document.getElementById('dismantled');
        this.computerService.editById(id, computer)
            .toPromise()
            .then((response) => {
                this.notificationService.showNotification("top", "center", "S-a dezmembrat cu succes!", "success");
            })
            .then(() => {
                this.getComputersDismantled();
            })
            .catch((error: HttpErrorResponse) => {
                this.errorMessage = error.error.message;
            })
    }


    getSelectedOption(event: any) {

    }
}
