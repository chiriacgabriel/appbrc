(self["webpackChunkpaper_dashboard_pro_angular"] = self["webpackChunkpaper_dashboard_pro_angular"] || []).push([["main"],{

/***/ 98255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ (function(module) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 98255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": function() { return /* binding */ AppComponent; }
/* harmony export */ });
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./app.component.html */ 91106);
/* harmony import */ var _app_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.css */ 61249);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
            selector: 'app-root',
            template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
            styles: [_app_component_css__WEBPACK_IMPORTED_MODULE_1__.default]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": function() { return /* binding */ AppModule; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ 75835);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 12664);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _sidebar_sidebar_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sidebar/sidebar.module */ 65106);
/* harmony import */ var _shared_fixedplugin_fixedplugin_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/fixedplugin/fixedplugin.module */ 5926);
/* harmony import */ var _shared_footer_footer_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/footer/footer.module */ 36685);
/* harmony import */ var _shared_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/navbar/navbar.module */ 44755);
/* harmony import */ var _layouts_admin_admin_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layouts/admin/admin-layout.component */ 76658);
/* harmony import */ var _layouts_auth_auth_layout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layouts/auth/auth-layout.component */ 7231);
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.routing */ 76738);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _helper_authorization_interceptor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./helper/authorization.interceptor */ 93371);
/* harmony import */ var _helper_auth_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./helper/auth.guard */ 37560);
/* harmony import */ var _ngx_loading_bar_http_client__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngx-loading-bar/http-client */ 45406);
/* harmony import */ var _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ngx-loading-bar/core */ 12252);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.NgModule)({
            imports: [
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__.BrowserAnimationsModule,
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule,
                _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule.forRoot(_app_routing__WEBPACK_IMPORTED_MODULE_7__.AppRoutes, {
                    useHash: true,
                    preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_13__.PreloadAllModules,
                    relativeLinkResolution: 'legacy'
                }),
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__.NgbModule,
                _angular_common_http__WEBPACK_IMPORTED_MODULE_15__.HttpClientModule,
                _sidebar_sidebar_module__WEBPACK_IMPORTED_MODULE_1__.SidebarModule,
                _shared_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_4__.NavbarModule,
                _shared_footer_footer_module__WEBPACK_IMPORTED_MODULE_3__.FooterModule,
                _shared_fixedplugin_fixedplugin_module__WEBPACK_IMPORTED_MODULE_2__.FixedPluginModule,
                _ngx_loading_bar_http_client__WEBPACK_IMPORTED_MODULE_16__.LoadingBarHttpClientModule,
                _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_17__.LoadingBarModule
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent,
                _layouts_admin_admin_layout_component__WEBPACK_IMPORTED_MODULE_5__.AdminLayoutComponent,
                _layouts_auth_auth_layout_component__WEBPACK_IMPORTED_MODULE_6__.AuthLayoutComponent
            ],
            providers: [_helper_authorization_interceptor__WEBPACK_IMPORTED_MODULE_8__.authInterceptorProviders, _helper_auth_guard__WEBPACK_IMPORTED_MODULE_9__.AuthGuard],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ 76738:
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutes": function() { return /* binding */ AppRoutes; }
/* harmony export */ });
/* harmony import */ var _layouts_admin_admin_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layouts/admin/admin-layout.component */ 76658);
/* harmony import */ var _layouts_auth_auth_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layouts/auth/auth-layout.component */ 7231);
/* harmony import */ var _helper_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helper/auth.guard */ 37560);



