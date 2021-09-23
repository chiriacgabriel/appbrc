(self["webpackChunkpaper_dashboard_pro_angular"] = self["webpackChunkpaper_dashboard_pro_angular"] || []).push([["src_app_userpage_user_module_ts"],{

/***/ 73188:
/*!********************************************!*\
  !*** ./src/app/userpage/user.component.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserComponent": function() { return /* binding */ UserComponent; }
/* harmony export */ });
/* harmony import */ var _raw_loader_user_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./user.component.html */ 46874);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var UserComponent = /** @class */ (function () {
    function UserComponent() {
    }
    UserComponent = __decorate([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Component)({
            selector: 'user-cmp',
            template: _raw_loader_user_component_html__WEBPACK_IMPORTED_MODULE_0__.default
        })
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ 18272:
/*!*****************************************!*\
  !*** ./src/app/userpage/user.module.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserModule": function() { return /* binding */ UserModule; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _user_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user.component */ 73188);
/* harmony import */ var _user_routing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.routing */ 63977);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var UserModule = /** @class */ (function () {
    function UserModule() {
    }
    UserModule = __decorate([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
                _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(_user_routing__WEBPACK_IMPORTED_MODULE_1__.UserRoutes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule
            ],
            declarations: [_user_component__WEBPACK_IMPORTED_MODULE_0__.UserComponent]
        })
    ], UserModule);
    return UserModule;
}());



/***/ }),

/***/ 63977:
/*!******************************************!*\
  !*** ./src/app/userpage/user.routing.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserRoutes": function() { return /* binding */ UserRoutes; }
/* harmony export */ });
/* harmony import */ var _user_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user.component */ 73188);

var UserRoutes = [{
        path: '',
        children: [{
                path: 'pages/user',
                component: _user_component__WEBPACK_IMPORTED_MODULE_0__.UserComponent
            }]
    }];


/***/ }),

