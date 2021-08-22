import { Routes} from '@angular/router';
import {ComputerComponent} from './computer.component';

export const ComputerRoutes: Routes = [{

    path: '',
    children: [ {
        path: 'computer',
        component: ComputerComponent
    }]
}];