var AppRoutes = [{
        path: '',
        redirectTo: 'pages/login',
        pathMatch: 'full',
    }, {
        path: '',
        component: _layouts_admin_admin_layout_component__WEBPACK_IMPORTED_MODULE_0__.AdminLayoutComponent,
        canActivate: [_helper_auth_guard__WEBPACK_IMPORTED_MODULE_2__.AuthGuard],
        children: [{
                path: '',
                loadChildren: function () { return Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_chart_js_dist_Chart_js"), __webpack_require__.e("src_app_dashboard_dashboard_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./dashboard/dashboard.module */ 34814)).then(function (m) { return m.DashboardModule; }); }
            }, {
                path: 'components',
                loadChildren: function () { return Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ng-select_ng-select___ivy_ngcc___fesm2015_ng-select-ng-select_js-src_ass-528309"), __webpack_require__.e("default-node_modules_sweetalert2_dist_sweetalert2_all_js"), __webpack_require__.e("default-node_modules_jw-bootstrap-switch-ng2___ivy_ngcc___fesm2015_jw-bootstrap-switch-ng2_js"), __webpack_require__.e("default-node_modules_ngx-pagination___ivy_ngcc___dist_ngx-pagination_js-src_assets_css__fav_i-0d5897"), __webpack_require__.e("default-src_app_helper_enum_service_ts-src_app_helper_filter_service_ts-src_app_model_compone-ff564b"), __webpack_require__.e("src_app_components_components_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./components/components.module */ 45642)).then(function (m) { return m.ComponentsModule; }); }
            }, {
                path: 'forms',
                loadChildren: function () { return Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_jw-bootstrap-switch-ng2___ivy_ngcc___fesm2015_jw-bootstrap-switch-ng2_js"), __webpack_require__.e("src_app_forms_forms_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./forms/forms.module */ 71366)).then(function (m) { return m.Forms; }); }
            }, {
                path: 'tables',
                loadChildren: function () { return __webpack_require__.e(/*! import() */ "src_app_tables_tables_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./tables/tables.module */ 81439)).then(function (m) { return m.TablesModule; }); }
            }, {
                path: 'maps',
                loadChildren: function () { return __webpack_require__.e(/*! import() */ "src_app_maps_maps_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./maps/maps.module */ 83842)).then(function (m) { return m.MapsModule; }); }
            }, {
                path: 'charts',
                loadChildren: function () { return Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_chart_js_dist_Chart_js"), __webpack_require__.e("src_app_charts_charts_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./charts/charts.module */ 55108)).then(function (m) { return m.ChartsModule; }); }
            }, {
                path: 'calendar',
                loadChildren: function () { return Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_sweetalert2_dist_sweetalert2_all_js"), __webpack_require__.e("src_app_calendar_calendar_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./calendar/calendar.module */ 979)).then(function (m) { return m.CalendarModule; }); }
            }, {
                path: '',
                loadChildren: function () { return __webpack_require__.e(/*! import() */ "src_app_userpage_user_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./userpage/user.module */ 18272)).then(function (m) { return m.UserModule; }); }
            }, {
                path: '',
                loadChildren: function () { return __webpack_require__.e(/*! import() */ "src_app_timeline_timeline_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./timeline/timeline.module */ 6159)).then(function (m) { return m.TimelineModule; }); }
            }, {
                path: '',
                loadChildren: function () { return __webpack_require__.e(/*! import() */ "src_app_widgets_widgets_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./widgets/widgets.module */ 50546)).then(function (m) { return m.WidgetsModule; }); }
            },
            {
                path: '',
                loadChildren: function () { return Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ng-select_ng-select___ivy_ngcc___fesm2015_ng-select-ng-select_js-src_ass-528309"), __webpack_require__.e("default-node_modules_sweetalert2_dist_sweetalert2_all_js"), __webpack_require__.e("default-node_modules_jw-bootstrap-switch-ng2___ivy_ngcc___fesm2015_jw-bootstrap-switch-ng2_js"), __webpack_require__.e("default-node_modules_ngx-pagination___ivy_ngcc___dist_ngx-pagination_js-src_assets_css__fav_i-0d5897"), __webpack_require__.e("default-src_app_helper_enum_service_ts-src_app_helper_filter_service_ts-src_app_model_compone-ff564b"), __webpack_require__.e("src_app_computer_computer_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./computer/computer.module */ 2218)).then(function (m) { return m.ComputerModule; }); }
            },
            {
                path: '',
                loadChildren: function () { return Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ng-select_ng-select___ivy_ngcc___fesm2015_ng-select-ng-select_js-src_ass-528309"), __webpack_require__.e("default-node_modules_jw-bootstrap-switch-ng2___ivy_ngcc___fesm2015_jw-bootstrap-switch-ng2_js"), __webpack_require__.e("default-node_modules_ngx-pagination___ivy_ngcc___dist_ngx-pagination_js-src_assets_css__fav_i-0d5897"), __webpack_require__.e("common"), __webpack_require__.e("src_app_unreceived_unreceived_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./unreceived/unreceived.module */ 61109)).then(function (m) { return m.UnreceivedModule; }); }
            },
            {
                path: '',
                loadChildren: function () { return Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ng-select_ng-select___ivy_ngcc___fesm2015_ng-select-ng-select_js-src_ass-528309"), __webpack_require__.e("common"), __webpack_require__.e("src_app_accounting_company-data_company-data_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./accounting/company-data/company-data.module */ 85105)).then(function (m) { return m.CompanyDataModule; }); }
            },
            {
                path: '',
                loadChildren: function () { return Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ng-select_ng-select___ivy_ngcc___fesm2015_ng-select-ng-select_js-src_ass-528309"), __webpack_require__.e("default-node_modules_sweetalert2_dist_sweetalert2_all_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_accounting_provider_provider_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./accounting/provider/provider.module */ 93984)).then(function (m) { return m.ProviderModule; }); }
            },
            {
                path: '',
                loadChildren: function () { return Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ng-select_ng-select___ivy_ngcc___fesm2015_ng-select-ng-select_js-src_ass-528309"), __webpack_require__.e("common"), __webpack_require__.e("src_app_accounting_document_document-data_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./accounting/document/document-data.module */ 20691)).then(function (m) { return m.DocumentDataModule; }); }
            },
        ]
    }, {
        path: '',
        component: _layouts_auth_auth_layout_component__WEBPACK_IMPORTED_MODULE_1__.AuthLayoutComponent,
        children: [{
                path: 'pages',
                loadChildren: function () { return __webpack_require__.e(/*! import() */ "src_app_pages_pages_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/pages.module */ 18950)).then(function (m) { return m.PagesModule; }); }
            }]
    }
];


/***/ }),

/***/ 37560:
/*!**************************************!*\
  !*** ./src/app/helper/auth.guard.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": function() { return /* binding */ AuthGuard; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _services_token_storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/token-storage.service */ 11573);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(tokenStorage, router) {
        this.tokenStorage = tokenStorage;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (this.tokenStorage.getToken() !== null) {
            return true;
        }
        else {
            this.router.navigate(['/pages/login'], { queryParams: { returnUrl: route.url } }).then();
        }
    };
    AuthGuard.ctorParameters = function () { return [
        { type: _services_token_storage_service__WEBPACK_IMPORTED_MODULE_0__.TokenStorageService },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__.Router }
    ]; };
    AuthGuard = __decorate([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
            providedIn: 'root'
        })
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ 93371:
/*!*****************************************************!*\
  !*** ./src/app/helper/authorization.interceptor.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthorizationInterceptor": function() { return /* binding */ AuthorizationInterceptor; },
/* harmony export */   "authInterceptorProviders": function() { return /* binding */ authInterceptorProviders; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _services_token_storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/token-storage.service */ 11573);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TOKEN_HEADER_KEY = 'Authorization';
var AuthorizationInterceptor = /** @class */ (function () {
    function AuthorizationInterceptor(token) {
        this.token = token;
    }
    AuthorizationInterceptor.prototype.intercept = function (request, next) {
        var authorization = request;
        var token = this.token.getToken();
        if (token != null) {
            authorization = request.clone({ headers: request.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + token) });
        }
        return next.handle(authorization);
    };
    AuthorizationInterceptor.ctorParameters = function () { return [
        { type: _services_token_storage_service__WEBPACK_IMPORTED_MODULE_0__.TokenStorageService }
    ]; };
    AuthorizationInterceptor = __decorate([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)()
    ], AuthorizationInterceptor);
    return AuthorizationInterceptor;
}());

var authInterceptorProviders = [
    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HTTP_INTERCEPTORS, useClass: AuthorizationInterceptor, multi: true }
];


/***/ }),

