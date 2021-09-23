(self["webpackChunkpaper_dashboard_pro_angular"] = self["webpackChunkpaper_dashboard_pro_angular"] || []).push([["default-src_app_helper_enum_service_ts-src_app_helper_filter_service_ts-src_app_model_compone-ff564b"],{

/***/ 49395:
/*!****************************************!*\
  !*** ./src/app/helper/enum.service.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EnumService": function() { return /* binding */ EnumService; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var EnumService = /** @class */ (function () {
    function EnumService() {
    }
    EnumService.prototype.getValues = function (enumValue) {
        return Object.keys(enumValue).map(function (key) { return enumValue[key]; }).filter(function (k) { return !(parseInt(k) >= 0); });
    };
    EnumService.prototype.getKeys = function (enumParsed, category) {
        var name;
        for (var n in enumParsed) {
            if (enumParsed[n] === category) {
                name = n;
            }
        }
        return name;
    };
    EnumService.ctorParameters = function () { return []; };
    EnumService = __decorate([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable)({
            providedIn: 'root'
        })
    ], EnumService);
    return EnumService;
}());



/***/ }),

/***/ 63242:
/*!******************************************!*\
  !*** ./src/app/helper/filter.service.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilterService": function() { return /* binding */ FilterService; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 91841);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var FilterService = /** @class */ (function () {
    function FilterService() {
        this.filter = [];
        this.params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams();
    }
    FilterService.prototype.setParamsFilter = function (event) {
        if (this.params.get(event.target.name) !== null) {
            this.filter = this.params.getAll(event.target.name);
            this.params = this.params.delete(event.target.name, this.filter.toString());
            this.filter.push(event.target.value);
            this.params = this.params.set(event.target.name, this.filter.toString());
        }
        else {
            if (this.filter.length !== 0) {
                this.filter = [];
            }
            this.filter.push(event.target.value);
            this.params = this.params.set(event.target.name, this.filter.toString());
        }
        return this.params;
    };
    FilterService.prototype.deleteFilter = function (event) {
        this.filter = this.params.get(event.target.name).split(',');
        this.params = this.params.delete(event.target.name, this.filter.toString());
        this.filter.splice(this.filter.indexOf(event.target.value), 1);
        if (this.filter.length === 0) {
            this.params = this.params.delete(event.target.name, '');
        }
        else {
            this.params = this.params.append(event.target.name, this.filter.toString());
        }
        return this.params;
    };
    FilterService.ctorParameters = function () { return []; };
    FilterService = __decorate([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
            providedIn: 'root'
        })
    ], FilterService);
    return FilterService;
}());



/***/ }),

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

/***/ 38450:
/*!*********************************************************!*\
  !*** ./src/app/model/components/GenerateProductCode.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GenerateProductCode": function() { return /* binding */ GenerateProductCode; }
/* harmony export */ });
var GenerateProductCode = /** @class */ (function () {
    function GenerateProductCode() {
    }
    Object.defineProperty(GenerateProductCode, "searchProductCodeURI", {
        get: function () {
            return 'product-code/search';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GenerateProductCode, "productCodeURI", {
        get: function () {
            return 'product-code';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GenerateProductCode, "productCodeCategoryURI", {
        get: function () {
            return 'product-code/category';
        },
        enumerable: false,
        configurable: true
    });
    return GenerateProductCode;
}());



/***/ }),

/***/ 22936:
/*!*****************************************!*\
  !*** ./src/app/model/enum/EnumState.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EnumState": function() { return /* binding */ EnumState; }
/* harmony export */ });
var EnumState;
(function (EnumState) {
    EnumState["NEW"] = "Nou";
    EnumState["SECOND"] = "Second";
    EnumState["REFURBISHED"] = "Refurbished";
    EnumState["RESEALED"] = "Resigilat";
    EnumState["CERTIFIED_FACTORY_REFURBISHED"] = "Certified factory refurbished";
    EnumState["OUTLET"] = "Outlet";
    EnumState["RENEW"] = "Renew";
    EnumState["BROKEN"] = "Defect";
})(EnumState || (EnumState = {}));


/***/ }),

