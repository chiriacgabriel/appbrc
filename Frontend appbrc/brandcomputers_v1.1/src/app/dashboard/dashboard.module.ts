import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule, DatePipe} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AgmCoreModule} from '@agm/core';
import {DashboardComponent} from './dashboard.component';

import {DashboardRoutes} from './dashboard.routing';
import {NgSelectModule} from '@ng-select/ng-select';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(DashboardRoutes),
        FormsModule,
        AgmCoreModule.forRoot({
            apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
        }),
        NgSelectModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    declarations: [DashboardComponent],
    providers: [DatePipe],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class DashboardModule {
}