/***/ 76658:
/*!*********************************************************!*\
  !*** ./src/app/layouts/admin/admin-layout.component.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminLayoutComponent": function() { return /* binding */ AdminLayoutComponent; }
/* harmony export */ });
/* harmony import */ var _raw_loader_admin_layout_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./admin-layout.component.html */ 61645);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/add/operator/filter */ 37125);
/* harmony import */ var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/navbar/navbar.component */ 54696);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! perfect-scrollbar */ 10821);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AdminLayoutComponent = /** @class */ (function () {
    function AdminLayoutComponent(router, location) {
        this.router = router;
        this.yScrollStack = [];
        this.location = location;
    }
    AdminLayoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        var elemMainPanel = document.querySelector('.main-panel');
        var elemSidebar = document.querySelector('.sidebar .sidebar-wrapper');
        this.location.subscribe(function (ev) {
            _this.lastPoppedUrl = ev.url;
        });
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__.NavigationStart) {
                if (event.url != _this.lastPoppedUrl) {
                    _this.yScrollStack.push(window.scrollY);
                }
            }
            else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__.NavigationEnd) {
                if (event.url == _this.lastPoppedUrl) {
                    _this.lastPoppedUrl = undefined;
                    window.scrollTo(0, _this.yScrollStack.pop());
                }
                else {
                    window.scrollTo(0, 0);
                }
            }
        });
        this._router = this.router.events.filter(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__.NavigationEnd; }).subscribe(function (event) {
            elemMainPanel.scrollTop = 0;
            elemSidebar.scrollTop = 0;
        });
        var html = document.getElementsByTagName('html')[0];
        if (window.matchMedia("(min-width: 960px)").matches && !this.isMac()) {
            var ps = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__.default(elemMainPanel);
            ps = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__.default(elemSidebar);
            html.classList.add('perfect-scrollbar-on');
        }
        else {
            html.classList.add('perfect-scrollbar-off');
        }
        this._router = this.router.events.filter(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__.NavigationEnd; }).subscribe(function (event) {
            _this.navbar.sidebarClose();
        });
    };
    AdminLayoutComponent.prototype.isMap = function () {
        // console.log(this.location.prepareExternalUrl(this.location.path()));
        if (this.location.prepareExternalUrl(this.location.path()) == '#/maps/fullscreen') {
            return true;
        }
        else {
            return false;
        }
    };
    AdminLayoutComponent.prototype.isMac = function () {
        var bool = false;
        if (navigator.platform.toUpperCase().indexOf('MAC') >= 0 || navigator.platform.toUpperCase().indexOf('IPAD') >= 0) {
            bool = true;
        }
        return bool;
    };
    AdminLayoutComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__.Location }
    ]; };
    AdminLayoutComponent.propDecorators = {
        sidebar: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild, args: ['sidebar', { static: false },] }],
        navbar: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild, args: [_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__.NavbarComponent, { static: false },] }]
    };
    AdminLayoutComponent = __decorate([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
            selector: 'app-layout',
            template: _raw_loader_admin_layout_component_html__WEBPACK_IMPORTED_MODULE_0__.default
        })
    ], AdminLayoutComponent);
    return AdminLayoutComponent;
}());



/***/ }),

/***/ 7231:
/*!*******************************************************!*\
  !*** ./src/app/layouts/auth/auth-layout.component.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthLayoutComponent": function() { return /* binding */ AuthLayoutComponent; }
/* harmony export */ });
/* harmony import */ var _raw_loader_auth_layout_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./auth-layout.component.html */ 35286);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AuthLayoutComponent = /** @class */ (function () {
    function AuthLayoutComponent() {
    }
    AuthLayoutComponent = __decorate([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Component)({
            selector: 'app-layout',
            template: _raw_loader_auth_layout_component_html__WEBPACK_IMPORTED_MODULE_0__.default
        })
    ], AuthLayoutComponent);
    return AuthLayoutComponent;
}());



/***/ }),

/***/ 11573:
/*!***************************************************!*\
  !*** ./src/app/services/token-storage.service.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TokenStorageService": function() { return /* binding */ TokenStorageService; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TOKEN_KEY = 'auth-token';
var USER_KEY = 'auth-user';
var TokenStorageService = /** @class */ (function () {
    function TokenStorageService() {
    }
    TokenStorageService.prototype.signOut = function () {
        window.sessionStorage.clear();
    };
    TokenStorageService.prototype.saveToken = function (token) {
        window.sessionStorage.removeItem(TOKEN_KEY);
        window.sessionStorage.setItem(TOKEN_KEY, token);
    };
    TokenStorageService.prototype.getToken = function () {
        return sessionStorage.getItem(TOKEN_KEY);
    };
    TokenStorageService.prototype.saveUser = function (user) {
        window.sessionStorage.removeItem(USER_KEY);
        window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
    };
    TokenStorageService.prototype.getUser = function () {
        return JSON.parse(sessionStorage.getItem(USER_KEY));
    };
    TokenStorageService.ctorParameters = function () { return []; };
    TokenStorageService = __decorate([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable)({
            providedIn: 'root'
        })
    ], TokenStorageService);
    return TokenStorageService;
}());



/***/ }),

/***/ 97185:
/*!*************************************************************!*\
  !*** ./src/app/shared/fixedplugin/fixedplugin.component.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FixedPluginComponent": function() { return /* binding */ FixedPluginComponent; }
