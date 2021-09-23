(self["webpackChunkpaper_dashboard_pro_angular"] = self["webpackChunkpaper_dashboard_pro_angular"] || []).push([["src_app_pages_pages_module_ts"],{

/***/ 59113:
/*!************************************************!*\
  !*** ./src/app/helper/notification.service.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationService": function() { return /* binding */ NotificationService; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NotificationService = /** @class */ (function () {
    function NotificationService() {
    }
    NotificationService.prototype.showNotification = function (from, align, errorMessage, color) {
        $.notify({
            icon: 'ti-gift',
            message: errorMessage
        }, {
            type: color,
            timer: 1000,
            placement: {
                from: from,
                align: align
            },
            template: '<div data-notify="container" class="col-11 col-md-4 alert alert-{0} alert-with-icon" role="alert">' +
                '<button type="button" aria-hidden="true" class="close" data-notify="dismiss">' +
                '<i class="nc-icon nc-simple-remove"></i>' +
                '</button>' +
                '<span data-notify="icon" class="nc-icon nc-bell-55"></span> ' +
                '<span data-notify="title">{1}</span>' +
                '<span data-notify="message">{2}</span>' +
                '<div class="progress" data-notify="progressbar">' +
                '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div></div>' +
                '<a href="{3}" target="{4}" data-notify="url"></a></div>'
        });
    };
    NotificationService.ctorParameters = function () { return []; };
    NotificationService = __decorate([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable)({
            providedIn: 'root'
        })
    ], NotificationService);
    return NotificationService;
}());



/***/ }),

/***/ 24902:
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": function() { return /* binding */ LoginComponent; }
/* harmony export */ });
/* harmony import */ var _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./login.component.html */ 60911);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/login.service */ 54120);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _services_token_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/token-storage.service */ 11573);
/* harmony import */ var _helper_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helper/notification.service */ 59113);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var LoginComponent = /** @class */ (function () {
    function LoginComponent(element, tokenStorage, loginService, notificationService, formBuilder, router) {
        this.element = element;
        this.tokenStorage = tokenStorage;
        this.loginService = loginService;
        this.notificationService = notificationService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.test = new Date();
        this.nativeElement = element.nativeElement;
        this.sidebarVisible = false;
        this.isLoggedIn = false;
        this.isLoginFailed = false;
        this.roles = [];
    }
    LoginComponent.prototype.formLogin = function () {
        this.validatingForm = this.formBuilder.group({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.email),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required)
        });
    };
    LoginComponent.prototype.ngOnInit = function () {
        if (this.tokenStorage.getToken() !== null) {
            this.reloadPage();
        }
        if (this.tokenStorage.getToken()) {
            this.isLoggedIn = true;
            this.roles = this.tokenStorage.getUser().roles;
        }
        this.checkFullPageBackgroundImage();
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('login-page');
        var navbar = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
        setTimeout(function () {
            // after 1000 ms we add the class animated to the login/register card
            $('.card').removeClass('card-hidden');
        }, 700);
        this.formLogin();
    };
    LoginComponent.prototype.ngOnDestroy = function () {
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('login-page');
    };
    LoginComponent.prototype.checkFullPageBackgroundImage = function () {
        var $page = $('.full-page');
        var image_src = $page.data('image');
        if (image_src !== undefined) {
            var image_container = '<div class="full-page-background" style="background-image: url(' + image_src + ') "/>';
            $page.append(image_container);
        }
    };
    ;
    LoginComponent.prototype.sidebarToggle = function () {
        var toggleButton = this.toggleButton;
        var body = document.getElementsByTagName('body')[0];
        var sidebar = document.getElementsByClassName('navbar-collapse')[0];
        if (this.sidebarVisible == false) {
            setTimeout(function () {
                toggleButton.classList.add('toggled');
            }, 500);
            body.classList.add('nav-open');
            this.sidebarVisible = true;
        }
        else {
            this.toggleButton.classList.remove('toggled');
            this.sidebarVisible = false;
            body.classList.remove('nav-open');
        }
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.loginService.login(this.validatingForm.value).subscribe(function (data) {
            _this.tokenStorage.saveToken(data.token);
            _this.tokenStorage.saveUser(data);
            _this.isLoginFailed = false;
            _this.isLoggedIn = true;
            _this.roles = _this.tokenStorage.getUser().roles;
            _this.reloadPage();
        }, function (error) {
            _this.notificationService.showNotification("top", "center", error.error.message, "danger");
            _this.isLoginFailed = true;
        });
    };
    LoginComponent.prototype.reloadPage = function () {
        this.router.navigateByUrl('/dashboard').then();
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ElementRef },
        { type: _services_token_storage_service__WEBPACK_IMPORTED_MODULE_2__.TokenStorageService },
        { type: _services_login_service__WEBPACK_IMPORTED_MODULE_1__.LoginService },
        { type: _helper_notification_service__WEBPACK_IMPORTED_MODULE_3__.NotificationService },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router }
    ]; };
    LoginComponent = __decorate([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
            selector: 'login-cmp',
            template: _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_0__.default
        })
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ 18950:
/*!***************************************!*\
  !*** ./src/app/pages/pages.module.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PagesModule": function() { return /* binding */ PagesModule; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _pages_routing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages.routing */ 63360);
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register/register.component */ 46698);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ 24902);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var PagesModule = /** @class */ (function () {
    function PagesModule() {
    }
    PagesModule = __decorate([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
                _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(_pages_routing__WEBPACK_IMPORTED_MODULE_0__.PagesRoutes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
            ],
            exports: [
                _login_login_component__WEBPACK_IMPORTED_MODULE_2__.LoginComponent
            ],
            declarations: [
                _login_login_component__WEBPACK_IMPORTED_MODULE_2__.LoginComponent,
                _register_register_component__WEBPACK_IMPORTED_MODULE_1__.RegisterComponent,
            ]
        })
    ], PagesModule);
    return PagesModule;
}());



