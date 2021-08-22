import {Routes} from '@angular/router';
import {CompanyDataComponent} from './company-data.component';

export const CompanyDataRoutes: Routes = [{
    path: '',
    children: [{
        path: 'company-data',
        component: CompanyDataComponent
    }]
}];