/* harmony export */ });
/* harmony import */ var _raw_loader_fixedplugin_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./fixedplugin.component.html */ 62633);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var FixedPluginComponent = /** @class */ (function () {
    function FixedPluginComponent() {
    }
    FixedPluginComponent.prototype.ngOnInit = function () {
        var $sidebar = $('.sidebar');
        var $off_canvas_sidebar = $('.off-canvas-sidebar');
        var window_width = window.outerWidth;
        $sidebar.attr('data-active-color', 'warning');
        $off_canvas_sidebar.attr('data-active-color', 'warning');
        if (window_width > 767) {
            if ($('.fixed-plugin .dropdown').hasClass('show-dropdown')) {
                $('.fixed-plugin .dropdown').addClass('open');
            }
        }
        $('.fixed-plugin a').click(function (event) {
            // Alex if we click on switch, stop propagation of the event, so the dropdown will not be hide, otherwise we set the  section active
            if ($(this).hasClass('switch-trigger')) {
                if (event.stopPropagation) {
                    event.stopPropagation();
                }
                else if (window.event) {
                    window.event.cancelBubble = true;
                }
            }
        });
        $('.fixed-plugin .background-color span').click(function () {
            $(this).siblings().removeClass('active');
            $(this).addClass('active');
            var new_color = $(this).data('color');
            if ($sidebar.length != 0) {
                $sidebar.attr('data-color', new_color);
            }
            if ($off_canvas_sidebar.length != 0) {
                $off_canvas_sidebar.attr('data-color', new_color);
            }
        });
        $('.fixed-plugin .active-color span').click(function () {
            $(this).siblings().removeClass('active');
            $(this).addClass('active');
            var new_color = $(this).data('color');
            if ($sidebar.length != 0) {
                $sidebar.attr('data-active-color', new_color);
            }
            if ($off_canvas_sidebar.length != 0) {
                $off_canvas_sidebar.attr('data-active-color', new_color);
            }
        });
    };
    FixedPluginComponent = __decorate([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Component)({
            selector: 'fixedplugin-cmp',
            template: _raw_loader_fixedplugin_component_html__WEBPACK_IMPORTED_MODULE_0__.default
        })
    ], FixedPluginComponent);
    return FixedPluginComponent;
}());



/***/ }),

/***/ 5926:
/*!**********************************************************!*\
  !*** ./src/app/shared/fixedplugin/fixedplugin.module.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FixedPluginModule": function() { return /* binding */ FixedPluginModule; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _fixedplugin_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fixedplugin.component */ 97185);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var FixedPluginModule = /** @class */ (function () {
    function FixedPluginModule() {
    }
    FixedPluginModule = __decorate([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule],
            declarations: [_fixedplugin_component__WEBPACK_IMPORTED_MODULE_0__.FixedPluginComponent],
            exports: [_fixedplugin_component__WEBPACK_IMPORTED_MODULE_0__.FixedPluginComponent]
        })
    ], FixedPluginModule);
    return FixedPluginModule;
}());



/***/ }),

/***/ 45227:
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": function() { return /* binding */ FooterComponent; }
/* harmony export */ });
/* harmony import */ var _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./footer.component.html */ 7318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.test = new Date();
    }
    FooterComponent = __decorate([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Component)({
            selector: 'footer-cmp',
            template: _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_0__.default
        })
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ 36685:
/*!************************************************!*\
  !*** ./src/app/shared/footer/footer.module.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterModule": function() { return /* binding */ FooterModule; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _footer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer.component */ 45227);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var FooterModule = /** @class */ (function () {
    function FooterModule() {
    }
    FooterModule = __decorate([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule],
            declarations: [_footer_component__WEBPACK_IMPORTED_MODULE_0__.FooterComponent],
            exports: [_footer_component__WEBPACK_IMPORTED_MODULE_0__.FooterComponent]
        })
    ], FooterModule);
    return FooterModule;
}());



/***/ }),

/***/ 54696:
/*!***************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavbarComponent": function() { return /* binding */ NavbarComponent; }
/* harmony export */ });
/* harmony import */ var _raw_loader_navbar_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./navbar.component.html */ 253);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../.././sidebar/sidebar.component */ 6804);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 38583);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var misc = {
    navbar_menu_visible: 0,
    active_collapse: true,
    disabled_collapse_init: 0,
};
var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(location, renderer, element, router) {
        this.renderer = renderer;
        this.element = element;
        this.router = router;
        this.open = false;
        this.location = location;
        this.nativeElement = element.nativeElement;
        this.sidebarVisible = false;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.listTitles = _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__.ROUTES.filter(function (listTitle) { return listTitle; });
        var navbar = this.element.nativeElement;
        var body = document.getElementsByTagName('body')[0];
        this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
        if (body.classList.contains('sidebar-mini')) {
            misc.sidebar_mini_active = true;
        }
        this._router = this.router.events.filter(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__.NavigationEnd; }).subscribe(function (event) {
            var $layer = document.getElementsByClassName('close-layer')[0];
            if ($layer) {
                $layer.remove();
            }
        });
    };
    NavbarComponent.prototype.minimizeSidebar = function () {
        var body = document.getElementsByTagName('body')[0];
        if (misc.sidebar_mini_active === true) {
            body.classList.remove('sidebar-mini');
            misc.sidebar_mini_active = false;
        }
        else {
            setTimeout(function () {
                body.classList.add('sidebar-mini');
                misc.sidebar_mini_active = true;
            }, 300);
        }
        // we simulate the window Resize so the charts will get updated in realtime.
        var simulateWindowResize = setInterval(function () {
            window.dispatchEvent(new Event('resize'));
        }, 180);
        // we stop the simulation of Window Resize after the animations are completed
        setTimeout(function () {
            clearInterval(simulateWindowResize);
        }, 1000);
    };
    NavbarComponent.prototype.isMobileMenu = function () {
        if (window.outerWidth < 991) {
            return false;
        }
        return true;
    };
    NavbarComponent.prototype.sidebarOpen = function () {
        var toggleButton = this.toggleButton;
        var html = document.getElementsByTagName('html')[0];
        setTimeout(function () {
            toggleButton.classList.add('toggled');
        }, 500);
        var mainPanel = document.getElementsByClassName('main-panel')[0];
        if (window.innerWidth < 991) {
            mainPanel.style.position = 'fixed';
        }
        html.classList.add('nav-open');
        this.sidebarVisible = true;
    };
    NavbarComponent.prototype.sidebarClose = function () {
        var html = document.getElementsByTagName('html')[0];
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        html.classList.remove('nav-open');
        var mainPanel = document.getElementsByClassName('main-panel')[0];
        if (window.innerWidth < 991) {
            setTimeout(function () {
                mainPanel.style.position = '';
            }, 500);
        }
    };
    NavbarComponent.prototype.sidebarToggle = function () {
        // var toggleButton = this.toggleButton;
        // var body = document.getElementsByTagName('body')[0];
        if (this.sidebarVisible == false) {
            this.sidebarOpen();
        }
        else {
            this.sidebarClose();
        }
    };
    NavbarComponent.prototype.getTitle = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee.charAt(0) === '#') {
            titlee = titlee.slice(1);
        }
        for (var item = 0; item < this.listTitles.length; item++) {
            var parent_1 = this.listTitles[item];
            if (parent_1.path === titlee) {
                return parent_1.title;
            }
            else if (parent_1.path === '') {
                var children_from_url_link = titlee.split('/')[1];
                for (var current = 0; current < parent_1.children.length; current++) {
                    if (parent_1.children[current].path == children_from_url_link) {
                        return parent_1.children[current].title;
                    }
                }
            }
            else if (parent_1.children) {
                var children_from_url = titlee.split('/')[2];
                for (var current = 0; current < parent_1.children.length; current++) {
                    if (parent_1.children[current].path === children_from_url) {
                        return parent_1.children[current].title;
                    }
                    else if (parent_1.children[current].children) {
                        for (var subChildren = 0; subChildren < parent_1.children[current].children.length; subChildren++) {
                            if (parent_1.children[current].children[subChildren].path === children_from_url) {
                                return parent_1.children[current].children[subChildren].title;
                            }
                            else if (parent_1.children[current].children[subChildren].children) {
                                for (var subSubChildren = 0; subSubChildren < parent_1.children[current].children[subChildren].children.length; subSubChildren++) {
                                    if (parent_1.children[current].children[subChildren].children[subSubChildren].path === children_from_url) {
                                        return parent_1.children[current].children[subChildren].children[subSubChildren].title;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        return 'Dashboard';
    };
    NavbarComponent.prototype.getPath = function () {
        // console.log(this.location);
        return this.location.prepareExternalUrl(this.location.path());
    };
    NavbarComponent.ctorParameters = function () { return [
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__.Location },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Renderer2 },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ElementRef },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
    ]; };
    NavbarComponent.propDecorators = {
        button: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewChild, args: ['navbar-cmp', { static: false },] }]
    };
    NavbarComponent = __decorate([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
            selector: 'navbar-cmp',
            template: _raw_loader_navbar_component_html__WEBPACK_IMPORTED_MODULE_0__.default
        })
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ 44755:
/*!************************************************!*\
  !*** ./src/app/shared/navbar/navbar.module.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavbarModule": function() { return /* binding */ NavbarModule; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _navbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navbar.component */ 54696);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var NavbarModule = /** @class */ (function () {
    function NavbarModule() {
    }
    NavbarModule = __decorate([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule],
            declarations: [_navbar_component__WEBPACK_IMPORTED_MODULE_0__.NavbarComponent],
            exports: [_navbar_component__WEBPACK_IMPORTED_MODULE_0__.NavbarComponent]
        })
    ], NavbarModule);
    return NavbarModule;
}());



