(self["webpackChunkpaper_dashboard_pro_angular"] = self["webpackChunkpaper_dashboard_pro_angular"] || []).push([["src_app_computer_computer_module_ts"],{

/***/ 48125:
/*!************************************************!*\
  !*** ./src/app/computer/computer.component.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComputerComponent": function() { return /* binding */ ComputerComponent; }
/* harmony export */ });
/* harmony import */ var _raw_loader_computer_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./computer.component.html */ 43139);
/* harmony import */ var _computer_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./computer.component.css */ 23178);
/* harmony import */ var _assets_css_modal_filter_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/css/_modal_filter.css */ 78783);
/* harmony import */ var _assets_css_table_format_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/css/_table_format.css */ 25824);
/* harmony import */ var _assets_css_tab_pane_custom_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/css/_tab_pane_custom.css */ 17532);
/* harmony import */ var _assets_css_fav_icons_custom_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/css/_fav_icons_custom.css */ 16583);
/* harmony import */ var _assets_css_pagination_custom_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../assets/css/_pagination_custom.css */ 19746);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _helper_enum_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../helper/enum.service */ 49395);
/* harmony import */ var _services_computer_computer_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/computer/computer.service */ 4384);
/* harmony import */ var _services_token_storage_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/token-storage.service */ 11573);
/* harmony import */ var _services_reload_page_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/reload-page.service */ 110);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _helper_filter_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../helper/filter.service */ 63242);
/* harmony import */ var _services_components_generate_product_code_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../services/components/generate-product-code.service */ 69336);
/* harmony import */ var _model_enum_EnumState__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../model/enum/EnumState */ 22936);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! sweetalert2 */ 88259);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _helper_notification_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../helper/notification.service */ 59113);
/* harmony import */ var app_model_components_GenerateProductCode__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! app/model/components/GenerateProductCode */ 38450);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var ComputerComponent = /** @class */ (function () {
    function ComputerComponent(enumService, computerService, formBuilder, tokenService, reloadPageService, activatedRoute, router, filterService, notificationService, productCodeService) {
        this.enumService = enumService;
        this.computerService = computerService;
        this.formBuilder = formBuilder;
        this.tokenService = tokenService;
        this.reloadPageService = reloadPageService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.filterService = filterService;
        this.notificationService = notificationService;
        this.productCodeService = productCodeService;
        this.query = '';
        this.errorMessage = '';
        this.selectedProductCode = new app_model_components_GenerateProductCode__WEBPACK_IMPORTED_MODULE_16__.GenerateProductCode();
        this.productCodesList = [];
        this.stateList = [];
        this.isSerialNumberPresent = false;
        this.isTableProductCodeSelected = true;
        this.computerList = [];
        this.productCodesWithStock = [];
        this.pageSizeComputer = 10;
        this.pageComputer = 1;
        this.pageSizeProductCodeWithStock = 10;
        this.pageProductCodeWithStock = 1;
        this.computersDismantledList = [];
        this.pageSizeComputerDismantled = 10;
        this.pageComputerDismantled = 1;
        this.computerListByProductCode = [];
        this.pageSizeComputerByProductCode = 10;
        this.pageComputerByProductCode = 1;
        this.params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_17__.HttpParams();
        this.formList = [];
        this.manufacturerList = [];
        this.cpuModelList = [];
        this.memoryCapacityList = [];
        this.storageCapacityList = [];
        this.isFiltered = false;
        this.isSearchProductCodesWithStock = false;
    }
    ComputerComponent.prototype.ngOnInit = function () {
        this.stateList = this.enumService.getValues(_model_enum_EnumState__WEBPACK_IMPORTED_MODULE_13__.EnumState);
        this.computerForm();
        this.getComputerSearchResult();
        this.getComputersDismantled();
        this.getAllDataForFilter();
        this.getAllProductCodesWithStock();
        this.getAllGenerateProductCodes();
        this.getRouting();
    };
    Object.defineProperty(ComputerComponent.prototype, "formFields", {
        get: function () {
            return this.validatingForm.controls;
        },
        enumerable: false,
        configurable: true
    });
    ComputerComponent.prototype.computerForm = function () {
        this.validatingForm = this.formBuilder.group({
            generateProductCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormControl({ value: '', disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required),
            productName: new _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required),
            serialNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required),
            manufacturer: new _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required),
            model: new _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required),
            form: new _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required),
            cpuType: new _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required),
            cpuModel: new _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required),
            memoryType: new _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required),
            memoryCapacity: new _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required),
            numberOfDIMM: new _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required),
            memoryFrequency: new _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required),
            storageExist: new _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required),
            storageType: new _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required),
            storageCapacity: new _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required),
            opticalUnitExist: new _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required),
            opticalUnit: new _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required),
            videoCardExist: new _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required),
            videoCard: new _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required),
            soundCardExist: new _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required),
            soundCard: new _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required),
            networkCardExist: new _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required),
            networkCard: new _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required),
            state: new _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required),
            productInformation: new _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required),
            quantity: new _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required),
            unitOfMeasurement: new _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required),
            priceIn: new _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required),
            dismantled: new _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormControl(''),
            createdBy: new _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormControl(''),
            updatedBy: new _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormControl('')
        });
    };
    /***************************** Search, Filter, Pagination for main table tab ***************************/
    ComputerComponent.prototype.getComputerSearchResult = function () {
        var _this = this;
        var params = this.getPaginationParams(this.pageComputer, this.pageSizeComputer);
        this.computerService.getSearchResult(this.query, params).subscribe(function (data) {
            _this.computerList = data.content;
            _this.count = data.totalElements;
            if (_this.query !== '') {
                _this.computerList = [];
                for (var _i = 0, _a = data.content; _i < _a.length; _i++) {
                    var item = _a[_i];
                    _this.computerList.push(item);
                }
                _this.count = data.totalElements;
                _this.inputSearch.nativeElement.value = '';
            }
        }, function (error) {
            _this.errorMessage = error.error.message;
        });
    };
    ComputerComponent.prototype.getComputersDismantled = function () {
        var _this = this;
        var params = this.getPaginationParams(this.pageComputerDismantled, this.pageSizeComputerDismantled);
        this.computerService.getDismantled(params).subscribe(function (data) {
            _this.computersDismantledList = data.content;
            _this.countComputerDismantled = data.totalElements;
        }, function (error) {
            _this.errorMessage = error.error.message;
        });
    };
    ComputerComponent.prototype.getComputerFilterResults = function () {
        var _this = this;
        var pageParams = this.getPaginationParams(this.pageComputer, this.pageSizeComputer);
        this.computerService.getFilter(this.params, pageParams).subscribe(function (data) {
            _this.count = data.totalElements;
            _this.computerList = [];
            for (var _i = 0, _a = data.content; _i < _a.length; _i++) {
                var item = _a[_i];
                _this.computerList.push(item);
            }
            _this.query = '';
        }, function (error) {
            _this.errorMessage = error.error.message;
        });
    };
    ComputerComponent.prototype.getAllDataForFilter = function () {
        var _this = this;
        this.computerService.getDataForFilter().subscribe(function (data) {
            _this.manufacturerList = data.manufacturer;
            _this.cpuModelList = data.cpuModel;
            _this.memoryCapacityList = data.memoryCapacity;
            _this.storageCapacityList = data.storageCapacity;
            _this.formList = data.form;
        }, function (error) {
            _this.errorMessage = error.error.message;
        });
    };
    ComputerComponent.prototype.getEventSearchResult = function (event) {
        this.isFiltered = false;
        this.query = event.target.value;
        this.getComputerSearchResult();
    };
    ComputerComponent.prototype.handlePageChangeSearchAndFilter = function (event) {
        this.pageComputer = event;
        if (this.isFiltered) {
            this.getComputerFilterResults();
        }
        else {
            this.getComputerSearchResult();
        }
    };
    ComputerComponent.prototype.handlePageSizeChangeSearchAndFilter = function (event) {
        this.pageSizeComputer = event.target.value;
        this.pageComputer = 1;
        if (this.isFiltered) {
            this.getComputerFilterResults();
        }
        else {
            this.getComputerSearchResult();
        }
    };
    ComputerComponent.prototype.getRequestParamsForFilter = function (event) {
        this.isFiltered = true;
        if (event.target.checked) {
            this.params = this.filterService.setParamsFilter(event);
            this.getComputerFilterResults();
        }
        if (!event.target.checked) {
            this.params = this.filterService.deleteFilter(event);
            this.getComputerFilterResults();
        }
    };
    ComputerComponent.prototype.resetFilters = function () {
        this.isFiltered = false;
        window.location.reload();
    };
    /***************************** End Search, Filter, Pagination for main table tab ************************/
    /***************************** Search, Pagination, Filter for second table tab **************************/
    ComputerComponent.prototype.getAllProductCodesWithStock = function () {
        var _this = this;
        var params = this.getPaginationParams(this.pageProductCodeWithStock, this.pageSizeProductCodeWithStock);
        this.computerService.getAllProductCodesWithStock(params).subscribe(function (data) {
            _this.productCodesWithStock = data.content;
            _this.countProductCodeWithStock = data.totalElements;
        }, function (error) {
            _this.errorMessage = error.error.message;
        });
    };
    ComputerComponent.prototype.getAllSearchProductCodesWithStock = function () {
        var _this = this;
        var pageParams = this.getPaginationParams(this.pageProductCodeWithStock, this.pageSizeProductCodeWithStock);
        this.computerService.getAllSearchProductCodesWithStock(this.params, pageParams).subscribe(function (data) {
            _this.productCodesWithStock = [];
            _this.productCodesWithStock = data.content;
            _this.countProductCodeWithStock = data.totalElements;
            _this.inputSearchStock.nativeElement.value = '';
        }, function (error) {
            _this.errorMessage = error.error.message;
        });
    };
    ComputerComponent.prototype.getSearchResultProductCodesWithStock = function (event) {
        this.isSearchProductCodesWithStock = true;
        this.query = event.target.value;
        this.params = this.params.set('search', this.query);
        this.getAllSearchProductCodesWithStock();
    };
    ComputerComponent.prototype.handlePageChangeProductCodesWithStock = function (event) {
        this.pageProductCodeWithStock = event;
        if (this.isSearchProductCodesWithStock) {
            this.getAllSearchProductCodesWithStock();
        }
        else {
            this.getAllProductCodesWithStock();
        }
    };
    ComputerComponent.prototype.handlePageSizeChangeProductCodesWithStock = function (event) {
        this.pageSizeProductCodeWithStock = event.target.value;
        this.pageProductCodeWithStock = 1;
        if (this.isSearchProductCodesWithStock) {
            this.getAllSearchProductCodesWithStock();
        }
        else {
            this.getAllProductCodesWithStock();
        }
    };
    ComputerComponent.prototype.getComputerByProductCode = function (productCode) {
        var _this = this;
        this.toggleProductCodeTable();
        this.getProductCode = productCode;
        var params = this.getPaginationParams(this.pageComputerByProductCode, this.pageSizeComputerByProductCode);
        this.computerService.getByProductCode(productCode, params).subscribe(function (data) {
            _this.computerListByProductCode = data.content;
            _this.countComputerByProductCode = data.totalElements;
        }, function (error) {
            _this.errorMessage = error.error.message;
        });
    };
    ComputerComponent.prototype.clearSearchProductCodesWithStock = function () {
        this.query = '';
        this.getAllProductCodesWithStock();
    };
    ComputerComponent.prototype.handlePageSizeChangeComputerByProductCode = function (event) {
        this.pageSizeComputerByProductCode = event.target.value;
        this.pageComputerByProductCode = 1;
        this.getComputerByProductCode(this.getProductCode);
        this.toggleProductCodeTable();
    };
    ComputerComponent.prototype.handlePageChangeComputerByProductCode = function (event) {
        this.pageComputerByProductCode = event;
        this.getComputerByProductCode(this.getProductCode);
        this.toggleProductCodeTable();
    };
    ComputerComponent.prototype.handlePageSizeChangeDismantled = function (event) {
        this.pageComputerDismantled = event;
        this.getComputersDismantled();
        this.toggleProductCodeTable();
    };
    /***************************** End Search, Pagination, Filter for second table tab **********************/
    /************************** General Functions **********************************************************/
    ComputerComponent.prototype.closeModal = function () {
        this.isAddMode = true;
        this.validatingForm.reset();
        this.closeAddEditModal.nativeElement.click();
        if (this.isSerialNumberPresent) {
            this.isSerialNumberPresent = false;
            this.errorMessage = '';
        }
        this.router.navigate([], {});
    };
    ComputerComponent.prototype.getRouting = function () {
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
    ComputerComponent.prototype.getPaginationParams = function (page, pageSize) {
        var params = {};
        if (page) {
            params['page'] = page - 1;
        }
        if (pageSize) {
            params['size'] = pageSize;
        }
        return params;
    };
    ComputerComponent.prototype.toggleProductCodeTable = function () {
        this.isTableProductCodeSelected = !this.isTableProductCodeSelected;
    };
    ComputerComponent.prototype.clearSearch = function () {
        this.query = '';
        this.getComputerSearchResult();
    };
    ComputerComponent.prototype.goBack = function () {
        if (this.getProductCode) {
            this.getProductCode = null;
            this.toggleProductCodeTable();
        }
        //TODO
        // redo the location.back it causes some errors
    };
    /************************** End General Functions ******************************************************/
    /************************** Create, Update, Delete, Submit, Patch Form ****************************************************/
    ComputerComponent.prototype.addComputer = function () {
        var _this = this;
        this.validatingForm.get('createdBy').setValue(this.tokenService.getUser().firstName + ' ' + this.tokenService.getUser().lastName);
        this.formFields.generateProductCode.enable();
        this.formFields.productName.disable();
        this.validatingForm.get('generateProductCode').setValue(this.selectedProductCode);
        this.computerService.add(this.validatingForm.value)
            .toPromise()
            .then(function (response) {
            _this.closeAddEditModal.nativeElement.click();
            _this.isSerialNumberPresent = false;
            _this.formFields.generateProductCode.disable();
            _this.formFields.productName.enable();
            _this.getComputerSearchResult();
            _this.getAllProductCodesWithStock();
        }).catch(function (error) {
            _this.isSerialNumberPresent = true;
            _this.errorMessage = error.error.message;
            document.getElementById('addComputer-btn').setAttribute('data-backdrop', 'static');
        });
    };
    ComputerComponent.prototype.editComputer = function () {
        var _this = this;
        this.validatingForm.get('updatedBy').setValue(this.tokenService.getUser().firstName + ' ' + this.tokenService.getUser().lastName);
        this.formFields.generateProductCode.enable();
        this.formFields.productName.disable();
        this.validatingForm.get('generateProductCode').setValue(this.selectedProductCode);
        this.computerService.editById(this.id, this.validatingForm.value)
            .toPromise()
            .then(function (response) {
            _this.closeAddEditModal.nativeElement.click();
            _this.formFields.generateProductCode.disable();
            _this.formFields.productName.enable();
            _this.isAddMode = true;
            _this.isSerialNumberPresent = false;
            _this.getComputerSearchResult();
            _this.getAllProductCodesWithStock();
            _this.router.navigate([], {});
        }).catch(function (error) {
            _this.isSerialNumberPresent = true;
            _this.errorMessage = error.error.message;
            document.getElementById('editComputer-btn').setAttribute('data-backdrop', 'static');
        });
    };
    ComputerComponent.prototype.deleteComputer = function (computer) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_14___default().fire({
            title: 'Esti sigur?',
            text: "Inregistrarea va fi stearsa definitiv si produsele asociate!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Da, sterge!'
        }).then(function (willDelete) {
            if (willDelete.isConfirmed) {
                _this.computerService.deleteById(Number(computer.id)).subscribe(function (response) {
                    _this.reloadPageService.reload();
                }, function (error) {
                    _this.errorMessage = error.error.message;
                });
            }
        });
    };
    ComputerComponent.prototype.onSubmit = function () {
        if (this.validatingForm.invalid) {
            return;
        }
        if (this.isAddMode) {
            this.addComputer();
        }
        else {
            this.editComputer();
        }
    };
    ComputerComponent.prototype.patchForm = function (computer) {
        this.isAddMode = false;
        var data = this.computerList.find(function (i) { return i.id == computer.id; });
        this.selectedProductCode = data.generateProductCode;
        this.validatingForm.patchValue(data);
        this.validatingForm.get('productName')
            .setValue(this.productCodesList
            .find(function (s) { return s.productCode === data.generateProductCode.productCode; }));
        this.router.navigate(['computer'], { queryParams: { id: computer.id } });
    };
    ComputerComponent.prototype.getAllGenerateProductCodes = function () {
        var _this = this;
        this.productCodeService.getAllByCategory(app_model_components_GenerateProductCode__WEBPACK_IMPORTED_MODULE_16__.GenerateProductCode.productCodeCategoryURI, new _angular_common_http__WEBPACK_IMPORTED_MODULE_17__.HttpParams().set('category', 'Computer')).subscribe(function (data) {
            _this.productCodesList = data.filter(function (productCode) { return productCode.state === true; });
        }, function (error) {
            _this.errorMessage = error.error.message;
        });
    };
    ComputerComponent.prototype.setGeneratedProductCode = function (event) {
        if (event === undefined || event === null) {
            return;
        }
        this.selectedProductCode = this.productCodesList.find(function (p) { return p.productName == event.productName; });
    };
    ComputerComponent.prototype.getSelectedOption = function (event) {
    };
    ComputerComponent.prototype.dismantlingComputer = function (computer) {
        var _this = this;
        var id = computer.id;
        computer.dismantled = true;
        var dismantled = document.getElementById('dismantled');
        this.computerService.editById(id, computer)
            .toPromise()
            .then(function (response) {
            _this.notificationService.showNotification("top", "center", "S-a dezmembrat cu succes!", "success");
        })
            .then(function () {
            _this.getComputersDismantled();
        })
            .catch(function (error) {
            _this.errorMessage = error.error.message;
        });
    };
    ComputerComponent.ctorParameters = function () { return [
        { type: _helper_enum_service__WEBPACK_IMPORTED_MODULE_7__.EnumService },
        { type: _services_computer_computer_service__WEBPACK_IMPORTED_MODULE_8__.ComputerService },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormBuilder },
        { type: _services_token_storage_service__WEBPACK_IMPORTED_MODULE_9__.TokenStorageService },
        { type: _services_reload_page_service__WEBPACK_IMPORTED_MODULE_10__.ReloadPageService },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_19__.ActivatedRoute },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_19__.Router },
        { type: _helper_filter_service__WEBPACK_IMPORTED_MODULE_11__.FilterService },
        { type: _helper_notification_service__WEBPACK_IMPORTED_MODULE_15__.NotificationService },
        { type: _services_components_generate_product_code_service__WEBPACK_IMPORTED_MODULE_12__.GenerateProductCodeService }
    ]; };
    ComputerComponent.propDecorators = {
        inputSearch: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_20__.ViewChild, args: ['inputSearch',] }],
        inputSearchStock: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_20__.ViewChild, args: ['inputSearchStock',] }],
        closeAddEditModal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_20__.ViewChild, args: ['closeAddEditModal',] }]
    };
    ComputerComponent = __decorate([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_20__.Component)({
            selector: 'app-computer',
            template: _raw_loader_computer_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
            styles: [_computer_component_css__WEBPACK_IMPORTED_MODULE_1__.default, _assets_css_modal_filter_css__WEBPACK_IMPORTED_MODULE_2__.default, _assets_css_table_format_css__WEBPACK_IMPORTED_MODULE_3__.default, _assets_css_tab_pane_custom_css__WEBPACK_IMPORTED_MODULE_4__.default, _assets_css_fav_icons_custom_css__WEBPACK_IMPORTED_MODULE_5__.default, _assets_css_pagination_custom_css__WEBPACK_IMPORTED_MODULE_6__.default]
        })
    ], ComputerComponent);
    return ComputerComponent;
}());



