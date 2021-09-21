import {NgModule} from '@angular/core';
import {DocumentComponent} from './document.component';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgSelectModule} from '@ng-select/ng-select';
import {DocumentDataRouting} from './document-data.routing';

@NgModule(
    {
        declarations: [DocumentComponent],
        imports: [
            CommonModule,
            RouterModule.forChild(DocumentDataRouting),
            FormsModule,
            ReactiveFormsModule,
            NgSelectModule
        ]
    }
)

export class DocumentDataModule {

}
