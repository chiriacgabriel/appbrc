import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {NgSelectModule} from '@ng-select/ng-select';
import {NgModule} from '@angular/core';
import {ReportsRoutes} from './reports.routing';
import {ReportsComponent} from './reports.component';

@NgModule({
    declarations: [ReportsComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(ReportsRoutes),
        FormsModule,
        ReactiveFormsModule,
        NgSelectModule
    ]
})
export class ReportsModule {

}
