(self["webpackChunkpaper_dashboard_pro_angular"] = self["webpackChunkpaper_dashboard_pro_angular"] || []).push([["src_app_accounting_company-data_company-data_module_ts"],{

/***/ 4589:
/*!*******************************************************************!*\
  !*** ./src/app/accounting/company-data/company-data.component.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompanyDataComponent": function() { return /* binding */ CompanyDataComponent; }
/* harmony export */ });
/* harmony import */ var _raw_loader_company_data_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./company-data.component.html */ 63048);
/* harmony import */ var _company_data_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./company-data.component.css */ 85497);
/* harmony import */ var _assets_css_table_format_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../assets/css/_table_format.css */ 25824);
/* harmony import */ var _assets_css_tab_pane_custom_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../assets/css/_tab_pane_custom.css */ 17532);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _services_accounting_company_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/accounting/company-data.service */ 61873);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var CompanyDataComponent = /** @class */ (function () {
    function CompanyDataComponent(companyService, formBuilder) {
        this.companyService = companyService;
        this.formBuilder = formBuilder;
        this.errorMessage = '';
    }
    CompanyDataComponent.prototype.ngOnInit = function () {
        this.getCompanyData();
        this.companyForm();
    };
    CompanyDataComponent.prototype.companyForm = function () {
        this.validatingForm = this.formBuilder.group({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(''),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required),
            cif: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required),
            tradeRegister: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required),
            socialCapital: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required),
            county: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required),
            streetAddress: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required),
            city: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required),
            vatPayer: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required),
            bank: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required),
            iban: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required),
            fax: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required),
            webAddress: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required),
            additionalData: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required)
        });
    };
    CompanyDataComponent.prototype.getCompanyData = function () {
        var _this = this;
        this.companyService.getAll().subscribe(function (data) {
            _this.validatingForm.patchValue(data);
            console.log(data);
        }, function (error) {
            _this.errorMessage = error.error.message;
        });
    };
    CompanyDataComponent.prototype.onSubmit = function () {
        var _this = this;
        var id = this.validatingForm.get('id').value;
        this.companyService.editById(Number(id), this.validatingForm.value)
            .toPromise()
            .then(function (response) {
            _this.getCompanyData();
        }).catch(function (error) {
            _this.errorMessage = error.error.message;
        });
    };
    CompanyDataComponent.ctorParameters = function () { return [
        { type: _services_accounting_company_data_service__WEBPACK_IMPORTED_MODULE_4__.CompanyDataService },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder }
    ]; };
    CompanyDataComponent = __decorate([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
            selector: 'app-company-data',
            template: _raw_loader_company_data_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
            styles: [_company_data_component_css__WEBPACK_IMPORTED_MODULE_1__.default, _assets_css_table_format_css__WEBPACK_IMPORTED_MODULE_2__.default, _assets_css_tab_pane_custom_css__WEBPACK_IMPORTED_MODULE_3__.default]
        })
    ], CompanyDataComponent);
    return CompanyDataComponent;
}());



/***/ }),

/***/ 85105:
/*!****************************************************************!*\
  !*** ./src/app/accounting/company-data/company-data.module.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompanyDataModule": function() { return /* binding */ CompanyDataModule; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _company_data_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./company-data.component */ 4589);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-select/ng-select */ 86640);
/* harmony import */ var _company_data_routing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./company-data.routing */ 84505);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var CompanyDataModule = /** @class */ (function () {
    function CompanyDataModule() {
    }
    CompanyDataModule = __decorate([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
            declarations: [_company_data_component__WEBPACK_IMPORTED_MODULE_0__.CompanyDataComponent],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
                _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(_company_data_routing__WEBPACK_IMPORTED_MODULE_1__.CompanyDataRoutes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__.NgSelectModule
            ]
        })
    ], CompanyDataModule);
    return CompanyDataModule;
}());



/***/ }),

/***/ 84505:
/*!*****************************************************************!*\
  !*** ./src/app/accounting/company-data/company-data.routing.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompanyDataRoutes": function() { return /* binding */ CompanyDataRoutes; }
/* harmony export */ });
/* harmony import */ var _company_data_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./company-data.component */ 4589);