/***/ }),

/***/ 6804:
/*!**********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ROUTES": function() { return /* binding */ ROUTES; },
/* harmony export */   "SidebarComponent": function() { return /* binding */ SidebarComponent; }
/* harmony export */ });
/* harmony import */ var _raw_loader_sidebar_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./sidebar.component.html */ 42530);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _services_token_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/token-storage.service */ 11573);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




//Menu Items
var ROUTES = [{
        path: '/dashboard',
        title: 'Panou de control',
        type: 'link',
        icontype: 'nc-icon nc-bank'
    },
    {
        path: '/computer',
        type: 'link',
        title: 'PC/Server',
        icontype: 'fas fa-server'
    },
    {
        path: '/components',
        title: 'Componente',
        type: 'sub',
        collapse: 'components',
        icontype: 'nc-icon nc-layout-11',
        children: [
            {
                path: '/components',
                title: 'PC/SERVER',
                collapse: 'pc-server',
                type: 'sub-children',
                iconComponent: 'fas fa-server',
                children: [
                    { path: 'case', title: 'Carcase', iconComponent: 'fas fa-suitcase' },
                    { path: 'cpu-cooler', title: 'Coolere CPU', iconComponent: 'fas fa-fan' },
                    { path: 'fan-case', title: 'Coolere Carcasa', iconComponent: 'fas fa-fan' },
                    { path: 'memory-ram', title: 'Memorii RAM', iconComponent: 'fas fa-memory' },
                    { path: 'motherboard', title: 'Placi de baza', iconComponent: 'fas fa-microchip' },
                    { path: 'optical-unit', title: 'Unitati optice', iconComponent: 'fas fa-compact-disc' },
                    { path: 'power-source', title: 'Surse de alimentare', iconComponent: 'fas fa-plug' },
                    { path: 'processor', title: 'Procesoare', iconComponent: 'fas fa-microchip' },
                    { path: 'sound-card', title: 'Placi de sunet', iconComponent: 'fas fa-volume-down' },
                    { path: 'storage', title: 'Unitati de stocare', iconComponent: 'fas fa-hdd' },
                    { path: 'video-card', title: 'Placi video', iconComponent: 'fas fa-microchip' },
                ]
            }
        ]
    },
    {
        path: '/components',
        title: 'Administrare',
        type: 'sub',
        collapse: 'administrare',
        icontype: 'fa fa-cogs',
        children: [
            {
                // tslint:disable-next-line:max-line-length
                path: '/components',
                title: 'Cod produs',
                type: 'sub-children',
                collapse: 'product-code',
                iconComponent: 'fa fa-qrcode',
                children: [
                    {
                        path: '/components',
                        title: 'Componente',
                        type: 'sub-sub-children',
                        collapse: 'component',
                        iconComponent: 'nc-icon nc-layout-11',
                        children: [
                            { path: 'product-code-case', title: 'Carcase', iconComponent: 'fas fa-suitcase' },
                            { path: 'product-code-cpu-cooler', title: 'Coolere CPU', iconComponent: 'fas fa-fan' },
                            { path: 'product-code-fan-case', title: 'Coolere Carcasa', iconComponent: 'fas fa-fan' },
                            { path: 'product-code-memory-ram', title: 'Memorii RAM', iconComponent: 'fas fa-memory' },
                            { path: 'product-code-motherboard', title: 'Placi de baza', iconComponent: 'fas fa-microchip' },
                            { path: 'product-code-optical-unit', title: 'Unitati optice', iconComponent: 'fas fa-compact-disc' },
                            { path: 'product-code-power-source', title: 'Surse de alimentare', iconComponent: 'fas fa-plug' },
                            { path: 'product-code-processor', title: 'Procesoare', iconComponent: 'fas fa-microchip' },
                            { path: 'product-code-sound-card', title: 'Placi de sunet', iconComponent: 'fas fa-volume-down' },
                            { path: 'product-code-storage', title: 'Unitati de stocare', iconComponent: 'fas fa-hdd' },
                            { path: 'product-code-video-card', title: 'Placi video', iconComponent: 'fas fa-microchip' }
                        ]
                    },
                    {
                        path: '/components/product-code-computer',
                        title: 'PC/Server',
                        type: 'link',
                        iconComponent: 'fas fa-server'
                    }
                ]
            }
        ]
    },
    {
        path: '',
        title: 'Contabilitate',
        type: 'sub',
        collapse: 'contabilitate',
        icontype: 'fab fa-contao',
        children: [
            {
                path: 'company-data',
                title: 'Configurare date firma',
                type: 'link',
                iconComponent: 'far fa-building'
            },
            {
                path: 'providers',
                title: 'Furnizori',
                type: 'link',
                iconComponent: 'fas fa-truck-loading'
            },
            {
                path: 'documents',
                title: 'Documente',
                type: 'link',
                iconComponent: 'fas fa-print'
            }
        ]
    },
    {
        path: '/components/broken',
        title: 'Defecte',
        type: 'link',
        collapse: 'broken',
        icontype: 'fas fa-unlink',
    },
    {
        path: '/unreceived',
        type: 'link',
        title: 'Nereceptionate',
        icontype: 'far fa-file-alt'
    },
];
var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(tokenStorage, router) {
        this.tokenStorage = tokenStorage;
        this.router = router;
        this.firstName = this.tokenStorage.getUser().firstName;
        this.lastName = this.tokenStorage.getUser().lastName;
    }
    SidebarComponent.prototype.isNotMobileMenu = function () {
        if (window.outerWidth > 991) {
            return false;
        }
        return true;
    };
    SidebarComponent.prototype.ngOnInit = function () {
        this.menuItems = ROUTES.filter(function (menuItem) { return menuItem; });
    };
    SidebarComponent.prototype.ngAfterViewInit = function () {
    };
    SidebarComponent.prototype.logout = function () {
        this.tokenStorage.signOut();
    };
    SidebarComponent.ctorParameters = function () { return [
        { type: _services_token_storage_service__WEBPACK_IMPORTED_MODULE_1__.TokenStorageService },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
    ]; };
    SidebarComponent = __decorate([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
            selector: 'sidebar-cmp',
            template: _raw_loader_sidebar_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        })
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ 65106:
/*!*******************************************!*\
  !*** ./src/app/sidebar/sidebar.module.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SidebarModule": function() { return /* binding */ SidebarModule; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _sidebar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sidebar.component */ 6804);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 12664);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SidebarModule = /** @class */ (function () {
    function SidebarModule() {
    }
    SidebarModule = __decorate([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbModule],
            declarations: [_sidebar_component__WEBPACK_IMPORTED_MODULE_0__.SidebarComponent],
            exports: [_sidebar_component__WEBPACK_IMPORTED_MODULE_0__.SidebarComponent]
        })
    ], SidebarModule);
    return SidebarModule;
}());