/***/ }),

/***/ 63360:
/*!****************************************!*\
  !*** ./src/app/pages/pages.routing.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PagesRoutes": function() { return /* binding */ PagesRoutes; }
/* harmony export */ });
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register/register.component */ 46698);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login/login.component */ 24902);


var PagesRoutes = [{
        path: '',
        children: [{
                path: 'login',
                component: _login_login_component__WEBPACK_IMPORTED_MODULE_1__.LoginComponent
            },
            {
                path: 'register',
                component: _register_register_component__WEBPACK_IMPORTED_MODULE_0__.RegisterComponent
            }]
    }];


/***/ }),

/***/ 46698:
/*!******************************************************!*\
  !*** ./src/app/pages/register/register.component.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterComponent": function() { return /* binding */ RegisterComponent; }
/* harmony export */ });
/* harmony import */ var _raw_loader_register_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./register.component.html */ 64073);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _helper_notification_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helper/notification.service */ 59113);
/* harmony import */ var app_services_register_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/services/register.service */ 1032);
/* harmony import */ var _services_token_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/token-storage.service */ 11573);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(element, registerService, tokenStorage, notificationService, router) {
        this.element = element;
        this.registerService = registerService;
        this.tokenStorage = tokenStorage;
        this.notificationService = notificationService;
        this.router = router;
        this.test = new Date();
        this.isSignupFailed = false;
        this.nativeElement = element.nativeElement;
        this.sidebarVisible = false;
        this.isRegistered = false;
        this.isSignupFailed = false;
    }
    RegisterComponent.prototype.registerForm = function () {
        this.validatingForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.email),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required),
            confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required)
        });
    };
    RegisterComponent.prototype.ngOnInit = function () {
        if (this.tokenStorage.getToken() !== null) {
            this.router.navigateByUrl('/dashboard').then();
        }
        this.registerForm();
        this.checkFullPageBackgroundImage();
        var navbar = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
        setTimeout(function () {
            // after 1000 ms we add the class animated to the login/register card
            $('.card').removeClass('card-hidden');
        }, 700);
    };
    RegisterComponent.prototype.ngOnDestroy = function () {
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('register-page');
    };
    RegisterComponent.prototype.checkFullPageBackgroundImage = function () {
        var $page = $('.full-page');
        var image_src = $page.data('image');
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('register-page');
        if (image_src !== undefined) {
            var image_container = '<div class="full-page-background" style="background-image: url(' + image_src + ') "/>';
            $page.append(image_container);
        }
    };
    ;
    RegisterComponent.prototype.sidebarToggle = function () {
        var toggleButton = this.toggleButton;
        var body = document.getElementsByTagName('body')[0];
        var sidebar = document.getElementsByClassName('navbar-collapse')[0];
        if (this.sidebarVisible == false) {
            setTimeout(function () {
                toggleButton.classList.add('toggled');
            }, 500);
            body.classList.add('nav-open');
            this.sidebarVisible = true;
        }
        else {
            this.toggleButton.classList.remove('toggled');
            this.sidebarVisible = false;
            body.classList.remove('nav-open');
        }
    };
    RegisterComponent.prototype.onSubmit = function () {
        var _this = this;
        this.registerService.register(this.validatingForm.value).subscribe(function (data) {
            _this.isRegistered = true;
            _this.isSignupFailed = false;
            _this.router.navigateByUrl('pages/login').then();
            _this.notificationService.showNotification("top", "center", "Te-ai inregistrat cu succes!", "success");
        }, function (error) {
            _this.notificationService.showNotification("top", "center", error.error.message, "danger");
            _this.isSignupFailed = true;
        });
    };
    RegisterComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ElementRef },
        { type: app_services_register_service__WEBPACK_IMPORTED_MODULE_2__.RegisterService },
        { type: _services_token_storage_service__WEBPACK_IMPORTED_MODULE_3__.TokenStorageService },
        { type: _helper_notification_service__WEBPACK_IMPORTED_MODULE_1__.NotificationService },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router }
    ]; };
    RegisterComponent = __decorate([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
            selector: 'register-cmp',
            template: _raw_loader_register_component_html__WEBPACK_IMPORTED_MODULE_0__.default
        })
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ 54120:
/*!*******************************************!*\
  !*** ./src/app/services/login.service.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginService": function() { return /* binding */ LoginService; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 92340);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({ 'Content-Type': 'application/json' })
};
var LoginService = /** @class */ (function () {
    function LoginService(http) {
        this.http = http;
        this.apiServerUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl;
    }
    LoginService.prototype.login = function (user) {
        return this.http.post(this.apiServerUrl + "/api/login", {
            email: user.email,
            password: user.password
        }, httpOptions);
    };
    LoginService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
    ]; };
    LoginService = __decorate([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
            providedIn: 'root'
        })
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ 1032:
/*!**********************************************!*\
  !*** ./src/app/services/register.service.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterService": function() { return /* binding */ RegisterService; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 92340);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({ 'Content-Type': 'application/json' })
};
var RegisterService = /** @class */ (function () {
    function RegisterService(http) {
        this.http = http;
        this.apiServerUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl;
    }
    RegisterService.prototype.register = function (user) {
        return this.http.post(this.apiServerUrl + "/api/register", user, httpOptions);
    };
    RegisterService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
    ]; };
    RegisterService = __decorate([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
            providedIn: 'root'
        })
    ], RegisterService);
    return RegisterService;
}());