/***/ 46874:
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/userpage/user.component.html ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\n  <div class=\"row\">\n    <div class=\"col-md-4\">\n      <div class=\"card card-user\">\n        <div class=\"image\">\n          <img src=\"./assets/img/bg/damir-bosnjak.jpg\" alt=\"...\">\n        </div>\n        <div class=\"card-body\">\n          <div class=\"author\">\n            <a href=\"javascript:void(0)\">\n              <img class=\"avatar border-gray\" src=\"./assets/img/mike.jpg\" alt=\"...\">\n              <h5 class=\"title\">Chet Faker</h5>\n            </a>\n            <p class=\"description\">\n              @chetfaker\n            </p>\n          </div>\n          <p class=\"description text-center\">\n            \"I like the way you work it\n            <br> No diggity\n            <br> I wanna bag it up\"\n          </p>\n        </div>\n        <div class=\"card-footer\">\n          <hr>\n          <div class=\"button-container\">\n            <div class=\"row\">\n              <div class=\"col-lg-3 col-md-6 col-6 ml-auto\">\n                <h5>12\n                  <br>\n                  <small>Files</small>\n                </h5>\n              </div>\n              <div class=\"col-lg-4 col-md-6 col-6 ml-auto mr-auto\">\n                <h5>2GB\n                  <br>\n                  <small>Used</small>\n                </h5>\n              </div>\n              <div class=\"col-lg-3 mr-auto\">\n                <h5>24,6$\n                  <br>\n                  <small>Spent</small>\n                </h5>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <h4 class=\"card-title\">Team Members</h4>\n        </div>\n        <div class=\"card-body\">\n          <ul class=\"list-unstyled team-members\">\n            <li>\n              <div class=\"row\">\n                <div class=\"col-md-2 col-2\">\n                  <div class=\"avatar\">\n                    <img src=\"./assets/img/faces/ayo-ogunseinde-2.jpg\" alt=\"Circle Image\" class=\"img-circle img-no-padding img-responsive\">\n                  </div>\n                </div>\n                <div class=\"col-md-7 col-7\">\n                  DJ Khaled\n                  <br />\n                  <span class=\"text-muted\">\n                    <small>Offline</small>\n                  </span>\n                </div>\n                <div class=\"col-md-3 col-3 text-right\">\n                  <button class=\"btn btn-sm btn-outline-success btn-round btn-icon\"><i class=\"fa fa-envelope\"></i></button>\n                </div>\n              </div>\n            </li>\n            <li>\n              <div class=\"row\">\n                <div class=\"col-md-2 col-2\">\n                  <div class=\"avatar\">\n                    <img src=\"./assets/img/faces/joe-gardner-2.jpg\" alt=\"Circle Image\" class=\"img-circle img-no-padding img-responsive\">\n                  </div>\n                </div>\n                <div class=\"col-md-7 col-7\">\n                  Creative Tim\n                  <br />\n                  <span class=\"text-success\">\n                    <small>Available</small>\n                  </span>\n                </div>\n                <div class=\"col-md-3 col-3 text-right\">\n                  <button class=\"btn btn-sm btn-outline-success btn-round btn-icon\"><i class=\"fa fa-envelope\"></i></button>\n                </div>\n              </div>\n            </li>\n            <li>\n              <div class=\"row\">\n                <div class=\"col-md-2 col-2\">\n                  <div class=\"avatar\">\n                    <img src=\"./assets/img/faces/clem-onojeghuo-2.jpg\" alt=\"Circle Image\" class=\"img-circle img-no-padding img-responsive\">\n                  </div>\n                </div>\n                <div class=\"col-ms-7 col-7\">\n                  Flume\n                  <br />\n                  <span class=\"text-danger\">\n                    <small>Busy</small>\n                  </span>\n                </div>\n                <div class=\"col-md-3 col-3 text-right\">\n                  <button class=\"btn btn-sm btn-outline-success btn-round btn-icon\"><i class=\"fa fa-envelope\"></i></button>\n                </div>\n              </div>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-8\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <h5 class=\"title\">Edit Profile</h5>\n        </div>\n        <div class=\"card-body\">\n          <form>\n            <div class=\"row\">\n              <div class=\"col-md-5 pr-1\">\n                <div class=\"form-group\">\n                  <label>Company (disabled)</label>\n                  <input type=\"text\" class=\"form-control\" disabled=\"\" placeholder=\"Company\" value=\"Creative Code Inc.\">\n                </div>\n              </div>\n              <div class=\"col-md-3 px-1\">\n                <div class=\"form-group\">\n                  <label>Username</label>\n                  <input type=\"text\" class=\"form-control\" placeholder=\"Username\" value=\"michael23\">\n                </div>\n              </div>\n              <div class=\"col-md-4 pl-1\">\n                <div class=\"form-group\">\n                  <label for=\"exampleInputEmail1\">Email address</label>\n                  <input type=\"email\" class=\"form-control\" placeholder=\"Email\">\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-6 pr-1\">\n                <div class=\"form-group\">\n                  <label>First Name</label>\n                  <input type=\"text\" class=\"form-control\" placeholder=\"Company\" value=\"Chet\">\n                </div>\n              </div>\n              <div class=\"col-md-6 pl-1\">\n                <div class=\"form-group\">\n                  <label>Last Name</label>\n                  <input type=\"text\" class=\"form-control\" placeholder=\"Last Name\" value=\"Faker\">\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-12\">\n                <div class=\"form-group\">\n                  <label>Address</label>\n                  <input type=\"text\" class=\"form-control\" placeholder=\"Home Address\" value=\"Melbourne, Australia\">\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-4 pr-1\">\n                <div class=\"form-group\">\n                  <label>City</label>\n                  <input type=\"text\" class=\"form-control\" placeholder=\"City\" value=\"Melbourne\">\n                </div>\n              </div>\n              <div class=\"col-md-4 px-1\">\n                <div class=\"form-group\">\n                  <label>Country</label>\n                  <input type=\"text\" class=\"form-control\" placeholder=\"Country\" value=\"Australia\">\n                </div>\n              </div>\n              <div class=\"col-md-4 pl-1\">\n                <div class=\"form-group\">\n                  <label>Postal Code</label>\n                  <input type=\"number\" class=\"form-control\" placeholder=\"ZIP Code\">\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-12\">\n                <div class=\"form-group\">\n                  <label>About Me</label>\n                  <textarea rows=\"4\" cols=\"80\" class=\"form-control textarea\">Oh so, your weak rhyme You doubt I'll bother, reading into it</textarea>\n                </div>\n              </div>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_userpage_user_module_ts.js.map