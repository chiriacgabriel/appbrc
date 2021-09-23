(self["webpackChunkpaper_dashboard_pro_angular"] = self["webpackChunkpaper_dashboard_pro_angular"] || []).push([["common"],{

/***/ 23754:
/*!****************************************************!*\
  !*** ./src/app/services/accounting/nir.service.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NirService": function() { return /* binding */ NirService; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 92340);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _environments_variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/variables */ 57438);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var NirService = /** @class */ (function () {
    function NirService(http) {
        this.http = http;
        this.apiServerUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl;
    }
    NirService.prototype.getAll = function () {
        return this.http.get(this.apiServerUrl + "/api/nir");
    };
    NirService.prototype.getAllUnreceived = function () {
        return this.http.get(this.apiServerUrl + "/api/nir/unreceived");
    };
    NirService.prototype.add = function (nir) {
        return this.http.post(this.apiServerUrl + "/api/nir", nir, _environments_variables__WEBPACK_IMPORTED_MODULE_1__.httpOptions);
    };
    NirService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient }
    ]; };
    NirService = __decorate([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
            providedIn: 'root'
        })
    ], NirService);
    return NirService;
}());



/***/ }),

/***/ 95508:
/*!*********************************************************!*\
  !*** ./src/app/services/accounting/provider.service.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProviderService": function() { return /* binding */ ProviderService; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 92340);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _environments_variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/variables */ 57438);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ProviderService = /** @class */ (function () {
    function ProviderService(http) {
        this.http = http;
        this.apiServerUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl;
    }
    ProviderService.prototype.getAll = function () {
        return this.http.get(this.apiServerUrl + "/api/providers");
    };
    ProviderService.prototype.add = function (provider) {
        return this.http.post(this.apiServerUrl + "/api/providers", provider, _environments_variables__WEBPACK_IMPORTED_MODULE_1__.httpOptions);
    };
    ProviderService.prototype.editById = function (id, provider) {
        return this.http.put(this.apiServerUrl + "/api/providers/" + id, provider, _environments_variables__WEBPACK_IMPORTED_MODULE_1__.httpOptions);
    };
    ProviderService.prototype.deleteById = function (id) {
        return this.http.delete(this.apiServerUrl + "/api/providers/" + id);
    };
    ProviderService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient }
    ]; };
    ProviderService = __decorate([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
            providedIn: 'root'
        })
    ], ProviderService);
    return ProviderService;
}());



/***/ }),

/***/ 57438:
/*!***************************************!*\
  !*** ./src/environments/variables.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "httpOptions": function() { return /* binding */ httpOptions; }
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 91841);

var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({ 'Content-Type': 'application/json' })
};


/***/ })

}]);
//# sourceMappingURL=common.js.map