/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": function() { return /* binding */ environment; }
/* harmony export */ });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    apiBaseUrl: 'https://app-brc.azurewebsites.net/brandcomputer-0.0.1-SNAPSHOT'
};


/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 24608);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 92340);
/*!

 =========================================================
 * Paper Dashboard Pro Angular - v1.4.0
 =========================================================

 * Product Page: https://www.creative-tim.com/product/paper-dashboard-pro-angular
 * Copyright 2020 Creative Tim (http://www.creative-tim.com)

 =========================================================

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

 */




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule);


/***/ }),

/***/ 61249:
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ 91106:
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\n<ngx-loading-bar color=\"#d19b3d\" [includeSpinner]=\"false\" ref=\"router\"></ngx-loading-bar>\n<ngx-loading-bar color=\"#d19b3d\" [includeSpinner]=\"false\" ref=\"http\"></ngx-loading-bar>\n");

/***/ }),

/***/ 61645:
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/admin/admin-layout.component.html ***!
  \*************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"wrapper\">\n    <div class=\"sidebar\" data-color=\"brown\" data-active-color=\"danger\">\n        <sidebar-cmp></sidebar-cmp>\n    </div>\n    <div class=\"main-panel\">\n        <navbar-cmp></navbar-cmp>\n        <router-outlet></router-outlet>\n        <div *ngIf=\"!isMap()\">\n            <footer-cmp></footer-cmp>\n        </div>\n    </div>\n\n</div>\n<fixedplugin-cmp></fixedplugin-cmp>\n");

/***/ }),

/***/ 35286:
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/auth/auth-layout.component.html ***!
  \***********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\n");

/***/ }),

/***/ 62633:
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/fixedplugin/fixedplugin.component.html ***!
  \*****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"fixed-plugin\">\n    <div class=\"dropdown\">\n        <a href=\"javascript:void(0)\" data-toggle=\"dropdown\">\n        <i class=\"fa fa-cog fa-2x\"> </i>\n        </a>\n        <ul class=\"dropdown-menu\">\n            <li class=\"header-title\">Sidebar Background</li>\n            <li class=\"adjustments-line text-center\">\n                <a href=\"javascript:void(0)\" class=\"switch-trigger background-color\">\n                  <span class=\"badge filter badge-default active\" data-color=\"brown\"></span>\n                  <span class=\"badge filter badge-light\" data-color=\"white\"></span>\n                </a>\n            </li>\n\n            <li class=\"header-title\">Sidebar Active Color</li>\n            <li class=\"adjustments-line text-center\">\n                <a href=\"javascript:void(0)\" class=\"switch-trigger active-color\">\n                    <span class=\"badge filter badge-primary\" data-color=\"primary\"></span>\n                    <span class=\"badge filter badge-info\" data-color=\"info\"></span>\n                    <span class=\"badge filter badge-success\" data-color=\"success\"></span>\n                    <span class=\"badge filter badge-warning active\" data-color=\"warning\"></span>\n                    <span class=\"badge filter badge-danger\" data-color=\"danger\"></span>\n                </a>\n            </li>\n        </ul>\n    </div>\n</div>\n");

