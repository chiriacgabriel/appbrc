import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ComputerComponent} from './computer.component';
import {ComputerRoutes} from './computer.routing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {NgSelectModule} from '@ng-select/ng-select';
import {JwBootstrapSwitchNg2Module} from 'jw-bootstrap-switch-ng2';
import {NgxPaginationModule} from 'ngx-pagination';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ComputerRoutes),
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    NgxPaginationModule,
    JwBootstrapSwitchNg2Module
  ],
  declarations: [
    ComputerComponent
  ]
})
export class ComputerModule { }
