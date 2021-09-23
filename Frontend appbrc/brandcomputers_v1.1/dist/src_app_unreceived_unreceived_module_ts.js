(self["webpackChunkpaper_dashboard_pro_angular"] = self["webpackChunkpaper_dashboard_pro_angular"] || []).push([["src_app_unreceived_unreceived_module_ts"],{

/***/ 42915:
/*!****************************************************!*\
  !*** ./src/app/unreceived/unreceived.component.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UnreceivedComponent": function() { return /* binding */ UnreceivedComponent; }
/* harmony export */ });
/* harmony import */ var _raw_loader_unreceived_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./unreceived.component.html */ 36808);
/* harmony import */ var _unreceived_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./unreceived.component.css */ 43315);
/* harmony import */ var _assets_css_unreceived_nir_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/css/unreceived_nir.css */ 85896);
/* harmony import */ var _assets_css_tab_pane_custom_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/css/_tab_pane_custom.css */ 17532);
/* harmony import */ var _assets_css_table_format_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/css/_table_format.css */ 25824);
/* harmony import */ var _assets_css_fav_icons_custom_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/css/_fav_icons_custom.css */ 16583);
/* harmony import */ var _assets_css_modal_filter_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../assets/css/_modal_filter.css */ 78783);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _services_accounting_nir_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/accounting/nir.service */ 23754);
/* harmony import */ var _services_accounting_provider_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/accounting/provider.service */ 95508);
/* harmony import */ var _services_token_storage_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/token-storage.service */ 11573);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var UnreceivedComponent = /** @class */ (function () {
    function UnreceivedComponent(formBuilder, nirService, providerService, tokenService) {
        this.formBuilder = formBuilder;
        this.nirService = nirService;
        this.providerService = providerService;
        this.tokenService = tokenService;
        this.toggleForm = false;
        this.providerList = [];
        this.errorMessage = '';
        this.unreceivedList = [];
        this.caseList = [];
        this.checkedList = [];
    }
    UnreceivedComponent.prototype.ngOnInit = function () {
        this.providerForm();
        this.nirForm();
        this.generateNir();
        this.getProviders();
        this.getUnreceived();
    };
    /********************************************** Generate NIR ***********************************************/
    UnreceivedComponent.prototype.nirForm = function () {
        this.validatingNirForm = this.formBuilder.group({
            nirNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required),
            date: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required),
            administration: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required),
            provider: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required),
            invoiceNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required),
            caseList: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl([]),
            cpuCoolerList: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl([]),
            fanCaseList: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl([]),
            memoryRamList: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl([]),
            motherboardList: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl([]),
            opticalUnitList: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl([]),
            powerSourceList: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl([]),
            processorList: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl([]),
            soundCardList: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl([]),
            storageList: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl([]),
            videoCardList: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl([]),
            computerList: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl([]),
            debitAccount: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required),
            vat: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required),
            nameOfEmployee: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(this.tokenService.getUser().firstName + " " + this.tokenService.getUser().lastName)
        });
    };
    UnreceivedComponent.prototype.onSubmit = function () {
        var _this = this;
        var _a = this.validatingNirForm.value.date, year = _a.year, month = _a.month, day = _a.day;
        this.validatingNirForm.get('date').setValue(new Date(year, month, day));
        this.nirService.add(this.validatingNirForm.value)
            .toPromise()
            .then(function (response) {
            _this.getUnreceived();
        }).catch(function (error) {
            _this.errorMessage = error.error.message;
        });
    };
    UnreceivedComponent.prototype.getUnreceived = function () {
        var _this = this;
        this.nirService.getAllUnreceived().subscribe(function (data) {
            _this.unreceivedList = data;
            var emptyUnreceivedList = document.getElementsByClassName('empty-unreceived-list')[0];
            var containerUnreceived = document.getElementsByClassName('container-unreceived')[0];
            var progressBar = document.getElementsByClassName('progress-bar')[0];
            if (_this.unreceivedList.length == 0) {
                emptyUnreceivedList.classList.remove('d-none');
                containerUnreceived.classList.add('d-none');
                progressBar.classList.add('d-none');
            }
            else {
                emptyUnreceivedList.classList.add('d-none');
                containerUnreceived.classList.remove('d-none');
                progressBar.classList.remove('d-none');
            }
            _this.generateNir();
        }, function (error) {
            _this.errorMessage = error.error.message;
        });
    };
    UnreceivedComponent.prototype.generateNir = function () {
        var _this = this;
        var step = document.getElementsByClassName('step');
        var prevBtn = document.getElementById('prev-btn');
        var nextBtn = document.getElementById('next-btn');
        var submitBtn = document.getElementById('submit-btn');
        var form = document.getElementsByTagName('form')[0];
        var preloader = document.getElementById('preloader-wrapper');
        var bodyElement = document.querySelector('body');
        var successDiv = document.getElementById('success');
        form.onsubmit = function () {
            return false;
        };
        var current_step = 0;
        var stepCount = 3;
        step[current_step].classList.add('d-block');
        if (current_step == 0) {
            prevBtn.classList.add('d-none');
            submitBtn.classList.add('d-none');
            nextBtn.classList.add('d-inline-block');
        }
        var progress = function (value) {
            var progressBar = document.getElementsByClassName('progress-bar')[0];
            progressBar.style.width = value + "%";
        };
        nextBtn.addEventListener('click', function () {
            _this.goUp.nativeElement.scrollIntoView();
            if (current_step == 0) {
                for (var _i = 0, _a = _this.checkedList; _i < _a.length; _i++) {
                    var obj = _a[_i];
                    _this.setCheckListOnForm(obj);
                }
            }
            current_step++;
            var previous_step = current_step - 1;
            if ((current_step > 0) && (current_step <= stepCount)) {
                prevBtn.classList.remove('d-none');
                prevBtn.classList.add('d-inline-block');
                step[current_step].classList.remove('d-none');
                step[current_step].classList.add('d-block');
                step[previous_step].classList.remove('d-block');
                step[previous_step].classList.add('d-none');
                if (current_step == stepCount) {
                    submitBtn.classList.remove('d-none');
                    submitBtn.classList.add('d-inline-block');
                    nextBtn.classList.remove('d-inline-block');
                    nextBtn.classList.add('d-none');
                }
            }
            else {
                if (current_step > stepCount) {
                    form.onsubmit = function () {
                        return true;
                    };
                }
            }
            progress((100 / stepCount) * current_step);
        });
        prevBtn.addEventListener('click', function () {
            if (current_step > 0) {
                current_step--;
                var previous_step = current_step + 1;
                prevBtn.classList.add('d-none');
                prevBtn.classList.add('d-inline-block');
                step[current_step].classList.remove('d-none');
                step[current_step].classList.add('d-block');
                step[previous_step].classList.remove('d-block');
                step[previous_step].classList.add('d-none');
                if (current_step < stepCount) {
                    submitBtn.classList.remove('d-inline-block');
                    submitBtn.classList.add('d-none');
                    nextBtn.classList.remove('d-none');
                    nextBtn.classList.add('d-inline-block');
                    prevBtn.classList.remove('d-none');
                    prevBtn.classList.add('d-inline-block');
                }
            }
            if (current_step == 0) {
                prevBtn.classList.remove('d-inline-block');
                prevBtn.classList.add('d-none');
            }
            progress((100 / stepCount) * current_step);
        });
    };
    UnreceivedComponent.prototype.noForm = function () {
        this.toggleForm = false;
    };
    UnreceivedComponent.prototype.yesForm = function () {
        this.toggleForm = true;
    };
    UnreceivedComponent.prototype.selectProduct = function (unreceived, event) {
        if (event.target.checked == true) {
            this.checkedList.push(unreceived);
            console.log(unreceived);
            console.log(this.checkedList);
        }
        else {
            for (var i = 0; i < this.checkedList.length; i++) {
                if (this.checkedList[i].id == unreceived.id && this.checkedList[i].category == unreceived.category) {
                    this.checkedList.splice(i, 1);
                }
            }
        }
    };
    UnreceivedComponent.prototype.reOccurance = function (category, formProperty) {
        this.validatingNirForm.get(formProperty).setValue(this.checkedList.filter(function (obj) { return obj.category == category; }));
    };
    UnreceivedComponent.prototype.setCheckListOnForm = function (unreceived) {
        var category = unreceived.category;
        switch (category) {
            case 'Case':
                this.reOccurance(category, 'caseList');
                break;
            case 'CPU Cooler':
                this.reOccurance(category, 'cpuCoolerList');
                break;
            case 'Fan Case':
                this.reOccurance(category, 'fanCaseList');
                break;
            case 'Memory RAM':
                this.reOccurance(category, 'memoryRamList');
                break;
            case 'Motherboard':
                this.reOccurance(category, 'motherboardList');
                break;
            case 'Optical Unit':
                this.reOccurance(category, 'opticalUnitList');
                break;
            case 'Power Source':
                this.reOccurance(category, 'powerSourceList');
                break;
            case 'Processor':
                this.reOccurance(category, 'processorList');
                break;
            case 'Sound Card':
                this.reOccurance(category, 'soundCardList');
                break;
            case 'Storage':
                this.reOccurance(category, 'storageList');
                break;
            case 'Video Card':
                this.reOccurance(category, 'videoCardList');
                break;
            case 'Computer':
                this.reOccurance(category, 'computerList');
                break;
        }
    };
    UnreceivedComponent.prototype.checkUncheckAll = function (event) {
        if (event.target.checked) {
            for (var item in this.unreceivedList) {
                this.unreceivedList[item].selected = event.target.checked;
                this.checkedList.push(this.unreceivedList[item]);
            }
        }
        else {
            for (var item in this.unreceivedList) {
                this.unreceivedList[item].selected = event.target.checked;
                this.checkedList = [];
            }
        }
    };
    /************************************* Provider Form, Add Provider, Get all Provider ***************************************/
    UnreceivedComponent.prototype.providerForm = function () {
        this.validatingProviderForm = this.formBuilder.group({
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
    UnreceivedComponent.prototype.getProviders = function () {
        var _this = this;
        this.providerService.getAll().subscribe(function (data) {
            _this.providerList = data;
        }, function (error) {
            _this.errorMessage = error.error.message;
        });
    };
    UnreceivedComponent.prototype.onSubmitProvider = function () {
        if (this.validatingProviderForm.invalid) {
            return;
        }
        if (this.toggleForm) {
            this.addProvider();
        }
    };
    UnreceivedComponent.prototype.addProvider = function () {
        var _this = this;
        this.providerService.add(this.validatingProviderForm.value)
            .toPromise()
            .then(function (response) {
            _this.isCIFPresent = false;
            _this.toggleForm = false;
            _this.validatingProviderForm.reset();
            _this.getProviders();
        }).catch(function (error) {
            _this.isCIFPresent = true;
            _this.toggleForm = true;
            _this.errorMessage = error.error.message;
        });
    };
    UnreceivedComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormBuilder },
        { type: _services_accounting_nir_service__WEBPACK_IMPORTED_MODULE_7__.NirService },
        { type: _services_accounting_provider_service__WEBPACK_IMPORTED_MODULE_8__.ProviderService },
        { type: _services_token_storage_service__WEBPACK_IMPORTED_MODULE_9__.TokenStorageService }
    ]; };
    UnreceivedComponent.propDecorators = {
        goUp: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChild, args: ['goUp',] }],
        moduleTable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChildren, args: ['moduleTable',] }]
    };
    UnreceivedComponent = __decorate([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
            selector: 'app-unreceived',
            template: _raw_loader_unreceived_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
            styles: [_unreceived_component_css__WEBPACK_IMPORTED_MODULE_1__.default, _assets_css_unreceived_nir_css__WEBPACK_IMPORTED_MODULE_2__.default, _assets_css_tab_pane_custom_css__WEBPACK_IMPORTED_MODULE_3__.default, _assets_css_table_format_css__WEBPACK_IMPORTED_MODULE_4__.default, _assets_css_fav_icons_custom_css__WEBPACK_IMPORTED_MODULE_5__.default, _assets_css_modal_filter_css__WEBPACK_IMPORTED_MODULE_6__.default]
        })
    ], UnreceivedComponent);
    return UnreceivedComponent;
}());