/***/ }),

/***/ 2218:
/*!*********************************************!*\
  !*** ./src/app/computer/computer.module.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComputerModule": function() { return /* binding */ ComputerModule; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _computer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./computer.component */ 48125);
/* harmony import */ var _computer_routing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./computer.routing */ 50390);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-select/ng-select */ 86640);
/* harmony import */ var jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! jw-bootstrap-switch-ng2 */ 61137);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-pagination */ 72533);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var ComputerModule = /** @class */ (function () {
    function ComputerModule() {
    }
    ComputerModule = __decorate([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
                _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(_computer_routing__WEBPACK_IMPORTED_MODULE_1__.ComputerRoutes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__.NgSelectModule,
                ngx_pagination__WEBPACK_IMPORTED_MODULE_2__.NgxPaginationModule,
                jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_8__.JwBootstrapSwitchNg2Module
            ],
            declarations: [
                _computer_component__WEBPACK_IMPORTED_MODULE_0__.ComputerComponent
            ]
        })
    ], ComputerModule);
    return ComputerModule;
}());



/***/ }),

/***/ 50390:
/*!**********************************************!*\
  !*** ./src/app/computer/computer.routing.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComputerRoutes": function() { return /* binding */ ComputerRoutes; }
/* harmony export */ });
/* harmony import */ var _computer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./computer.component */ 48125);

