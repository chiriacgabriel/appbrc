(self["webpackChunkpaper_dashboard_pro_angular"] = self["webpackChunkpaper_dashboard_pro_angular"] || []).push([["src_app_accounting_provider_provider_module_ts"],{

/***/ 35168:
/*!***********************************************************!*\
  !*** ./src/app/accounting/provider/provider.component.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProviderComponent": function() { return /* binding */ ProviderComponent; }
/* harmony export */ });
/* harmony import */ var _raw_loader_provider_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./provider.component.html */ 88360);
/* harmony import */ var _provider_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./provider.component.css */ 28687);
/* harmony import */ var _assets_css_modal_filter_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../assets/css/_modal_filter.css */ 78783);
/* harmony import */ var _assets_css_table_format_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../assets/css/_table_format.css */ 25824);
/* harmony import */ var _assets_css_tab_pane_custom_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../assets/css/_tab_pane_custom.css */ 17532);
/* harmony import */ var _assets_css_fav_icons_custom_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../assets/css/_fav_icons_custom.css */ 16583);
/* harmony import */ var _assets_css_pagination_custom_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../assets/css/_pagination_custom.css */ 19746);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _services_accounting_provider_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/accounting/provider.service */ 95508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! sweetalert2 */ 88259);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _services_reload_page_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/reload-page.service */ 110);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var ProviderComponent = /** @class */ (function () {
    function ProviderComponent(providerService, formBuilder, activatedRoute, router, reloadPageService) {
        this.providerService = providerService;
        this.formBuilder = formBuilder;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.reloadPageService = reloadPageService;
        this.providerList = [];
        this.copyProviderList = [];
        this.errorMessage = '';
    }
    Object.defineProperty(ProviderComponent.prototype, "formFields", {
        get: function () {
            return this.validatingForm.controls;
        },
        enumerable: false,
        configurable: true
    });
    ProviderComponent.prototype.ngOnInit = function () {
        this.getRouting();
        this.providerForm();
        this.getProviders();
    };
    ProviderComponent.prototype.providerForm = function () {
        this.validatingForm = this.formBuilder.group({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required),
            cif: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required),
            tradeRegister: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required),
            providerCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required),
            vatPayer: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required),
            streetAddress: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required),
            city: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required),
            county: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required),
            country: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required),
            iban: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(''),
            bank: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(''),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(''),
            personOfContact: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(''),
            phoneNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('')
        });
    };
    /************************************* All Providers *******************************************************************/
    ProviderComponent.prototype.getProviders = function () {
        var _this = this;
        this.providerService.getAll().subscribe(function (data) {
            _this.providerList = data;
            _this.copyProviderList = data;
        }, function (error) {
            _this.errorMessage = error.error.message;
        });
    };
    ProviderComponent.prototype.getEventSearchResult = function (event) {
        var search = event.target.value;
        this.providerList = this.copyProviderList;
        this.providerList = this.providerList.filter(function (provider) { return provider.name
            .toLowerCase()
            .includes(search.toLowerCase()) ||
            provider.cif
                .toLowerCase()
                .includes(search.toLowerCase); });
    };
    /************************************* End All Providers *******************************************************************/
    /************************************ General Functions ****************************************************/
    ProviderComponent.prototype.closeModal = function () {
        this.isAddMode = true;
        this.validatingForm.reset();
        this.reloadPageService.skipLocation('providers');
        if (this.isCIFPresent) {
            this.isCIFPresent = false;
            this.errorMessage = '';
        }
    };
    ProviderComponent.prototype.clearSearch = function () {
        this.reloadPageService.reload();
    };
    /************************************ End General Functions *************************************************/
    /************************** Create, Update, Delete, Submit, Patch Form ****************************************************/
    ProviderComponent.prototype.addProvider = function () {
        var _this = this;
        this.providerService.add(this.validatingForm.value)
            .toPromise()
            .then(function (response) {
            _this.reloadPageService.reload();
            _this.isCIFPresent = false;
            document.querySelector('.modal-backdrop').remove();
        }).catch(function (error) {
            _this.isCIFPresent = true;
            _this.errorMessage = error.error.message;
            document.getElementById('addProvider-btn').setAttribute('data-backdrop', 'static');
        });
    };
    ProviderComponent.prototype.editProvider = function () {
        var _this = this;
        this.providerService.editById(this.id, this.validatingForm.value)
            .toPromise()
            .then(function (response) {
            _this.router.navigate(['providers']).then(function () { return _this.reloadPageService.reload(); });
            _this.isAddMode = true;
            _this.isCIFPresent = false;
            document.querySelector('.modal-backdrop').remove();
        }).catch(function (error) {
            _this.isCIFPresent = true;
            _this.errorMessage = error.error.message;
            document.getElementById('editProvider-btn').setAttribute('data-backdrop', 'static');
        });
    };
    ProviderComponent.prototype.deleteProvider = function (provider) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_8___default().fire({
            title: 'Esti sigur?',
            text: "Inregistrarea va fi stearsa definitiv si produsele asociate!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Da, sterge!'
        }).then(function (willDelete) {
            if (willDelete.isConfirmed) {
                _this.providerService.deleteById(Number(provider.id)).subscribe(function (response) {
                    _this.reloadPageService.reload();
                }, function (error) {
                    _this.errorMessage = error.error.message;
                });
            }
        });
    };
    ProviderComponent.prototype.onSubmit = function () {
        if (this.validatingForm.invalid) {
            return;
        }
        if (this.isAddMode) {
            this.addProvider();
        }
        else {
            this.editProvider();
        }
    };
    ProviderComponent.prototype.patchForm = function (provider) {
        this.isAddMode = false;
        this.validatingForm.patchValue(provider);
        this.router.navigate(['providers'], { queryParams: { id: provider.id } });
    };
    ProviderComponent.prototype.getRouting = function () {
        var _this = this;
        this.activatedRoute.queryParams.subscribe(function (param) {
            _this.id = param['id'];
        });
        if (!this.id) {
            this.isAddMode = true;
        }
        else {
            this.isAddMode = false;
        }
    };
    ProviderComponent.ctorParameters = function () { return [
        { type: _services_accounting_provider_service__WEBPACK_IMPORTED_MODULE_7__.ProviderService },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormBuilder },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.Router },
        { type: _services_reload_page_service__WEBPACK_IMPORTED_MODULE_9__.ReloadPageService }
    ]; };
    ProviderComponent = __decorate([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
            selector: 'app-provider',
            template: _raw_loader_provider_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
            styles: [_provider_component_css__WEBPACK_IMPORTED_MODULE_1__.default, _assets_css_modal_filter_css__WEBPACK_IMPORTED_MODULE_2__.default, _assets_css_table_format_css__WEBPACK_IMPORTED_MODULE_3__.default, _assets_css_tab_pane_custom_css__WEBPACK_IMPORTED_MODULE_4__.default, _assets_css_fav_icons_custom_css__WEBPACK_IMPORTED_MODULE_5__.default, _assets_css_pagination_custom_css__WEBPACK_IMPORTED_MODULE_6__.default]
        })
    ], ProviderComponent);
    return ProviderComponent;
}());



