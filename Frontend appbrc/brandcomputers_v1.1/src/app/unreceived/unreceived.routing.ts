import {Routes} from '@angular/router';
import {UnreceivedComponent} from './unreceived.component';

export const UnreceivedRoutes: Routes = [{

    path: '',
    children: [{
        path: 'unreceived',
        component: UnreceivedComponent
    }]
}];
