import {HttpErrorResponse, HttpParams} from '@angular/common/http';
import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {EnumService} from 'app/helper/enum.service';
import {FilterService} from 'app/helper/filter.service';
import {EnumState} from 'app/model/enum/EnumState';
import {SoundCard} from 'app/model/components/SoundCard';
import {GenerateProductCodeService} from 'app/services/components/generate-product-code.service';
import {SoundCardService} from 'app/services/components/sound-card.service';
import {ReloadPageService} from 'app/services/reload-page.service';
import {TokenStorageService} from 'app/services/token-storage.service';
import Swal from 'sweetalert2';

import {Location} from '@angular/common';
import { GenerateProductCode } from 'app/model/components/GenerateProductCode';

@Component({
    selector: 'app-sound-card',
    templateUrl: './sound-card.component.html',
    styleUrls: ['./sound-card.component.css',
        '../../../assets/css/_modal_filter.css',
        '../../../assets/css/_table_format.css',
        '../../../assets/css/_tab_pane_custom.css',
        '../../../assets/css/_fav_icons_custom.css',
        '../../../assets/css/_pagination_custom.css']
})
export class SoundCardComponent implements OnInit {

    @ViewChild('inputSearch') inputSearch: ElementRef;
    @ViewChild('inputSearchStock') inputSearchStock: ElementRef;
    @ViewChild('closeAddEditModal') closeAddEditModal;
    @ViewChild('productCode') htmlElementProductCode: ElementRef;

    id: number;
    selectedProductCode = new GenerateProductCode();
    getProductCode: string;
    query = '';
    errorMessage = '';

    soundCardList = [];
    modelList = [];
    manufacturersList = [];
    stateList: string[] = [];
    productCodesWithStock = [];
    soundCardListByProductCode = [];
    productCodesList: GenerateProductCode[] = [];
    productCodesListInactive: GenerateProductCode[] = [];

    pageSizeSoundCard = 10;
    pageSoundCard = 1;
    count: any;

    pageSizeProductCodeWithStock = 10;
    pageProductCodeWithStock = 1;
    countProductCodeWithStock: any;

    pageSizeSoundCardByProductCode = 10;
    pageSoundCardByProductCode = 1;
    countSoundCardByProductCode: any;

    isAddMode: boolean;
    isTableProductCodeSelected = true;
    isSearchProductCodesWithStock = false;
    isFiltered: boolean = false;
    isSerialNumberPresent = false;

    validatingForm: FormGroup;

    params = new HttpParams();

    constructor(private soundCardService: SoundCardService,
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
        this.soundCardForm();
        this.getAllGenerateProductCodes();
        this.getSoundCardSearchResult();
        this.getAllModels();
        this.getAllManufacturers();
        this.getAllProductCodesWithStock();
    }

    get formFields() {
        return this.validatingForm.controls;
    }