/***/ }),

/***/ 93984:
/*!********************************************************!*\
  !*** ./src/app/accounting/provider/provider.module.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProviderModule": function() { return /* binding */ ProviderModule; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-select/ng-select */ 86640);
/* harmony import */ var _provider_routing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./provider.routing */ 93386);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _provider_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./provider.component */ 35168);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var ProviderModule = /** @class */ (function () {
    function ProviderModule() {
    }
    ProviderModule = __decorate([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
            declarations: [_provider_component__WEBPACK_IMPORTED_MODULE_1__.ProviderComponent],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
                _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(_provider_routing__WEBPACK_IMPORTED_MODULE_0__.ProviderRoutes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__.NgSelectModule
            ]
        })
    ], ProviderModule);
    return ProviderModule;
}());



/***/ }),

/***/ 93386:
/*!*********************************************************!*\
  !*** ./src/app/accounting/provider/provider.routing.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProviderRoutes": function() { return /* binding */ ProviderRoutes; }
/* harmony export */ });
/* harmony import */ var _provider_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./provider.component */ 35168);

var ProviderRoutes = [{
        path: '',
        children: [{
                path: 'providers',
                component: _provider_component__WEBPACK_IMPORTED_MODULE_0__.ProviderComponent
            }]
    }];


/***/ }),

