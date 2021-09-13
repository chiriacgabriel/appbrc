import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {PreloadAllModules, RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http';
import {APP_BASE_HREF} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {AppComponent} from './app.component';

import {SidebarModule} from './sidebar/sidebar.module';
import {FixedPluginModule} from './shared/fixedplugin/fixedplugin.module';
import {FooterModule} from './shared/footer/footer.module';
import {NavbarModule} from './shared/navbar/navbar.module';
import {AdminLayoutComponent} from './layouts/admin/admin-layout.component';
import {AuthLayoutComponent} from './layouts/auth/auth-layout.component';
import {AppRoutes} from './app.routing';
import {HttpClientModule} from '@angular/common/http';
import {authInterceptorProviders} from './helper/authorization.interceptor';
import {AuthGuard} from './helper/auth.guard';
import {LoadingBarHttpClientModule} from '@ngx-loading-bar/http-client';
import {LoadingBarModule} from '@ngx-loading-bar/core';
import { ComputerComponent } from './computer/computer.component';
import { UnreceivedComponent } from './unreceived/unreceived.component';
import { ProviderComponent } from './accounting/provider/provider.component';

@NgModule({
    imports: [
        BrowserAnimationsModule,
        FormsModule,
        RouterModule.forRoot(AppRoutes, {
            useHash: true,
            preloadingStrategy: PreloadAllModules,
            relativeLinkResolution: 'legacy'
        }),
        NgbModule,
        HttpClientModule,
        SidebarModule,
        NavbarModule,
        FooterModule,
        FixedPluginModule,
        LoadingBarHttpClientModule,
        LoadingBarModule
    ],
    declarations: [
        AppComponent,
        AdminLayoutComponent,
        AuthLayoutComponent
    ],
    providers: [authInterceptorProviders, AuthGuard],
    bootstrap: [AppComponent]
})

export class AppModule {
}