/***/ 69336:
/*!**********************************************************************!*\
  !*** ./src/app/services/components/generate-product-code.service.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GenerateProductCodeService": function() { return /* binding */ GenerateProductCodeService; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 92340);
/* harmony import */ var _helper_notification_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helper/notification.service */ 59113);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({ 'Content-Type': 'application/json' })
};
var GenerateProductCodeService = /** @class */ (function () {
    function GenerateProductCodeService(http, notificationService) {
        this.http = http;
        this.notificationService = notificationService;
        this.apiServerUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl;
    }
    GenerateProductCodeService.prototype.getAll = function (url) {
        return this.http.get(this.apiServerUrl + "/api/" + url);
    };
    GenerateProductCodeService.prototype.getAllByCategory = function (urlCategory, params) {
        return this.http.get(this.apiServerUrl + "/api/" + urlCategory, { params: params });
    };
    GenerateProductCodeService.prototype.search = function (searchUrl, params) {
        return this.http.get(this.apiServerUrl + "/api/" + searchUrl, { params: params });
    };
    GenerateProductCodeService.prototype.add = function (url, generateProductCode) {
        return this.http.post(this.apiServerUrl + "/api/" + url, generateProductCode, httpOptions);
    };
    GenerateProductCodeService.prototype.update = function (url, id, generatedProductCode) {
        return this.http.put(this.apiServerUrl + "/api/" + url + '/' + id, generatedProductCode, httpOptions);
    };
    GenerateProductCodeService.prototype.delete = function (url, id) {
        return this.http.delete(this.apiServerUrl + "/api/" + url + '/' + id);
    };
    GenerateProductCodeService.prototype.inactiveProductCode = function (param, productCodeInactive) {
        var buttonID = document.getElementById(param);
        if (param instanceof MouseEvent) {
            param.stopPropagation();
        }
        else {
            buttonID.removeAttribute('data-toggle');
            buttonID.removeAttribute('data-target');
        }
        // tslint:disable-next-line:max-line-length
        var errorMessage = 'Codul de produs este inactiv, contacteaza un administrator pentru activarea acestui cod: ' + productCodeInactive.productCode;
        this.notificationService.showNotification('top', 'center', errorMessage, 'danger');
    };
    GenerateProductCodeService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient },
        { type: _helper_notification_service__WEBPACK_IMPORTED_MODULE_1__.NotificationService }
    ]; };
    GenerateProductCodeService = __decorate([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
            providedIn: 'root'
        })
    ], GenerateProductCodeService);
    return GenerateProductCodeService;
}());



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

/***/ 19746:
/*!***********************************************!*\
  !*** ./src/assets/css/_pagination_custom.css ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/********************** Pagination Custom *************************************/\r\n\r\n.paginator{\r\n    font-family: 'Lato', sans-serif;\r\n    font-size: 15px;\r\n}\r\n\r\n.paginator ::ng-deep .ngx-pagination .current {\r\n    background: #51cbce;\r\n    border-radius: 4px;\r\n    padding-left: 9px;\r\n    padding-right: 9px;\r\n}\r\n\r\n/********************** End Pagination Custom *************************************/\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9wYWdpbmF0aW9uX2N1c3RvbS5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsK0VBQStFOztBQUUvRTtJQUNJLCtCQUErQjtJQUMvQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBLG1GQUFtRiIsImZpbGUiOiJfcGFnaW5hdGlvbl9jdXN0b20uY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKioqKioqKioqKioqKioqKioqKiogUGFnaW5hdGlvbiBDdXN0b20gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbi5wYWdpbmF0b3J7XHJcbiAgICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG59XHJcblxyXG4ucGFnaW5hdG9yIDo6bmctZGVlcCAubmd4LXBhZ2luYXRpb24gLmN1cnJlbnQge1xyXG4gICAgYmFja2dyb3VuZDogIzUxY2JjZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIHBhZGRpbmctbGVmdDogOXB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogOXB4O1xyXG59XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKiBFbmQgUGFnaW5hdGlvbiBDdXN0b20gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuIl19 */");

/***/ })

}]);
//# sourceMappingURL=default-src_app_helper_enum_service_ts-src_app_helper_filter_service_ts-src_app_model_compone-ff564b.js.map