/***/ 110:
/*!*************************************************!*\
  !*** ./src/app/services/reload-page.service.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReloadPageService": function() { return /* binding */ ReloadPageService; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ 39895);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ReloadPageService = /** @class */ (function () {
    function ReloadPageService(router) {
        this.router = router;
    }
    ReloadPageService.prototype.reload = function () {
        var _this = this;
        var currentUrl = this.router.url;
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(function () {
            _this.router.navigate([currentUrl]).then();
        });
    };
    ReloadPageService.prototype.skipLocation = function (url) {
        this.router.navigateByUrl(url, { skipLocationChange: false }).then();
    };
    ReloadPageService.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_0__.Router }
    ]; };
    ReloadPageService = __decorate([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
            providedIn: 'root'
        })
    ], ReloadPageService);
    return ReloadPageService;
}());



/***/ }),

/***/ 28687:
/*!************************************************************!*\
  !*** ./src/app/accounting/provider/provider.component.css ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm92aWRlci5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ 16583:
/*!**********************************************!*\
  !*** ./src/assets/css/_fav_icons_custom.css ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/********************** Fav-Icons-Custom **********************************/\r\n\r\n.fav-icon {\r\n    width: 36px;\r\n}\r\n\r\n.fav-icon-small {\r\n    width: 20px;\r\n}\r\n\r\n.fav-icon-number-of {\r\n    width: 12px;\r\n}\r\n\r\n.docs-design {\r\n    padding: 10px;\r\n    cursor: pointer;\r\n}\r\n\r\n.fav-icon-small-doc {\r\n    width: 30px;\r\n}\r\n\r\n/********************** End Fav-Icons-Custom **********************************/\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9mYXZfaWNvbnNfY3VzdG9tLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwyRUFBMkU7O0FBRTNFO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBQ0EsK0VBQStFIiwiZmlsZSI6Il9mYXZfaWNvbnNfY3VzdG9tLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKioqKioqKioqKioqKioqKioqKioqIEZhdi1JY29ucy1DdXN0b20gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbi5mYXYtaWNvbiB7XHJcbiAgICB3aWR0aDogMzZweDtcclxufVxyXG5cclxuLmZhdi1pY29uLXNtYWxsIHtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG59XHJcblxyXG4uZmF2LWljb24tbnVtYmVyLW9mIHtcclxuICAgIHdpZHRoOiAxMnB4O1xyXG59XHJcblxyXG4uZG9jcy1kZXNpZ24ge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmZhdi1pY29uLXNtYWxsLWRvYyB7XHJcbiAgICB3aWR0aDogMzBweDtcclxufVxyXG4vKioqKioqKioqKioqKioqKioqKioqKiBFbmQgRmF2LUljb25zLUN1c3RvbSAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4iXX0= */");

/***/ }),