/***/ }),

/***/ 61109:
/*!*************************************************!*\
  !*** ./src/app/unreceived/unreceived.module.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UnreceivedModule": function() { return /* binding */ UnreceivedModule; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _unreceived_routing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./unreceived.routing */ 24365);
/* harmony import */ var _unreceived_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./unreceived.component */ 42915);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-select/ng-select */ 86640);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-pagination */ 72533);
/* harmony import */ var jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! jw-bootstrap-switch-ng2 */ 61137);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 12664);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var UnreceivedModule = /** @class */ (function () {
    function UnreceivedModule() {
    }
    UnreceivedModule = __decorate([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
                _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(_unreceived_routing__WEBPACK_IMPORTED_MODULE_0__.UnreceivedRoutes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__.NgSelectModule,
                ngx_pagination__WEBPACK_IMPORTED_MODULE_2__.NgxPaginationModule,
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbDatepickerModule,
                jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_9__.JwBootstrapSwitchNg2Module
            ],
            declarations: [
                _unreceived_component__WEBPACK_IMPORTED_MODULE_1__.UnreceivedComponent
            ]
        })
    ], UnreceivedModule);
    return UnreceivedModule;
}());



/***/ }),

/***/ 24365:
/*!**************************************************!*\
  !*** ./src/app/unreceived/unreceived.routing.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UnreceivedRoutes": function() { return /* binding */ UnreceivedRoutes; }
