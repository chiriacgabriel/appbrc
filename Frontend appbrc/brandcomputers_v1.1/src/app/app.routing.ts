import {Routes} from '@angular/router';

import {AdminLayoutComponent} from './layouts/admin/admin-layout.component';
import {AuthLayoutComponent} from './layouts/auth/auth-layout.component';
import {AuthGuard} from './helper/auth.guard';

export const AppRoutes: Routes = [{
    path: '',
    redirectTo: 'pages/login',
    pathMatch: 'full',
}, {
    path: '',
    component: AdminLayoutComponent,
    canActivate: [AuthGuard],
    children: [{
        path: '',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
    }, {
        path: 'components',
        loadChildren: () => import('./components/components.module').then(m => m.ComponentsModule)
    }, {
        path: 'forms',
        loadChildren: () => import('./forms/forms.module').then(m => m.Forms)
    }, {
        path: 'tables',
        loadChildren: () => import('./tables/tables.module').then(m => m.TablesModule)
    }, {
        path: 'maps',
        loadChildren: () => import('./maps/maps.module').then(m => m.MapsModule)
    }, {
        path: 'charts',
        loadChildren: () => import('./charts/charts.module').then(m => m.ChartsModule)
    }, {
        path: 'calendar',
        loadChildren: () => import('./calendar/calendar.module').then(m => m.CalendarModule)
    }, {
        path: '',
        loadChildren: () => import('./userpage/user.module').then(m => m.UserModule)
    }, {
        path: '',
        loadChildren: () => import('./timeline/timeline.module').then(m => m.TimelineModule)
    }, {
        path: '',
        loadChildren: () => import('./widgets/widgets.module').then(m => m.WidgetsModule)
    },
    {
        path: '',
        loadChildren: () => import('./computer/computer.module').then(m => m.ComputerModule)
    },
    {
        path: '',
        loadChildren: () => import('./unreceived/unreceived.module').then(m => m.UnreceivedModule)
    },
    {
        path: '',
        loadChildren: () => import('./accounting/company-data/company-data.module').then(m => m.CompanyDataModule)
    },
    {
        path: '',
        loadChildren: () => import('./accounting/provider/provider.module').then(m => m.ProviderModule)
    }
    ]
}, {
    path: '',
    component: AuthLayoutComponent,
    children: [{
        path: 'pages',
        loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)
    }]
}
];