/***/ 78783:
/*!******************************************!*\
  !*** ./src/assets/css/_modal_filter.css ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/************************************MODAL RIGHT**********************/\r\n\r\n.modal .modal-dialog-aside {\r\n    width: 350px;\r\n    max-width: 80%;\r\n    height: 100vh;\r\n    padding-top: inherit;\r\n    margin: 0;\r\n    transform: translate(0);\r\n    transition: transform 0.2s;\r\n}\r\n\r\n.modal .modal-dialog-aside .modal-content {\r\n    height: 100vh;\r\n    border: 0;\r\n    border-radius: 0;\r\n}\r\n\r\n.modal .modal-dialog-aside .modal-content .modal-body {\r\n    overflow-y: auto;\r\n}\r\n\r\n.modal.fixed-left .modal-dialog-aside {\r\n    margin-left: auto;\r\n    transform: translateX(100%);\r\n}\r\n\r\n.modal.fixed-right .modal-dialog-aside {\r\n    margin-right: auto;\r\n    transform: translateX(-100%);\r\n}\r\n\r\n.modal.show .modal-dialog-aside {\r\n    transform: translateX(0);\r\n}\r\n\r\n.card {\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.card-header {\r\n    background: transparent;\r\n    border: none;\r\n}\r\n\r\n.card-header button {\r\n    text-decoration: none;\r\n    font-size: 1.1rem;\r\n    font-weight: 500;\r\n    color: black;\r\n    width: 100%;\r\n    text-align: left;\r\n}\r\n\r\n.card-header .btn:focus {\r\n    box-shadow: none;\r\n}\r\n\r\n.card-body {\r\n    padding: 0 20px 5px 20px;\r\n}\r\n\r\n.card-header button[aria-expanded='true'] .arrow:after {\r\n    font-family: FontAwesome;\r\n    content: \"\\f053\";\r\n    display: inline-block;\r\n    padding-left: 10px;\r\n    padding-right: 10px;\r\n    vertical-align: middle;\r\n    float: right;\r\n    transition: 1s;\r\n}\r\n\r\n.card-header button[aria-expanded='false'] .arrow:after {\r\n    font-family: FontAwesome;\r\n    content: \"\\f078\";\r\n    display: inline-block;\r\n    padding-left: 10px;\r\n    padding-right: 10px;\r\n    vertical-align: middle;\r\n    float: right;\r\n    transition: 1s;\r\n}\r\n\r\n.card-body .form-check-label {\r\n    font-weight: normal;\r\n}\r\n\r\n/************************************END MODAL RIGHT**********************/\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9tb2RhbF9maWx0ZXIuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHNFQUFzRTs7QUFFdEU7SUFDSSxZQUFZO0lBQ1osY0FBYztJQUNkLGFBQWE7SUFDYixvQkFBb0I7SUFDcEIsU0FBUztJQUNULHVCQUF1QjtJQUN2QiwwQkFBMEI7QUFDOUI7O0FBQ0E7SUFDSSxhQUFhO0lBQ2IsU0FBUztJQUNULGdCQUFnQjtBQUNwQjs7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQiwyQkFBMkI7QUFDL0I7O0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsNEJBQTRCO0FBQ2hDOztBQUNBO0lBQ0ksd0JBQXdCO0FBQzVCOztBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUNBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFlBQVk7QUFDaEI7O0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osV0FBVztJQUNYLGdCQUFnQjtBQUNwQjs7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFDQTtJQUNJLHdCQUF3QjtBQUM1Qjs7QUFDQTtJQUNJLHdCQUF3QjtJQUN4QixnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixjQUFjO0FBQ2xCOztBQUNBO0lBQ0ksd0JBQXdCO0lBQ3hCLGdCQUFnQjtJQUNoQixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLGNBQWM7QUFDbEI7O0FBQ0E7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUEsMEVBQTBFIiwiZmlsZSI6Il9tb2RhbF9maWx0ZXIuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKk1PREFMIFJJR0hUKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbi5tb2RhbCAubW9kYWwtZGlhbG9nLWFzaWRlIHtcclxuICAgIHdpZHRoOiAzNTBweDtcclxuICAgIG1heC13aWR0aDogODAlO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIHBhZGRpbmctdG9wOiBpbmhlcml0O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCk7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycztcclxufVxyXG4ubW9kYWwgLm1vZGFsLWRpYWxvZy1hc2lkZSAubW9kYWwtY29udGVudCB7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxufVxyXG4ubW9kYWwgLm1vZGFsLWRpYWxvZy1hc2lkZSAubW9kYWwtY29udGVudCAubW9kYWwtYm9keSB7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG59XHJcbi5tb2RhbC5maXhlZC1sZWZ0IC5tb2RhbC1kaWFsb2ctYXNpZGUge1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XHJcbn1cclxuLm1vZGFsLmZpeGVkLXJpZ2h0IC5tb2RhbC1kaWFsb2ctYXNpZGUge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcclxufVxyXG4ubW9kYWwuc2hvdyAubW9kYWwtZGlhbG9nLWFzaWRlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxufVxyXG4uY2FyZCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcbi5jYXJkLWhlYWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxufVxyXG4uY2FyZC1oZWFkZXIgYnV0dG9uIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG4uY2FyZC1oZWFkZXIgLmJ0bjpmb2N1cyB7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcbi5jYXJkLWJvZHkge1xyXG4gICAgcGFkZGluZzogMCAyMHB4IDVweCAyMHB4O1xyXG59XHJcbi5jYXJkLWhlYWRlciBidXR0b25bYXJpYS1leHBhbmRlZD0ndHJ1ZSddIC5hcnJvdzphZnRlciB7XHJcbiAgICBmb250LWZhbWlseTogRm9udEF3ZXNvbWU7XHJcbiAgICBjb250ZW50OiBcIlxcZjA1M1wiO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICB0cmFuc2l0aW9uOiAxcztcclxufVxyXG4uY2FyZC1oZWFkZXIgYnV0dG9uW2FyaWEtZXhwYW5kZWQ9J2ZhbHNlJ10gLmFycm93OmFmdGVyIHtcclxuICAgIGZvbnQtZmFtaWx5OiBGb250QXdlc29tZTtcclxuICAgIGNvbnRlbnQ6IFwiXFxmMDc4XCI7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIHRyYW5zaXRpb246IDFzO1xyXG59XHJcbi5jYXJkLWJvZHkgLmZvcm0tY2hlY2stbGFiZWwge1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxufVxyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKkVORCBNT0RBTCBSSUdIVCoqKioqKioqKioqKioqKioqKioqKiovXHJcbiJdfQ== */");

/***/ }),

