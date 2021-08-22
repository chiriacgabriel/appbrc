import {Component, OnInit} from '@angular/core';
import {CompanyDataService} from '../../services/accounting/company-data.service';
import {HttpErrorResponse} from '@angular/common/http';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-company-data',
    templateUrl: './company-data.component.html',
    styleUrls: ['./company-data.component.css',
        '../../../assets/css/_table_format.css',
        '../../../assets/css/_tab_pane_custom.css']
})
export class CompanyDataComponent implements OnInit {

    errorMessage = '';
    validatingForm: FormGroup;

    constructor(private companyService: CompanyDataService,
                private formBuilder: FormBuilder) {
    }

    ngOnInit() {
        this.getCompanyData();
        this.companyForm();
    }

    companyForm() {
        this.validatingForm = this.formBuilder.group({
            id: new FormControl(''),
            name: new FormControl('', Validators.required),
            cif: new FormControl('', Validators.required),
            tradeRegister: new FormControl('', Validators.required),
            socialCapital: new FormControl('', Validators.required),
            county: new FormControl('', Validators.required),
            streetAddress: new FormControl('', Validators.required),
            city: new FormControl('', Validators.required),
            vatPayer: new FormControl('', Validators.required),
            bank: new FormControl('', Validators.required),
            iban: new FormControl('', Validators.required),
            phone: new FormControl('', Validators.required),
            fax: new FormControl('', Validators.required),
            email: new FormControl('', Validators.required),
            webAddress: new FormControl('', Validators.required),
            additionalData: new FormControl('', Validators.required)
        });
    }

    getCompanyData() {
        this.companyService.getAll().subscribe((data: any) => {
            this.validatingForm.patchValue(data);
            console.log(data);
        }, (error: HttpErrorResponse) => {
            this.errorMessage = error.error.message;
        });
    }


    onSubmit() {
        const id = this.validatingForm.get('id').value;

        this.companyService.editById(Number(id), this.validatingForm.value)
            .toPromise()
            .then((response) => {
                this.getCompanyData();
            }).catch((error: HttpErrorResponse) => {
                this.errorMessage = error.error.message;
        });
    }


}