var CompanyDataRoutes = [{
        path: '',
        children: [{
                path: 'company-data',
                component: _company_data_component__WEBPACK_IMPORTED_MODULE_0__.CompanyDataComponent
            }]
    }];


/***/ }),

/***/ 61873:
/*!*************************************************************!*\
  !*** ./src/app/services/accounting/company-data.service.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompanyDataService": function() { return /* binding */ CompanyDataService; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 92340);
/* harmony import */ var _environments_variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/variables */ 57438);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CompanyDataService = /** @class */ (function () {
    function CompanyDataService(http) {
        this.http = http;
        this.apiServerUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl;
    }
    CompanyDataService.prototype.getAll = function () {
        return this.http.get(this.apiServerUrl + "/api/company-data/profile");
    };
    CompanyDataService.prototype.add = function (companyData) {
        return this.http.post(this.apiServerUrl + "/api/company-data", companyData, _environments_variables__WEBPACK_IMPORTED_MODULE_1__.httpOptions);
    };
    CompanyDataService.prototype.editById = function (id, companyData) {
        return this.http.put(this.apiServerUrl + "/api/company-data/" + id, companyData, _environments_variables__WEBPACK_IMPORTED_MODULE_1__.httpOptions);
    };
    CompanyDataService.prototype.deleteById = function (id) {
        return this.http.delete(this.apiServerUrl + "/api/company-data/" + id);
    };
    CompanyDataService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient }
    ]; };
    CompanyDataService = __decorate([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
            providedIn: 'root'
        })
    ], CompanyDataService);
    return CompanyDataService;
}());



/***/ }),