var ComputerRoutes = [{
        path: '',
        children: [{
                path: 'computer',
                component: _computer_component__WEBPACK_IMPORTED_MODULE_0__.ComputerComponent
            }]
    }];


/***/ }),

/***/ 4384:
/*!*******************************************************!*\
  !*** ./src/app/services/computer/computer.service.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComputerService": function() { return /* binding */ ComputerService; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 92340);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({ 'Content-Type': 'application/json' })
};
var ComputerService = /** @class */ (function () {
    function ComputerService(http) {
        this.http = http;
        this.apiServerUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl;
    }
    ComputerService.prototype.getSearchResult = function (search, params) {
        return this.http.get(this.apiServerUrl + "/api/computer/search/" + search, { params: params });
    };
    ComputerService.prototype.getByProductCode = function (productCode, params) {
        return this.http.get(this.apiServerUrl + "/api/computer/computersByProductCode/" + productCode, { params: params });
    };
    ComputerService.prototype.getFilter = function (params, pageParams) {
        params = params.set('page', pageParams.page).set('size', pageParams.size);
        return this.http.get(this.apiServerUrl + "/api/computer/filter", { params: params });
    };
    ComputerService.prototype.getDataForFilter = function () {
        return this.http.get(this.apiServerUrl + "/api/computer/allDataForFilter");
    };
    ComputerService.prototype.getAllProductCodesWithStock = function (params) {
        return this.http.get(this.apiServerUrl + "/api/computer/stockByProductCode/", { params: params });
    };
    ComputerService.prototype.getAllSearchProductCodesWithStock = function (params, pageParams) {
        params = params.set('page', pageParams.page).set('size', pageParams.size);
        return this.http.get(this.apiServerUrl + "/api/computer/stockByProductCode/search", { params: params });
    };
    ComputerService.prototype.getDismantled = function (params) {
        return this.http.get(this.apiServerUrl + "/api/computer/computersDismantled", { params: params });
    };
    ComputerService.prototype.add = function (computer) {
        return this.http.post(this.apiServerUrl + "/api/computer", computer, httpOptions);
    };
    ComputerService.prototype.editById = function (id, computer) {
        return this.http.put(this.apiServerUrl + "/api/computer/" + id, computer, httpOptions);
    };
    ComputerService.prototype.deleteById = function (id) {
        return this.http.delete(this.apiServerUrl + "/api/computer/" + id);
    };
    ComputerService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
    ]; };
    ComputerService = __decorate([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
            providedIn: 'root'
        })
    ], ComputerService);
    return ComputerService;
}());



/***/ }),