/***/ }),

/***/ 7318:
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/footer/footer.component.html ***!
  \*******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer class=\"footer\">\n    <div class=\"container-fluid\">\n        <nav class=\"pull-left\">\n            <ul>\n                <li>\n                    <a href=\"https://www.webitech.ro\">\n                        WEBITECH\n                    </a>\n                </li>\n                <li>\n                    <a href=\"http://www.webitech.ro\">\n                        BLOG\n                    </a>\n                </li>\n                <li>\n                    <a href=\"https://www.webitech.ro/license\">\n                        LICENTA\n                    </a>\n                </li>\n            </ul>\n        </nav>\n        <div class=\"copyright pull-right\">\n            &copy; {{test | date: 'yyyy'}}, Creat de WEBITECH\n        </div>\n    </div>\n</footer>\n");

/***/ }),

/***/ 253:
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/navbar/navbar.component.html ***!
  \*******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav #navbar class=\"navbar navbar-expand-lg navbar-absolute\" [ngClass]=\"{ 'bg-white': open === true , 'navbar-transparent': open === false}\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-wrapper\">\n      <div class=\"navbar-minimize\">\n        <button id=\"minimizeSidebar\" class=\"btn btn-icon btn-round\" (click)=\"minimizeSidebar()\">\n          <i class=\"nc-icon nc-minimal-right text-center visible-on-sidebar-mini\"></i>\n          <i class=\"nc-icon nc-minimal-left text-center visible-on-sidebar-regular\"></i>\n        </button>\n      </div>\n      <div class=\"navbar-toggle\" (click)=\"sidebarToggle()\">\n        <button type=\"button\" class=\"navbar-toggler\">\n          <span class=\"navbar-toggler-bar bar1\"></span>\n          <span class=\"navbar-toggler-bar bar2\"></span>\n          <span class=\"navbar-toggler-bar bar3\"></span>\n        </button>\n      </div>\n      <a class=\"navbar-brand\" href=\"javascript:void(0)\">{{getTitle()}}</a>\n    </div>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navigation\" aria-controls=\"navigation-index\" aria-expanded=\"false\" aria-label=\"Toggle navigation\" (click)=\"open = !open\"\n      >\n      <span class=\"navbar-toggler-bar navbar-kebab\"></span>\n      <span class=\"navbar-toggler-bar navbar-kebab\"></span>\n      <span class=\"navbar-toggler-bar navbar-kebab\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse justify-content-end\" id=\"navigation\">\n      <form>\n        <div class=\"input-group no-border\">\n          <input type=\"text\" value=\"\" class=\"form-control\" placeholder=\"Search...\">\n          <div class=\"input-group-append\">\n            <div class=\"input-group-text\">\n              <i class=\"nc-icon nc-zoom-split\"></i>\n            </div>\n          </div>\n        </div>\n      </form>\n      <ul class=\"navbar-nav\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link btn-magnify\" href=\"javascript:void(0)\">\n            <i class=\"nc-icon nc-layout-11\"></i>\n            <p>\n              <span class=\"d-lg-none d-md-block\">Stats</span>\n            </p>\n          </a>\n        </li>\n        <li class=\"nav-item btn-rotate dropdown\">\n          <a class=\"nav-link dropdown-toggle\" href=\"pablo\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n            <i class=\"nc-icon nc-bell-55\"></i>\n            <p>\n              <span class=\"d-lg-none d-md-block\">Some Actions</span>\n            </p>\n          </a>\n          <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"navbarDropdownMenuLink\">\n            <a class=\"dropdown-item\" href=\"javascript:void(0)\">Action</a>\n            <a class=\"dropdown-item\" href=\"javascript:void(0)\">Another action</a>\n            <a class=\"dropdown-item\" href=\"javascript:void(0)\">Something else here</a>\n          </div>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link btn-rotate\" href=\"javascript:void(0)\">\n            <i class=\"nc-icon nc-settings-gear-65\"></i>\n            <p>\n              <span class=\"d-lg-none d-md-block\">Account</span>\n            </p>\n          </a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n");

/***/ }),