/***/ 19746:
/*!***********************************************!*\
  !*** ./src/assets/css/_pagination_custom.css ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/********************** Pagination Custom *************************************/\r\n\r\n.paginator{\r\n    font-family: 'Lato', sans-serif;\r\n    font-size: 15px;\r\n}\r\n\r\n.paginator ::ng-deep .ngx-pagination .current {\r\n    background: #51cbce;\r\n    border-radius: 4px;\r\n    padding-left: 9px;\r\n    padding-right: 9px;\r\n}\r\n\r\n/********************** End Pagination Custom *************************************/\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9wYWdpbmF0aW9uX2N1c3RvbS5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsK0VBQStFOztBQUUvRTtJQUNJLCtCQUErQjtJQUMvQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBLG1GQUFtRiIsImZpbGUiOiJfcGFnaW5hdGlvbl9jdXN0b20uY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKioqKioqKioqKioqKioqKioqKiogUGFnaW5hdGlvbiBDdXN0b20gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbi5wYWdpbmF0b3J7XHJcbiAgICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG59XHJcblxyXG4ucGFnaW5hdG9yIDo6bmctZGVlcCAubmd4LXBhZ2luYXRpb24gLmN1cnJlbnQge1xyXG4gICAgYmFja2dyb3VuZDogIzUxY2JjZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIHBhZGRpbmctbGVmdDogOXB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogOXB4O1xyXG59XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKiBFbmQgUGFnaW5hdGlvbiBDdXN0b20gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuIl19 */");

/***/ }),

