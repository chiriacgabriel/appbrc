import {Routes} from '@angular/router';
import {DocumentComponent} from './document.component';

export const DocumentDataRouting: Routes = [{
    path: '',
    children: [{
        path: 'documents',
        component: DocumentComponent,
    }]
}];
