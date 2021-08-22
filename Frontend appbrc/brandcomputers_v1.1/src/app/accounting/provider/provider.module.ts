import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {NgSelectModule} from '@ng-select/ng-select';
import {ProviderRoutes} from './provider.routing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ProviderComponent} from './provider.component';


@NgModule({
    declarations: [ProviderComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(ProviderRoutes),
        FormsModule,
        ReactiveFormsModule,
        NgSelectModule
    ]
})
export class ProviderModule {
}