/***/ 88360:
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/accounting/provider/provider.component.html ***!
  \***************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <!-- Nav tabs -->\n            <ul class=\"nav nav-tabs-navigation custom-tab-pane\" id=\"providerTab\" role=\"tablist\">\n                <li class=\"nav-item\">\n                    <a class=\"nav-link active\" id=\"provider-tab\" data-toggle=\"tab\" href=\"#provider\" role=\"tab\"\n                       aria-controls=\"provider\" aria-selected=\"true\">Toate produsele</a>\n                </li>\n            </ul>\n            <!-- End Nav tabs -->\n\n            <div class=\"tab-content\" id=\"providerTabContent\">\n\n                <!-- First Tab Content -->\n                <div class=\"tab-pane fade show active mx-3\" id=\"provider\" role=\"tabpanel\"\n                     aria-labelledby=\"provider-tab\">\n                    <div class=\"card card-custom\">\n                        <div class=\"card-header\">\n                            <h4 class=\"card-title\">Furnizori</h4>\n                        </div>\n                        <!-- Content -->\n                        <div class=\"card-body\">\n                            <div>\n                                <div class=\"row align-items-center float-right\">\n                                    <div class=\"col-auto\">\n                                        <input #inputSearch (keydown.enter)=\"getEventSearchResult($event)\"\n                                               class=\"form-control form-control-sm\"\n                                               placeholder=\"Cautare...\">\n                                    </div>\n                                    <div class=\"col-auto btn-group-sm\" role=\"group\">\n\n                                        <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\"\n                                                data-target=\"#modalProvider\">\n                                            <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n                                        </button>\n                                        <button type=\"button\" class=\"btn btn-info\" (click)=\"clearSearch()\">\n                                            <i class=\"fa fa-refresh\" aria-hidden=\"true\"></i>\n                                        </button>\n                                    </div>\n                                </div>\n                                <!--        Here you can write extra buttons/actions for the toolbar              -->\n                            </div>\n                            <div class=\"table-responsive\">\n                                <table id=\"datatable\" class=\"table table-striped table-bordered table-format\"\n                                       width=\"100%\">\n                                    <thead>\n                                    <tr>\n                                        <th scope=\"col\">Nume furnizor</th>\n                                        <th scope=\"col\">CIF</th>\n                                        <th scope=\"col\">Registrul Comertului</th>\n                                        <th scope=\"col\">Cod furnizor</th>\n                                        <th scope=\"col\">Platitor TVA</th>\n                                        <th scope=\"col\">Actiune</th>\n                                    </tr>\n                                    </thead>\n                                    <tbody>\n\n                                    <tr *ngFor=\"let provider of providerList\">\n                                        <td>{{provider.name}}</td>\n                                        <td>{{provider.cif}}</td>\n                                        <td>{{provider.tradeRegister}}</td>\n                                        <td>{{provider.providerCode}}</td>\n                                        <td>{{provider.vatPayer === true ? 'Da' : 'Nu'}}</td>\n                                        <td>\n                                            <a type=\"button\" class=\"btn btn-warning btn-link btn-icon btn-sm edit\"\n                                               (click)=\"patchForm(provider)\" data-toggle=\"modal\"\n                                               data-target=\"#modalProvider\">\n                                                <i class=\"fa fa-edit\"></i>\n                                            </a>\n                                            <a type=\"button\" class=\"btn btn-danger btn-link btn-icon btn-sm remove\"\n                                               (click)=\"deleteProvider(provider)\">\n                                                <i class=\"fa fa-times\"></i>\n                                            </a>\n                                        </td>\n                                    </tr>\n                                    </tbody>\n                                </table>\n                            </div>\n                        </div>\n                        <!-- end content-->\n                    </div>\n                </div>\n                <!-- End First Tab Content -->\n\n            </div>\n        </div>\n    </div>\n</div>\n\n<!-- Modal Add/Edit Provider -->\n<div class=\"modal fade\" id=\"modalProvider\" data-backdrop=\"static\" data-keyboard=\"false\"\n     aria-labelledby=\"staticBackdropLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-xl\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h5 *ngIf=\"isAddMode\" class=\"modal-title\" id=\"staticBackdropLabel\"><img class=\"fav-icon\"\n                                                                                        src=\"assets/img/icons/provider.ico\"/>\n                    Adauga furnizor</h5>\n                <h5 *ngIf=\"!isAddMode\" class=\"modal-title\" id=\"editStaticBackdropLabel\"><img class=\"fav-icon\"\n                                                                                             src=\"assets/img/icons/provider.ico\"/>\n                    Editare\n                    furnizor</h5>\n                <button (click)=\"closeModal()\" type=\"button\" class=\"close\" data-dismiss=\"modal\"\n                        aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <div class=\"modal-body\">\n                <form [formGroup]=\"validatingForm\" (ngSubmit)=\"onSubmit()\">\n                    <div class=\"row\">\n                        <div class=\"form-group col\">\n                            <label for=\"name\"><i class=\"fas fa-file-signature\"></i> Nume furnizor</label>\n                            <input type=\"text\" class=\"form-control\" id=\"name\" formControlName=\"name\">\n                        </div>\n                        <div class=\"form-group col\">\n                            <label for=\"cif\"><i class=\"fas fa-sort-numeric-up\"></i> CIF</label>\n                            <input type=\"text\" class=\"form-control\" id=\"cif\" formControlName=\"cif\">\n                        </div>\n                        <div *ngIf=\"isCIFPresent\" class=\"form-group alert alert-warning\">\n                            <span>{{errorMessage}}</span>\n                        </div>\n                        <div class=\"form-group col\">\n                            <label for=\"tradeRegister\"><i class=\"fas fa-swatchbook\"></i> Registrul comertului</label>\n                            <input type=\"text\" class=\"form-control\" id=\"tradeRegister\" formControlName=\"tradeRegister\">\n                        </div>\n                        <div class=\"form-group col\">\n                            <label for=\"providerCode\"><i class=\"fas fa-barcode\"></i> Cod furnizor</label>\n                            <input type=\"text\" class=\"form-control\" id=\"providerCode\" formControlName=\"providerCode\">\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"form-group col\">\n                            <label for=\"vatPayer\"><i class=\"fa fa-money fa-sm\"></i> Platitor TVA</label>\n                            <select id=\"vatPayer\" class=\"form-control\" formControlName=\"vatPayer\">\n                                <option value=\"\" disabled selected>Platitor TVA</option>\n                                <option value=\"true\">DA</option>\n                                <option value=\"false\">NU</option>\n                            </select>\n                        </div>\n                        <div class=\"form-group col\">\n                            <label for=\"city\"><i class=\"fas fa-city\"></i> Localitate</label>\n                            <input type=\"city\" class=\"form-control\" id=\"city\" formControlName=\"city\">\n                        </div>\n                        <div class=\"form-group col\">\n                            <label for=\"county\"><i class=\"fas fa-city\"></i> Judet</label>\n                            <ng-select id=\"county\" formControlName=\"county\">\n                                <ng-option *ngFor=\"let county of countyList\" [value]=\"county\">{{county}}</ng-option>\n                            </ng-select>\n                        </div>\n                        <div class=\"form-group col\">\n                            <label for=\"country\"><i class=\"far fa-flag\"></i> Tara</label>\n                            <input type=\"text\" class=\"form-control\" id=\"country\" formControlName=\"country\">\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"form-group col\">\n                            <label for=\"streetAddress\"><img class=\"fav-icon-small\" src=\"assets/img/icons/address.ico\"/> Adresa</label>\n                            <input type=\"text\" class=\"form-control\" id=\"streetAddress\" formControlName=\"streetAddress\">\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"form-group col\">\n                            <label for=\"iban\"><i class=\"fas fa-money-check\"></i> IBAN</label>\n                            <input type=\"text\" class=\"form-control\" id=\"iban\" formControlName=\"iban\">\n                        </div>\n                        <div class=\"form-group col\">\n                            <label for=\"bank\"><img class=\"fav-icon-small\" src=\"assets/img/icons/bank.ico\"/> Banca</label>\n                            <input type=\"text\" class=\"form-control\" id=\"bank\" formControlName=\"bank\">\n                        </div>\n                        <div class=\"form-group col\">\n                            <label for=\"phoneNumber\"><i class=\"fas fa-phone\"></i> Numar telefon</label>\n                            <input type=\"text\" class=\"form-control\" id=\"phoneNumber\" formControlName=\"phoneNumber\">\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"form-group col\">\n                            <label for=\"email\"><i class=\"far fa-envelope\"></i> Email furnizor</label>\n                            <input type=\"text\" class=\"form-control\" id=\"email\" formControlName=\"email\">\n                        </div>\n                        <div class=\"form-group col\">\n                            <label for=\"personOfContact\"><i class=\"fas fa-user-clock\"></i> Persoana de contact</label>\n                            <input type=\"text\" class=\"form-control\" id=\"personOfContact\" formControlName=\"personOfContact\">\n                        </div>\n                    </div>\n                    <div class=\"modal-footer\">\n                        <button (click)=\"closeModal()\" type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">\n                            Inchide\n                        </button>\n                        <button id=\"addProvider-btn\" *ngIf=\"isAddMode\" type=\"submit\" class=\"btn btn-primary\"\n                                data-target=\"#modalProvider\"\n                                [disabled]=\"validatingForm.invalid\">Adauga\n                        </button>\n                        <button id=\"editProvider-btn\" *ngIf=\"!isAddMode\" type=\"submit\" class=\"btn btn-success\"\n                                data-target=\"#modalProvider\"\n                                [disabled]=\"validatingForm.invalid\">Salveaza modificarile\n                        </button>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- Modal End Add/Edit Provider-->\n");

/***/ })

}]);
//# sourceMappingURL=src_app_accounting_provider_provider_module_ts.js.map