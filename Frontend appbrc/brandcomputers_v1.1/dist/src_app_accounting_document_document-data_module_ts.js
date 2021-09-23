(self["webpackChunkpaper_dashboard_pro_angular"] = self["webpackChunkpaper_dashboard_pro_angular"] || []).push([["src_app_accounting_document_document-data_module_ts"],{

/***/ 20691:
/*!*************************************************************!*\
  !*** ./src/app/accounting/document/document-data.module.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DocumentDataModule": function() { return /* binding */ DocumentDataModule; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _document_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./document.component */ 16285);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-select/ng-select */ 86640);
/* harmony import */ var _document_data_routing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./document-data.routing */ 87446);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var DocumentDataModule = /** @class */ (function () {
    function DocumentDataModule() {
    }
    DocumentDataModule = __decorate([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
            declarations: [_document_component__WEBPACK_IMPORTED_MODULE_0__.DocumentComponent],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
                _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(_document_data_routing__WEBPACK_IMPORTED_MODULE_1__.DocumentDataRouting),
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__.NgSelectModule
            ]
        })
    ], DocumentDataModule);
    return DocumentDataModule;
}());



/***/ }),

/***/ 87446:
/*!**************************************************************!*\
  !*** ./src/app/accounting/document/document-data.routing.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DocumentDataRouting": function() { return /* binding */ DocumentDataRouting; }
/* harmony export */ });
/* harmony import */ var _document_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./document.component */ 16285);

var DocumentDataRouting = [{
        path: '',
        children: [{
                path: 'documents',
                component: _document_component__WEBPACK_IMPORTED_MODULE_0__.DocumentComponent,
            }]
    }];


/***/ }),

/***/ 16285:
/*!***********************************************************!*\
  !*** ./src/app/accounting/document/document.component.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DocumentComponent": function() { return /* binding */ DocumentComponent; }
/* harmony export */ });
/* harmony import */ var _raw_loader_document_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./document.component.html */ 74618);
/* harmony import */ var _document_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./document.component.css */ 76963);
/* harmony import */ var _assets_css_table_format_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../assets/css/_table_format.css */ 25824);
/* harmony import */ var _assets_css_tab_pane_custom_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../assets/css/_tab_pane_custom.css */ 17532);
/* harmony import */ var _assets_css_fav_icons_custom_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../assets/css/_fav_icons_custom.css */ 16583);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _services_accounting_nir_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/accounting/nir.service */ 23754);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 39075);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var DocumentComponent = /** @class */ (function () {
    function DocumentComponent(nirService, sanitizer) {
        this.nirService = nirService;
        this.sanitizer = sanitizer;
        this.nirList = [];
        this.errorMessage = '';
    }
    DocumentComponent.prototype.ngOnInit = function () {
        this.getAllNir();
    };
    DocumentComponent.prototype.getAllNir = function () {
        var _this = this;
        this.nirService.getAll().subscribe(function (data) {
            _this.nirList = data;
        }, function (error) {
            _this.errorMessage = error.error.message;
        });
    };
    DocumentComponent.prototype.downloadFile = function (nirFile) {
        this.nameOfDocument = 'nir' + nirFile.nirNumber + '.pdf';
        this.pdfFileUrl = this.sanitizer.bypassSecurityTrustResourceUrl("data:application/pdf;base64, " + nirFile.file);
    };
    DocumentComponent.prototype.viewFile = function (nirFile) {
        // Embed the PDF into the HTML page and show it to the user
        var obj = document.createElement('object');
        obj.style.width = '100%';
        obj.style.height = '80vh';
        obj.type = 'application/pdf';
        obj.data = 'data:application/pdf;base64,' + nirFile.file;
        var contentViewPdf = document.getElementById('content-view-pdf');
        if (contentViewPdf.children.length >= 1) {
            contentViewPdf.removeChild(contentViewPdf.children[0]);
        }
        contentViewPdf.appendChild(obj);
    };
    DocumentComponent.ctorParameters = function () { return [
        { type: _services_accounting_nir_service__WEBPACK_IMPORTED_MODULE_5__.NirService },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.DomSanitizer }
    ]; };
    DocumentComponent = __decorate([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
            selector: 'app-document',
            template: _raw_loader_document_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
            styles: [_document_component_css__WEBPACK_IMPORTED_MODULE_1__.default, _assets_css_table_format_css__WEBPACK_IMPORTED_MODULE_2__.default, _assets_css_tab_pane_custom_css__WEBPACK_IMPORTED_MODULE_3__.default, _assets_css_fav_icons_custom_css__WEBPACK_IMPORTED_MODULE_4__.default]
        })
    ], DocumentComponent);
    return DocumentComponent;
}());



/***/ }),

/***/ 76963:
/*!************************************************************!*\
  !*** ./src/app/accounting/document/document.component.css ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkb2N1bWVudC5jb21wb25lbnQuY3NzIn0= */");

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

