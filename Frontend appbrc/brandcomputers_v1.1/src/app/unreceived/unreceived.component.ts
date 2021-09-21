import {Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {NirService} from '../services/accounting/nir.service';
import {HttpErrorResponse} from '@angular/common/http';
import {Case} from '../model/components/Case';
import {Motherboard} from '../model/components/Motherboard';
import {Processor} from '../model/components/Processor';
import {Storage} from '../model/components/Storage';
import {ProviderService} from '../services/accounting/provider.service';
import {TokenStorageService} from '../services/token-storage.service';

@Component({
    selector: 'app-unreceived',
    templateUrl: './unreceived.component.html',
    styleUrls: ['./unreceived.component.css',
        '../../assets/css/unreceived_nir.css',
        '../../assets/css/_tab_pane_custom.css',
        '../../assets/css/_table_format.css',
        '../../assets/css/_fav_icons_custom.css',
        '../../assets/css/_modal_filter.css']
})

export class UnreceivedComponent implements OnInit {

    @ViewChild('goUp') goUp: ElementRef;
    @ViewChildren('moduleTable') moduleTable: QueryList<ElementRef>;

    toggleForm: boolean = false;
    validatingProviderForm: FormGroup;
    validatingNirForm: FormGroup;
    providerList = [];
    errorMessage = '';
    isCIFPresent: boolean;
    unreceivedList = [];
    caseList = [];
    checkedList = [];

    constructor(private formBuilder: FormBuilder,
                private nirService: NirService,
                private providerService: ProviderService,
                private tokenService: TokenStorageService) {
    }

    ngOnInit(): void {

        this.providerForm();
        this.nirForm();
        this.generateNir();
        this.getProviders();
        this.getUnreceived();
    }

    /********************************************** Generate NIR ***********************************************/

    nirForm() {
        this.validatingNirForm = this.formBuilder.group({
            nirNumber: new FormControl('', Validators.required),
            date: new FormControl('', Validators.required),
            administration: new FormControl('', Validators.required),
            provider: new FormControl('', Validators.required),
            invoiceNumber: new FormControl('', Validators.required),
            caseList: new FormControl([]),
            cpuCoolerList: new FormControl([]),
            fanCaseList: new FormControl([]),
            memoryRamList: new FormControl([]),
            motherboardList: new FormControl([]),
            opticalUnitList: new FormControl([]),
            powerSourceList: new FormControl([]),
            processorList: new FormControl([]),
            soundCardList: new FormControl([]),
            storageList: new FormControl([]),
            videoCardList: new FormControl([]),
            computerList: new FormControl([]),
            debitAccount: new FormControl('', Validators.required),
            vat: new FormControl('', Validators.required),
            nameOfEmployee: new FormControl(this.tokenService.getUser().firstName + " " + this.tokenService.getUser().lastName)
        });
    }

    onSubmit() {
    let {year, month, day} = this.validatingNirForm.value.date;

    this.validatingNirForm.get('date').setValue(new Date(year, month, day));

        this.nirService.add(this.validatingNirForm.value)
            .toPromise()
            .then((response) => {
                this.getUnreceived();
            }).catch( (error: HttpErrorResponse) => {
                this.errorMessage = error.error.message;
        });
    }

    getUnreceived() {
        this.nirService.getAllUnreceived().subscribe((data: any) => {
            this.unreceivedList = data;

            let emptyUnreceivedList = document.getElementsByClassName('empty-unreceived-list')[0];
            let containerUnreceived = document.getElementsByClassName('container-unreceived')[0];
            let progressBar = document.getElementsByClassName('progress-bar')[0] as HTMLElement;
            if (this.unreceivedList.length == 0) {
                emptyUnreceivedList.classList.remove('d-none');
                containerUnreceived.classList.add('d-none');
                progressBar.classList.add('d-none');
            } else {
                emptyUnreceivedList.classList.add('d-none');
                containerUnreceived.classList.remove('d-none');
                progressBar.classList.remove('d-none');
            }
            this.generateNir();
        }, (error: HttpErrorResponse) => {
            this.errorMessage = error.error.message;
        });
    }

    generateNir() {

        let step = document.getElementsByClassName('step');
        let prevBtn = document.getElementById('prev-btn');
        let nextBtn = document.getElementById('next-btn');
        let submitBtn = document.getElementById('submit-btn');
        let form = document.getElementsByTagName('form')[0];
        let preloader = document.getElementById('preloader-wrapper');
        let bodyElement = document.querySelector('body');
        let successDiv = document.getElementById('success');

        form.onsubmit = () => {
            return false
        }
        let current_step = 0;
        let stepCount = 3
        step[current_step].classList.add('d-block');
        if (current_step == 0) {
            prevBtn.classList.add('d-none');
            submitBtn.classList.add('d-none');
            nextBtn.classList.add('d-inline-block');
        }

        const progress = (value) => {
            let progressBar = document.getElementsByClassName('progress-bar')[0] as HTMLElement;
            progressBar.style.width = `${value}%`;
        }

        nextBtn.addEventListener('click', () => {

            this.goUp.nativeElement.scrollIntoView();

            if (current_step == 0){
                for (let obj of this.checkedList){
                    this.setCheckListOnForm(obj);
                }
            }

            current_step++;
            let previous_step = current_step - 1;
            if ((current_step > 0) && (current_step <= stepCount)) {
                prevBtn.classList.remove('d-none');
                prevBtn.classList.add('d-inline-block');
                step[current_step].classList.remove('d-none');
                step[current_step].classList.add('d-block');
                step[previous_step].classList.remove('d-block');
                step[previous_step].classList.add('d-none');
                if (current_step == stepCount) {
                    submitBtn.classList.remove('d-none');
                    submitBtn.classList.add('d-inline-block');
                    nextBtn.classList.remove('d-inline-block');
                    nextBtn.classList.add('d-none');
                }
            } else {
                if (current_step > stepCount) {
                    form.onsubmit = () => {
                        return true
                    }
                }
            }
            progress((100 / stepCount) * current_step);
        });


        prevBtn.addEventListener('click', () => {
            if (current_step > 0) {
                current_step--;
                let previous_step = current_step + 1;
                prevBtn.classList.add('d-none');
                prevBtn.classList.add('d-inline-block');
                step[current_step].classList.remove('d-none');
                step[current_step].classList.add('d-block')
                step[previous_step].classList.remove('d-block');
                step[previous_step].classList.add('d-none');
                if (current_step < stepCount) {
                    submitBtn.classList.remove('d-inline-block');
                    submitBtn.classList.add('d-none');
                    nextBtn.classList.remove('d-none');
                    nextBtn.classList.add('d-inline-block');
                    prevBtn.classList.remove('d-none');
                    prevBtn.classList.add('d-inline-block');
                }
            }

            if (current_step == 0) {
                prevBtn.classList.remove('d-inline-block');
                prevBtn.classList.add('d-none');
            }
            progress((100 / stepCount) * current_step);
        });

    }

    noForm() {
        this.toggleForm = false;
    }

    yesForm() {
        this.toggleForm = true;
    }

    selectProduct(unreceived: any, event: any) {
        if (event.target.checked == true){
            this.checkedList.push(unreceived);
            console.log(unreceived);
            console.log(this.checkedList);
        }else {
            for (let i = 0; i < this.checkedList.length; i++){
                if (this.checkedList[i].id == unreceived.id && this.checkedList[i].category == unreceived.category){
                    this.checkedList.splice(i, 1);
                }
            }
        }
    }

    private reOccurance(category, formProperty) {
        this.validatingNirForm.get(formProperty).setValue(this.checkedList.filter(obj => obj.category == category));
    }

    setCheckListOnForm(unreceived) {
        let category = unreceived.category;
        switch (category){
            case 'Case':
                this.reOccurance(category, 'caseList');
                break;
            case 'CPU Cooler':
                this.reOccurance(category, 'cpuCoolerList');
                break;
            case 'Fan Case':
                this.reOccurance(category, 'fanCaseList');
                break;
            case 'Memory RAM':
                this.reOccurance(category, 'memoryRamList');
                break;
            case 'Motherboard':
                this.reOccurance(category, 'motherboardList');
                break;
            case 'Optical Unit':
                this.reOccurance(category, 'opticalUnitList');
                break;
            case 'Power Source':
                this.reOccurance(category, 'powerSourceList');
                break;
            case 'Processor':
                this.reOccurance(category, 'processorList');
                break;
            case 'Sound Card':
                this.reOccurance(category, 'soundCardList');
                break;
            case 'Storage':
                this.reOccurance(category, 'storageList');
                break;
            case 'Video Card':
                this.reOccurance(category, 'videoCardList');
                break;
            case 'Computer':
                this.reOccurance(category, 'computerList');
                break;
        }
    }

    checkUncheckAll(event) {
        if (event.target.checked){
            for (let item in this.unreceivedList){
                this.unreceivedList[item].selected = event.target.checked;
                this.checkedList.push(this.unreceivedList[item]);
            }
        }else {
            for (let item in this.unreceivedList){
                this.unreceivedList[item].selected = event.target.checked;
                this.checkedList = [];
            }
        }
    }


    /************************************* Provider Form, Add Provider, Get all Provider ***************************************/

    providerForm() {
        this.validatingProviderForm = this.formBuilder.group({
            name: new FormControl('', Validators.required),
            cif: new FormControl('', Validators.required),
            tradeRegister: new FormControl('', Validators.required),
            providerCode: new FormControl('', Validators.required),
            vatPayer: new FormControl('', Validators.required),
            streetAddress: new FormControl('', Validators.required),
            city: new FormControl('', Validators.required),
            county: new FormControl('', Validators.required),
            country: new FormControl('', Validators.required),
            iban: new FormControl(''),
            bank: new FormControl(''),
            email: new FormControl(''),
            personOfContact: new FormControl(''),
            phoneNumber: new FormControl('')
        });
    }

    getProviders() {
        this.providerService.getAll().subscribe((data: any) => {
            this.providerList = data;
        }, (error: HttpErrorResponse) => {
            this.errorMessage = error.error.message;
        });
    }

    onSubmitProvider() {
        if (this.validatingProviderForm.invalid) {
            return
        }

        if (this.toggleForm) {
            this.addProvider();
        }

    }

    private addProvider(): void {
        this.providerService.add(this.validatingProviderForm.value)
            .toPromise()
            .then((response) => {
                this.isCIFPresent = false;
                this.toggleForm = false;
                this.validatingProviderForm.reset();
                this.getProviders();
            }).catch((error: HttpErrorResponse) => {
            this.isCIFPresent = true;
            this.toggleForm = true;
            this.errorMessage = error.error.message;
        });
    }

    /************************************* End Provider Form, Add Provider ***************************************/

}
