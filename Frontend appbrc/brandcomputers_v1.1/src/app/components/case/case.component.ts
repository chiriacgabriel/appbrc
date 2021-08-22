import {Component, DoCheck, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpErrorResponse, HttpParams} from '@angular/common/http';
import { GenerateProductCode } from 'app/model/components/GenerateProductCode';
import {CaseService} from '../../services/components/case.service';
import {TokenStorageService} from '../../services/token-storage.service';
import {ReloadPageService} from '../../services/reload-page.service';
import {ActivatedRoute, Router} from '@angular/router';
import {EnumService} from '../../helper/enum.service';
import {FilterService} from '../../helper/filter.service';
import {GenerateProductCodeService} from '../../services/components/generate-product-code.service';
import {Location} from '@angular/common';
import { EnumState } from 'app/model/enum/EnumState';
import { EnumCompatibleMotherboardPC } from 'app/model/enum/EnumCompatibleMotherboardPC';
import { EnumCompatibleMotherboardServer } from 'app/model/enum/EnumCompatibleMotherboardServer';
import { Case } from 'app/model/components/Case';
import Swal from 'sweetalert2';
import {NotificationService} from '../../helper/notification.service';


@Component({
    moduleId: module.id,
    selector: 'app-case',
    templateUrl: './case.component.html',
    styleUrls: ['./case.component.css',
        '../../../assets/css/_modal_filter.css',
        '../../../assets/css/_table_format.css',
        '../../../assets/css/_tab_pane_custom.css',
        '../../../assets/css/_fav_icons_custom.css',
        '../../../assets/css/_pagination_custom.css']
})
export class CaseComponent implements OnInit {

    @ViewChild('inputSearch') inputSearch: ElementRef;
    @ViewChild('inputSearchStock') inputSearchStock: ElementRef;

    id: number;
    selectedProductCode = new GenerateProductCode();
    getProductCode: string;

    caseList: Case[] = [];
    stateList: string[] = [];
    productCodesWithStock = [];
    caseListByProductCode = [];
    formatCaseList = ['PC', 'Server'];
    motherboardCompatibleList = [];
    compatibleMotherboardPcList: string[] = [];
    compatibleMotherboardServerList: string[] = [];
    productCodeList: GenerateProductCode[] = [];
    productCodeListInactive: GenerateProductCode[] = [];

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

    constructor(private formBuilder: FormBuilder,
                private caseService: CaseService,
                private tokenService: TokenStorageService,
                private reloadPageService: ReloadPageService,
                private activatedRoute: ActivatedRoute,
                private router: Router,
                private enumService: EnumService,
                private filterService: FilterService,
                private productCodeService: GenerateProductCodeService,
                private location: Location,
                private notificationService: NotificationService) {
    }

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
            generateProductCode: new FormControl({value: '', disabled: true}, Validators.required),
            productName: new FormControl('', Validators.required),
            manufacturer: new FormControl('', Validators.required),
            caseType: new FormControl('', Validators.required),
            compatibleMotherboard: new FormControl({value: '', disabled: true}, Validators.required),
            powerSourceIncluded: new FormControl('', Validators.required),
            sourcePower: new FormControl('', Validators.required),
            quantity: new FormControl('', Validators.required),
            unitOfMeasurement: new FormControl('', Validators.required),
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

            this.caseList = data.content.map(obj => new Case(obj));
            this.count = data.totalElements;
            if (this.query !== '') {
                this.caseList = [];
                for (let item of data.content.map(obj => new Case(obj))) {
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
            for (let item of data.content.map(obj => new Case(obj))){
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

        this.formFields.generateProductCode.enable();
        this.formFields.productName.disable();
        this.validatingForm.get('generateProductCode').setValue(this.selectedProductCode);

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

        this.formFields.generateProductCode.enable();
        this.formFields.productName.disable();
        this.validatingForm.get('generateProductCode').setValue(this.selectedProductCode);

        this.caseService.editById(this.id, this.validatingForm.value)
            .toPromise()
            .then((response) => {
                // this.getCaseSearchResult();
                this.router.navigate(['components/case']).then(() => this.reloadPageService.reload());

                document.querySelector('.modal-backdrop').remove();
                this.isAddMode = true;
            }).catch((error: HttpErrorResponse) => {
            this.errorMessage = error.error.message;
            document.getElementById('editCase-btn').setAttribute('data-backdrop', 'static');
        });
    }

    deleteCase(aCase: Case) {
        Swal.fire({
            title: 'Esti sigur?',
            text: "Inregistrarea va fi stearsa definitiv si produsele asociate!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Da, sterge!'
        }).then((willDelete) => {
            if (willDelete.isConfirmed){
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

    patchForm(aCase: any, param: any) {

        const productCodeInactive = this.productCodeListInactive
            .find(s => s.productCode === aCase.generateProductCode.productCode);

        const productCodeActive = this.productCodeList
            .find(s => s.productCode === aCase.generateProductCode.productCode);

        if (productCodeInactive !== undefined && productCodeInactive.state === false){
            this.productCodeService.inactiveProductCode(param, productCodeInactive);
            return null;
        }

        this.isAddMode = false;
        this.selectedProductCode = aCase.generateProductCode;
        this.validatingForm.patchValue(aCase);
        this.validatingForm.get('productName')
            .setValue(productCodeActive);

        this.router.navigate(['components/case'], {queryParams: {id: aCase.id}});
    }

    getAllGenerateProductCodes(): void {
        this.productCodeService.getAll(Case.generateProductURL).subscribe((data: any) =>{
            this.productCodeList = data.filter(productCode => productCode.state === true);
            this.productCodeListInactive = data.filter(productCode => productCode.state === false);
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
        this.reloadPageService.skipLocation('components/case');

    }

    clearSearch() {
        this.query = '';
        this.getCaseSearchResult();
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