/***/ 42530:
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sidebar/sidebar.component.html ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"logo\">\r\n    <a href=\"/dashboard\" class=\"simple-text logo-mini\">\r\n        <div class=\"logo-image-small\">\r\n            <!--            <img src=\"./assets/img/favicon_brand_computer.ico\"/>-->\r\n        </div>\r\n    </a>\r\n    <a href=\"/dashboard\" class=\"simple-text logo-normal\">\r\n        <img src=\"./assets/img/logo120x38.png\"/>\r\n    </a>\r\n</div>\r\n<div class=\"sidebar-wrapper\">\r\n    <div class=\"user\">\r\n        <div class=\"photo\">\r\n            <img src=\"./assets/img/faces/user_avatar.png\"/>\r\n        </div>\r\n        <div class=\"info\">\r\n            <a data-toggle=\"collapse\" href=\"#collapseExample\" class=\"collapsed\">\r\n        <span>\r\n          {{firstName}} {{lastName}}\r\n            <b class=\"caret\"></b>\r\n        </span>\r\n            </a>\r\n            <div class=\"clearfix\"></div>\r\n            <div class=\"collapse\" id=\"collapseExample\">\r\n                <ul class=\"nav\">\r\n                    <li>\r\n                        <a href=\"javascript:void(0)\">\r\n                            <span class=\"sidebar-mini-icon\"><i class=\"nc-icon nc-single-02\"></i></span>\r\n                            <span class=\"sidebar-normal\">My Profile</span>\r\n                        </a>\r\n                    </li>\r\n                    <li>\r\n                        <a href=\"javascript:void(0)\">\r\n                            <span class=\"sidebar-mini-icon\"><i class=\"fas fa-edit\"></i></span>\r\n                            <span class=\"sidebar-normal\">Edit Profile</span>\r\n                        </a>\r\n                    </li>\r\n                    <li>\r\n                        <a href=\"javascript:void(0)\">\r\n                            <span class=\"sidebar-mini-icon\"><i class=\"nc-icon nc-settings-gear-65\"></i></span>\r\n                            <span class=\"sidebar-normal\">Settings</span>\r\n                        </a>\r\n                    </li>\r\n                    <li>\r\n                        <a href (click)=\"logout()\">\r\n                            <span class=\"sidebar-mini-icon\"><i class=\"nc-icon nc-button-power\"></i></span>\r\n                            <span class=\"sidebar-normal\">Deconecteaza-te</span>\r\n                        </a>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <ul class=\"nav\">\r\n        <li routerLinkActive=\"active\" *ngFor=\"let menuitem of menuItems\">\r\n            <!--If is a single link-->\r\n            <a [routerLink]=\"[menuitem.path]\" *ngIf=\"menuitem.type === 'link'\">\r\n                <i class=\"{{menuitem.icontype}}\"></i>\r\n                <p>{{menuitem.title}}</p>\r\n            </a>\r\n            <!--If it have a submenu-->\r\n            <a data-toggle=\"collapse\" href=\"#{{menuitem.collapse}}\" *ngIf=\"menuitem.type === 'sub'\">\r\n                <i class=\"{{menuitem.icontype}}\"></i>\r\n                <p>{{menuitem.title}}<b class=\"caret\"></b></p>\r\n            </a>\r\n\r\n            <div id=\"{{menuitem.collapse}}\" class=\"collapse\" *ngIf=\"menuitem.type === 'sub'\">\r\n                <ng-container *ngFor=\"let childitem of menuitem.children\">\r\n                    <ul class=\"nav\">\r\n                        <li routerLinkActive=\"active\">\r\n                            <a [routerLink]=\"[menuitem.path, childitem.path]\" *ngIf=\"childitem.type === 'sub' && childitem.type !== 'link'\">\r\n                                <i class=\"sidebar-mini-icon {{childitem.iconComponent}}\"></i>\r\n                                <span class=\"sidebar-mini-icon\">{{childitem.ab}}</span>\r\n                                <span class=\"sidebar-normal\">{{childitem.title}}</span>\r\n                            </a>\r\n\r\n                            <a [routerLink]=\"[childitem.path]\"\r\n                               *ngIf=\"childitem.type === 'link'\">\r\n                                <i class=\"sidebar-mini-icon {{childitem.iconComponent}}\"></i>\r\n                                <span class=\"sidebar-mini-icon\">{{childitem.ab}}</span>\r\n                                <span class=\"sidebar-normal\">{{childitem.title}}</span>\r\n                            </a>\r\n\r\n                            <a data-toggle=\"collapse\" href=\"#{{childitem.collapse}}\"\r\n                               *ngIf=\"childitem.type === 'sub-children'\">\r\n                                <i class=\"sidebar-mini-icon {{childitem.iconComponent}}\"></i>\r\n                                <p class=\"sidebar-sub-child\">{{childitem.title}}<b class=\"caret\"></b></p>\r\n                            </a>\r\n                        </li>\r\n                    </ul>\r\n\r\n                    <ng-container *ngFor=\"let subChild of childitem.children\">\r\n                        <ul id=\"{{childitem.collapse}}\" class=\"collapse no-bullet\">\r\n                            <li routerLinkActive=\"active\">\r\n                                <a [routerLink]=\"[childitem.path, subChild.path]\"\r\n                                   *ngIf=\"childitem.type === 'sub-children' && subChild.type !== 'sub-sub-children' && subChild.type !== 'link'\">\r\n                                    <i class=\"sidebar-mini-icon {{subChild.iconComponent}}\"></i>\r\n                                    <span class=\"sidebar-mini-icon\">{{subChild.ab}}</span>\r\n                                    <span class=\"sidebar-normal\">{{subChild.title}}</span>\r\n                                </a>\r\n\r\n                                <a [routerLink]=\"[subChild.path]\"\r\n                                   *ngIf=\"subChild.type === 'link'\">\r\n                                    <i class=\"sidebar-mini-icon {{subChild.iconComponent}}\"></i>\r\n                                    <span class=\"sidebar-mini-icon\">{{subChild.ab}}</span>\r\n                                    <span class=\"sidebar-normal\">{{subChild.title}}</span>\r\n                                </a>\r\n\r\n                                <a data-toggle=\"collapse\" href=\"#{{subChild.collapse}}\"\r\n                                   *ngIf=\"subChild.type === 'sub-sub-children'\">\r\n                                    <i class=\"sidebar-mini-icon {{subChild.iconComponent}}\"></i>\r\n                                    <p class=\"sidebar-sub-child\">{{subChild.title}}<b class=\"caret\"></b></p>\r\n                                </a>\r\n                            </li>\r\n                        </ul>\r\n\r\n                        <ng-container *ngFor=\"let subSubChild of subChild.children\">\r\n                            <ul id=\"{{subChild.collapse}}\" class=\"collapse no-bullet\">\r\n                                <li routerLinkActive=\"active\">\r\n                                    <a [routerLink]=\"[childitem.path, subSubChild.path]\">\r\n                                        <i class=\"sidebar-mini-icon {{subSubChild.iconComponent}}\"></i>\r\n                                        <span class=\"sidebar-mini-icon\">{{subSubChild.ab}}</span>\r\n                                        <span class=\"sidebar-normal\">{{subSubChild.title}}</span>\r\n                                    </a>\r\n                                </li>\r\n                            </ul>\r\n                        </ng-container>\r\n\r\n\r\n                    </ng-container>\r\n\r\n                </ng-container>\r\n            </div>\r\n        </li>\r\n    </ul>\r\n</div>\r\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendor"], function() { return __webpack_exec__(14431); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map