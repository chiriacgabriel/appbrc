import {NgModule} from '@angular/core';
import {CompanyDataComponent} from './company-data.component';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgSelectModule} from '@ng-select/ng-select';
import {NgxPaginationModule} from 'ngx-pagination';
import {JwBootstrapSwitchNg2Module} from 'jw-bootstrap-switch-ng2';
import {CompanyDataRoutes} from './company-data.routing';

@NgModule({
    declarations: [CompanyDataComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(CompanyDataRoutes),
        FormsModule,
        ReactiveFormsModule,
        NgSelectModule
    ]
})
export class CompanyDataModule {

}