/***/ 85497:
/*!********************************************************************!*\
  !*** ./src/app/accounting/company-data/company-data.component.css ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb21wYW55LWRhdGEuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ 63048:
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/accounting/company-data/company-data.component.html ***!
  \***********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <!-- Nav tabs -->\n            <ul class=\"nav nav-tabs-navigation custom-tab-pane\" id=\"companyTab\" role=\"contaTab\">\n                <li class=\"nav-item\">\n                    <a class=\"nav-link active\" id=\"company-data-tab\" data-toggle=\"tab\" href=\"#company-data\" role=\"tab\"\n                       aria-controls=\"company-data\" aria-selected=\"true\">Date companie</a>\n                </li>\n\n            </ul>\n            <!-- End Nav tabs -->\n\n            <div class=\"tab-content\" id=\"contaTabContent\">\n\n                <!-- First Tab Content -->\n                <div class=\"tab-pane fade show active mx-3\" id=\"company-data\" role=\"tabpanel\"\n                     aria-labelledby=\"companyTab\">\n                    <form [formGroup]=\"validatingForm\" (ngSubmit)=\"onSubmit()\">\n                        <div class=\"row\">\n                            <div class=\"col-md-6\">\n                                <div class=\"card card-custom\">\n                                    <div class=\"card-header\">\n                                        <h5 class=\"title\">OBLIGATORIU</h5>\n                                    </div>\n                                    <div class=\"card-body\">\n                                        <div class=\"row\">\n                                            <div class=\"col-md-12\">\n                                                <div class=\"form-group\">\n                                                    <label>Nume companie</label>\n                                                    <input type=\"text\" class=\"form-control\"\n                                                           placeholder=\"Nume Companie\" formControlName=\"name\">\n                                                </div>\n                                            </div>\n                                            <div class=\"col-md-12\">\n                                                <div class=\"form-group\">\n                                                    <label>CIF</label>\n                                                    <input type=\"text\" class=\"form-control\" placeholder=\"CIF\" formControlName=\"cif\">\n                                                </div>\n                                            </div>\n                                            <div class=\"col-md-12\">\n                                                <div class=\"form-group\">\n                                                    <label>Registrul Comertului</label>\n                                                    <input type=\"text\" class=\"form-control\"\n                                                           placeholder=\"Registrul Comertului\" formControlName=\"tradeRegister\">\n                                                </div>\n                                            </div>\n                                            <div class=\"col-md-12\">\n                                                <div class=\"form-group\">\n                                                    <label>Localitate</label>\n                                                    <input type=\"text\" class=\"form-control\"\n                                                           placeholder=\"Localitate\" formControlName=\"city\">\n                                                </div>\n                                            </div>\n                                            <div class=\"col-md-12\">\n                                                <div class=\"form-group\">\n                                                    <label>Adresa</label>\n                                                    <input type=\"text\" class=\"form-control\"\n                                                           placeholder=\"Adresa\" formControlName=\"streetAddress\">\n                                                </div>\n                                            </div>\n                                            <div class=\"col-md-12\">\n                                                <div class=\"form-group\">\n                                                    <label>Judet</label>\n                                                    <input type=\"text\" class=\"form-control\"\n                                                           placeholder=\"Judet\" formControlName=\"county\">\n                                                </div>\n                                            </div>\n                                            <div class=\"col-md-12\">\n                                                <div class=\"form-group\">\n                                                    <label>Capital Social</label>\n                                                    <input type=\"text\" class=\"form-control\"\n                                                           placeholder=\"Capital Social\" formControlName=\"socialCapital\">\n                                                </div>\n                                            </div>\n                                            <div class=\"col-md-12\">\n                                                <div class=\"form-group\">\n                                                    <label>Platitor TVA</label>\n                                                    <select type=\"radio\" class=\"form-control\" formControlName=\"vatPayer\">\n                                                        <option value=\"\" disabled selected>Platitor TVA</option>\n                                                        <option value=\"true\">DA</option>\n                                                        <option value=\"false\">NU</option>\n                                                    </select>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"col-md-6\">\n                                <div class=\"card card-custom\">\n                                    <div class=\"card-header\">\n                                        <h5 class=\"title\">OPTIONAL</h5>\n                                    </div>\n                                    <div class=\"card-body\">\n                                        <div class=\"row\">\n                                            <div class=\"col-md-12\">\n                                                <div class=\"form-group\">\n                                                    <label>Banca</label>\n                                                    <input type=\"text\" class=\"form-control\" placeholder=\"Banca\"\n                                                           formControlName=\"bank\">\n                                                </div>\n                                            </div>\n                                            <div class=\"col-md-12\">\n                                                <div class=\"form-group\">\n                                                    <label>IBAN</label>\n                                                    <input type=\"text\" class=\"form-control\" placeholder=\"IBAN\"\n                                                           formControlName=\"iban\">\n                                                </div>\n                                            </div>\n\n                                            <div class=\"col-md-12\">\n                                                <div class=\"form-group\">\n                                                    <label>Telefon</label>\n                                                    <input type=\"text\" class=\"form-control\" placeholder=\"Telefon\"\n                                                           formControlName=\"phone\">\n                                                </div>\n                                            </div>\n                                            <div class=\"col-md-12\">\n                                                <div class=\"form-group\">\n                                                    <label>FAX</label>\n                                                    <input type=\"text\" class=\"form-control\" placeholder=\"FAX\" formControlName=\"fax\">\n                                                </div>\n                                            </div>\n                                            <div class=\"col-md-12\">\n                                                <div class=\"form-group\">\n                                                    <label>Adresa de email</label>\n                                                    <input type=\"email\" class=\"form-control\" placeholder=\"Email\" formControlName=\"email\">\n                                                </div>\n                                            </div>\n                                            <div class=\"col-md-12\">\n                                                <div class=\"form-group\">\n                                                    <label>Adresa web</label>\n                                                    <input type=\"text\" class=\"form-control\"\n                                                           placeholder=\"Adresa web\" formControlName=\"webAddress\">\n                                                </div>\n                                            </div>\n                                            <div class=\"col-md-12\">\n                                                <div class=\"form-group\">\n                                                    <label>Date aditionale</label>\n                                                    <input type=\"text\" class=\"form-control\"\n                                                           placeholder=\"Date aditionale\" formControlName=\"additionalData\">\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"row mx-auto float-right\">\n                            <button type=\"submit\" class=\"btn btn-success\">Salveaza modificarile</button>\n                        </div>\n                    </form>\n                </div>\n            </div>\n\n        </div>\n    </div>\n</div>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_accounting_company-data_company-data_module_ts.js.map