/***/ }),

/***/ 60911:
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.component.html ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-lg navbar-absolute fixed-top navbar-transparent\">\n  <div class=\"container\">\n    <div class=\"navbar-wrapper\">\n      <div class=\"navbar-toggle\" (click)=\"sidebarToggle()\">\n        <button type=\"button\" class=\"navbar-toggler\">\n          <span class=\"navbar-toggler-bar bar1\"></span>\n          <span class=\"navbar-toggler-bar bar2\"></span>\n          <span class=\"navbar-toggler-bar bar3\"></span>\n        </button>\n      </div>\n    </div>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navigation\" aria-controls=\"navigation-index\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-bar navbar-kebab\"></span>\n      <span class=\"navbar-toggler-bar navbar-kebab\"></span>\n      <span class=\"navbar-toggler-bar navbar-kebab\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse justify-content-end\" id=\"navigation\">\n      <ul class=\"navbar-nav\">\n        <li class=\"nav-item \">\n          <a routerLinkActive=\"active\" [routerLink]=\"['/pages/register']\" class=\"nav-link\">\n            <i class=\"nc-icon nc-book-bookmark\"></i> Inregistrare\n          </a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n\n<div class=\"wrapper wrapper-full-page \">\n  <div class=\"full-page section-image\" filter-color=\"black\" data-image=\"./assets/img/bg/hdpcb.jpg\">\n    <!--   you can change the color of the filter page using: data-color=\"blue | purple | green | orange | red | rose \" -->\n    <div class=\"content\">\n      <div class=\"container\">\n        <div class=\"col-lg-4 col-md-6 ml-auto mr-auto\">\n          <form class=\"form\" [formGroup]=\"validatingForm\" (ngSubmit)=\"onSubmit()\">\n            <div class=\"card card-login\">\n              <div class=\"card-header \">\n                <div class=\"card-header \">\n                  <h3 class=\"header text-center\">Autentificare</h3>\n                </div>\n              </div>\n              <div class=\"card-body \">\n                <div class=\"input-group\" [ngClass]=\"{'input-group-focus':focus===true}\">\n                  <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\">\n                      <i class=\"nc-icon nc-email-85\"></i>\n                    </span>\n                  </div>\n                  <input type=\"text\" class=\"form-control\" formControlName=\"email\" placeholder=\"Adresa de email...\" (focus)=\"focus=true\" (blur)=\"focus=false\">\n                </div>\n                <div class=\"input-group\"  [ngClass]=\"{'input-group-focus':focus1===true}\">\n                  <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\">\n                      <i class=\"nc-icon nc-key-25\"></i>\n                    </span>\n                  </div>\n                  <input type=\"password\" placeholder=\"Parola\" class=\"form-control\" formControlName=\"password\" (focus)=\"focus1=true\" (blur)=\"focus1=false\">\n                </div>\n                <br/>\n              </div>\n              <div class=\"card-footer \">\n                <button type=\"submit\" class=\"btn btn-warning btn-round btn-block mb-3\">Intra in cont</button>\n              </div>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n    <footer class=\"footer footer-black  footer-white \">\n      <div class=\"container\">\n        <div class=\"row\">\n          <nav class=\"footer-nav\">\n            <ul>\n              <li>\n                <a href=\"https://www.webitech.ro\" target=\"_blank\">Webitech</a>\n              </li>\n              <li>\n                <a href=\"https://blog.webitech.ro/\" target=\"_blank\">Blog</a>\n              </li>\n              <li>\n                <a href=\"https://www.webitech.ro/license\" target=\"_blank\">Licenta</a>\n              </li>\n            </ul>\n          </nav>\n          <div class=\"credits ml-auto\">\n            <span class=\"copyright\">\n              &copy; {{test | date: 'yyyy'}}, Creat de WEBITECH\n            </span>\n          </div>\n        </div>\n      </div>\n    </footer>\n  </div>\n</div>\n");