/* harmony export */ });
/* harmony import */ var _unreceived_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./unreceived.component */ 42915);

var UnreceivedRoutes = [{
        path: '',
        children: [{
                path: 'unreceived',
                component: _unreceived_component__WEBPACK_IMPORTED_MODULE_0__.UnreceivedComponent
            }]
    }];


/***/ }),

/***/ 43315:
/*!*****************************************************!*\
  !*** ./src/app/unreceived/unreceived.component.css ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1bnJlY2VpdmVkLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ 85896:
/*!*******************************************!*\
  !*** ./src/assets/css/unreceived_nir.css ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n/* Number Step */\r\n\r\n.number-step {\r\n    height: 35px;\r\n    width: 35px;\r\n    border-radius: 50%;\r\n    display: inline-block;\r\n    border: 2px solid #fbc658;\r\n    text-align: center;\r\n    font-weight: bold;\r\n    color: #2e353d;\r\n\r\n}\r\n\r\n.title-step {\r\n    margin-top: 20px;\r\n    margin-bottom: 30px;\r\n}\r\n\r\n.hide-input input {\r\n    display: contents;\r\n}\r\n\r\n.hide-input {\r\n    display: grid;\r\n    grid-template-areas: \"checkbox\";\r\n\r\n}\r\n\r\n.hide-input > * {\r\n    grid-area: checkbox;\r\n}\r\n\r\n/* TITLE */\r\n\r\n#title-container {\r\n    min-height: 460px;\r\n    height: 100%;\r\n    color: #fff;\r\n    background-color: #DC3545;\r\n    text-align: center;\r\n    padding: 105px 28px 28px 28px;\r\n    box-sizing: border-box;\r\n    position: relative;\r\n    box-shadow: 10px 8px 21px 0px rgba(204, 204, 204, 0.75);\r\n    -webkit-box-shadow: 10px 8px 21px 0px rgba(204, 204, 204, 0.75);\r\n    -moz-box-shadow: 10px 8px 21px 0px rgba(204, 204, 204, 0.75);\r\n}\r\n\r\n#title-container h2 {\r\n    font-size: 45px;\r\n    font-weight: 800;\r\n    color: #fff;\r\n    padding: 0;\r\n    margin-bottom: 0px;\r\n}\r\n\r\n#title-container h3 {\r\n    font-size: 25px;\r\n    font-weight: 600;\r\n    color: #82000a;\r\n    padding: 0;\r\n}\r\n\r\n#title-container p {\r\n    font-size: 13px;\r\n    padding: 0 25px;\r\n    line-height: 20px;\r\n}\r\n\r\n.nir-image {\r\n    width: 214px;\r\n    margin-bottom: 15px;\r\n}\r\n\r\n/* FORMS */\r\n\r\n.step {\r\n    display: none;\r\n}\r\n\r\n.step h4 {\r\n    margin: 0 0 26px 0;\r\n    padding: 0;\r\n    position: relative;\r\n    font-weight: 500;\r\n    font-size: 23px;\r\n    line-height: 1.6;\r\n}\r\n\r\n.progress {\r\n    border-radius: 0 !important;\r\n}\r\n\r\n.q__question {\r\n    position: relative;\r\n}\r\n\r\n.q__question:not(:last-child) {\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.question__input {\r\n    position: absolute;\r\n    left: -9999px;\r\n}\r\n\r\n.question__label {\r\n    position: relative;\r\n    display: block;\r\n    line-height: 40px;\r\n    padding: 5px 20px 5px 50px;\r\n    cursor: pointer;\r\n    transition: all 0.15s ease-in-out;\r\n}\r\n\r\n.question__label:hover {\r\n    border-color: #DC3545;\r\n}\r\n\r\n.question__label:before,\r\n.question__label:after {\r\n    position: absolute;\r\n    content: \"\";\r\n}\r\n\r\n.question__label:before {\r\n    top: 12px;\r\n    left: 10px;\r\n    width: 26px;\r\n    height: 26px;\r\n    border-radius: 50%;\r\n    background-color: #fff;\r\n    box-shadow: inset 0 0 0 1px #ced4da;\r\n    transition: all 0.15s ease-in-out;\r\n}\r\n\r\n.question__input:checked+.question__label:before {\r\n    background-color: #2e353d;\r\n    box-shadow: 0 0 0 0;\r\n}\r\n\r\n.question__input:checked+.question__label:after {\r\n    top: 22px;\r\n    left: 18px;\r\n    width: 10px;\r\n    height: 5px;\r\n    border-left: 2px solid #fbc658;\r\n    border-bottom: 2px solid #fbc658;\r\n    transform: rotate(-45deg);\r\n}\r\n\r\n.form-check-input:checked,\r\n.form-check-input:focus {\r\n    background-color: #DC3545 !important;\r\n    outline: none !important;\r\n    border: none !important;\r\n}\r\n\r\ninput:focus {\r\n    outline: none;\r\n}\r\n\r\n#input-container {\r\n    display: inline-block;\r\n    box-shadow: none !important;\r\n    margin-top: 36px !important;\r\n}\r\n\r\nlabel.form-check-label.radio-lb {\r\n    margin-right: 15px;\r\n}\r\n\r\n#q-box__buttons {\r\n    display: flex;\r\n    justify-content: center;\r\n\r\n}\r\n\r\n#prev-btn {\r\n    margin-right: 10px;\r\n\r\n}\r\n\r\ninput[type=\"text\"]:focus,\r\ninput[type=\"email\"]:focus {\r\n    border: 1px solid #DC3545;\r\n    border-radius: 5px;\r\n    outline: 0px !important;\r\n    -webkit-appearance: none;\r\n    box-shadow: none !important;\r\n    transition: all 0.15s ease-in-out;\r\n}\r\n\r\n.form-check-input:checked[type=radio],\r\n.form-check-input:checked[type=radio]:hover,\r\n.form-check-input:checked[type=radio]:focus,\r\n.form-check-input:checked[type=radio]:active {\r\n    border: none !important;\r\n    -webkit-outline: 0px !important;\r\n    box-shadow: none !important;\r\n}\r\n\r\n.form-check-input:focus,\r\ninput[type=\"radio\"]:hover {\r\n    box-shadow: none;\r\n    cursor: pointer !important;\r\n}\r\n\r\n#success {\r\n    display: none;\r\n}\r\n\r\n#success h4 {\r\n    color: #DC3545;\r\n}\r\n\r\n.back-link {\r\n    font-weight: 700;\r\n    color: #DC3545;\r\n    text-decoration: none;\r\n    font-size: 18px;\r\n}\r\n\r\n.back-link:hover {\r\n    color: #82000a;\r\n}\r\n\r\n/* PRELOADER */\r\n\r\n#preloader-wrapper {\r\n    width: 100%;\r\n    height: 100%;\r\n    z-index: 1000;\r\n    display: none;\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n}\r\n\r\n#preloader {\r\n    background-image: url('preloader.png');\r\n    width: 120px;\r\n    height: 119px;\r\n    border-top-color: #fff;\r\n    border-radius: 100%;\r\n    display: block;\r\n    position: relative;\r\n    top: 50%;\r\n    left: 50%;\r\n    margin: -75px 0 0 -75px;\r\n    -webkit-animation: spin 2s linear infinite;\r\n    animation: spin 2s linear infinite;\r\n    z-index: 1001;\r\n}\r\n\r\n@-webkit-keyframes spin {\r\n    0% {\r\n        transform: rotate(0deg);\r\n    }\r\n    100% {\r\n        transform: rotate(360deg);\r\n    }\r\n}\r\n\r\n@keyframes spin {\r\n    0% {\r\n        transform: rotate(0deg);\r\n    }\r\n    100% {\r\n        transform: rotate(360deg);\r\n    }\r\n}\r\n\r\n#preloader-wrapper .preloader-section {\r\n    width: 51%;\r\n    height: 100%;\r\n    position: fixed;\r\n    top: 0;\r\n    background: #F7F9FF;\r\n    z-index: 1000;\r\n}\r\n\r\n#preloader-wrapper .preloader-section.section-left {\r\n    left: 0\r\n}\r\n\r\n#preloader-wrapper .preloader-section.section-right {\r\n    right: 0;\r\n}\r\n\r\n.loaded #preloader-wrapper .preloader-section.section-left {\r\n    transform: translateX(-100%);\r\n    transition: all 0.7s 0.3s cubic-bezier(0.645, 0.045, 0.355, 1.000);\r\n}\r\n\r\n.loaded #preloader-wrapper .preloader-section.section-right {\r\n    transform: translateX(100%);\r\n    transition: all 0.7s 0.3s cubic-bezier(0.645, 0.045, 0.355, 1.000);\r\n}\r\n\r\n.loaded #preloader {\r\n    opacity: 0;\r\n    transition: all 0.3s ease-out;\r\n}\r\n\r\n.loaded #preloader-wrapper {\r\n    visibility: hidden;\r\n    transform: translateY(-100%);\r\n    transition: all 0.3s 1s ease-out;\r\n}\r\n\r\n.success-data-nir{\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    display: block;\r\n}\r\n\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVucmVjZWl2ZWRfbmlyLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLGdCQUFnQjs7QUFFaEI7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsY0FBYzs7QUFFbEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCOztBQUdBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLCtCQUErQjs7QUFFbkM7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBR0EsVUFBVTs7QUFFVjtJQUNJLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osV0FBVztJQUNYLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsNkJBQTZCO0lBQzdCLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsdURBQXVEO0lBQ3ZELCtEQUErRDtJQUMvRCw0REFBNEQ7QUFDaEU7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxVQUFVO0lBQ1Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsVUFBVTtBQUNkOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osbUJBQW1CO0FBQ3ZCOztBQUdBLFVBQVU7O0FBRVY7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7O0FBR0E7SUFDSSwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLDBCQUEwQjtJQUMxQixlQUFlO0lBQ2YsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBOztJQUVJLGtCQUFrQjtJQUNsQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixtQ0FBbUM7SUFJbkMsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1YsV0FBVztJQUNYLFdBQVc7SUFDWCw4QkFBOEI7SUFDOUIsZ0NBQWdDO0lBQ2hDLHlCQUF5QjtBQUM3Qjs7QUFFQTs7SUFFSSxvQ0FBb0M7SUFDcEMsd0JBQXdCO0lBQ3hCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsMkJBQTJCO0lBQzNCLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7O0FBRTNCOztBQUVBO0lBQ0ksa0JBQWtCOztBQUV0Qjs7QUFFQTs7SUFFSSx5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2Qix3QkFBd0I7SUFDeEIsMkJBQTJCO0lBSTNCLGlDQUFpQztBQUNyQzs7QUFFQTs7OztJQUlJLHVCQUF1QjtJQUN2QiwrQkFBK0I7SUFDL0IsMkJBQTJCO0FBQy9COztBQUVBOztJQUVJLGdCQUFnQjtJQUNoQiwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QscUJBQXFCO0lBQ3JCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBLGNBQWM7O0FBRWQ7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7SUFDYixhQUFhO0lBQ2IsZUFBZTtJQUNmLE1BQU07SUFDTixPQUFPO0FBQ1g7O0FBRUE7SUFDSSxzQ0FBdUQ7SUFDdkQsWUFBWTtJQUNaLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7SUFDVCx1QkFBdUI7SUFDdkIsMENBQTBDO0lBQzFDLGtDQUFrQztJQUNsQyxhQUFhO0FBQ2pCOztBQUVBO0lBQ0k7UUFHSSx1QkFBdUI7SUFDM0I7SUFDQTtRQUdJLHlCQUF5QjtJQUM3QjtBQUNKOztBQUVBO0lBQ0k7UUFHSSx1QkFBdUI7SUFDM0I7SUFDQTtRQUdJLHlCQUF5QjtJQUM3QjtBQUNKOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7SUFDWixlQUFlO0lBQ2YsTUFBTTtJQUNOLG1CQUFtQjtJQUNuQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLFFBQVE7QUFDWjs7QUFFQTtJQUNJLDRCQUE0QjtJQUM1QixrRUFBa0U7QUFDdEU7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0Isa0VBQWtFO0FBQ3RFOztBQUVBO0lBQ0ksVUFBVTtJQUNWLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQiw0QkFBNEI7SUFDNUIsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixjQUFjO0FBQ2xCIiwiZmlsZSI6InVucmVjZWl2ZWRfbmlyLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuLyogTnVtYmVyIFN0ZXAgKi9cclxuXHJcbi5udW1iZXItc3RlcCB7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICB3aWR0aDogMzVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNmYmM2NTg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiAjMmUzNTNkO1xyXG5cclxufVxyXG5cclxuLnRpdGxlLXN0ZXAge1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn1cclxuXHJcblxyXG4uaGlkZS1pbnB1dCBpbnB1dCB7XHJcbiAgICBkaXNwbGF5OiBjb250ZW50cztcclxufVxyXG5cclxuLmhpZGUtaW5wdXQge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwiY2hlY2tib3hcIjtcclxuXHJcbn1cclxuXHJcbi5oaWRlLWlucHV0ID4gKiB7XHJcbiAgICBncmlkLWFyZWE6IGNoZWNrYm94O1xyXG59XHJcblxyXG5cclxuLyogVElUTEUgKi9cclxuXHJcbiN0aXRsZS1jb250YWluZXIge1xyXG4gICAgbWluLWhlaWdodDogNDYwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNEQzM1NDU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxMDVweCAyOHB4IDI4cHggMjhweDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3gtc2hhZG93OiAxMHB4IDhweCAyMXB4IDBweCByZ2JhKDIwNCwgMjA0LCAyMDQsIDAuNzUpO1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAxMHB4IDhweCAyMXB4IDBweCByZ2JhKDIwNCwgMjA0LCAyMDQsIDAuNzUpO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiAxMHB4IDhweCAyMXB4IDBweCByZ2JhKDIwNCwgMjA0LCAyMDQsIDAuNzUpO1xyXG59XHJcblxyXG4jdGl0bGUtY29udGFpbmVyIGgyIHtcclxuICAgIGZvbnQtc2l6ZTogNDVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbn1cclxuXHJcbiN0aXRsZS1jb250YWluZXIgaDMge1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGNvbG9yOiAjODIwMDBhO1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG5cclxuI3RpdGxlLWNvbnRhaW5lciBwIHtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIHBhZGRpbmc6IDAgMjVweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG4ubmlyLWltYWdlIHtcclxuICAgIHdpZHRoOiAyMTRweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn1cclxuXHJcblxyXG4vKiBGT1JNUyAqL1xyXG5cclxuLnN0ZXAge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLnN0ZXAgaDQge1xyXG4gICAgbWFyZ2luOiAwIDAgMjZweCAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBmb250LXNpemU6IDIzcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMS42O1xyXG59XHJcblxyXG5cclxuLnByb2dyZXNzIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnFfX3F1ZXN0aW9uIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLnFfX3F1ZXN0aW9uOm5vdCg6bGFzdC1jaGlsZCkge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLnF1ZXN0aW9uX19pbnB1dCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAtOTk5OXB4O1xyXG59XHJcblxyXG4ucXVlc3Rpb25fX2xhYmVsIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgICBwYWRkaW5nOiA1cHggMjBweCA1cHggNTBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjE1cyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLnF1ZXN0aW9uX19sYWJlbDpob3ZlciB7XHJcbiAgICBib3JkZXItY29sb3I6ICNEQzM1NDU7XHJcbn1cclxuXHJcbi5xdWVzdGlvbl9fbGFiZWw6YmVmb3JlLFxyXG4ucXVlc3Rpb25fX2xhYmVsOmFmdGVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbn1cclxuXHJcbi5xdWVzdGlvbl9fbGFiZWw6YmVmb3JlIHtcclxuICAgIHRvcDogMTJweDtcclxuICAgIGxlZnQ6IDEwcHg7XHJcbiAgICB3aWR0aDogMjZweDtcclxuICAgIGhlaWdodDogMjZweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAxcHggI2NlZDRkYTtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMTVzIGVhc2UtaW4tb3V0O1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4xNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgMC4xNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4xNXMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbi5xdWVzdGlvbl9faW5wdXQ6Y2hlY2tlZCsucXVlc3Rpb25fX2xhYmVsOmJlZm9yZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmUzNTNkO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDAgMDtcclxufVxyXG5cclxuLnF1ZXN0aW9uX19pbnB1dDpjaGVja2VkKy5xdWVzdGlvbl9fbGFiZWw6YWZ0ZXIge1xyXG4gICAgdG9wOiAyMnB4O1xyXG4gICAgbGVmdDogMThweDtcclxuICAgIHdpZHRoOiAxMHB4O1xyXG4gICAgaGVpZ2h0OiA1cHg7XHJcbiAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkICNmYmM2NTg7XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2ZiYzY1ODtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XHJcbn1cclxuXHJcbi5mb3JtLWNoZWNrLWlucHV0OmNoZWNrZWQsXHJcbi5mb3JtLWNoZWNrLWlucHV0OmZvY3VzIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNEQzM1NDUgIWltcG9ydGFudDtcclxuICAgIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pbnB1dDpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4jaW5wdXQtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi10b3A6IDM2cHggIWltcG9ydGFudDtcclxufVxyXG5cclxubGFiZWwuZm9ybS1jaGVjay1sYWJlbC5yYWRpby1sYiB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbn1cclxuXHJcbiNxLWJveF9fYnV0dG9ucyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG59XHJcblxyXG4jcHJldi1idG4ge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG5cclxufVxyXG5cclxuaW5wdXRbdHlwZT1cInRleHRcIl06Zm9jdXMsXHJcbmlucHV0W3R5cGU9XCJlbWFpbFwiXTpmb2N1cyB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjREMzNTQ1O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgb3V0bGluZTogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjE1cyBlYXNlLWluLW91dDtcclxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuMTVzIGVhc2UtaW4tb3V0O1xyXG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuMTVzIGVhc2UtaW4tb3V0O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMTVzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4uZm9ybS1jaGVjay1pbnB1dDpjaGVja2VkW3R5cGU9cmFkaW9dLFxyXG4uZm9ybS1jaGVjay1pbnB1dDpjaGVja2VkW3R5cGU9cmFkaW9dOmhvdmVyLFxyXG4uZm9ybS1jaGVjay1pbnB1dDpjaGVja2VkW3R5cGU9cmFkaW9dOmZvY3VzLFxyXG4uZm9ybS1jaGVjay1pbnB1dDpjaGVja2VkW3R5cGU9cmFkaW9dOmFjdGl2ZSB7XHJcbiAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIC13ZWJraXQtb3V0bGluZTogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mb3JtLWNoZWNrLWlucHV0OmZvY3VzLFxyXG5pbnB1dFt0eXBlPVwicmFkaW9cIl06aG92ZXIge1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIGN1cnNvcjogcG9pbnRlciAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4jc3VjY2VzcyB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4jc3VjY2VzcyBoNCB7XHJcbiAgICBjb2xvcjogI0RDMzU0NTtcclxufVxyXG5cclxuLmJhY2stbGluayB7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgY29sb3I6ICNEQzM1NDU7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuXHJcbi5iYWNrLWxpbms6aG92ZXIge1xyXG4gICAgY29sb3I6ICM4MjAwMGE7XHJcbn1cclxuXHJcbi8qIFBSRUxPQURFUiAqL1xyXG5cclxuI3ByZWxvYWRlci13cmFwcGVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgei1pbmRleDogMTAwMDtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG59XHJcblxyXG4jcHJlbG9hZGVyIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL2ltZy9wcmVsb2FkZXIucG5nJyk7XHJcbiAgICB3aWR0aDogMTIwcHg7XHJcbiAgICBoZWlnaHQ6IDExOXB4O1xyXG4gICAgYm9yZGVyLXRvcC1jb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgbWFyZ2luOiAtNzVweCAwIDAgLTc1cHg7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogc3BpbiAycyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgICBhbmltYXRpb246IHNwaW4gMnMgbGluZWFyIGluZmluaXRlO1xyXG4gICAgei1pbmRleDogMTAwMTtcclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIHNwaW4ge1xyXG4gICAgMCUge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc3BpbiB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgIH1cclxufVxyXG5cclxuI3ByZWxvYWRlci13cmFwcGVyIC5wcmVsb2FkZXItc2VjdGlvbiB7XHJcbiAgICB3aWR0aDogNTElO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYmFja2dyb3VuZDogI0Y3RjlGRjtcclxuICAgIHotaW5kZXg6IDEwMDA7XHJcbn1cclxuXHJcbiNwcmVsb2FkZXItd3JhcHBlciAucHJlbG9hZGVyLXNlY3Rpb24uc2VjdGlvbi1sZWZ0IHtcclxuICAgIGxlZnQ6IDBcclxufVxyXG5cclxuI3ByZWxvYWRlci13cmFwcGVyIC5wcmVsb2FkZXItc2VjdGlvbi5zZWN0aW9uLXJpZ2h0IHtcclxuICAgIHJpZ2h0OiAwO1xyXG59XHJcblxyXG4ubG9hZGVkICNwcmVsb2FkZXItd3JhcHBlciAucHJlbG9hZGVyLXNlY3Rpb24uc2VjdGlvbi1sZWZ0IHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC43cyAwLjNzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxLjAwMCk7XHJcbn1cclxuXHJcbi5sb2FkZWQgI3ByZWxvYWRlci13cmFwcGVyIC5wcmVsb2FkZXItc2VjdGlvbi5zZWN0aW9uLXJpZ2h0IHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjdzIDAuM3MgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEuMDAwKTtcclxufVxyXG5cclxuLmxvYWRlZCAjcHJlbG9hZGVyIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcclxufVxyXG5cclxuLmxvYWRlZCAjcHJlbG9hZGVyLXdyYXBwZXIge1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIDFzIGVhc2Utb3V0O1xyXG59XHJcblxyXG4uc3VjY2Vzcy1kYXRhLW5pcntcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcblxyXG5cclxuIl19 */");

/***/ }),