/***/ 74618:
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/accounting/document/document.component.html ***!
  \***************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <!-- Nav tabs -->\n            <ul class=\"nav nav-tabs-navigation custom-tab-pane\" id=\"documentsTab\" role=\"tablist\">\n                <li class=\"nav-item\">\n                    <a class=\"nav-link active\" id=\"nir-tab\" data-toggle=\"tab\" href=\"#nir\" role=\"tab\"\n                       aria-controls=\"nir\" aria-selected=\"true\">NIR</a>\n                </li>\n\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" id=\"docTransform-tab\" data-toggle=\"tab\" href=\"#docTransform\" role=\"tab\"\n                       aria-controls=\"docTransform\" aria-selected=\"true\">Transformare Stoc</a>\n                </li>\n            </ul>\n            <!-- End Nav tabs -->\n\n            <div class=\"tab-content\" id=\"providerTabContent\">\n\n                <!-- First Tab Content -->\n                <div class=\"tab-pane fade show active mx-3\" id=\"provider\" role=\"tabpanel\"\n                     aria-labelledby=\"provider-tab\">\n                    <div class=\"card card-custom\">\n                        <div class=\"card-header\">\n                            <h4 class=\"card-title\">NIR</h4>\n                        </div>\n                        <!-- Content -->\n                        <div class=\"card-body\">\n                            <div>\n                                <div class=\"row align-items-center float-right\">\n                                    <div class=\"col-auto\">\n                                        <input #inputSearch (keydown.enter)=\"getEventSearchResult($event)\"\n                                               class=\"form-control form-control-sm\"\n                                               placeholder=\"Cautare...\">\n                                    </div>\n                                    <div class=\"col-auto btn-group-sm\" role=\"group\">\n                                        <button type=\"button\" class=\"btn btn-info\" (click)=\"clearSearch()\">\n                                            <i class=\"fa fa-refresh\" aria-hidden=\"true\"></i>\n                                        </button>\n                                    </div>\n                                </div>\n                                <!--        Here you can write extra buttons/actions for the toolbar              -->\n                            </div>\n                            <div class=\"table-responsive\">\n                                <table id=\"datatable\" class=\"table table-striped table-bordered table-format\"\n                                       width=\"100%\">\n                                    <thead>\n                                    <tr>\n                                        <th scope=\"col\">Numar NIR</th>\n                                        <th scope=\"col\">Numar factura</th>\n                                        <th scope=\"col\">Data</th>\n                                        <th scope=\"col\">Descarca NIR</th>\n                                        <th scope=\"col\">Vezi NIR</th>\n                                        <th scope=\"col\">Editare NIR</th>\n\n                                    </tr>\n                                    </thead>\n                                    <tbody>\n\n                                    <tr *ngFor=\"let nir of nirList\">\n                                        <td>{{nir.nirNumber}}</td>\n                                        <td>{{nir.invoiceNumber}}</td>\n                                        <td>{{nir.date}}</td>\n                                        <td>\n                                            <a [href]=\"pdfFileUrl\" [download]=\"nameOfDocument\" (click)=\"downloadFile(nir.nirFile)\"  class=\"docs-design\">\n                                                <img class=\"fav-icon-small-doc\" src=\"assets/img/icons/file-pdf-download.ico\"/>\n                                            </a>\n                                        </td>\n                                        <td>\n                                            <a data-target=\"#view-pdf\" data-toggle=\"modal\" (click)=\"viewFile(nir.nirFile)\" class=\"docs-design\">\n                                                <img class=\"fav-icon-small-doc\" src=\"assets/img/icons/view-pdf.ico\"/>\n                                            </a>\n                                        </td>\n                                        <td>\n                                            <a class=\"docs-design\" href=\"#\">\n                                                <img class=\"fav-icon-small-doc\" src=\"assets/img/icons/edit-nir.ico\"/>\n                                            </a>\n                                        </td>\n                                    </tr>\n                                    </tbody>\n                                </table>\n                            </div>\n                        </div>\n                        <!-- end content-->\n                    </div>\n                </div>\n                <!-- End First Tab Content -->\n\n            </div>\n        </div>\n    </div>\n</div>\n\n<!-- Modal View PDF -->\n<div class=\"modal fade\" id=\"view-pdf\" data-keyboard=\"false\" tabindex=\"-1\" aria-labelledby=\"staticBackdropLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-xl p-0\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header p-0 border-0\">\n\n            </div>\n            <div id=\"content-view-pdf\" class=\"modal-body\">\n\n            </div>\n            <div class=\"modal-footer mx-auto\">\n                <button type=\"button\" class=\"btn btn-secondary \" data-dismiss=\"modal\">Inchide</button>\n            </div>\n        </div>\n    </div>\n</div>\n\n<!-- End Modal View PDF -->\n");

/***/ })

}]);
//# sourceMappingURL=src_app_accounting_document_document-data_module_ts.js.map