/***/ }),

/***/ 64073:
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/register/register.component.html ***!
  \**********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-lg navbar-absolute fixed-top navbar-transparent\">\n  <div class=\"container\">\n    <div class=\"navbar-wrapper\">\n      <div class=\"navbar-toggle\" (click)=\"sidebarToggle()\">\n        <button type=\"button\" class=\"navbar-toggler\">\n          <span class=\"navbar-toggler-bar bar1\"></span>\n          <span class=\"navbar-toggler-bar bar2\"></span>\n          <span class=\"navbar-toggler-bar bar3\"></span>\n        </button>\n      </div>\n    </div>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navigation\" aria-controls=\"navigation-index\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-bar navbar-kebab\"></span>\n      <span class=\"navbar-toggler-bar navbar-kebab\"></span>\n      <span class=\"navbar-toggler-bar navbar-kebab\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse justify-content-end\" id=\"navigation\">\n      <ul class=\"navbar-nav\">\n        <li class=\"nav-item \">\n          <a routerLinkActive=\"active\" [routerLink]=\"['/pages/login']\"  class=\"nav-link\">\n            <i class=\"nc-icon nc-tap-01\"></i> Autentificare\n          </a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n<div class=\"wrapper wrapper-full-page \">\n  <div class=\"full-page register-page section-image\" filter-color=\"black\" data-image=\"./assets/img/bg/hdpcb.jpg\">\n    <div class=\"content\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-lg-5 col-md-5 ml-auto\">\n            <div class=\"info-area info-horizontal mt-5\">\n              <div class=\"icon icon-primary\">\n                <i class=\"nc-icon nc-tv-2\"></i>\n              </div>\n              <div class=\"description\">\n                <h5 class=\"info-title\">Marketing</h5>\n                <p class=\"description\">\n                  We've created the marketing campaign of the website. It was a very interesting collaboration.\n                </p>\n              </div>\n            </div>\n            <div class=\"info-area info-horizontal\">\n              <div class=\"icon icon-primary\">\n                <i class=\"nc-icon nc-html5\"></i>\n              </div>\n              <div class=\"description\">\n                <h5 class=\"info-title\">Fully Coded in HTML5</h5>\n                <p class=\"description\">\n                  We've developed the website with HTML5 and CSS3. The client has access to the code using GitHub.\n                </p>\n              </div>\n            </div>\n            <div class=\"info-area info-horizontal\">\n              <div class=\"icon icon-info\">\n                <i class=\"nc-icon nc-atom\"></i>\n              </div>\n              <div class=\"description\">\n                <h5 class=\"info-title\">Built Audience</h5>\n                <p class=\"description\">\n                  There is also a Fully Customizable CMS Admin Dashboard for this product.\n                </p>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-lg-4 col-md-6 mr-auto\">\n            <div class=\"card card-signup text-center\">\n              <div class=\"card-header \">\n                <h4 class=\"card-title\">Inregistrare</h4>\n                <div class=\"social\">\n                  <button class=\"btn btn-icon btn-round btn-twitter\">\n                    <i class=\"fa fa-google\"></i>\n                  </button>\n                  <button class=\"btn btn-icon btn-round btn-facebook\">\n                    <i class=\"fa fa-facebook-f\"></i>\n                  </button>\n                  <p class=\"card-description\"> sau fi clasic </p>\n                </div>\n              </div>\n              <div class=\"card-body \">\n                <form class=\"form\" (ngSubmit)=\"onSubmit()\" [formGroup]=\"validatingForm\">\n                  <div class=\"input-group\" [ngClass]=\"{'input-group-focus':focus===true}\">\n                    <div class=\"input-group-prepend\">\n                      <span class=\"input-group-text\">\n                        <i class=\"nc-icon nc-single-02\"></i>\n                      </span>\n                    </div>\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Nume...\" (focus)=\"focus=true\" (blur)=\"focus=false\"\n                           formControlName=\"lastName\">\n                  </div>\n                  <div class=\"input-group\" [ngClass]=\"{'input-group-focus':focus1===true}\">\n                    <div class=\"input-group-prepend\">\n                      <span class=\"input-group-text\">\n                        <i class=\"nc-icon nc-circle-10\"></i>\n                      </span>\n                    </div>\n                    <input type=\"text\" placeholder=\"Prenume...\" class=\"form-control\" (focus)=\"focus1=true\" (blur)=\"focus1=false\"\n                           formControlName=\"firstName\">\n                  </div>\n                  <div class=\"input-group\" [ngClass]=\"{'input-group-focus':focus2===true}\">\n                    <div class=\"input-group-prepend\">\n                      <span class=\"input-group-text\">\n                        <i class=\"nc-icon nc-email-85\"></i>\n                      </span>\n                    </div>\n                    <input type=\"email\" class=\"form-control\" placeholder=\"Email...\" (focus)=\"focus2=true\" (blur)=\"focus2=false\"\n                           formControlName=\"email\">\n                  </div>\n                  <div class=\"input-group\" [ngClass]=\"{'input-group-focus':focus3===true}\">\n                    <div class=\"input-group-prepend\">\n                      <span class=\"input-group-text\">\n                        <i class=\"nc-icon nc-key-25\"></i>\n                      </span>\n                    </div>\n                    <input type=\"password\" class=\"form-control\" placeholder=\"Parola...\" (focus)=\"focus3=true\" (blur)=\"focus3=false\"\n                           formControlName=\"password\">\n                  </div>\n                  <div class=\"input-group\" [ngClass]=\"{'input-group-focus':focus4===true}\">\n                    <div class=\"input-group-prepend\">\n                      <span class=\"input-group-text\">\n                        <i class=\"nc-icon nc-key-25\"></i>\n                      </span>\n                    </div>\n                    <input type=\"password\" class=\"form-control\" placeholder=\"Confirma Parola...\" (focus)=\"focus4=true\" (blur)=\"focus4=false\"\n                           formControlName=\"confirmPassword\">\n                  </div>\n                  <div class=\"card-footer \">\n                    <button type=\"submit\" class=\"btn btn-info btn-round\">Inregistreaza-te</button>\n                  </div>\n                </form>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <footer class=\"footer footer-black  footer-white \">\n      <div class=\"container\">\n        <div class=\"row\">\n          <nav class=\"footer-nav\">\n            <ul>\n              <li>\n                <a href=\"https://www.webitech.ro\" target=\"_blank\">Webitech</a>\n              </li>\n              <li>\n                <a href=\"https://blog.webitech.ro\" target=\"_blank\">Blog</a>\n              </li>\n              <li>\n                <a href=\"https://www.webitech.ro/license\" target=\"_blank\">Licenta</a>\n              </li>\n            </ul>\n          </nav>\n          <div class=\"credits ml-auto\">\n            <span class=\"copyright\">\n              &copy; {{test | date: 'yyyy'}}, Creat de WEBITECH\n            </span>\n          </div>\n        </div>\n      </div>\n    </footer>\n  </div>\n</div>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_pages_module_ts.js.map