/***/ 36808:
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/unreceived/unreceived.component.html ***!
  \********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div #goUp class=\"main-content\" xmlns=\"http://www.w3.org/1999/html\" xmlns=\"http://www.w3.org/1999/html\">\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <!-- Nav tabs -->\n            <ul class=\"nav nav-tabs-navigation custom-tab-pane\" id=\"unreceivedTab\" role=\"tablist\">\n                <li class=\"nav-item\">\n                    <a class=\"nav-link active\" id=\"unreceived-tab\" data-toggle=\"tab\" href=\"#unreceived\" role=\"tab\"\n                       aria-controls=\"unreceived\" aria-selected=\"true\">Toate produsele</a>\n                </li>\n            </ul>\n\n            <div class=\"tab-content\" id=\"unreceivedTabContent\">\n                <!-- First Tab Content -->\n                <div class=\"tab-pane fade show active mx-3\" id=\"unreceived\" role=\"tabpanel\"\n                     aria-labelledby=\"unreceived-tab\">\n                    <div class=\"card card-custom\">\n                        <div class=\"card-header\">\n                            <h4 class=\"card-title\">Nereceptionate</h4>\n                        </div>\n                        <!-- Content -->\n                        <div class=\"card-body\">\n                            <div class=\"progress\">\n                                <div aria-valuemax=\"100\" aria-valuemin=\"0\" aria-valuenow=\"50\"\n                                     class=\"progress-bar progress-bar-striped progress-bar-animated bg-success\"\n                                     role=\"progressbar\" style=\"width: 0%\"></div>\n                            </div>\n\n                            <!-- FORMS -->\n\n                            <div class=\"col-md-12 container-unreceived\">\n                                <div>\n                                    <form [formGroup]=\"validatingNirForm\" class=\"needs-validation\" id=\"form-wrapper\"\n                                          name=\"form-wrapper\" (ngSubmit)=\"onSubmit()\">\n                                        <div id=\"steps-container\">\n\n                                            <!-- First Step -->\n                                            <div class=\"step d-block\">\n                                                <h5 class=\"title-step\"><span class=\"number-step\">1</span> Selecteaza\n                                                    produsele: </h5>\n                                                <div class=\"table-responsive\">\n\n\n                                                    <table class=\"table table-striped table-format\">\n                                                        <thead class=\"text-primary\">\n                                                        <th>\n                                                            <div class=\"form-check \">\n                                                                <label class=\"form-check-label hide-input\">\n                                                                    <input (change)=\"checkUncheckAll($event)\"\n                                                                           class=\"form-check-input\" type=\"checkbox\">\n                                                                    <span class=\"form-check-sign\"></span>\n                                                                </label>\n                                                            </div>\n                                                        </th>\n                                                        <th>Cod Produs</th>\n                                                        <th>Nume Produs</th>\n                                                        <th>Cantitate</th>\n                                                        <th>Pret intrare</th>\n                                                        </thead>\n                                                        <tbody>\n                                                        <tr *ngFor=\"let unreceived of unreceivedList\">\n                                                            <td class=\"text-left\">\n                                                                <div class=\"form-check\">\n                                                                    <label class=\"form-check-label hide-input\">\n                                                                        <input [checked]=\"unreceived.selected\"\n                                                                               (click)=\"selectProduct(unreceived, $event)\"\n                                                                               class=\"form-check-input\" type=\"checkbox\">\n                                                                        <span class=\"form-check-sign\"></span>\n                                                                    </label>\n                                                                </div>\n                                                            </td>\n                                                            <td>{{unreceived.generateProductCode.productCode}}</td>\n                                                            <td>{{unreceived.generateProductCode.productName}}</td>\n                                                            <td>{{unreceived.quantity}}</td>\n                                                            <td>{{unreceived.priceIn}}</td>\n                                                        </tbody>\n                                                    </table>\n\n                                                </div>\n\n                                            </div>\n\n                                            <!-- Second Step -->\n                                            <div class=\"step\">\n                                                <h5 class=\"title-step\"><span class=\"number-step\">2</span> Furnizor\n                                                    existent ? </h5>\n                                                <div class=\"form-check ps-0 q-box\">\n                                                    <div class=\"provider-exist\">\n                                                        <input checked class=\"form-check-input question__input\"\n                                                               id=\"q_2_yes\" name=\"q_2\" type=\"radio\" value=\"true\">\n                                                        <label class=\"form-check-label question__label\" for=\"q_2_yes\"\n                                                               (click)=\"noForm()\">Da</label>\n                                                    </div>\n                                                    <div class=\"provider-exist\">\n                                                        <input class=\"form-check-input question__input\" id=\"q_2_no\"\n                                                               name=\"q_2\" type=\"radio\" value=\"false\">\n                                                        <label class=\"form-check-label question__label\" for=\"q_2_no\"\n                                                               (click)=\"yesForm()\">Nu</label>\n                                                    </div>\n\n\n                                                    <div class=\"modal-body-filter\" *ngIf=\"toggleForm\">\n                                                        <form [formGroup]=\"validatingProviderForm\"\n                                                              (ngSubmit)=\"onSubmitProvider()\">\n                                                            <div class=\"row\">\n                                                                <div class=\"form-group col-lg-3\">\n                                                                    <label for=\"name\"><i\n                                                                            class=\"fas fa-file-signature\"></i> Nume\n                                                                        furnizor</label>\n                                                                    <input type=\"text\" class=\"form-control\" id=\"name\"\n                                                                           formControlName=\"name\">\n                                                                </div>\n                                                                <div class=\"form-group col-lg-3\">\n                                                                    <label for=\"cif\"><i\n                                                                            class=\"fas fa-sort-numeric-up\"></i>\n                                                                        CIF</label>\n                                                                    <input type=\"text\" class=\"form-control\" id=\"cif\"\n                                                                           formControlName=\"cif\">\n                                                                </div>\n                                                                <div *ngIf=\"isCIFPresent\"\n                                                                     class=\"form-group alert alert-warning\">\n                                                                    <span>{{errorMessage}}</span>\n                                                                </div>\n                                                                <div class=\"form-group col-lg-3\">\n                                                                    <label for=\"tradeRegister\"><i\n                                                                            class=\"fas fa-swatchbook\"></i> Registrul\n                                                                        comertului</label>\n                                                                    <input type=\"text\" class=\"form-control\"\n                                                                           id=\"tradeRegister\"\n                                                                           formControlName=\"tradeRegister\">\n                                                                </div>\n                                                                <div class=\"form-group col-lg-3\">\n                                                                    <label for=\"providerCode\"><i\n                                                                            class=\"fas fa-barcode\"></i> Cod\n                                                                        furnizor</label>\n                                                                    <input type=\"text\" class=\"form-control\"\n                                                                           id=\"providerCode\"\n                                                                           formControlName=\"providerCode\">\n                                                                </div>\n                                                            </div>\n                                                            <div class=\"row\">\n                                                                <div class=\"form-group col-lg-3\">\n                                                                    <label for=\"vatPayer\"><i\n                                                                            class=\"fa fa-money fa-sm\"></i> Platitor TVA</label>\n                                                                    <select id=\"vatPayer\" class=\"form-control\"\n                                                                            formControlName=\"vatPayer\">\n                                                                        <option value=\"\" disabled selected>Platitor\n                                                                            TVA\n                                                                        </option>\n                                                                        <option value=\"true\">DA</option>\n                                                                        <option value=\"false\">NU</option>\n                                                                    </select>\n                                                                </div>\n                                                                <div class=\"form-group col-lg-3\">\n                                                                    <label for=\"city\"><i class=\"fas fa-city\"></i>\n                                                                        Localitate</label>\n                                                                    <input type=\"city\" class=\"form-control\" id=\"city\"\n                                                                           formControlName=\"city\">\n                                                                </div>\n                                                                <div class=\"form-group col-lg-3\">\n                                                                    <label for=\"county\"><i class=\"fas fa-city\"></i>\n                                                                        Judet</label>\n                                                                    <input type=\"county\" class=\"form-control\"\n                                                                           id=\"county\" formControlName=\"county\">\n                                                                </div>\n                                                                <div class=\"form-group col-lg-3\">\n                                                                    <label for=\"country\"><i class=\"far fa-flag\"></i>\n                                                                        Tara</label>\n                                                                    <input type=\"text\" class=\"form-control\" id=\"country\"\n                                                                           formControlName=\"country\">\n                                                                </div>\n                                                            </div>\n                                                            <div class=\"row\">\n                                                                <div class=\"form-group col\">\n                                                                    <label for=\"streetAddress\"><img\n                                                                            class=\"fav-icon-small\"\n                                                                            src=\"assets/img/icons/address.ico\"/> Adresa</label>\n                                                                    <input type=\"text\" class=\"form-control\"\n                                                                           id=\"streetAddress\"\n                                                                           formControlName=\"streetAddress\">\n                                                                </div>\n                                                            </div>\n                                                            <div class=\"row\">\n                                                                <div class=\"form-group col-lg-4\">\n                                                                    <label for=\"iban\"><i class=\"fas fa-money-check\"></i>\n                                                                        IBAN</label>\n                                                                    <input type=\"text\" class=\"form-control\" id=\"iban\"\n                                                                           formControlName=\"iban\">\n                                                                </div>\n                                                                <div class=\"form-group col-lg-4\">\n                                                                    <label for=\"bank\"><img class=\"fav-icon-small\"\n                                                                                           src=\"assets/img/icons/bank.ico\"/>\n                                                                        Banca</label>\n                                                                    <input type=\"text\" class=\"form-control\" id=\"bank\"\n                                                                           formControlName=\"bank\">\n                                                                </div>\n                                                                <div class=\"form-group col-lg-4\">\n                                                                    <label for=\"phoneNumber\"><i\n                                                                            class=\"fas fa-phone\"></i> Numar\n                                                                        telefon</label>\n                                                                    <input type=\"text\" class=\"form-control\"\n                                                                           id=\"phoneNumber\"\n                                                                           formControlName=\"phoneNumber\">\n                                                                </div>\n                                                            </div>\n                                                            <div class=\"row\">\n                                                                <div class=\"form-group col-lg-6\">\n                                                                    <label for=\"email\"><i class=\"far fa-envelope\"></i>\n                                                                        Email furnizor</label>\n                                                                    <input type=\"text\" class=\"form-control\" id=\"email\"\n                                                                           formControlName=\"email\">\n                                                                </div>\n                                                                <div class=\"form-group col-lg-6\">\n                                                                    <label for=\"personOfContact\"><i\n                                                                            class=\"fas fa-user-clock\"></i> Persoana de\n                                                                        contact</label>\n                                                                    <input type=\"text\" class=\"form-control\"\n                                                                           id=\"personOfContact\"\n                                                                           formControlName=\"personOfContact\">\n                                                                </div>\n                                                            </div>\n                                                            <div class=\"d-flex justify-content-end\">\n                                                                <button id=\"addProvider-btn\"\n                                                                        type=\"submit\"\n                                                                        class=\"btn btn-primary\">Adauga\n                                                                </button>\n                                                            </div>\n                                                        </form>\n                                                    </div>\n\n\n                                                    <div class=\"form-group modal-body-filter col-md-6\"\n                                                         *ngIf=\"!toggleForm\">\n                                                        <h5 for=\"county\"><i class=\"fas fa-city\"></i> Selecteaza furnizor\n                                                        </h5>\n                                                        <ng-select id=\"county-select\" formControlName=\"provider\">\n                                                            <ng-option *ngFor=\"let provider of providerList\"\n                                                                       [value]=\"provider\">{{provider.name}}\n                                                                , {{provider.cif}}</ng-option>\n                                                        </ng-select>\n                                                    </div>\n\n                                                </div>\n                                            </div>\n\n                                            <div class=\"step\">\n                                                <h5 class=\"title-step\"><span class=\"number-step\">3</span> Completare\n                                                    Date Contabile NIR</h5>\n                                                <div class=\"row\">\n                                                    <div class=\"form-group col-lg-2\">\n                                                        <label for=\"nirNumber\"><i class=\"fas fa-sort-numeric-up\"></i>\n                                                            Nr.\n                                                            NIR</label>\n                                                        <input type=\"text\" class=\"form-control\" id=\"nirNumber\"\n                                                               formControlName=\"nirNumber\">\n                                                    </div>\n\n                                                    <div class=\"form-group col-lg-3\">\n                                                        <label for=\"date\"><i class=\"far fa-calendar-alt\"></i> Data NIR\n                                                        </label>\n                                                        <input class=\"form-control\" id=\"date\"\n                                                               placeholder=\"Selecteaza data...\"\n                                                               name=\"dp1\" ngbDatepicker #d1=\"ngbDatepicker\"\n                                                               (click)=\"d1.toggle()\" formControlName=\"date\">\n                                                    </div>\n\n                                                    <div class=\"form-group col-lg-2\">\n                                                        <label for=\"administration\"><i class=\"fas fa-truck-loading\"></i>\n                                                            Gestiune </label>\n                                                        <input type=\"text\" class=\"form-control\" id=\"administration\"\n                                                               formControlName=\"administration\">\n                                                    </div>\n\n                                                </div>\n\n                                                <div class=\"row\">\n                                                    <div class=\"form-group col-lg-2\">\n                                                        <label for=\"vat\"><i class=\"fas fa-donate\"></i> TVA </label>\n                                                        <select class=\"form-control\" id=\"vat\" formControlName=\"vat\">\n                                                            <option selected value=\"0.19\">19%</option>\n                                                            <option value=\"0.09\">9%</option>\n                                                            <option value=\"0.05\">5%</option>\n                                                            <option value=\"0\">0%</option>\n                                                        </select>\n                                                    </div>\n\n                                                    <div class=\"form-group col-lg-3\">\n                                                        <label for=\"invoiceNumber\"><i class=\"fas fa-print\"></i> Nr.\n                                                            factura furnizor </label>\n                                                        <input type=\"text\" class=\"form-control\" id=\"invoiceNumber\"\n                                                               formControlName=\"invoiceNumber\">\n                                                    </div>\n\n                                                    <div class=\"form-group col-lg-2\">\n                                                        <label for=\"debitAccount\"><i class=\"fas fa-donate\"></i> Cont\n                                                            debitor </label>\n                                                        <input type=\"text\" class=\"form-control\" id=\"debitAccount\"\n                                                               formControlName=\"debitAccount\">\n                                                    </div>\n\n\n                                                </div>\n\n                                            </div>\n\n\n                                            <div class=\"step\">\n                                                <div class=\"mt-1\">\n                                                    <div class=\"closing-text\">\n                                                        <h5 class=\"title-step\"><span class=\"number-step\">4</span> Toate\n                                                            datele au fost completate cu succes ! </h5>\n                                                        <img class=\"success-data-nir\" src=\"assets/img/accept.png\">\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                        <div id=\"q-box__buttons\">\n                                            <button class=\"btn btn-warning\" id=\"prev-btn\" type=\"button\">Previous\n                                            </button>\n                                            <button class=\"btn btn-info\" id=\"next-btn\" type=\"button\">Next</button>\n                                            <button class=\"btn btn-success\" id=\"submit-btn\" type=\"submit\">Submit\n                                            </button>\n                                        </div>\n                                    </form>\n                                </div>\n                            </div >\n\n                            <div class=\"col-md-12 empty-unreceived-list\">\n                                <div>\n                                    <img class=\"success-data-nir\" src=\"assets/img/faces/face.png\">\n                                    <div class=\"row justify-content-center\">\n                                        <h5 class=\"text-muted\">\n                                            Nu exista produse nereceptionate !\n                                        </h5>\n                                    </div>\n                                </div>\n                            </div>\n\n\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_unreceived_unreceived_module_ts.js.map