    soundCardForm() {
        this.validatingForm = this.formBuilder.group({
            generateProductCode: new FormControl({value: '', disabled: true}, Validators.required),
            productName: new FormControl('', Validators.required),
            serialNumber: new FormControl('', Validators.required),
            manufacturer: new FormControl('', Validators.required),
            model: new FormControl('', Validators.required),
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
    getSoundCardSearchResult() {
        const params = this.getPaginationParams(this.pageSoundCard, this.pageSizeSoundCard);
        this.soundCardService.getSearchResult(this.query, params).subscribe((data: any) => {
            this.soundCardList = data.content;
            this.count = data.totalElements;

            if (this.query !== '') {
                this.soundCardList = [];

                for (let item of data.content) {
                    this.soundCardList.push(item);
                }

                this.count = data.totalElements;
                this.inputSearch.nativeElement.value = '';

            }
        }, (error: HttpErrorResponse) => {
            this.errorMessage = error.error.message;
        });
    }

    getSoundCardFilterResults(): void {
        let pageParams = this.getPaginationParams(this.pageSoundCard, this.pageSizeSoundCard);
        this.soundCardService.getFilter(this.params, pageParams).subscribe((data: any) => {

            this.count = data.totalElements;
            this.soundCardList = [];
            for (const item of data.content) {
                this.soundCardList.push(item);
            }

            this.query = '';
        }, (error: HttpErrorResponse) => {
            this.errorMessage = error.error.message;
        });
    }

    getAllModels() {
        this.soundCardService.getModels().subscribe((data: any) => {
            this.modelList = data;
        }, (error: HttpErrorResponse) => {
            this.errorMessage = error.error.message;
        });
    }

    getAllManufacturers() {
        this.soundCardService.getManufacturers().subscribe((data: any) => {
            this.manufacturersList = data;
        }, (error: HttpErrorResponse) => {
            this.errorMessage = error.error.message;
        });
    }

    getEventSearchResult(event) {
        this.isFiltered = false;
        this.query = event.target.value;
        this.getSoundCardSearchResult();
    }

    handlePageChangeSearchAndFilter(event) {
        this.pageSoundCard = event;

        if (this.isFiltered) {
            this.getSoundCardFilterResults();
        } else {
            this.getSoundCardSearchResult();
        }
    }

    handlePageSizeChangeSearchAndFilter(event) {
        this.pageSizeSoundCard = event.target.value;
        this.pageSoundCard = 1;

        if (this.isFiltered) {
            this.getSoundCardFilterResults();
        } else {
            this.getSoundCardSearchResult();
        }
    }

    getRequestParamsForFilter(event) {
        this.isFiltered = true;
        if (event.target.checked) {
            this.params = this.filterService.setParamsFilter(event);
            this.getSoundCardFilterResults();
        }

        if (!event.target.checked) {
            this.params = this.filterService.deleteFilter(event);
            this.getSoundCardFilterResults();
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
        this.soundCardService.getAllProductCodesWithStock(params).subscribe((data: any) => {
            this.productCodesWithStock = data.content;
            this.countProductCodeWithStock = data.totalElements;
        }, (error: HttpErrorResponse) => {
            this.errorMessage = error.error.message;
        });
    }

    getAllSearchProductCodesWithStock(): void {
        const pageParams = this.getPaginationParams(this.pageProductCodeWithStock, this.pageSizeProductCodeWithStock);
        this.soundCardService.getAllSearchProductCodesWithStock(this.params, pageParams).subscribe((data: any) => {

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

    getSoundCardByProductCode(productCode: any) {
        this.toggleProductCodeTable();
        this.getProductCode = productCode;
        const params = this.getPaginationParams(this.pageSoundCardByProductCode, this.pageSizeSoundCardByProductCode);
        this.soundCardService.getByProductCode(productCode, params).subscribe((data: any) => {
            this.soundCardListByProductCode = data.content;
            this.countSoundCardByProductCode = data.totalElements;
        }, (error: HttpErrorResponse) => {
            this.errorMessage = error.error.message;
        });
    }

    clearSearchProductCodesWithStock() {
        this.query = '';
        this.getAllProductCodesWithStock();
    }

    handlePageSizeChangeSoundCardByProductCode(event) {
        this.pageSizeSoundCardByProductCode = event.target.value;
        this.pageSoundCardByProductCode = 1;

        this.getSoundCardByProductCode(this.getProductCode);
        this.toggleProductCodeTable();
    }

    handlePageChangeSoundCardByProductCode(event) {
        this.pageSoundCardByProductCode = event;
        this.getSoundCardByProductCode(this.getProductCode);
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
        this.getSoundCardSearchResult();
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

    private addSoundCard(): void {
        this.validatingForm.get('createdBy').setValue(this.tokenService.getUser().firstName + ' ' + this.tokenService.getUser().lastName);

        this.formFields.generateProductCode.enable();
        this.formFields.productName.disable();
        this.validatingForm.get('generateProductCode').setValue(this.selectedProductCode);

        this.soundCardService.add(this.validatingForm.value)
            .toPromise()
            .then((response) => {

                this.getSoundCardSearchResult();
                this.getAllProductCodesWithStock();
                this.formFields.generateProductCode.disable();
                this.formFields.productName.enable();
                this.closeAddEditModal.nativeElement.click();
                this.isSerialNumberPresent = false;


            }).catch((error: HttpErrorResponse) => {

            this.isSerialNumberPresent = true;
            this.errorMessage = error.error.message;
            document.getElementById('addSoundCard-btn').setAttribute('data-backdrop', 'static');
        });
    }

    private editSoundCard(): void {
        this.validatingForm.get('updatedBy').setValue(this.tokenService.getUser().firstName + ' ' + this.tokenService.getUser().lastName);

        this.formFields.generateProductCode.enable();
        this.formFields.productName.disable();
        this.validatingForm.get('generateProductCode').setValue(this.selectedProductCode);

        this.soundCardService.editById(this.id, this.validatingForm.value)
            .toPromise()
            .then((response) => {

                this.closeAddEditModal.nativeElement.click();
                this.formFields.generateProductCode.disable();
                this.formFields.productName.enable();
                this.isAddMode = true;
                this.isSerialNumberPresent = false;
                this.getSoundCardSearchResult();
                this.getAllProductCodesWithStock();
                this.router.navigate([], {});

            }).catch((error: HttpErrorResponse) => {

            this.isSerialNumberPresent = true;
            this.errorMessage = error.error.message;
            document.getElementById('editSoundCard-btn').setAttribute('data-backdrop', 'static');
        });
    }

    deleteSoundCard(soundCard: SoundCard) {
        Swal.fire({
            title: 'Esti sigur?',
            text: 'Inregistrarea va fi stearsa definitiv si produsele asociate!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Da, sterge!'
        })
            .then((willDelete) => {
                if (willDelete.isConfirmed) {
                    this.soundCardService.deleteById(Number(soundCard.id)).subscribe(response => {
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
            this.addSoundCard();
        } else {
            this.editSoundCard();
        }
    }

    patchForm(soundCard: any, param: any) {
        this.isAddMode = false;

        const productCodeInactive = this.productCodesListInactive
            .find(s => s.productCode === soundCard.generateProductCode.productCode);
        const productCodeActive = this.productCodesList
            .find(s => s.productCode === soundCard.generateProductCode.productCode);

        if (productCodeInactive !== undefined && productCodeInactive.state === false) {
            this.productCodeService.inactiveProductCode(param, productCodeInactive);
            return;
        }

        this.selectedProductCode = soundCard.generateProductCode;
        this.validatingForm.patchValue(soundCard);
        this.validatingForm.get('productName')
            .setValue(productCodeActive);

        this.router.navigate(['components/sound-card'], {queryParams: {id: soundCard.id}});
    }

    getAllGenerateProductCodes(): void {
        this.productCodeService.getAllByCategory(GenerateProductCode.productCodeURI, 'sound-card').subscribe((data: any) => {
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

        this.htmlElementProductCode.nativeElement.value = event.productCode;
        this.selectedProductCode = event;

    }

    /***********************End Create, Update, Delete ****************************************************/

}
