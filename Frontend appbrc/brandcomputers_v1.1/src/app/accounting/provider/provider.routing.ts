import {Routes} from '@angular/router';
import {ProviderComponent} from './provider.component';

export const ProviderRoutes: Routes = [{
    path: '',
    children: [{
        path: 'providers',
        component: ProviderComponent
    }]
}];
