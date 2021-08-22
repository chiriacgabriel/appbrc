import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ProviderService} from '../../services/accounting/provider.service';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpErrorResponse} from '@angular/common/http';
import Swal from 'sweetalert2';
import {Provider} from '../../model/accounting/Provider';
import {ReloadPageService} from '../../services/reload-page.service';

@Component({
    selector: 'app-provider',
    templateUrl: './provider.component.html',
    styleUrls: ['./provider.component.css',
        '../../../assets/css/_modal_filter.css',
        '../../../assets/css/_table_format.css',
        '../../../assets/css/_tab_pane_custom.css',
        '../../../assets/css/_fav_icons_custom.css',
        '../../../assets/css/_pagination_custom.css']
})
export class ProviderComponent implements OnInit {
    id: number;
    providerList = [];
    copyProviderList = [];
    isAddMode: any;
    validatingForm: FormGroup;
    isCIFPresent: boolean;
    errorMessage = '';
    constructor(private providerService: ProviderService,
                private formBuilder: FormBuilder,
                private activatedRoute: ActivatedRoute,
                private router: Router,
                private reloadPageService: ReloadPageService) {
    }
    get formFields() {
        return this.validatingForm.controls;
    }
    ngOnInit(): void {
        this.getRouting();
        this.providerForm();
        this.getProviders();
    }
    providerForm() {
        this.validatingForm = this.formBuilder.group({
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
    /************************************* All Providers *******************************************************************/
    getProviders() {
        this.providerService.getAll().subscribe((data: any) => {
            this.providerList = data;
            this.copyProviderList = data;
        }, (error: HttpErrorResponse) => {
            this.errorMessage = error.error.message;
        });
    }
    getEventSearchResult(event) {
        const search = event.target.value;
        this.providerList = this.copyProviderList;
        this.providerList = this.providerList.filter(provider => provider.name
                                                                .toLowerCase()
                                                                .includes(search.toLowerCase()) ||
                                                                provider.cif
                                                                .toLowerCase()
                                                                .includes(search.toLowerCase));

    }

    /************************************* End All Providers *******************************************************************/
    /************************************ General Functions ****************************************************/
    closeModal() {
        this.isAddMode = true;
        this.validatingForm.reset();
        this.reloadPageService.skipLocation('providers');
        if (this.isCIFPresent) {
            this.isCIFPresent = false;
            this.errorMessage = '';
        }
    }
    clearSearch() {
        this.reloadPageService.reload();
    }
    /************************************ End General Functions *************************************************/
    /************************** Create, Update, Delete, Submit, Patch Form ****************************************************/
    private addProvider(): void {
        this.providerService.add(this.validatingForm.value)
            .toPromise()
            .then((response) => {
                this.reloadPageService.reload();
                this.isCIFPresent = false;
                document.querySelector('.modal-backdrop').remove();
            }).catch((error: HttpErrorResponse) => {
            this.isCIFPresent = true;
            this.errorMessage = error.error.message;
            document.getElementById('addProvider-btn').setAttribute('data-backdrop', 'static');
        });
    }
    private editProvider(): void {
        this.providerService.editById(this.id, this.validatingForm.value)
            .toPromise()
            .then((response) => {
                this.router.navigate(['providers']).then(() => this.reloadPageService.reload());
                this.isAddMode = true;
                this.isCIFPresent = false;
                document.querySelector('.modal-backdrop').remove();
            }).catch((error: HttpErrorResponse) => {
            this.isCIFPresent = true;
            this.errorMessage = error.error.message;
            document.getElementById('editProvider-btn').setAttribute('data-backdrop', 'static');
        })
    }
    deleteProvider(provider: Provider) {
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
                this.providerService.deleteById(Number(provider.id)).subscribe(response => {
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
            this.addProvider();
        } else {
            this.editProvider();
        }
    }
    patchForm(provider: any) {
        this.isAddMode = false;
        this.validatingForm.patchValue(provider);
        this.router.navigate(['providers'], {queryParams: {id: provider.id}});
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
    /***********************End Create, Update, Delete *************************************************************************/

}
