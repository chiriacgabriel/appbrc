import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {UnreceivedRoutes} from './unreceived.routing';
import {UnreceivedComponent} from './unreceived.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgSelectModule} from '@ng-select/ng-select';
import {NgxPaginationModule} from 'ngx-pagination';
import {JwBootstrapSwitchNg2Module} from 'jw-bootstrap-switch-ng2';
import { NgbDatepickerModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(UnreceivedRoutes),
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    NgxPaginationModule,
    NgbDatepickerModule,
    JwBootstrapSwitchNg2Module
  ],
  declarations: [
      UnreceivedComponent
  ]
})
export class UnreceivedModule { }