/***/ 23178:
/*!*************************************************!*\
  !*** ./src/app/computer/computer.component.css ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb21wdXRlci5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ 43139:
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/computer/computer.component.html ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <!-- Nav tabs -->\n            <ul class=\"nav nav-tabs-navigation custom-tab-pane\" id=\"computerTab\" role=\"tablist\">\n                <li class=\"nav-item\">\n                    <a class=\"nav-link active\" id=\"computer-tab\" data-toggle=\"tab\" href=\"#computer\" role=\"tab\"\n                       aria-controls=\"computer\" aria-selected=\"true\" (click)=\"goBack()\">Toate produsele</a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" id=\"computer-stock-tab\" data-toggle=\"tab\" href=\"#computer-stock\" role=\"tab\"\n                       aria-controls=\"computer-stock\" aria-selected=\"false\">Vezi stocuri</a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" id=\"computer-dismantled-tab\" data-toggle=\"tab\" href=\"#computer-dismantled\" role=\"tab\"\n                       aria-controls=\"computer-dismantled\" aria-selected=\"false\">Dezmembrate</a>\n                </li>\n            </ul>\n            <!-- End Nav tabs -->\n            <div class=\"tab-content\" id=\"computerTabContent\">\n\n                <!-- First Tab Content -->\n                <div class=\"tab-pane fade show active mx-3\" id=\"computer\" role=\"tabpanel\"\n                     aria-labelledby=\"computer-tab\">\n                    <div class=\"card card-custom\">\n                        <div class=\"card-header\">\n                            <h4 class=\"card-title\">PC/SERVER</h4>\n                        </div>\n                        <!-- Content -->\n                        <div class=\"card-body\">\n                            <div>\n                                <div class=\"row align-items-center\">\n                                    <div class=\"col-sm-12 col-md-6 mr-auto\">\n                                        <label class=\"label-white-space\">\n                                            Vezi\n                                            <select class=\"custom-select custom-select-sm form-control form-control-sm\"\n                                                    id=\"selectPageSize\"\n                                                    (change)=\"handlePageSizeChangeSearchAndFilter($event)\">\n                                                <option>10</option>\n                                                <option>50</option>\n                                                <option>100</option>\n                                            </select>\n                                            produse\n                                        </label>\n                                    </div>\n                                    <div class=\"col-auto\">\n                                        <input #inputSearch (keydown.enter)=\"getEventSearchResult($event)\"\n                                               class=\"form-control form-control-sm\"\n                                               placeholder=\"Cautare...\">\n                                    </div>\n                                    <div class=\"col-auto btn-group-sm\" role=\"group\">\n\n                                        <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\"\n                                                data-target=\"#modalComputer\">\n                                            <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n                                        </button>\n                                        <button type=\"button\" class=\"btn btn-info\" (click)=\"clearSearch()\">\n                                            <i class=\"fa fa-refresh\" aria-hidden=\"true\"></i>\n                                        </button>\n                                        <button type=\"button\" class=\"btn btn-warning\"\n                                                data-toggle=\"modal\" data-target=\"#modal_aside_right\">\n                                            <i class=\"fa fa-filter\" aria-hidden=\"true\"></i>\n                                        </button>\n                                    </div>\n                                </div>\n                                <!--        Here you can write extra buttons/actions for the toolbar              -->\n                            </div>\n                            <div class=\"table-responsive\">\n                                <table id=\"datatable\" class=\"table table-striped table-bordered table-format\"\n                                       width=\"100%\">\n                                    <thead>\n                                    <tr>\n                                        <th scope=\"col\">Actiune</th>\n                                        <th scope=\"col\">Cod Produs</th>\n                                        <th scope=\"col\">Serial Number</th>\n                                        <th scope=\"col\">Nume Produs</th>\n                                        <th scope=\"col\">Cantitate</th>\n                                        <th scope=\"col\">Unitate de masura</th>\n                                        <th scope=\"col\">Producator</th>\n                                        <th scope=\"col\">Model</th>\n                                        <th scope=\"col\">Form</th>\n                                        <th scope=\"col\">Tip CPU</th>\n                                        <th scope=\"col\">Model CPU</th>\n                                        <th scope=\"col\">Tip RAM</th>\n                                        <th scope=\"col\">Capacitate RAM</th>\n                                        <th scope=\"col\">Nr sloturi DIMM</th>\n                                        <th scope=\"col\">Frecventa RAM</th>\n                                        <th scope=\"col\">HDD Inclus</th>\n                                        <th scope=\"col\">Tip HDD</th>\n                                        <th scope=\"col\">Capacitate HDD</th>\n                                        <th scope=\"col\">Unitate optica inclusa</th>\n                                        <th scope=\"col\">Unitate optica</th>\n                                        <th scope=\"col\">Placa video inclusa</th>\n                                        <th scope=\"col\">Placa video</th>\n                                        <th scope=\"col\">Placa sunet inclusa</th>\n                                        <th scope=\"col\">Placa sunet</th>\n                                        <th scope=\"col\">Placa retea inclusa</th>\n                                        <th scope=\"col\">Placa retea</th>\n                                        <th scope=\"col\">Pret intrare (Lei)</th>\n                                        <th scope=\"col\">Informatii produs</th>\n                                        <th scope=\"col\">Stare</th>\n\n                                    </tr>\n                                    </thead>\n                                    <tbody>\n\n                                    <tr *ngFor=\"let computer of computerList | paginate: {\n                                        id: 'computer_pagination',\n                                        itemsPerPage: pageSizeComputer,\n                                        currentPage: pageComputer,\n                                        totalItems: count\n                                    }\">\n                                        <td>\n                                            <a type=\"button\" class=\"btn btn-warning btn-link btn-icon btn-sm edit\"\n                                               (click)=\"patchForm(computer)\" data-toggle=\"modal\"\n                                               data-target=\"#modalComputer\">\n                                                <i class=\"fa fa-edit\"></i>\n                                            </a>\n                                            <a type=\"button\" class=\"btn btn-danger btn-link btn-icon btn-sm remove\"\n                                               (click)=\"deleteComputer(computer)\">\n                                                <i class=\"fa fa-times\"></i>\n                                            </a>\n                                            <a type=\"button\" id=\"dismantled\" class=\"btn btn-primary btn-link btn-icon btn-sm\"\n                                               (click)=\"dismantlingComputer(computer)\">\n                                                <i class=\"fa fa-cogs\"></i>\n                                            </a>\n                                        </td>\n                                        <td>{{computer.generateProductCode.productCode}}</td>\n                                        <td>{{computer.serialNumber}}</td>\n                                        <td>{{computer.generateProductCode.productName}}</td>\n                                        <td>{{computer.quantity}}</td>\n                                        <td>{{computer.unitOfMeasurement}}</td>\n                                        <td>{{computer.manufacturer}}</td>\n                                        <td>{{computer.model}}</td>\n                                        <td>{{computer.form}}</td>\n                                        <td>{{computer.cpuType}}</td>\n                                        <td>{{computer.cpuModel}}</td>\n                                        <td>{{computer.memoryType}}</td>\n                                        <td>{{computer.memoryCapacity}}</td>\n                                        <td>{{computer.numberOfDIMM}}</td>\n                                        <td>{{computer.memoryFrequency}}</td>\n                                        <td>{{computer.storageExist == true ? 'Da' : 'Nu'}}</td>\n                                        <td>{{computer.storageType}}</td>\n                                        <td>{{computer.storageCapacity}}</td>\n                                        <td>{{computer.opticalUnitExist == true ? 'Da' : 'Nu'}}</td>\n                                        <td>{{computer.opticalUnit}}</td>\n                                        <td>{{computer.videoCardExist == true ? 'Da' : 'Nu'}}</td>\n                                        <td>{{computer.videoCard}}</td>\n                                        <td>{{computer.soundCardExist == true ? 'Da' : 'Nu'}}</td>\n                                        <td>{{computer.soundCard}}</td>\n                                        <td>{{computer.networkCardExist == true ? 'Da' : 'Nu'}}</td>\n                                        <td>{{computer.networkCard}}</td>\n                                        <td>{{computer.priceIn}}</td>\n                                        <td>{{computer.productInformation}}</td>\n                                        <td>{{computer.state}}</td>\n                                    </tr>\n                                    </tbody>\n                                </table>\n                            </div>\n                            <nav class=\"pagination-align-right\" aria-label=\"Page navigation example\">\n                                <ul class=\"paginator\">\n                                    <pagination-controls id=\"computer_pagination\" previousLabel=\"Inapoi\" nextLabel=\"Urmatorul\"\n                                                         responsive=\"true\" directionLinks=\"true\"\n                                                         (pageChange)=\"handlePageChangeSearchAndFilter($event)\"\n                                                         (pageBoundsCorrection)=\"handlePageChangeSearchAndFilter($event)\">\n                                    </pagination-controls>\n                                </ul>\n                            </nav>\n                        </div>\n                        <!-- end content-->\n                    </div>\n                </div>\n                <!-- End First Tab Content -->\n\n                <!--  Table Computer by Product Code-->\n                <div class=\"tab-pane fade mx-3\" id=\"computer-stock\" role=\"tabpanel\"\n                     aria-labelledby=\"computer-stock-tab\">\n\n                    <!-- Table Computer by Stock-->\n                    <div *ngIf=\"isTableProductCodeSelected\">\n                        <div class=\"card card-custom\">\n                            <div class=\"card-header\">\n                                <h4 class=\"card-title\">Stock-uri</h4>\n                            </div>\n                            <div class=\"card-body\">\n                                <div>\n                                    <div class=\"row align-items-center\">\n                                        <div class=\"col-sm-12 col-md-6 mr-auto\">\n                                            <label class=\"label-white-space\">\n                                                Vezi\n                                                <select class=\"custom-select custom-select-sm form-control form-control-sm\"\n                                                        id=\"selectPageSizeForStock\"\n                                                        (change)=\"handlePageSizeChangeProductCodesWithStock($event)\">\n                                                    <option>10</option>\n                                                    <option>50</option>\n                                                    <option>100</option>\n                                                </select>\n                                                coduri de produs\n                                            </label>\n                                        </div>\n                                        <div class=\"col-auto\">\n                                            <input #inputSearchStock\n                                                   (keydown.enter)=\"getSearchResultProductCodesWithStock($event)\"\n                                                   class=\"form-control form-control-sm\"\n                                                   placeholder=\"Cautare...\">\n                                        </div>\n\n                                        <div class=\"col-auto\">\n                                            <button class=\"btn btn-sm btn-info\"\n                                                    (click)=\"clearSearchProductCodesWithStock()\">\n                                                <i class=\"fa fa-refresh\" aria-hidden=\"true\"></i>\n                                            </button>\n                                        </div>\n                                    </div>\n                                    <!--        Here you can write extra buttons/actions for the toolbar              -->\n                                </div>\n                                <div class=\"table-responsive\">\n                                    <table id=\"datatableStock\" class=\"table table-striped table-bordered table-format\"\n                                           width=\"100%\">\n                                        <thead>\n                                        <tr>\n                                            <th>Cod Produs</th>\n                                            <th>Nume produs</th>\n                                            <th>Stoc</th>\n                                            <th>Pret mediu</th>\n                                            <th>PC/SERVER</th>\n                                        </tr>\n                                        </thead>\n                                        <tbody>\n                                        <tr *ngFor=\"let productCode of productCodesWithStock | paginate: {\n                                        id: 'product_codes_with_stock',\n                                        itemsPerPage: pageSizeProductCodeWithStock,\n                                        currentPage: pageProductCodeWithStock,\n                                        totalItems: countProductCodeWithStock\n                                    }\">\n                                            <td>{{productCode.generateProductCode.productCode}}</td>\n                                            <td>{{productCode.generateProductCode.productName}}</td>\n                                            <td>{{productCode.stock}}</td>\n                                            <td>{{productCode.averagePrice | number: '1.2-2'}}</td>\n                                            <td>\n                                                <button (click)=\"getComputerByProductCode(productCode.generateProductCode.productCode)\"\n                                                        type=\"button\" class=\"btn btn-sm btn-info\"> Vezi <i\n                                                        class=\"fa fa-external-link\" aria-hidden=\"true\"></i>\n                                                </button>\n                                            </td>\n                                        </tr>\n                                        </tbody>\n                                    </table>\n                                </div>\n                                <nav class=\"pagination-align-right\" aria-label=\"Page navigation example\">\n                                    <ul class=\"paginator\">\n                                        <pagination-controls previousLabel=\"Prev\" nextLabel=\"Next\" responsive=\"true\" id=\"product_codes_with_stock\"\n                                                             (pageChange)=\"handlePageChangeProductCodesWithStock($event)\"\n                                                             (pageBoundsCorrection)=\"handlePageChangeProductCodesWithStock($event)\">\n\n                                        </pagination-controls>\n                                    </ul>\n                                </nav>\n                            </div>\n                            <!-- end content-->\n                        </div>\n                    </div>\n                    <!-- End Table Computer by Stock-->\n\n                    <!-- Table Computer by Product Code -->\n                    <div *ngIf=\"!isTableProductCodeSelected\">\n                        <div class=\"card card-custom\">\n                            <div class=\"card-header\">\n                                <h4 class=\"card-title\">Unitati de Stocare</h4>\n                            </div>\n                            <div class=\"card-body\">\n                                <div>\n                                    <div class=\"row align-items-center\">\n                                        <div class=\"col-sm-12 col-md-6 mr-auto\">\n                                            <label class=\"label-white-space\">\n                                                Vezi\n                                                <select class=\"custom-select custom-select-sm form-control form-control-sm\"\n                                                        id=\"selectPageSizeByProductCode\"\n                                                        (change)=\"handlePageSizeChangeComputerByProductCode($event)\">\n                                                    <option>10</option>\n                                                    <option>50</option>\n                                                    <option>100</option>\n                                                </select>\n                                                produse\n                                            </label>\n                                        </div>\n                                        <div class=\"btn-group-sm col-auto\" role=\"group\"\n                                             aria-label=\"add-product-back-to-list\">\n                                            <button (click)=\"goBack()\" type=\"button\" class=\"btn btn-warning\">Inapoi la\n                                                lista\n                                            </button>\n                                            <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\"\n                                                    data-target=\"#modalComputer\">\n                                                <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n                                            </button>\n                                        </div>\n                                    </div>\n                                    <!--        Here you can write extra buttons/actions for the toolbar              -->\n                                </div>\n                                <div class=\"table-responsive\">\n                                    <table id=\"datatableByProductCode\"\n                                           class=\"table table-striped table-bordered table-format\" width=\"100%\">\n                                        <thead>\n                                        <tr>\n                                            <th scope=\"col\">Actiune</th>\n                                            <th scope=\"col\">Cod Produs</th>\n                                            <th scope=\"col\">Serial Number</th>\n                                            <th scope=\"col\">Nume Produs</th>\n                                            <th scope=\"col\">Cantitate</th>\n                                            <th scope=\"col\">Unitate de masura</th>\n                                            <th scope=\"col\">Producator</th>\n                                            <th scope=\"col\">Model</th>\n                                            <th scope=\"col\">Form</th>\n                                            <th scope=\"col\">Tip CPU</th>\n                                            <th scope=\"col\">Model CPU</th>\n                                            <th scope=\"col\">Tip RAM</th>\n                                            <th scope=\"col\">Capacitate RAM</th>\n                                            <th scope=\"col\">Nr sloturi DIMM</th>\n                                            <th scope=\"col\">Frecventa RAM</th>\n                                            <th scope=\"col\">HDD Inclus</th>\n                                            <th scope=\"col\">Tip HDD</th>\n                                            <th scope=\"col\">Capacitate HDD</th>\n                                            <th scope=\"col\">Unitate optica inclusa</th>\n                                            <th scope=\"col\">Unitate optica</th>\n                                            <th scope=\"col\">Placa video inclusa</th>\n                                            <th scope=\"col\">Placa video</th>\n                                            <th scope=\"col\">Placa sunet inclusa</th>\n                                            <th scope=\"col\">Placa sunet</th>\n                                            <th scope=\"col\">Placa retea inclusa</th>\n                                            <th scope=\"col\">Placa retea</th>\n                                            <th scope=\"col\">Pret intrare (Lei)</th>\n                                            <th scope=\"col\">Informatii produs</th>\n                                            <th scope=\"col\">Stare</th>\n                                        </tr>\n                                        </thead>\n                                        <tbody>\n\n                                        <tr *ngFor=\"let computer of computerListByProductCode | paginate: {\n                                            id: 'computer_by_product_code',\n                                            itemsPerPage: pageSizeComputerByProductCode,\n                                            currentPage: pageComputerByProductCode,\n                                            totalItems: countComputerByProductCode\n                                        }\">\n                                            <td>\n                                                <a type=\"button\" class=\"btn btn-warning btn-link btn-icon btn-sm edit\"\n                                                   (click)=\"patchForm(computer)\" data-toggle=\"modal\"\n                                                   data-target=\"#modalComputer\">\n                                                    <i class=\"fa fa-edit\"></i>\n                                                </a>\n                                                <a type=\"button\" class=\"btn btn-danger btn-link btn-icon btn-sm remove\"\n                                                   (click)=\"deleteComputer(computer)\">\n                                                    <i class=\"fa fa-times\"></i>\n                                                </a>\n                                            </td>\n                                            <td>{{computer.generateProductCode.productCode}}</td>\n                                            <td>{{computer.serialNumber}}</td>\n                                            <td>{{computer.generateProductCode.productName}}</td>\n                                            <td>{{computer.quantity}}</td>\n                                            <td>{{computer.unitOfMeasurement}}</td>\n                                            <td>{{computer.manufacturer}}</td>\n                                            <td>{{computer.model}}</td>\n                                            <td>{{computer.form}}</td>\n                                            <td>{{computer.cpuType}}</td>\n                                            <td>{{computer.cpuModel}}</td>\n                                            <td>{{computer.memoryType}}</td>\n                                            <td>{{computer.memoryCapacity}}</td>\n                                            <td>{{computer.numberOfDIMM}}</td>\n                                            <td>{{computer.memoryFrequency}}</td>\n                                            <td>{{computer.storageExist == true ? 'Da' : 'Nu'}}</td>\n                                            <td>{{computer.storageType}}</td>\n                                            <td>{{computer.storageCapacity}}</td>\n                                            <td>{{computer.opticalUnitExist == true ? 'Da' : 'Nu'}}</td>\n                                            <td>{{computer.opticalUnit}}</td>\n                                            <td>{{computer.videoCardExist == true ? 'Da' : 'Nu'}}</td>\n                                            <td>{{computer.videoCard}}</td>\n                                            <td>{{computer.soundCardExist == true ? 'Da' : 'Nu'}}</td>\n                                            <td>{{computer.soundCard}}</td>\n                                            <td>{{computer.networkCardExist == true ? 'Da' : 'Nu'}}</td>\n                                            <td>{{computer.networkCard}}</td>\n                                            <td>{{computer.priceIn}}</td>\n                                            <td>{{computer.productInformation}}</td>\n                                            <td>{{computer.state}}</td>\n                                        </tr>\n                                        </tbody>\n                                    </table>\n                                </div>\n                                <nav class=\"pagination-align-right\" aria-label=\"Page navigation example\">\n                                    <ul class=\"paginator\">\n                                        <pagination-controls previousLabel=\"Prev\" nextLabel=\"Next\" responsive=\"true\"\n                                                             id=\"computer_by_product_code\"\n                                                             (pageChange)=\"handlePageChangeComputerByProductCode($event)\"\n                                                             (pageBoundsCorrection)=\"handlePageChangeComputerByProductCode($event)\"></pagination-controls>\n                                    </ul>\n                                </nav>\n                            </div>\n                            <!-- end content-->\n                        </div>\n                    </div>\n                    <!-- End Table Computer by Product Code -->\n\n                </div>\n                <!--  END Table Computer by Product Code-->\n\n                <!--  Table Computer dismantled-->\n                <div class=\"tab-pane fade mx-3\" id=\"computer-dismantled\" role=\"tabpanel\"\n                     aria-labelledby=\"computer-dismantled-tab\">\n                    <div class=\"card card-custom\">\n                        <div class=\"card-header\">\n                            <h4 class=\"card-title\">Dezmembrate</h4>\n                        </div>\n                        <!-- Content -->\n                        <div class=\"card-body\">\n                            <div>\n                                <div class=\"row align-items-center\">\n                                    <div class=\"col-sm-12 col-md-6 mr-auto\">\n                                        <label class=\"label-white-space\">\n                                            Vezi\n                                            <select class=\"custom-select custom-select-sm form-control form-control-sm\"\n                                                    id=\"selectPageSizeDismantled\"\n                                                    (change)=\"handlePageSizeChangeDismantled($event)\">\n                                                <option>10</option>\n                                                <option>50</option>\n                                                <option>100</option>\n                                            </select>\n                                            produse\n                                        </label>\n                                    </div>\n                                    <div class=\"col-auto\">\n                                        <input #inputSearch (keydown.enter)=\"getEventSearchResult($event)\"\n                                               class=\"form-control form-control-sm\"\n                                               placeholder=\"Cautare...\">\n                                    </div>\n                                    <div class=\"col-auto btn-group-sm\" role=\"group\">\n                                        <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\"\n                                                data-target=\"#modalComputer\">\n                                            <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n                                        </button>\n                                        <button type=\"button\" class=\"btn btn-info\" (click)=\"clearSearch()\">\n                                            <i class=\"fa fa-refresh\" aria-hidden=\"true\"></i>\n                                        </button>\n                                        <button type=\"button\" class=\"btn btn-warning\"\n                                                data-toggle=\"modal\" data-target=\"#modal_aside_right\">\n                                            <i class=\"fa fa-filter\" aria-hidden=\"true\"></i>\n                                        </button>\n                                    </div>\n                                </div>\n                                <!--        Here you can write extra buttons/actions for the toolbar              -->\n                            </div>\n                            <div class=\"table-responsive\">\n                                <table id=\"datatableDismantled\" class=\"table table-striped table-bordered table-format\"\n                                       width=\"100%\">\n                                    <thead>\n                                    <tr>\n                                        <th scope=\"col\">Actiune</th>\n                                        <th scope=\"col\">Cod Produs</th>\n                                        <th scope=\"col\">Serial Number</th>\n                                        <th scope=\"col\">Nume Produs</th>\n                                        <th scope=\"col\">Cantitate</th>\n                                        <th scope=\"col\">Unitate de masura</th>\n                                        <th scope=\"col\">Producator</th>\n                                        <th scope=\"col\">Model</th>\n                                        <th scope=\"col\">Form</th>\n                                        <th scope=\"col\">Tip CPU</th>\n                                        <th scope=\"col\">Model CPU</th>\n                                        <th scope=\"col\">Tip RAM</th>\n                                        <th scope=\"col\">Capacitate RAM</th>\n                                        <th scope=\"col\">Nr sloturi DIMM</th>\n                                        <th scope=\"col\">Frecventa RAM</th>\n                                        <th scope=\"col\">HDD Inclus</th>\n                                        <th scope=\"col\">Tip HDD</th>\n                                        <th scope=\"col\">Capacitate HDD</th>\n                                        <th scope=\"col\">Unitate optica inclusa</th>\n                                        <th scope=\"col\">Unitate optica</th>\n                                        <th scope=\"col\">Placa video inclusa</th>\n                                        <th scope=\"col\">Placa video</th>\n                                        <th scope=\"col\">Placa sunet inclusa</th>\n                                        <th scope=\"col\">Placa sunet</th>\n                                        <th scope=\"col\">Placa retea inclusa</th>\n                                        <th scope=\"col\">Placa retea</th>\n                                        <th scope=\"col\">Pret intrare (Lei)</th>\n                                        <th scope=\"col\">Informatii produs</th>\n                                        <th scope=\"col\">Stare</th>\n                                    </tr>\n                                    </thead>\n                                    <tbody>\n                                    <tr *ngFor=\"let computer of computersDismantledList | paginate: {\n                        id: 'computer_pagination_dismantled',\n                        itemsPerPage: pageSizeComputerDismantled,\n                        currentPage: pageComputerDismantled,\n                        totalItems: countComputerDismantled\n                    }\">\n                                        <td>\n                                            <a type=\"button\" class=\"btn btn-warning btn-link btn-icon btn-sm edit\"\n                                               (click)=\"patchForm(computer)\" data-toggle=\"modal\"\n                                               data-target=\"#modalComputer\">\n                                                <i class=\"fa fa-edit\"></i>\n                                            </a>\n                                        </td>\n                                        <td>{{computer.generateProductCode.productCode}}</td>\n                                        <td>{{computer.serialNumber}}</td>\n                                        <td>{{computer.generateProductCode.productName}}</td>\n                                        <td>{{computer.quantity}}</td>\n                                        <td>{{computer.unitOfMeasurement}}</td>\n                                        <td>{{computer.manufacturer}}</td>\n                                        <td>{{computer.model}}</td>\n                                        <td>{{computer.form}}</td>\n                                        <td>{{computer.cpuType}}</td>\n                                        <td>{{computer.cpuModel}}</td>\n                                        <td>{{computer.memoryType}}</td>\n                                        <td>{{computer.memoryCapacity}}</td>\n                                        <td>{{computer.numberOfDIMM}}</td>\n                                        <td>{{computer.memoryFrequency}}</td>\n                                        <td>{{computer.storageExist == true ? 'Da' : 'Nu'}}</td>\n                                        <td>{{computer.storageType}}</td>\n                                        <td>{{computer.storageCapacity}}</td>\n                                        <td>{{computer.opticalUnitExist == true ? 'Da' : 'Nu'}}</td>\n                                        <td>{{computer.opticalUnit}}</td>\n                                        <td>{{computer.videoCardExist == true ? 'Da' : 'Nu'}}</td>\n                                        <td>{{computer.videoCard}}</td>\n                                        <td>{{computer.soundCardExist == true ? 'Da' : 'Nu'}}</td>\n                                        <td>{{computer.soundCard}}</td>\n                                        <td>{{computer.networkCardExist == true ? 'Da' : 'Nu'}}</td>\n                                        <td>{{computer.networkCard}}</td>\n                                        <td>{{computer.priceIn}}</td>\n                                        <td>{{computer.productInformation}}</td>\n                                        <td>{{computer.state}}</td>\n                                    </tr>\n                                    </tbody>\n                                </table>\n                            </div>\n                            <nav class=\"pagination-align-right\" aria-label=\"Page navigation example\">\n                                <ul class=\"paginator\">\n                                    <pagination-controls id=\"computer_pagination_dismantled\" previousLabel=\"Inapoi\" nextLabel=\"Urmatorul\"\n                                                         responsive=\"true\" directionLinks=\"true\"\n                                                         (pageChange)=\"handlePageSizeChangeDismantled($event)\"\n                                                         (pageBoundsCorrection)=\"handlePageSizeChangeDismantled($event)\">\n                                    </pagination-controls>\n                                </ul>\n                            </nav>\n                        </div>\n                        <!-- end content-->\n                    </div>\n                </div>\n                <!--  END Table Computer dismantled-->\n\n            </div>\n        </div>\n    </div>\n</div>\n\n<!-- Modal Add/Edit Computer -->\n<div class=\"modal fade\" id=\"modalComputer\" data-backdrop=\"static\" data-keyboard=\"false\"\n     aria-labelledby=\"staticBackdropLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-xl\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h5 *ngIf=\"isAddMode\" class=\"modal-title\" id=\"staticBackdropLabel\">\n                    <img class=\"fav-icon\" src=\"./assets/img/icons/computer.ico\">\n                    Adauga PC/Server</h5>\n                <h5 *ngIf=\"!isAddMode\" class=\"modal-title\" id=\"editStaticBackdropLabel\">\n                    <img class=\"fav-icon\" src=\"./assets/img/icons/computer.ico\">\n                    Editare\n                    PC/Server</h5>\n                <button (click)=\"closeModal()\" #closeAddEditModal type=\"button\" class=\"close\" data-dismiss=\"modal\"\n                        aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <div class=\"modal-body\">\n                <form [formGroup]=\"validatingForm\" (ngSubmit)=\"onSubmit()\">\n                    <div class=\"row\">\n                        <div class=\"form-group col\">\n                            <label for=\"generateProductCode\"><i class=\"fa fa-barcode fa-sm\"></i> Cod produs</label>\n                            <input type=\"text\" class=\"form-control\" id=\"generateProductCode\" formControlName=\"generateProductCode\"\n                                   [value]=\"selectedProductCode.productCode\">\n                        </div>\n                        <div class=\"form-group col\">\n                            <label for=\"productName\"><i class=\"fa fa-product-hunt fa-sm\"></i> Nume produs</label>\n                            <ng-select id=\"productName\" (ngModelChange)=\"setGeneratedProductCode($event)\"\n                                       formControlName=\"productName\">\n                                <ng-option *ngFor=\"let generatedProductCode of productCodesList\"\n                                           [value]=\"generatedProductCode\">{{generatedProductCode.productName}}\n                                </ng-option>\n                            </ng-select>\n                        </div>\n\n                        <div class=\"form-group col\">\n                            <label for=\"serialNumber\"><i class=\"fa fa-barcode fa-sm\"></i> Serial number</label>\n                            <input type=\"text\" class=\"form-control\" id=\"serialNumber\" formControlName=\"serialNumber\">\n                            <div *ngIf=\"isSerialNumberPresent\" class=\"form-group alert alert-warning\">\n                                <span>{{errorMessage}}</span>\n                            </div>\n                        </div>\n\n                    </div>\n\n                    <div class=\"row\">\n\n                        <div class=\"form-group col\">\n                            <label for=\"manufacturer\"><i class=\"fa fa-industry fa-sm\"></i> Producator</label>\n                            <input type=\"text\" class=\"form-control\" id=\"manufacturer\" formControlName=\"manufacturer\">\n                        </div>\n\n                        <div class=\"form-group col\">\n                            <label for=\"model\"><img class=\"fav-icon-small\" src=\"./assets/img/icons/video-card.ico\"> Model</label>\n                            <input type=\"text\" class=\"form-control\" id=\"model\" formControlName=\"model\">\n                        </div>\n                        <div class=\"form-group col\">\n                            <label for=\"form\"><img class=\"fav-icon-small\" src=\"./assets/img/icons/video_card_profile.ico\"> Form</label>\n                            <input type=\"text\" class=\"form-control\" id=\"form\" formControlName=\"form\">\n                        </div>\n                    </div>\n\n                    <div class=\"row\">\n                        <div class=\"form-group col\">\n                            <label for=\"cpuType\"><img class=\"fav-icon-small\" src=\"./assets/img/icons/video_card_profile.ico\"> Tip Procesor</label>\n                            <input type=\"text\" class=\"form-control\" id=\"cpuType\" formControlName=\"cpuType\">\n                        </div>\n\n                        <div class=\"form-group col\">\n                            <label for=\"cpuModel\"><img class=\"fav-icon-small\" src=\"./assets/img/icons/video_card_profile.ico\"> Model Procesor</label>\n                            <input type=\"text\" class=\"form-control\" id=\"cpuModel\" formControlName=\"cpuModel\">\n                        </div>\n\n                        <div class=\"form-group col\">\n                            <label for=\"memoryType\"><img class=\"fav-icon-small\" src=\"./assets/img/icons/video_card_profile.ico\"> Tip RAM</label>\n                            <input type=\"text\" class=\"form-control\" id=\"memoryType\" formControlName=\"memoryType\">\n                        </div>\n                    </div>\n\n                    <div class=\"row\">\n\n                        <div class=\"form-group col\">\n                            <label for=\"memoryCapacity\"><img class=\"fav-icon-small\" src=\"./assets/img/icons/video_card_profile.ico\"> Capacitate RAM</label>\n                            <input type=\"number\" min=\"0\" class=\"form-control\" id=\"memoryCapacity\" formControlName=\"memoryCapacity\">\n                        </div>\n\n                        <div class=\"form-group col\">\n                            <label for=\"numberOfDIMM\"><img class=\"fav-icon-small\" src=\"./assets/img/icons/video_card_profile.ico\"> Numar DIMM</label>\n                            <input type=\"number\" min=\"0\" class=\"form-control\" id=\"numberOfDIMM\" formControlName=\"numberOfDIMM\">\n                        </div>\n\n                        <div class=\"form-group col\">\n                            <label for=\"memoryFrequency\"><img class=\"fav-icon-small\" src=\"./assets/img/icons/video_card_profile.ico\"> Frecventa RAM (MHZ)</label>\n                            <input type=\"number\" min=\"0\" class=\"form-control\" id=\"memoryFrequency\" formControlName=\"memoryFrequency\">\n                        </div>\n\n                    </div>\n\n                    <div class=\"row\">\n                        <div class=\"form-group col\">\n                            <label for=\"storageExist\"><img class=\"fav-icon-small\" src=\"./assets/img/icons/vga.ico\"> HDD Inclus</label>\n                            <select class=\"form-control\" id=\"storageExist\" formControlName=\"storageExist\" (change)=\"getSelectedOption($event)\">\n                                <option value=\"true\">Da</option>\n                                <option value=\"false\">Nu</option>\n                            </select>\n                        </div>\n                        <div class=\"form-group col\">\n                            <label for=\"storageType\"><img class=\"fav-icon-small\" src=\"./assets/img/icons/video_card_profile.ico\"> Tip HDD</label>\n                            <input type=\"text\" class=\"form-control\" id=\"storageType\" formControlName=\"storageType\">\n                        </div>\n                        <div class=\"form-group col\">\n                            <label for=\"storageCapacity\"><img class=\"fav-icon-small\" src=\"./assets/img/icons/video_card_profile.ico\"> Capacitate HDD</label>\n                            <input type=\"number\" class=\"form-control\" id=\"storageCapacity\" formControlName=\"storageCapacity\">\n                        </div>\n                    </div>\n\n\n                    <div class=\"row\">\n                        <div class=\"form-group col\">\n                            <label for=\"opticalUnitExist\"><img class=\"fav-icon-small\" src=\"./assets/img/icons/vga.ico\"> Unitate optica inclusa</label>\n                            <select class=\"form-control\" id=\"opticalUnitExist\" formControlName=\"opticalUnitExist\" (change)=\"getSelectedOption($event)\">\n                                <option value=\"true\">Da</option>\n                                <option value=\"false\">Nu</option>\n                            </select>\n                        </div>\n\n                        <div class=\"form-group col\">\n                            <label for=\"opticalUnit\"><img class=\"fav-icon-small\" src=\"./assets/img/icons/video_card_profile.ico\"> Unitate optica</label>\n                            <input type=\"text\" class=\"form-control\" id=\"opticalUnit\" formControlName=\"opticalUnit\">\n                        </div>\n\n                        <div class=\"form-group col\">\n                            <label for=\"videoCardExist\"><img class=\"fav-icon-small\" src=\"./assets/img/icons/vga.ico\"> Placa video inclusa</label>\n                            <select class=\"form-control\" id=\"videoCardExist\" formControlName=\"videoCardExist\" (change)=\"getSelectedOption($event)\">\n                                <option value=\"true\">Da</option>\n                                <option value=\"false\">Nu</option>\n                            </select>\n                        </div>\n\n                        <div class=\"form-group col\">\n                            <label for=\"videoCard\"><img class=\"fav-icon-small\" src=\"./assets/img/icons/video_card_profile.ico\"> Placa video</label>\n                            <input type=\"text\" class=\"form-control\" id=\"videoCard\" formControlName=\"videoCard\">\n                        </div>\n                    </div>\n\n                    <div class=\"row\">\n                        <div class=\"form-group col\">\n                            <label for=\"soundCardExist\"><img class=\"fav-icon-small\" src=\"./assets/img/icons/vga.ico\"> Placa sunet inclusa</label>\n                            <select class=\"form-control\" id=\"soundCardExist\" formControlName=\"soundCardExist\" (change)=\"getSelectedOption($event)\">\n                                <option value=\"true\">Da</option>\n                                <option value=\"false\">Nu</option>\n                            </select>\n                        </div>\n\n                        <div class=\"form-group col\">\n                            <label for=\"soundCard\"><img class=\"fav-icon-small\" src=\"./assets/img/icons/video_card_profile.ico\"> Placa sunet</label>\n                            <input type=\"text\" class=\"form-control\" id=\"soundCard\" formControlName=\"soundCard\">\n                        </div>\n\n                        <div class=\"form-group col\">\n                            <label for=\"networkCardExist\"><img class=\"fav-icon-small\" src=\"./assets/img/icons/vga.ico\"> Placa retea inclusa</label>\n                            <select class=\"form-control\" id=\"networkCardExist\" formControlName=\"networkCardExist\" (change)=\"getSelectedOption($event)\">\n                                <option value=\"true\">Da</option>\n                                <option value=\"false\">Nu</option>\n                            </select>\n                        </div>\n\n                        <div class=\"form-group col\">\n                            <label for=\"networkCard\"><img class=\"fav-icon-small\" src=\"./assets/img/icons/video_card_profile.ico\"> Placa retea</label>\n                            <input type=\"text\" class=\"form-control\" id=\"networkCard\" formControlName=\"networkCard\">\n                        </div>\n\n                    </div>\n\n                    <div class=\"row\">\n                        <div class=\"form-group col-lg-4\">\n                            <label for=\"quantity\"><i class=\"fas fa-sort-numeric-up\"></i> Cantitate</label>\n                            <input type=\"number\" class=\"form-control\" id=\"quantity\" formControlName=\"quantity\" min=\"0\">\n                        </div>\n\n                        <div class=\"form-group col-lg-4\">\n                            <label for=\"unitOfMeasurement\"><img class=\"fav-icon-small\" src=\"assets/img/icons/measure.ico\"/> Unitate</label>\n                            <input type=\"text\" class=\"form-control\" id=\"unitOfMeasurement\" formControlName=\"unitOfMeasurement\">\n                        </div>\n\n                        <div class=\"form-group col-lg-4\">\n                            <label for=\"priceIn\"><i class=\"fa fa-money fa-sm\"></i> Pret intrare (Lei)</label>\n                            <input type=\"number\" class=\"form-control\" id=\"priceIn\" formControlName=\"priceIn\" min=\"0\">\n                        </div>\n                    </div>\n                    <div class=\"row\">\n\n                        <div class=\"form-group col-lg-4\">\n                            <label for=\"state\"><img class=\"fav-icon-small\" src=\"./assets/img/icons/state.ico\"> Stare</label>\n                            <select class=\"form-control\" id=\"state\" formControlName=\"state\">\n                                <option disabled value=\"\" selected>Selecteaza stare...</option>\n                                <option *ngFor=\"let state of stateList\">{{state}}</option>\n                            </select>\n                        </div>\n                        <div class=\"form-group col-lg-8\">\n                            <label for=\"productInformation\"><i class=\"fa fa-info-circle fa-sm\"></i> Informatii produs</label>\n                            <input type=\"text\" class=\"form-control\" id=\"productInformation\" formControlName=\"productInformation\">\n                        </div>\n                    </div>\n\n                    <div class=\"modal-footer\">\n                        <button (click)=\"closeModal()\" type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">\n                            Inchide\n                        </button>\n                        <button id=\"addComputer-btn\" *ngIf=\"isAddMode\" type=\"submit\" class=\"btn btn-primary\"\n                                data-target=\"#modalComputer\"\n                                [disabled]=\"validatingForm.invalid\">Adauga\n                        </button>\n                        <button id=\"editComputer-btn\" *ngIf=\"!isAddMode\" type=\"submit\" class=\"btn btn-success\"\n                                data-target=\"#modalComputer\"\n                                [disabled]=\"validatingForm.invalid\">Salveaza modificarile\n                        </button>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- Modal End Add/Edit Computer -->\n\n<!-- Modal Filter Right -->\n<div id=\"modal_aside_right\" class=\"modal fixed-left fade\" tabindex=\"-1\" role=\"dialog\">\n    <div class=\"modal-dialog modal-dialog-aside\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h5 class=\"modal-title\">Filtreaza PC/SERVER</h5>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <div class=\"modal-body modal-body-filter\">\n                <div id=\"accordion\">\n\n                    <div class=\"card\">\n                        <div class=\"card-header\" id=\"headingManufacturer\">\n                            <h5 class=\"mb-0\">\n                                <button class=\"btn btn-link\" data-toggle=\"collapse\" data-target=\"#collapseManufacturer\"\n                                        aria-expanded=\"false\"\n                                        aria-controls=\"collapseManufacturer\">Producator<span class=\"arrow\"></span>\n                                </button>\n                            </h5>\n                        </div>\n                        <div id=\"collapseManufacturer\" class=\"collapse\" aria-labelledby=\"headingManufacturer\"\n                             data-parent=\"#accordion\">\n                            <div class=\"card-body\">\n                                <div (change)=\"getRequestParamsForFilter($event)\" class=\"form-check\"\n                                     *ngFor=\"let manufacturer of manufacturerList\">\n                                    <input class=\"form-check-input\" type=\"checkbox\" value=\"{{manufacturer}}\" id=\"{{manufacturer}}\"\n                                           name=\"manufacturer\">\n                                    <label class=\"form-check-label\" for=\"{{manufacturer}}\">\n                                        {{manufacturer}}\n                                    </label>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class=\"card\">\n                        <div class=\"card-header\" id=\"headingForm\">\n                            <h5 class=\"mb-0\">\n                                <button class=\"btn btn-link\" data-toggle=\"collapse\" data-target=\"#collapseForm\"\n                                        aria-expanded=\"false\"\n                                        aria-controls=\"collapseForm\">Form<span class=\"arrow\"></span>\n                                </button>\n                            </h5>\n                        </div>\n                        <div id=\"collapseForm\" class=\"collapse\" aria-labelledby=\"headingForm\"\n                             data-parent=\"#accordion\">\n                            <div class=\"card-body\">\n                                <div (change)=\"getRequestParamsForFilter($event)\" class=\"form-check\"\n                                     *ngFor=\"let form of formList\">\n                                    <input class=\"form-check-input\" type=\"checkbox\" value=\"{{form}}\" id=\"{{form}}\"\n                                           name=\"form\">\n                                    <label class=\"form-check-label\" for=\"{{form}}\">\n                                        {{form}}\n                                    </label>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class=\"card\">\n                        <div class=\"card-header\" id=\"headingVideoCardExist\">\n                            <h5 class=\"mb-0\">\n                                <button class=\"btn btn-link\" data-toggle=\"collapse\" data-target=\"#collapseVideoCardExist\"\n                                        aria-expanded=\"false\"\n                                        aria-controls=\"collapseVideoCardExist\">\n                                    Placa video inclusa<span class=\"arrow\"></span>\n                                </button>\n                            </h5>\n                        </div>\n                        <div id=\"collapseVideoCardExist\" class=\"collapse\" aria-labelledby=\"headingVideoCardExist\"\n                             data-parent=\"#accordion\">\n                            <div class=\"card-body\">\n                                <div (change)=\"getRequestParamsForFilter($event)\" class=\"form-check\">\n                                    <input class=\"form-check-input\" type=\"checkbox\" value=\"true\" id=\"videoCardExistTrue\" name=\"videoCardExist\">\n                                    <label class=\"form-check-label\" for=\"videoCardExistTrue\">Da</label>\n                                </div>\n                                <div (change)=\"getRequestParamsForFilter($event)\" class=\"form-check\">\n                                    <input class=\"form-check-input\" type=\"checkbox\" value=\"false\" id=\"videoCardExistFalse\" name=\"videoCardExist\">\n                                    <label class=\"form-check-label\" for=\"videoCardExistFalse\">Nu</label>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class=\"card\">\n                        <div class=\"card-header\" id=\"headingOpticalUnitExist\">\n                            <h5 class=\"mb-0\">\n                                <button class=\"btn btn-link\" data-toggle=\"collapse\" data-target=\"#collapseOpticalUnitExist\"\n                                        aria-expanded=\"false\"\n                                        aria-controls=\"collapseOpticalUnitExist\">\n                                    Unitate optica inclusa<span class=\"arrow\"></span>\n                                </button>\n                            </h5>\n                        </div>\n                        <div id=\"collapseOpticalUnitExist\" class=\"collapse\" aria-labelledby=\"headingOpticalUnitExist\"\n                             data-parent=\"#accordion\">\n                            <div class=\"card-body\">\n                                <div (change)=\"getRequestParamsForFilter($event)\" class=\"form-check\">\n                                    <input class=\"form-check-input\" type=\"checkbox\" value=\"true\" id=\"opticalUnitExistTrue\" name=\"opticalUnitExist\">\n                                    <label class=\"form-check-label\" for=\"opticalUnitExistTrue\">Da</label>\n                                </div>\n                                <div (change)=\"getRequestParamsForFilter($event)\" class=\"form-check\">\n                                    <input class=\"form-check-input\" type=\"checkbox\" value=\"false\" id=\"opticalUnitExistFalse\" name=\"opticalUnitExist\">\n                                    <label class=\"form-check-label\" for=\"opticalUnitExistFalse\">Nu</label>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class=\"card\">\n                        <div class=\"card-header\" id=\"headingStorageCapacity\">\n                            <h5 class=\"mb-0\">\n                                <button class=\"btn btn-link\" data-toggle=\"collapse\" data-target=\"#collapseStorageCapacity\"\n                                        aria-expanded=\"false\"\n                                        aria-controls=\"collapseStorageCapacity\">Capacitate HDD<span class=\"arrow\"></span>\n                                </button>\n                            </h5>\n                        </div>\n                        <div id=\"collapseStorageCapacity\" class=\"collapse\" aria-labelledby=\"headingStorageCapacity\"\n                             data-parent=\"#accordion\">\n                            <div class=\"card-body\">\n                                <div (change)=\"getRequestParamsForFilter($event)\" class=\"form-check\"\n                                     *ngFor=\"let storageCapacity of storageCapacityList\">\n                                    <input class=\"form-check-input\" type=\"checkbox\" value=\"{{storageCapacity}}\" id=\"{{storageCapacity}}\"\n                                           name=\"storageCapacity\">\n                                    <label class=\"form-check-label\" for=\"{{storageCapacity}}\">\n                                        {{storageCapacity}}\n                                    </label>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class=\"card\">\n                        <div class=\"card-header\" id=\"headingMemoryCapacity\">\n                            <h5 class=\"mb-0\">\n                                <button class=\"btn btn-link\" data-toggle=\"collapse\" data-target=\"#collapseMemoryCapacity\"\n                                        aria-expanded=\"false\"\n                                        aria-controls=\"collapseMemoryCapacity\">Capacitate RAM<span class=\"arrow\"></span>\n                                </button>\n                            </h5>\n                        </div>\n                        <div id=\"collapseMemoryCapacity\" class=\"collapse\" aria-labelledby=\"headingMemoryCapacity\"\n                             data-parent=\"#accordion\">\n                            <div class=\"card-body\">\n                                <div (change)=\"getRequestParamsForFilter($event)\" class=\"form-check\"\n                                     *ngFor=\"let memoryCapacity of memoryCapacityList\">\n                                    <input class=\"form-check-input\" type=\"checkbox\" value=\"{{memoryCapacity}}\" id=\"{{memoryCapacity}}\"\n                                           name=\"memoryCapacity\">\n                                    <label class=\"form-check-label\" for=\"{{memoryCapacity}}\">\n                                        {{memoryCapacity}}\n                                    </label>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class=\"card\">\n                        <div class=\"card-header\" id=\"headingCpuModel\">\n                            <h5 class=\"mb-0\">\n                                <button class=\"btn btn-link collapsed\" data-toggle=\"collapse\" data-target=\"#collapseCpuModel\"\n                                        aria-expanded=\"false\" aria-controls=\"collapseCpuModel\">Model CPU<span class=\"arrow\"></span>\n                                </button>\n                            </h5>\n                        </div>\n                        <div id=\"collapseCpuModel\" class=\"collapse\" aria-labelledby=\"headingCpuModel\" data-parent=\"#accordion\">\n                            <div class=\"card-body\">\n                                <div (change)=\"getRequestParamsForFilter($event)\" class=\"form-check\"\n                                     *ngFor=\"let cpuModel of cpuModelList\">\n                                    <input class=\"form-check-input\" type=\"checkbox\" value=\"{{cpuModel}}\" id=\"{{cpuModel}}\"\n                                           name=\"cpuModel\">\n                                    <label class=\"form-check-label\" for=\"{{cpuModel}}\">\n                                        {{cpuModel}}\n                                    </label>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n                <button (click)=\"resetFilters()\" type=\"button\" class=\"btn btn-primary\">Reseteaza filtre</button>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- End Modal Filter Right -->\n\n");

/***/ })

}]);
//# sourceMappingURL=src_app_computer_computer_module_ts.js.map