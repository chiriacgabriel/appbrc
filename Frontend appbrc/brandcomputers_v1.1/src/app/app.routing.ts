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
    },  {
        path: '',
        loadChildren: () => import('./timeline/timeline.module').then(m => m.TimelineModule)
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
    },
    {
        path: '',
        loadChildren: () => import('./accounting/document/document-data.module').then(m => m.DocumentDataModule)
    },
    {
        path: '',
        loadChildren: () => import('./accounting/reports/reports.module').then(m => m.ReportsModule)
    },
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
