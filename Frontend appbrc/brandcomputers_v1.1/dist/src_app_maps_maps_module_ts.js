(self["webpackChunkpaper_dashboard_pro_angular"] = self["webpackChunkpaper_dashboard_pro_angular"] || []).push([["src_app_maps_maps_module_ts"],{

/***/ 29704:
/*!*****************************************************************!*\
  !*** ./node_modules/@ngui/map/__ivy_ngcc__/esm2015/ngui-map.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BicyclingLayer": function() { return /* binding */ BicyclingLayer; },
/* harmony export */   "NavigatorGeolocation": function() { return /* binding */ NavigatorGeolocation; },
/* harmony export */   "OptionBuilder": function() { return /* binding */ OptionBuilder; },
/* harmony export */   "NG_MAP_CONFIG_TOKEN": function() { return /* binding */ NG_MAP_CONFIG_TOKEN; },
/* harmony export */   "NgMapApiLoader": function() { return /* binding */ NgMapApiLoader; },
/* harmony export */   "NgMapAsyncApiLoader": function() { return /* binding */ NgMapAsyncApiLoader; },
/* harmony export */   "NgMapAsyncCallbackApiLoader": function() { return /* binding */ NgMapAsyncCallbackApiLoader; },
/* harmony export */   "NguiMapComponent": function() { return /* binding */ NguiMapComponent; },
/* harmony export */   "InfoWindow": function() { return /* binding */ InfoWindow; },
/* harmony export */   "CustomMarker": function() { return /* binding */ CustomMarker; },
/* harmony export */   "Circle": function() { return /* binding */ Circle; },
/* harmony export */   "DataLayer": function() { return /* binding */ DataLayer; },
/* harmony export */   "DirectionsRenderer": function() { return /* binding */ DirectionsRenderer; },
/* harmony export */   "DrawingManager": function() { return /* binding */ DrawingManager; },
/* harmony export */   "GeoCoder": function() { return /* binding */ GeoCoder; },
/* harmony export */   "GroundOverlay": function() { return /* binding */ GroundOverlay; },
/* harmony export */   "HeatmapLayer": function() { return /* binding */ HeatmapLayer; },
/* harmony export */   "KmlLayer": function() { return /* binding */ KmlLayer; },
/* harmony export */   "Marker": function() { return /* binding */ Marker; },
/* harmony export */   "NguiMap": function() { return /* binding */ NguiMap; },
/* harmony export */   "PlacesAutoComplete": function() { return /* binding */ PlacesAutoComplete; },
/* harmony export */   "Polygon": function() { return /* binding */ Polygon; },
/* harmony export */   "Polyline": function() { return /* binding */ Polyline; },
/* harmony export */   "StreetViewPanorama": function() { return /* binding */ StreetViewPanorama; },
/* harmony export */   "TrafficLayer": function() { return /* binding */ TrafficLayer; },
/* harmony export */   "TransitLayer": function() { return /* binding */ TransitLayer; },
/* harmony export */   "NguiMapModule": function() { return /* binding */ NguiMapModule; },
/* harmony export */   "ɵa": function() { return /* binding */ BaseMapDirective; }
/* harmony export */ });
/* harmony import */ var D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/get */ 27078);
/* harmony import */ var D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ 43620);
/* harmony import */ var D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ 28784);
/* harmony import */ var D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ 84999);
/* harmony import */ var D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 31112);
/* harmony import */ var D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 41998);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 69165);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 88229);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 79765);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 28049);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 54395);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 68307);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 38583);










/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * return json string from json-like string
 * @param {?} str
 * @return {?}
 */


var _c0 = ["*"];
var _c1 = ["template"];

function jsonize(str) {
  try {
    // if parsable already, return as it is
    JSON.parse(str);
    return str;
  } catch (
  /** @type {?} */
  e) {
    // if not parsable, change little
    return str.replace(/([\$\w]+)\s*:/g, // wrap keys without double quote
    // wrap keys without double quote
    function (_, $1) {
      return '"' + $1 + '":';
    }).replace(/'([^']+)'/g, // replacing single quote to double quote
    // replacing single quote to double quote
    function (_, $1) {
      return '"' + $1 + '"';
    });
  }
}
/**
 * Returns string to an object by using JSON.parse()
 * @param {?} input
 * @return {?}
 */


function getJSON(input) {
  if (typeof input === 'string') {
    var
    /** @type {?} */
    re = /^[\+\-]?[0-9\.]+,[ ]*\ ?[\+\-]?[0-9\.]+$/; // lat,lng

    if (input.match(re)) {
      input = '[' + input + ']';
    }

    return JSON.parse(jsonize(input));
  } else {
    return input;
  }
}
/**
 * json type definition
 * @record
 */

/**
 * Returns camel-cased from string 'Foo Bar' to 'fooBar'
 * @param {?} str
 * @return {?}
 */


function toCamelCase(str) {
  return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function (letter, index) {
    return index === 0 ? letter.toLowerCase() : letter.toUpperCase();
  }).replace(/\s+/g, '');
}
/**
 * @return {?}
 */


function isMapsApiLoaded() {
  return typeof google === 'object' && typeof google.maps === 'object';
}
/**
 * @param {?} component
 * @param {?} libName
 * @return {?}
 */


function missingLibraryError(component, libName) {
  return Error("".concat(component, ": library '").concat(libName, "' is missing, please ensure to include it in a 'libraries' parameter.\n    Example:\n      NguiMapModule.forRoot({\n        apiUrl: 'https://maps.googleapis.com/maps/api/js?libraries=").concat(libName, "'\n      })\n  "));
}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @abstract
 */


var BaseMapDirective = /*#__PURE__*/function () {
  /**
   * @param {?} nguiMapComponent
   * @param {?} mapObjectName
   * @param {?} inputs
   * @param {?} outputs
   */
  function BaseMapDirective(nguiMapComponent, mapObjectName, inputs, outputs) {
    var _this = this;

    (0,D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__.default)(this, BaseMapDirective);

    this.nguiMapComponent = nguiMapComponent;
    this.mapObjectName = mapObjectName;
    this.inputs = inputs;
    this.outputs = outputs; // this should be redefined on each childr directive

    this.initialized$ = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
    this._subscriptions = [];
    this.nguiMap = this.nguiMapComponent['nguiMap'];
    this.optionBuilder = this.nguiMapComponent['optionBuilder']; // all outputs must be initialized

    this.outputs.forEach(function (output) {
      return _this[output] = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
    });
    this.mapObjectName = mapObjectName;
  }
  /**
   * @return {?}
   */


  (0,D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__.default)(BaseMapDirective, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this2 = this;

      if (this.nguiMapComponent.mapIdledOnce) {
        // map is ready already
        this.initialize();
      } else {
        this.nguiMapComponent.mapReady$.subscribe(function (map) {
          return _this2.initialize();
        });
      }
    }
    /**
     * @return {?}
     */

  }, {
    key: "initialize",
    value: function initialize() {
      this.objectOptions = this.optionBuilder.googlizeAllInputs(this.inputs, this); // will be set after geocoded

      typeof this.objectOptions.position === 'string' && delete this.objectOptions.position;
      typeof this.objectOptions.center === 'string' && delete this.objectOptions.center; // noinspection TypeScriptUnresolvedFunction

      if (this.libraryName) {
        if (!google.maps[this.libraryName]) {
          throw missingLibraryError(this.mapObjectName, this.libraryName);
        }

        this.mapObject = new google.maps[this.libraryName][this.mapObjectName](this.objectOptions);
      } else {
        this.mapObject = new google.maps[this.mapObjectName](this.objectOptions);
      }

      this.mapObject.setMap(this.nguiMapComponent.map);
      this.mapObject['mapObjectName'] = this.mapObjectName;
      this.mapObject['nguiMapComponent'] = this.nguiMapComponent; // set google events listeners and emits to this outputs listeners

      this.nguiMap.setObjectEvents(this.outputs, this, 'mapObject');
      this.nguiMapComponent.addToMapObjectGroup(this.mapObjectName, this.mapObject);
      this.initialized$.emit(this.mapObject);
    }
    /**
     * @param {?} changes
     * @return {?}
     */

  }, {
    key: "ngOnChanges",
    value: function ngOnChanges(changes) {
      this.nguiMap.updateGoogleObject(this.mapObject, changes);
    }
    /**
     * @return {?}
     */

  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this._subscriptions.map(function (subscription) {
        return subscription.unsubscribe();
      });

      this.nguiMapComponent.removeFromMapObjectGroup(this.mapObjectName, this.mapObject);

      if (this.mapObject) {
        this.nguiMap.clearObjectEvents(this.outputs, this, 'mapObject');
      }
    }
  }]);

  return BaseMapDirective;
}();

BaseMapDirective.ɵfac = function BaseMapDirective_Factory(t) {
  _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinvalidFactory"]();
};

BaseMapDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineDirective"]({
  type: BaseMapDirective,
  outputs: {
    initialized$: "initialized$"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵNgOnChangesFeature"]]
});
BaseMapDirective.propDecorators = {
  "initialized$": [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Output
  }]
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * change any object to google object options
 * e.g. [1,2] -> new google.maps.LatLng(1,2);
 */

var OptionBuilder = /*#__PURE__*/function () {
  function OptionBuilder() {
    (0,D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__.default)(this, OptionBuilder);
  }

  (0,D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__.default)(OptionBuilder, [{
    key: "googlizeAllInputs",
    value:
    /**
     * @param {?} definedInputs
     * @param {?} userInputs
     * @return {?}
     */
    function googlizeAllInputs(definedInputs, userInputs) {
      var _this3 = this;

      var
      /** @type {?} */
      options = {}; // if options given from user, only take options and ignore other inputs

      if (userInputs.options) {
        options = userInputs.options;

        if (!this.onlyOptionsGiven(definedInputs, userInputs)) {
          console.error('when "options" are used, other options are ignored');
        }
      } else {
        // if options not given, process all user inputs
        definedInputs.forEach(function (input) {
          if (userInputs[input] !== undefined) {
            options[input] = _this3.googlize(userInputs[input], {
              key: input
            });
          }
        });
      }

      return options;
    }
    /**
     * @param {?} inputs
     * @param {?=} options
     * @return {?}
     */

  }, {
    key: "googlizeMultiple",
    value: function googlizeMultiple(inputs, options) {
      options = options || {};

      for (var
      /** @type {?} */
      key in inputs) {
        var
        /** @type {?} */
        val = inputs[key]; // (non-strings are fully converted)

        if (typeof val !== 'string') {
          options[key] = val;
        } else if (!(options['doNotConverStringToNumber'] && val.match(/^[0-9]+$/))) {
          options[key] = this.googlize(val, {
            key: key
          });
        }
      } // for(var key in attrs)


      return options;
    }
    /**
     * @param {?} input
     * @param {?=} options
     * @return {?}
     */

  }, {
    key: "googlize",
    value: function googlize(input, options) {
      options = options || {};
      var
      /** @type {?} */
      output = input;

      if (typeof input === 'string') {
        // convert string to a google object
        if (input === 'false') {
          output = false;
        } else if (input === '0') {
          output = 0;
        } else {
          output = // -> googlize -> getJsonParsed -> googlizeMultiple -> googlize until all elements are parsed
          this.getJSONParsed(input, options)
          /* Foo.Bar(...) -> new google.maps.Foo.Bar(...) */
          || this.getAnyMapObject(input)
          /*  MapTypeID.HYBRID -> new google.maps.MapTypeID.HYBRID */
          || this.getAnyMapConstant(input, options)
          /*  2016-06-20 -> new Date('2016-06-20') */
          || this.getDateObject(input) || input;
        }
      }

      if (options['key']) {
        var
        /** @type {?} */
        key =
        /** @type {?} */
        options['key'];

        if (output instanceof Array) {
          // e.g., [1, 2]
          if (key === 'bounds') {
            output = new google.maps.LatLngBounds(output[0], output[1]);
          } else if (key === 'icons') {
            output = this.getMapIcons(output);
          } else if (key === 'position' || key.match(/^geoFallback/)) {
            output = this.getLatLng(output);
          }
        } else if (output instanceof Object) {
          if (key === 'icon') {
            output = this.getMarkerIcon(output);
          } else if (key.match(/ControlOptions$/)) {
            output = this.getMapControlOption(output);
          }
        }
      } // delete keys only for processing, not used by google


      delete output['doNotConverStringToNumber'];
      delete output['key'];
      return output;
    }
    /**
     * @param {?} input
     * @return {?}
     */

  }, {
    key: "getLatLng",
    value: function getLatLng(input) {
      var
      /** @type {?} */
      output;

      if (input[0].constructor === Array) {
        // [[1,2],[3,4]]
        output =
        /** @type {?} */
        input.map(function (el) {
          return new google.maps.LatLng(el[0], el[1]);
        });
      } else if (!isNaN(parseFloat(input[0])) && isFinite(input[0])) {
        output = new google.maps.LatLng(input[0], input[1]);
      }

      return output;
    }
    /**
     * @param {?} input
     * @param {?} options
     * @return {?}
     */

  }, {
    key: "getJSONParsed",
    value: function getJSONParsed(input, options) {
      var
      /** @type {?} */
      output;

      try {
        output = getJSON(input);

        if (output instanceof Array) {
          // [{a:1}] : not lat/lng ones
          if (output[0].constructor !== Object) {
            // [[1,2],[3,4]] or [1,2]
            output = this.getLatLng(output);
          }
        } else if (output === Object(output)) {
          // check for nested hashes and convert to Google API options
          var
          /** @type {?} */
          newOptions = options;
          newOptions['doNotConverStringToNumber'] = true;
          output = this.googlizeMultiple(output, newOptions);
        }
      } catch (
      /** @type {?} */
      e) {}

      return output;
    }
    /**
     * @param {?} input
     * @return {?}
     */

  }, {
    key: "getAnyMapObject",
    value: function getAnyMapObject(input) {
      var
      /** @type {?} */
      output;

      if (input.match(/^[A-Z][a-zA-Z0-9]+\(.*\)$/)) {
        try {
          output = Function("return new google.maps.".concat(input, ";"))();
        } catch (
        /** @type {?} */
        e) {}
      }

      return output;
    }
    /**
     * @param {?} input
     * @param {?} options
     * @return {?}
     */

  }, {
    key: "getAnyMapConstant",
    value: function getAnyMapConstant(input, options) {
      var
      /** @type {?} */
      output;

      if (input.match(/^([A-Z][a-zA-Z0-9]+)\.([A-Z]+)$/)) {
        // e.g. MapTypeID.HYBRID
        try {
          var
          /** @type {?} */
          matches = input.match(/^([A-Z][a-zA-Z0-9]+)\.([A-Z]+)$/);
          output = google.maps[matches[1]][matches[2]];
        } catch (
        /** @type {?} */
        e) {}
      } else if (input.match(/^[A-Z]+$/)) {
        // e.g. HYBRID
        try {
          var
          /** @type {?} */
          capitalizedKey =
          /** @type {?} */
          options['key'].charAt(0).toUpperCase() +
          /** @type {?} */
          options['key'].slice(1);
          output = google.maps[capitalizedKey][input];
        } catch (
        /** @type {?} */
        e) {}
      }

      return output;
    }
    /**
     * streetviewControl, panControl, etc, not a general control
     * @param {?} controlOptions
     * @return {?}
     */

  }, {
    key: "getMapControlOption",
    value: function getMapControlOption(controlOptions) {
      var
      /** @type {?} */
      newControlOptions = controlOptions;

      for (var
      /** @type {?} */
      key in newControlOptions) {
        // assign the right values
        if (newControlOptions[key]) {
          var
          /** @type {?} */
          value = newControlOptions[key];

          if (typeof value === 'string') {
            value =
            /** @type {?} */
            value.toUpperCase();
          } else if (key === 'mapTypeIds') {
            value =
            /** @type {?} */
            value.map(function (str) {
              if (str.match(/^[A-Z]+$/)) {
                // if constant
                return google.maps.MapTypeId[str.toUpperCase()];
              } else {
                // else, custom map-type
                return str;
              }
            });
          }

          if (key === 'style') {
            var
            /** @type {?} */
            objName = key.replace(/Options$/, '') + 'Style';
            newControlOptions[key] = google.maps[objName][
            /** @type {?} */
            value];
          } else if (key === 'position') {
            newControlOptions[key] = google.maps.ControlPosition[
            /** @type {?} */
            value];
          } else {
            newControlOptions[key] = value;
          }
        }
      }

      return newControlOptions;
    }
    /**
     * @param {?} input
     * @return {?}
     */

  }, {
    key: "getDateObject",
    value: function getDateObject(input) {
      var
      /** @type {?} */
      output;

      if (input.match(/^(\d{4}\-\d\d\-\d\d([tT][\d:\.]*)?)([zZ]|([+\-])(\d\d):?(\d\d))?$/)) {
        try {
          output = new Date(input);
        } catch (
        /** @type {?} */
        e) {}
      }

      return output;
    }
    /**
     * @param {?} input
     * @return {?}
     */

  }, {
    key: "getMapIcons",
    value: function getMapIcons(input) {
      return input.map(function (el) {
        if (el.icon.path.match(/^[A-Z_]+$/)) {
          el.icon.path = google.maps.SymbolPath[el.icon.path];
        }

        return el;
      });
    }
    /**
     * @param {?} input
     * @return {?}
     */

  }, {
    key: "getMarkerIcon",
    value: function getMarkerIcon(input) {
      var
      /** @type {?} */
      output = input;

      if (('' + output.path).match(/^[A-Z_]+$/)) {
        output.path = google.maps.SymbolPath[output.path];
      }

      for (var
      /** @type {?} */
      key in output) {
        var
        /** @type {?} */
        arr = output[key];

        if (key === 'anchor' || key === 'origin' || key === 'labelOrigin') {
          output[key] = new google.maps.Point(arr[0], arr[1]);
        } else if (key === 'size' || key === 'scaledSize') {
          output[key] = new google.maps.Size(arr[0], arr[1]);
        }
      }

      return output;
    }
    /**
     * @param {?} definedInputs
     * @param {?} userInputs
     * @return {?}
     */

  }, {
    key: "onlyOptionsGiven",
    value: function onlyOptionsGiven(definedInputs, userInputs) {
      for (var
      /** @type {?} */
      i = 0; i < definedInputs.length; i++) {
        var
        /** @type {?} */
        input = definedInputs[i];

        if (input !== 'options' && typeof userInputs[input] !== 'undefined') {
          return false;
        }
      }

      return true;
    }
  }]);

  return OptionBuilder;
}();

OptionBuilder.ɵfac = function OptionBuilder_Factory(t) {
  return new (t || OptionBuilder)();
};

OptionBuilder.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
  token: OptionBuilder,
  factory: OptionBuilder.ɵfac
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](OptionBuilder, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable
  }], null, null);
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 *  service for navigator.geolocation methods
 */


var NavigatorGeolocation = /*#__PURE__*/function () {
  function NavigatorGeolocation() {
    (0,D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__.default)(this, NavigatorGeolocation);
  }

  (0,D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__.default)(NavigatorGeolocation, [{
    key: "getCurrentPosition",
    value:
    /**
     * @param {?=} geoLocationOptions
     * @return {?}
     */
    function getCurrentPosition(geoLocationOptions) {
      geoLocationOptions = geoLocationOptions || {
        timeout: 5000
      };
      return new rxjs__WEBPACK_IMPORTED_MODULE_7__.Observable(function (responseObserver) {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function (position) {
            responseObserver.next(position);
            responseObserver.complete();
          }, function (evt) {
            return responseObserver.error(evt);
          }, geoLocationOptions);
        } else {
          responseObserver.error('Browser Geolocation service failed.');
        }
      });
    }
  }]);

  return NavigatorGeolocation;
}();

NavigatorGeolocation.ɵfac = function NavigatorGeolocation_Factory(t) {
  return new (t || NavigatorGeolocation)();
};

NavigatorGeolocation.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
  token: NavigatorGeolocation,
  factory: NavigatorGeolocation.ɵfac
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](NavigatorGeolocation, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable
  }], null, null);
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */


var NG_MAP_CONFIG_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.InjectionToken('NG_MAP_CONFIG_TOKEN');
/**
 * @record
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @abstract
 */

var NgMapApiLoader = /*#__PURE__*/function () {
  /**
   * @param {?} config
   */
  function NgMapApiLoader(config) {
    (0,D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__.default)(this, NgMapApiLoader);

    this.config = config;
    this.api$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__.ReplaySubject(1);
    this.config = this.config || {
      apiUrl: 'https://maps.google.com/maps/api/js'
    };
  }
  /**
   * @return {?}
   */


  (0,D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__.default)(NgMapApiLoader, [{
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this.api$.complete();
    }
  }]);

  return NgMapApiLoader;
}();

NgMapApiLoader.ɵfac = function NgMapApiLoader_Factory(t) {
  _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinvalidFactory"]();
};

NgMapApiLoader.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineDirective"]({
  type: NgMapApiLoader
});

var NgMapAsyncCallbackApiLoader = /*#__PURE__*/function (_NgMapApiLoader) {
  (0,D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__.default)(NgMapAsyncCallbackApiLoader, _NgMapApiLoader);

  var _super = (0,D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__.default)(NgMapAsyncCallbackApiLoader);

  /**
   * @param {?} zone
   * @param {?} config
   */
  function NgMapAsyncCallbackApiLoader(zone, config) {
    var _this4;

    (0,D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__.default)(this, NgMapAsyncCallbackApiLoader);

    _this4 = _super.call(this, config);
    _this4.zone = zone;
    return _this4;
  }
  /**
   * @return {?}
   */


  (0,D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__.default)(NgMapAsyncCallbackApiLoader, [{
    key: "load",
    value: function load() {
      var _this5 = this;

      if (typeof window === 'undefined') {
        return;
      }

      if (isMapsApiLoaded()) {
        this.api$.next(google.maps);
      } else if (!document.querySelector('#ngui-map-api')) {
        /** @type {?} */
        window['nguiMapRef'] =
        /** @type {?} */
        window['nguiMapRef'] || [];

        /** @type {?} */
        window['nguiMapRef'].push({
          zone: this.zone,
          componentFn: function componentFn() {
            return _this5.api$.next(google.maps);
          }
        });
        this.addGoogleMapsApi();
      }
    }
    /**
     * @return {?}
     */

  }, {
    key: "addGoogleMapsApi",
    value: function addGoogleMapsApi() {
      /** @type {?} */
      window['initNguiMap'] =
      /** @type {?} */
      window['initNguiMap'] || function () {
        /** @type {?} */
        window['nguiMapRef'].forEach(function (nguiMapRef) {
          nguiMapRef.zone.run(function () {
            nguiMapRef.componentFn();
          });
        });

        /** @type {?} */
        window['nguiMapRef'].splice(0,
        /** @type {?} */
        window['nguiMapRef'].length);
      };

      var
      /** @type {?} */
      script = document.createElement('script');
      script.id = 'ngui-map-api'; // script.src = "https://maps.google.com/maps/api/js?callback=initNguiMap";

      var
      /** @type {?} */
      apiUrl = this.config.apiUrl;
      apiUrl += apiUrl.indexOf('?') !== -1 ? '&' : '?';
      script.src = apiUrl + 'callback=initNguiMap';
      document.querySelector('body').appendChild(script);
    }
  }]);

  return NgMapAsyncCallbackApiLoader;
}(NgMapApiLoader);

NgMapAsyncCallbackApiLoader.ɵfac = function NgMapAsyncCallbackApiLoader_Factory(t) {
  return new (t || NgMapAsyncCallbackApiLoader)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](NG_MAP_CONFIG_TOKEN, 8));
};

NgMapAsyncCallbackApiLoader.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
  token: NgMapAsyncCallbackApiLoader,
  factory: NgMapAsyncCallbackApiLoader.ɵfac
});
/** @nocollapse */

NgMapAsyncCallbackApiLoader.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.NgZone
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Optional
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Inject,
      args: [NG_MAP_CONFIG_TOKEN]
    }]
  }];
};

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](NgMapAsyncCallbackApiLoader, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.NgZone
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Inject,
        args: [NG_MAP_CONFIG_TOKEN]
      }]
    }];
  }, null);
})();

var NgMapAsyncApiLoader = /*#__PURE__*/function (_NgMapApiLoader2) {
  (0,D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__.default)(NgMapAsyncApiLoader, _NgMapApiLoader2);

  var _super2 = (0,D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__.default)(NgMapAsyncApiLoader);

  /**
   * @param {?} config
   */
  function NgMapAsyncApiLoader(config) {
    (0,D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__.default)(this, NgMapAsyncApiLoader);

    return _super2.call(this, config);
  }
  /**
   * @return {?}
   */


  (0,D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__.default)(NgMapAsyncApiLoader, [{
    key: "load",
    value: function load() {
      var _this6 = this;

      if (typeof window === 'undefined') {
        return;
      }

      if (isMapsApiLoaded()) {
        this.api$.next(google.maps);
      } else if (!document.querySelector('#ngui-map-api')) {
        var
        /** @type {?} */
        script = document.createElement('script');
        script.id = 'ngui-map-api';
        script.async = true;

        script.onload = function () {
          return _this6.api$.next(google.maps);
        };

        script.src = this.config.apiUrl;
        document.querySelector('body').appendChild(script);
      }
    }
  }]);

  return NgMapAsyncApiLoader;
}(NgMapApiLoader);

NgMapAsyncApiLoader.ɵfac = function NgMapAsyncApiLoader_Factory(t) {
  return new (t || NgMapAsyncApiLoader)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](NG_MAP_CONFIG_TOKEN, 8));
};

NgMapAsyncApiLoader.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
  token: NgMapAsyncApiLoader,
  factory: NgMapAsyncApiLoader.ɵfac
});
/** @nocollapse */

NgMapAsyncApiLoader.ctorParameters = function () {
  return [{
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Optional
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Inject,
      args: [NG_MAP_CONFIG_TOKEN]
    }]
  }];
};

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](NgMapAsyncApiLoader, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Inject,
        args: [NG_MAP_CONFIG_TOKEN]
      }]
    }];
  }, null);
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 *   Provides [defered/promise API](https://docs.angularjs.org/api/ng/service/$q)
 *   service for Google Geocoder service
 */


var GeoCoder = /*#__PURE__*/function () {
  /**
   * @param {?} apiLoader
   */
  function GeoCoder(apiLoader) {
    (0,D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__.default)(this, GeoCoder);

    this.apiLoader = apiLoader;
    this.apiLoaderSubs = [];
  }
  /**
   * @param {?} options
   * @return {?}
   */


  (0,D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__.default)(GeoCoder, [{
    key: "geocode",
    value: function geocode(options) {
      var _this7 = this;

      return new rxjs__WEBPACK_IMPORTED_MODULE_7__.Observable(function (responseObserver) {
        _this7.apiLoaderSubs.push(_this7.apiLoader.api$.subscribe(function () {
          return _this7.requestGeocode(options, responseObserver);
        }));
      });
    }
    /**
     * @return {?}
     */

  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this.apiLoaderSubs.map(function (sub) {
        return sub.unsubscribe();
      });
    }
    /**
     * @param {?} options
     * @param {?} observer
     * @return {?}
     */

  }, {
    key: "requestGeocode",
    value: function requestGeocode(options, observer) {
      var
      /** @type {?} */
      geocoder = new google.maps.Geocoder();
      geocoder.geocode(options, function (results, status) {
        if (status === google.maps.GeocoderStatus.OK) {
          observer.next(results);
          observer.complete();
        } else {
          observer.error(results);
        }
      });
    }
  }]);

  return GeoCoder;
}();

GeoCoder.ɵfac = function GeoCoder_Factory(t) {
  return new (t || GeoCoder)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](NgMapApiLoader));
};

GeoCoder.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
  token: GeoCoder,
  factory: GeoCoder.ɵfac
});
/** @nocollapse */

GeoCoder.ctorParameters = function () {
  return [{
    type: NgMapApiLoader
  }];
};

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](GeoCoder, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable
  }], function () {
    return [{
      type: NgMapApiLoader
    }];
  }, null);
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * collection of map instance-related properties and methods
 */


var NguiMap = /*#__PURE__*/function () {
  /**
   * @param {?} geoCoder
   * @param {?} optionBuilder
   * @param {?} zone
   */
  function NguiMap(geoCoder, optionBuilder, zone) {
    var _this8 = this;

    (0,D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__.default)(this, NguiMap);

    this.geoCoder = geoCoder;
    this.optionBuilder = optionBuilder;
    this.zone = zone;

    this.updateGoogleObject = function (object, changes) {
      var
      /** @type {?} */
      val,
      /** @type {?} */
      currentValue,
      /** @type {?} */
      setMethodName;

      if (object) {
        for (var
        /** @type {?} */
        key in changes) {
          setMethodName = "set".concat(key.replace(/^[a-z]/, function (x) {
            return x.toUpperCase();
          }));
          currentValue = changes[key].currentValue;

          if (['position', 'center'].indexOf(key) !== -1 && typeof currentValue === 'string') {
            // To preserve setMethod name in Observable callback, wrap it as a function, then execute
            (function (setMethodName) {
              _this8.geoCoder.geocode({
                address: currentValue
              }).subscribe(function (results) {
                if (typeof object[setMethodName] === 'function') {
                  object[setMethodName](results[0].geometry.location);
                } else {
                  console.error('Not all options are dynamically updatable according to Googles Maps API V3 documentation.\n' + 'Please check Google Maps API documentation, and use "setOptions" instead.');
                }
              });
            })(setMethodName);
          } else {
            val = _this8.optionBuilder.googlize(currentValue);

            if (typeof object[setMethodName] === 'function') {
              object[setMethodName](val);
            } else {
              console.error('Not all options are dynamically updatable according to Googles Maps API V3 documentation.\n' + 'Please check Google Maps API documentation, and use "setOptions" instead.');
            }
          }
        }
      }
    };
  }
  /**
   * @param {?} definedEvents
   * @param {?} thisObj
   * @param {?} prefix
   * @return {?}
   */


  (0,D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__.default)(NguiMap, [{
    key: "setObjectEvents",
    value: function setObjectEvents(definedEvents, thisObj, prefix) {
      var _this9 = this;

      definedEvents.forEach(function (definedEvent) {
        var
        /** @type {?} */
        eventName = _this9.getEventName(definedEvent),

        /** @type {?} */
        zone = _this9.zone;

        zone.runOutsideAngular(function () {
          thisObj[prefix].addListener(eventName, function (event) {
            var
            /** @type {?} */
            param = event ? event : {};
            param.target = this;
            zone.run(function () {
              return thisObj[definedEvent].emit(param);
            });
          });
        });
      });
    }
    /**
     * @param {?} definedEvents
     * @param {?} thisObj
     * @param {?} prefix
     * @return {?}
     */

  }, {
    key: "clearObjectEvents",
    value: function clearObjectEvents(definedEvents, thisObj, prefix) {
      var _this10 = this;

      definedEvents.forEach(function (definedEvent) {
        var
        /** @type {?} */
        eventName = _this10.getEventName(definedEvent);

        _this10.zone.runOutsideAngular(function () {
          if (thisObj[prefix]) {
            google.maps.event.clearListeners(thisObj[prefix], eventName);
          }
        });
      });

      if (thisObj[prefix]) {
        if (thisObj[prefix].setMap) {
          thisObj[prefix].setMap(null);
        }

        delete thisObj[prefix].nguiMapComponent;
        delete thisObj[prefix];
      }
    }
    /**
     * @param {?} definedEvent
     * @return {?}
     */

  }, {
    key: "getEventName",
    value: function getEventName(definedEvent) {
      return definedEvent.replace(/([A-Z])/g, function ($1) {
        return "_".concat($1.toLowerCase());
      }) // positionChanged -> position_changed
      .replace(/^map_/, ''); // map_click -> click  to avoid DOM conflicts
    }
  }]);

  return NguiMap;
}();

NguiMap.ɵfac = function NguiMap_Factory(t) {
  return new (t || NguiMap)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](GeoCoder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](OptionBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgZone));
};

NguiMap.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
  token: NguiMap,
  factory: NguiMap.ɵfac
});
/** @nocollapse */

NguiMap.ctorParameters = function () {
  return [{
    type: GeoCoder
  }, {
    type: OptionBuilder
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.NgZone
  }];
};

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](NguiMap, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable
  }], function () {
    return [{
      type: GeoCoder
    }, {
      type: OptionBuilder
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.NgZone
    }];
  }, null);
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */


var INPUTS = ['backgroundColor', 'center', 'disableDefaultUI', 'disableDoubleClickZoom', 'draggable', 'draggableCursor', 'draggingCursor', 'heading', 'keyboardShortcuts', 'mapMaker', 'mapTypeControl', 'mapTypeId', 'maxZoom', 'minZoom', 'noClear', 'overviewMapControl', 'panControl', 'panControlOptions', 'rotateControl', 'scaleControl', 'scrollwheel', 'streetView', 'styles', 'tilt', 'zoom', 'streetViewControl', 'zoomControl', 'zoomControlOptions', 'mapTypeControlOptions', 'overviewMapControlOptions', 'rotateControlOptions', 'scaleControlOptions', 'streetViewControlOptions', 'fullscreenControl', 'fullscreenControlOptions', 'options', 'geoFallbackCenter'];
var OUTPUTS = ['bounds_changed', 'center_changed', 'click', 'dblclick', 'drag', 'dragend', 'dragstart', 'heading_changed', 'idle', 'maptypeid_changed', 'mousemove', 'mouseout', 'mouseover', 'projection_changed', 'resize', 'rightclick', 'tilesloaded', 'tile_changed', 'zoom_changed', 'mapClick', 'mapMouseover', 'mapMouseout', 'mapMousemove', 'mapDrag', 'mapDragend', 'mapDragstart'];

var NguiMapComponent = /*#__PURE__*/function () {
  /**
   * @param {?} optionBuilder
   * @param {?} elementRef
   * @param {?} geolocation
   * @param {?} geoCoder
   * @param {?} nguiMap
   * @param {?} apiLoader
   * @param {?} zone
   */
  function NguiMapComponent(optionBuilder, elementRef, geolocation, geoCoder, nguiMap, apiLoader, zone) {
    var _this11 = this;

    (0,D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__.default)(this, NguiMapComponent);

    this.optionBuilder = optionBuilder;
    this.elementRef = elementRef;
    this.geolocation = geolocation;
    this.geoCoder = geoCoder;
    this.nguiMap = nguiMap;
    this.apiLoader = apiLoader;
    this.zone = zone;
    this.mapReady$ = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
    this.mapOptions = {};
    this.inputChanges$ = new rxjs__WEBPACK_IMPORTED_MODULE_9__.Subject();
    this.infoWindows = {};
    this.mapIdledOnce = false;
    this.initializeMapAfterDisplayed = false;
    apiLoader.load(); // all outputs needs to be initialized,
    // http://stackoverflow.com/questions/37765519/angular2-directive-cannot-read-property-subscribe-of-undefined-with-outputs

    OUTPUTS.forEach(function (output) {
      return _this11[output] = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
    });
  }
  /**
   * @return {?}
   */


  (0,D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__.default)(NguiMapComponent, [{
    key: "ngAfterViewInit",
    value: function ngAfterViewInit() {
      var _this12 = this;

      this.apiLoaderSub = this.apiLoader.api$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.first)()).subscribe(function () {
        return _this12.initializeMap();
      });
    }
    /**
     * @return {?}
     */

  }, {
    key: "ngAfterViewChecked",
    value: function ngAfterViewChecked() {
      if (this.initializeMapAfterDisplayed && this.el && this.el.offsetWidth > 0) {
        this.initializeMap();
      }
    }
    /**
     * @param {?} changes
     * @return {?}
     */

  }, {
    key: "ngOnChanges",
    value: function ngOnChanges(changes) {
      this.inputChanges$.next(changes);
    }
    /**
     * @return {?}
     */

  }, {
    key: "initializeMap",
    value: function initializeMap() {
      var _this13 = this;

      this.el = this.elementRef.nativeElement.querySelector('.google-map');

      if (this.el && this.el.offsetWidth === 0) {
        this.initializeMapAfterDisplayed = true;
        return;
      }

      this.initializeMapAfterDisplayed = false;
      this.mapOptions = this.optionBuilder.googlizeAllInputs(INPUTS, this);
      this.mapOptions.zoom = this.mapOptions.zoom || 15;
      typeof this.mapOptions.center === 'string' && delete this.mapOptions.center;
      this.zone.runOutsideAngular(function () {
        _this13.map = new google.maps.Map(_this13.el, _this13.mapOptions);
        _this13.map['mapObjectName'] = 'NguiMapComponent';

        if (!_this13.mapOptions.center) {
          // if center is not given as lat/lng
          _this13.setCenter();
        } // set google events listeners and emits to this outputs listeners


        _this13.nguiMap.setObjectEvents(OUTPUTS, _this13, 'map');

        _this13.map.addListener('idle', function () {
          if (!_this13.mapIdledOnce) {
            _this13.mapIdledOnce = true;
            setTimeout(function () {
              // Why????, subsribe and emit must not be in the same cycle???
              _this13.mapReady$.emit(_this13.map);
            });
          }
        }); // update map when input changes


        _this13.inputChanges$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.debounceTime)(1000), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.tap)(function (changes) {
          return _this13.nguiMap.updateGoogleObject(_this13.map, changes);
        })).subscribe();

        if (typeof window !== 'undefined' &&
        /** @type {?} */
        window['nguiMapRef']) {
          // expose map object for test and debugging on (<any>window)

          /** @type {?} */
          window['nguiMapRef'].map = _this13.map;
        }
      });
    }
    /**
     * @return {?}
     */

  }, {
    key: "setCenter",
    value: function setCenter() {
      var _this14 = this;

      if (!this['center']) {
        // center is not from user. Thus, we set the current location
        this.geolocation.getCurrentPosition().subscribe(function (position) {
          var
          /** @type {?} */
          latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

          _this14.map.setCenter(latLng);
        }, function (error) {
          console.error('ngui-map: Error finding the current position');

          _this14.map.setCenter(_this14.mapOptions['geoFallbackCenter'] || new google.maps.LatLng(0, 0));
        });
      } else if (typeof this['center'] === 'string') {
        this.geoCoder.geocode({
          address: this['center']
        }).subscribe(function (results) {
          _this14.map.setCenter(results[0].geometry.location);
        }, function (error) {
          _this14.map.setCenter(_this14.mapOptions['geoFallbackCenter'] || new google.maps.LatLng(0, 0));
        });
      }
    }
    /**
     * @param {?} id
     * @param {?} anchor
     * @return {?}
     */

  }, {
    key: "openInfoWindow",
    value: function openInfoWindow(id, anchor) {
      this.infoWindows[id].open(anchor);
    }
    /**
     * @param {?} id
     * @return {?}
     */

  }, {
    key: "closeInfoWindow",
    value: function closeInfoWindow(id) {
      // if infoWindow for id exists, close the infoWindow
      if (this.infoWindows[id]) this.infoWindows[id].close();
    }
    /**
     * @return {?}
     */

  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this.inputChanges$.complete();

      if (this.el && !this.initializeMapAfterDisplayed) {
        this.nguiMap.clearObjectEvents(OUTPUTS, this, 'map');
      }

      if (this.apiLoaderSub) {
        this.apiLoaderSub.unsubscribe();
      }
    }
    /**
     * @param {?} mapObjectName
     * @param {?} mapObject
     * @return {?}
     */

  }, {
    key: "addToMapObjectGroup",
    value: function addToMapObjectGroup(mapObjectName, mapObject) {
      var
      /** @type {?} */
      groupName = toCamelCase(mapObjectName.toLowerCase()) + 's'; // e.g. markers

      this.map[groupName] = this.map[groupName] || [];
      this.map[groupName].push(mapObject);
    }
    /**
     * @param {?} mapObjectName
     * @param {?} mapObject
     * @return {?}
     */

  }, {
    key: "removeFromMapObjectGroup",
    value: function removeFromMapObjectGroup(mapObjectName, mapObject) {
      var
      /** @type {?} */
      groupName = toCamelCase(mapObjectName.toLowerCase()) + 's'; // e.g. markers

      if (this.map && this.map[groupName]) {
        var
        /** @type {?} */
        index = this.map[groupName].indexOf(mapObject);
        index > -1 && this.map[groupName].splice(index, 1);
      }
    }
  }]);

  return NguiMapComponent;
}();

NguiMapComponent.ɵfac = function NguiMapComponent_Factory(t) {
  return new (t || NguiMapComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](OptionBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](NavigatorGeolocation), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](GeoCoder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](NguiMap), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](NgMapApiLoader), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgZone));
};

NguiMapComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: NguiMapComponent,
  selectors: [["ngui-map"]],
  inputs: {
    backgroundColor: "backgroundColor",
    center: "center",
    disableDefaultUI: "disableDefaultUI",
    disableDoubleClickZoom: "disableDoubleClickZoom",
    draggable: "draggable",
    draggableCursor: "draggableCursor",
    draggingCursor: "draggingCursor",
    heading: "heading",
    keyboardShortcuts: "keyboardShortcuts",
    mapMaker: "mapMaker",
    mapTypeControl: "mapTypeControl",
    mapTypeId: "mapTypeId",
    maxZoom: "maxZoom",
    minZoom: "minZoom",
    noClear: "noClear",
    overviewMapControl: "overviewMapControl",
    panControl: "panControl",
    panControlOptions: "panControlOptions",
    rotateControl: "rotateControl",
    scaleControl: "scaleControl",
    scrollwheel: "scrollwheel",
    streetView: "streetView",
    styles: "styles",
    tilt: "tilt",
    zoom: "zoom",
    streetViewControl: "streetViewControl",
    zoomControl: "zoomControl",
    zoomControlOptions: "zoomControlOptions",
    mapTypeControlOptions: "mapTypeControlOptions",
    overviewMapControlOptions: "overviewMapControlOptions",
    rotateControlOptions: "rotateControlOptions",
    scaleControlOptions: "scaleControlOptions",
    streetViewControlOptions: "streetViewControlOptions",
    fullscreenControl: "fullscreenControl",
    fullscreenControlOptions: "fullscreenControlOptions",
    options: "options",
    geoFallbackCenter: "geoFallbackCenter"
  },
  outputs: {
    bounds_changed: "bounds_changed",
    center_changed: "center_changed",
    click: "click",
    dblclick: "dblclick",
    drag: "drag",
    dragend: "dragend",
    dragstart: "dragstart",
    heading_changed: "heading_changed",
    idle: "idle",
    maptypeid_changed: "maptypeid_changed",
    mousemove: "mousemove",
    mouseout: "mouseout",
    mouseover: "mouseover",
    projection_changed: "projection_changed",
    resize: "resize",
    rightclick: "rightclick",
    tilesloaded: "tilesloaded",
    tile_changed: "tile_changed",
    zoom_changed: "zoom_changed",
    mapClick: "mapClick",
    mapMouseover: "mapMouseover",
    mapMouseout: "mapMouseout",
    mapMousemove: "mapMousemove",
    mapDrag: "mapDrag",
    mapDragend: "mapDragend",
    mapDragstart: "mapDragstart",
    mapReady$: "mapReady$"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵProvidersFeature"]([NguiMap, OptionBuilder, GeoCoder, NavigatorGeolocation]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵNgOnChangesFeature"]],
  ngContentSelectors: _c0,
  decls: 2,
  vars: 0,
  consts: [[1, "google-map"]],
  template: function NguiMapComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵprojection"](1);
    }
  },
  styles: ["\n    ngui-map {display: block; height: 300px;}\n    .google-map {width: 100%; height: 100%}\n  "],
  encapsulation: 2
});
/** @nocollapse */

NguiMapComponent.ctorParameters = function () {
  return [{
    type: OptionBuilder
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ElementRef
  }, {
    type: NavigatorGeolocation
  }, {
    type: GeoCoder
  }, {
    type: NguiMap
  }, {
    type: NgMapApiLoader
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.NgZone
  }];
};

NguiMapComponent.propDecorators = {
  "mapReady$": [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Output
  }]
};

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](NguiMapComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Component,
    args: [{
      selector: 'ngui-map',
      providers: [NguiMap, OptionBuilder, GeoCoder, NavigatorGeolocation],
      styles: ["\n    ngui-map {display: block; height: 300px;}\n    .google-map {width: 100%; height: 100%}\n  "],
      inputs: INPUTS,
      outputs: OUTPUTS,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewEncapsulation.None,
      template: "\n    <div class=\"google-map\"></div>\n    <ng-content></ng-content>\n  "
    }]
  }], function () {
    return [{
      type: OptionBuilder
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ElementRef
    }, {
      type: NavigatorGeolocation
    }, {
      type: GeoCoder
    }, {
      type: NguiMap
    }, {
      type: NgMapApiLoader
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.NgZone
    }];
  }, {
    mapReady$: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Output
    }]
  });
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */


var INPUTS$1 = [];
var OUTPUTS$1 = [];

var BicyclingLayer = /*#__PURE__*/function (_BaseMapDirective) {
  (0,D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__.default)(BicyclingLayer, _BaseMapDirective);

  var _super3 = (0,D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__.default)(BicyclingLayer);

  /**
   * @param {?} nguiMapComp
   */
  function BicyclingLayer(nguiMapComp) {
    (0,D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__.default)(this, BicyclingLayer);

    return _super3.call(this, nguiMapComp, 'BicyclingLayer', INPUTS$1, OUTPUTS$1);
  }

  return BicyclingLayer;
}(BaseMapDirective);

BicyclingLayer.ɵfac = function BicyclingLayer_Factory(t) {
  return new (t || BicyclingLayer)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](NguiMapComponent));
};

BicyclingLayer.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineDirective"]({
  type: BicyclingLayer,
  selectors: [["bicycling-layer"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]]
});
/** @nocollapse */

BicyclingLayer.ctorParameters = function () {
  return [{
    type: NguiMapComponent
  }];
};

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](BicyclingLayer, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Directive,
    args: [{
      selector: 'ngui-map > bicycling-layer',
      inputs: INPUTS$1,
      outputs: OUTPUTS$1
    }]
  }], function () {
    return [{
      type: NguiMapComponent
    }];
  }, null);
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */


var INPUTS$2 = ['content', 'disableAutoPan', 'maxWidth', 'pixelOffset', 'position', 'zIndex', 'options'];
var OUTPUTS$2 = ['closeclick', 'content_changed', 'domready', 'position_changed', 'zindex_changed'];

var InfoWindow = /*#__PURE__*/function () {
  /**
   * @param {?} elementRef
   * @param {?} nguiMap
   * @param {?} nguiMapComponent
   */
  function InfoWindow(elementRef, nguiMap, nguiMapComponent) {
    var _this15 = this;

    (0,D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__.default)(this, InfoWindow);

    this.elementRef = elementRef;
    this.nguiMap = nguiMap;
    this.nguiMapComponent = nguiMapComponent;
    this.initialized$ = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
    this.objectOptions = {};
    this.inputChanges$ = new rxjs__WEBPACK_IMPORTED_MODULE_9__.Subject();
    this.elementRef.nativeElement.style.display = 'none';
    OUTPUTS$2.forEach(function (output) {
      return _this15[output] = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
    });
  }
  /**
   * @return {?}
   */


  (0,D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__.default)(InfoWindow, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this16 = this;

      if (this.nguiMapComponent.mapIdledOnce) {
        // map is ready already
        this.initialize();
      } else {
        this.nguiMapComponent.mapReady$.subscribe(function (map) {
          return _this16.initialize();
        });
      }
    }
    /**
     * @param {?} changes
     * @return {?}
     */

  }, {
    key: "ngOnChanges",
    value: function ngOnChanges(changes) {
      this.inputChanges$.next(changes);
    }
    /**
     * @return {?}
     */

  }, {
    key: "initialize",
    value: function initialize() {
      var _this17 = this;

      this.objectOptions = this.nguiMapComponent.optionBuilder.googlizeAllInputs(INPUTS$2, this);
      this.infoWindow = new google.maps.InfoWindow(this.objectOptions);
      this.infoWindow['mapObjectName'] = 'InfoWindow'; // register infoWindow ids to NguiMap, so that it can be opened by id

      if (this.elementRef.nativeElement.id) {
        this.nguiMapComponent.infoWindows[this.elementRef.nativeElement.id] = this;
      } else {
        console.error('An InfoWindow must have an id. e.g. id="detail"');
      } // set google events listeners and emits to this outputs listeners


      this.nguiMap.setObjectEvents(OUTPUTS$2, this, 'infoWindow'); // update object when input changes

      this.inputChanges$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.debounceTime)(1000), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.tap)(function (changes) {
        return _this17.nguiMap.updateGoogleObject(_this17.infoWindow, changes);
      })).subscribe();
      this.nguiMapComponent.addToMapObjectGroup('InfoWindow', this.infoWindow);
      this.initialized$.emit(this.infoWindow);
    }
    /**
     * @param {?} anchor
     * @return {?}
     */

  }, {
    key: "open",
    value: function open(anchor) {
      // set content and open it
      this.infoWindow.setContent(this.template.element.nativeElement);
      this.infoWindow.open(this.nguiMapComponent.map, anchor);
    }
    /**
     * @return {?}
     */

  }, {
    key: "close",
    value: function close() {
      // check if infoWindow exists, and closes it
      if (this.infoWindow) this.infoWindow.close();
    }
    /**
     * @return {?}
     */

  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this.inputChanges$.complete();

      if (this.infoWindow) {
        this.nguiMap.clearObjectEvents(OUTPUTS$2, this, 'infoWindow');
        delete this.infoWindow;
      }
    }
  }]);

  return InfoWindow;
}();

InfoWindow.ɵfac = function InfoWindow_Factory(t) {
  return new (t || InfoWindow)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](NguiMap), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](NguiMapComponent));
};

InfoWindow.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: InfoWindow,
  selectors: [["info-window"]],
  viewQuery: function InfoWindow_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c1, 5, _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewContainerRef);
    }

    if (rf & 2) {
      var _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.template = _t.first);
    }
  },
  inputs: {
    content: "content",
    disableAutoPan: "disableAutoPan",
    maxWidth: "maxWidth",
    pixelOffset: "pixelOffset",
    position: "position",
    zIndex: "zIndex",
    options: "options"
  },
  outputs: {
    closeclick: "closeclick",
    content_changed: "content_changed",
    domready: "domready",
    position_changed: "position_changed",
    zindex_changed: "zindex_changed",
    initialized$: "initialized$"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵNgOnChangesFeature"]],
  ngContentSelectors: _c0,
  decls: 3,
  vars: 0,
  consts: [["template", ""]],
  template: function InfoWindow_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", null, 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵprojection"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    }
  },
  encapsulation: 2
});
/** @nocollapse */

InfoWindow.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ElementRef
  }, {
    type: NguiMap
  }, {
    type: NguiMapComponent
  }];
};

InfoWindow.propDecorators = {
  "initialized$": [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Output
  }],
  "template": [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild,
    args: ['template', {
      read: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewContainerRef
    }]
  }]
};

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](InfoWindow, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Component,
    args: [{
      selector: 'ngui-map > info-window',
      inputs: INPUTS$2,
      outputs: OUTPUTS$2,
      template: "<div #template><ng-content></ng-content></div>"
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ElementRef
    }, {
      type: NguiMap
    }, {
      type: NguiMapComponent
    }];
  }, {
    initialized$: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Output
    }],
    template: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild,
      args: ['template', {
        read: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewContainerRef
      }]
    }]
  });
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */


var INPUTS$3 = ['position']; // to avoid DOM event conflicts map_*

var OUTPUTS$3 = ['animationChanged', 'click', 'clickableChanged', 'cursorChanged', 'dblclick', 'drag', 'dragend', 'draggableChanged', 'dragstart', 'flatChanged', 'iconChanged', 'mousedown', 'mouseout', 'mouseover', 'mouseup', 'positionChanged', 'rightclick', 'shapeChanged', 'titleChanged', 'visibleChanged', 'zindexChanged', 'map_click', 'map_mouseover', 'map_mouseout', 'map_mouseup', 'map_mousedown', 'map_drag', 'map_dragend'];
/**
 * Wrapper to a create extend OverlayView at runtime, only after google maps is loaded.
 * Otherwise throws a google is unknown error.
 * @param {?} htmlEl
 * @param {?} position
 * @return {?}
 */

function getCustomMarkerOverlayView(htmlEl, position) {
  var CustomMarkerOverlayView = /*#__PURE__*/function (_google$maps$OverlayV) {
    (0,D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__.default)(CustomMarkerOverlayView, _google$maps$OverlayV);

    var _super4 = (0,D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__.default)(CustomMarkerOverlayView);

    /**
     * @param {?} htmlEl
     * @param {?} position
     */
    function CustomMarkerOverlayView(htmlEl, position) {
      var _this18;

      (0,D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__.default)(this, CustomMarkerOverlayView);

      _this18 = _super4.call(this);
      _this18.visible = true;

      _this18.setPosition = function (position) {
        _this18.htmlEl.style.visibility = 'hidden';

        if (position.constructor.name === 'Array') {
          _this18.position = new google.maps.LatLng(position[0], position[1]);
        } else if (typeof position === 'string') {
          var
          /** @type {?} */
          geocoder = new google.maps.Geocoder();
          geocoder.geocode({
            address: position
          }, function (results, status) {
            if (status === google.maps.GeocoderStatus.OK) {
              _this18.setPosition(results[0].geometry.location);
            } else {}
          });
        } else if (position && typeof position.lng === 'function') {
          _this18.position = position;
        }

        if (_this18.getProjection() && typeof _this18.position.lng === 'function') {
          var
          /** @type {?} */
          positionOnMap = function positionOnMap() {
            var
            /** @type {?} */
            projection = _this18.getProjection();

            if (!projection) {
              return;
            }

            var
            /** @type {?} */
            posPixel = projection.fromLatLngToDivPixel(_this18.position);
            var
            /** @type {?} */
            x = Math.round(posPixel.x - _this18.htmlEl.offsetWidth / 2);
            var
            /** @type {?} */
            y = Math.round(posPixel.y - _this18.htmlEl.offsetHeight / 2);
            _this18.htmlEl.style.left = x + 'px';
            _this18.htmlEl.style.top = y + 'px';
            _this18.htmlEl.style.visibility = 'visible';
          };

          if (_this18.htmlEl.offsetWidth && _this18.htmlEl.offsetHeight) {
            positionOnMap();
          } else {
            setTimeout(function () {
              return positionOnMap();
            });
          }
        }
      };

      _this18.htmlEl = htmlEl;
      _this18.position = position;
      return _this18;
    }
    /**
     * @return {?}
     */


    (0,D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__.default)(CustomMarkerOverlayView, [{
      key: "onAdd",
      value: function onAdd() {
        this.getPanes().overlayMouseTarget.appendChild(this.htmlEl); // required for correct display inside google maps container

        this.htmlEl.style.position = 'absolute';
      }
      /**
       * @return {?}
       */

    }, {
      key: "draw",
      value: function draw() {
        this.setPosition(this.position);
        this.setZIndex(this.zIndex);
        this.setVisible(this.visible);
      }
      /**
       * @return {?}
       */

    }, {
      key: "onRemove",
      value: function onRemove() {//
      }
      /**
       * @return {?}
       */

    }, {
      key: "getPosition",
      value: function getPosition() {
        return this.position;
      }
      /**
       * @param {?} zIndex
       * @return {?}
       */

    }, {
      key: "setZIndex",
      value: function setZIndex(zIndex) {
        zIndex && (this.zIndex = zIndex);
        /* jshint ignore:line */

        this.htmlEl.style.zIndex = this.zIndex;
      }
      /**
       * @param {?} visible
       * @return {?}
       */

    }, {
      key: "setVisible",
      value: function setVisible(visible) {
        this.htmlEl.style.display = visible ? 'inline-block' : 'none';
        this.visible = visible;
      }
    }]);

    return CustomMarkerOverlayView;
  }(google.maps.OverlayView);

  return new CustomMarkerOverlayView(htmlEl, position);
}

var CustomMarker = /*#__PURE__*/function () {
  /**
   * @param {?} nguiMapComponent
   * @param {?} elementRef
   * @param {?} nguiMap
   */
  function CustomMarker(nguiMapComponent, elementRef, nguiMap) {
    var _this19 = this;

    (0,D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__.default)(this, CustomMarker);

    this.nguiMapComponent = nguiMapComponent;
    this.elementRef = elementRef;
    this.nguiMap = nguiMap;
    this.initialized$ = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
    this.inputChanges$ = new rxjs__WEBPACK_IMPORTED_MODULE_9__.Subject();
    this.elementRef.nativeElement.style.display = 'none';
    OUTPUTS$3.forEach(function (output) {
      return _this19[output] = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
    });
  }
  /**
   * @return {?}
   */


  (0,D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__.default)(CustomMarker, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this20 = this;

      if (this.nguiMapComponent.mapIdledOnce) {
        // map is ready already
        this.initialize();
      } else {
        this.nguiMapComponent.mapReady$.subscribe(function (map) {
          return _this20.initialize();
        });
      }
    }
    /**
     * @param {?} changes
     * @return {?}
     */

  }, {
    key: "ngOnChanges",
    value: function ngOnChanges(changes) {
      this.inputChanges$.next(changes);
    }
    /**
     * @return {?}
     */

  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this.inputChanges$.complete();
      this.nguiMapComponent.removeFromMapObjectGroup('CustomMarker', this.mapObject);

      if (this.mapObject) {
        this.nguiMap.clearObjectEvents(OUTPUTS$3, this, 'mapObject');
      }
    }
    /**
     * @return {?}
     */

  }, {
    key: "initialize",
    value: function initialize() {
      var _this21 = this;

      this.el = this.elementRef.nativeElement;
      this.mapObject = getCustomMarkerOverlayView(this.el, this['position']);
      this.mapObject.setMap(this.nguiMapComponent.map); // set google events listeners and emits to this outputs listeners

      this.nguiMap.setObjectEvents(OUTPUTS$3, this, 'mapObject'); // update object when input changes

      this.inputChanges$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.debounceTime)(1000), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.tap)(function (changes) {
        return _this21.nguiMap.updateGoogleObject(_this21.mapObject, changes);
      })).subscribe();
      this.nguiMapComponent.addToMapObjectGroup('CustomMarker', this.mapObject);
      this.initialized$.emit(this.mapObject);
    }
  }]);

  return CustomMarker;
}();

CustomMarker.ɵfac = function CustomMarker_Factory(t) {
  return new (t || CustomMarker)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](NguiMapComponent), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](NguiMap));
};

CustomMarker.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: CustomMarker,
  selectors: [["custom-marker"]],
  inputs: {
    position: "position"
  },
  outputs: {
    animationChanged: "animationChanged",
    click: "click",
    clickableChanged: "clickableChanged",
    cursorChanged: "cursorChanged",
    dblclick: "dblclick",
    drag: "drag",
    dragend: "dragend",
    draggableChanged: "draggableChanged",
    dragstart: "dragstart",
    flatChanged: "flatChanged",
    iconChanged: "iconChanged",
    mousedown: "mousedown",
    mouseout: "mouseout",
    mouseover: "mouseover",
    mouseup: "mouseup",
    positionChanged: "positionChanged",
    rightclick: "rightclick",
    shapeChanged: "shapeChanged",
    titleChanged: "titleChanged",
    visibleChanged: "visibleChanged",
    zindexChanged: "zindexChanged",
    map_click: "map_click",
    map_mouseover: "map_mouseover",
    map_mouseout: "map_mouseout",
    map_mouseup: "map_mouseup",
    map_mousedown: "map_mousedown",
    map_drag: "map_drag",
    map_dragend: "map_dragend",
    initialized$: "initialized$"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵNgOnChangesFeature"]],
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function CustomMarker_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵprojection"](0);
    }
  },
  encapsulation: 2
});
/** @nocollapse */

CustomMarker.ctorParameters = function () {
  return [{
    type: NguiMapComponent
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ElementRef
  }, {
    type: NguiMap
  }];
};

CustomMarker.propDecorators = {
  "initialized$": [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Output
  }]
};

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](CustomMarker, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Component,
    args: [{
      selector: 'ngui-map > custom-marker',
      inputs: INPUTS$3,
      outputs: OUTPUTS$3,
      template: "\n    <ng-content></ng-content>\n  "
    }]
  }], function () {
    return [{
      type: NguiMapComponent
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ElementRef
    }, {
      type: NguiMap
    }];
  }, {
    initialized$: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Output
    }]
  });
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */


var INPUTS$4 = ['center', 'clickable', 'draggable', 'editable', 'fillColor', 'fillOpacity', 'map', 'radius', 'strokeColor', 'strokeOpacity', 'strokePosition', 'strokeWeight', 'visible', 'zIndex', 'options', 'geoFallbackCenter'];
var OUTPUTS$4 = ['centerChanged', 'click', 'dblclick', 'drag', 'dragend', 'dragstart', 'mousedown', 'mousemove', 'mouseout', 'mouseover', 'mouseup', 'radiusChanged', 'rightclick'];

var Circle = /*#__PURE__*/function (_BaseMapDirective2) {
  (0,D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__.default)(Circle, _BaseMapDirective2);

  var _super5 = (0,D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__.default)(Circle);

  /**
   * @param {?} nguiMapComp
   */
  function Circle(nguiMapComp) {
    var _this22;

    (0,D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__.default)(this, Circle);

    _this22 = _super5.call(this, nguiMapComp, 'Circle', INPUTS$4, OUTPUTS$4);
    _this22.nguiMapComp = nguiMapComp;
    _this22.objectOptions =
    /** @type {?} */
    {};
    return _this22;
  }
  /**
   * @return {?}
   */


  (0,D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__.default)(Circle, [{
    key: "initialize",
    value: function initialize() {
      (0,D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_0__.default)((0,D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_1__.default)(Circle.prototype), "initialize", this).call(this);

      this.setCenter();
    }
    /**
     * @return {?}
     */

  }, {
    key: "setCenter",
    value: function setCenter() {
      var _this23 = this;

      if (!this['center']) {
        this._subscriptions.push(this.nguiMapComp.geolocation.getCurrentPosition().subscribe(function (center) {
          var
          /** @type {?} */
          latLng = new google.maps.LatLng(center.coords.latitude, center.coords.longitude);

          _this23.mapObject.setCenter(latLng);
        }, function (error) {
          console.error('ngui-map, error in finding the current position');

          _this23.mapObject.setCenter(_this23.objectOptions['geoFallbackCenter'] || new google.maps.LatLng(0, 0));
        }));
      } else if (typeof this['center'] === 'string') {
        this._subscriptions.push(this.nguiMapComp.geoCoder.geocode({
          address: this['center']
        }).subscribe(function (results) {
          _this23.mapObject.setCenter(results[0].geometry.location);
        }, function (error) {
          console.error('ngui-map, error in finding location from', _this23['center']);

          _this23.mapObject.setCenter(_this23.objectOptions['geoFallbackCenter'] || new google.maps.LatLng(0, 0));
        }));
      }
    }
  }]);

  return Circle;
}(BaseMapDirective);

Circle.ɵfac = function Circle_Factory(t) {
  return new (t || Circle)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](NguiMapComponent));
};

Circle.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineDirective"]({
  type: Circle,
  selectors: [["circle"], ["map-circle"]],
  inputs: {
    center: "center",
    clickable: "clickable",
    draggable: "draggable",
    editable: "editable",
    fillColor: "fillColor",
    fillOpacity: "fillOpacity",
    map: "map",
    radius: "radius",
    strokeColor: "strokeColor",
    strokeOpacity: "strokeOpacity",
    strokePosition: "strokePosition",
    strokeWeight: "strokeWeight",
    visible: "visible",
    zIndex: "zIndex",
    options: "options",
    geoFallbackCenter: "geoFallbackCenter"
  },
  outputs: {
    centerChanged: "centerChanged",
    click: "click",
    dblclick: "dblclick",
    drag: "drag",
    dragend: "dragend",
    dragstart: "dragstart",
    mousedown: "mousedown",
    mousemove: "mousemove",
    mouseout: "mouseout",
    mouseover: "mouseover",
    mouseup: "mouseup",
    radiusChanged: "radiusChanged",
    rightclick: "rightclick"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]]
});
/** @nocollapse */

Circle.ctorParameters = function () {
  return [{
    type: NguiMapComponent
  }];
};

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](Circle, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Directive,
    args: [{
      selector: 'ngui-map>circle, ngui-map>map-circle',
      inputs: INPUTS$4,
      outputs: OUTPUTS$4
    }]
  }], function () {
    return [{
      type: NguiMapComponent
    }];
  }, null);
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */


var INPUTS$5 = ['controlPosition', 'controls', 'drawingMode', 'featureFactory', 'style', 'geoJson', 'geoJsonUrl'];
var OUTPUTS$5 = ['addfeature', 'click', 'dblclick', 'mousedown', 'mouseout', 'mouseover', 'mouseup', 'removefeature', 'removeproperty', 'rightclick', 'setgeometry', 'setproperty'];

var DataLayer = /*#__PURE__*/function (_BaseMapDirective3) {
  (0,D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__.default)(DataLayer, _BaseMapDirective3);

  var _super6 = (0,D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__.default)(DataLayer);

  /**
   * @param {?} nguiMapComponent
   */
  function DataLayer(nguiMapComponent) {
    (0,D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__.default)(this, DataLayer);

    return _super6.call(this, nguiMapComponent, 'Data', INPUTS$5, OUTPUTS$5);
  }
  /**
   * @return {?}
   */


  (0,D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__.default)(DataLayer, [{
    key: "initialize",
    value: function initialize() {
      if (this['geoJson']) {
        // addGeoJson from an object
        this.nguiMapComponent.map.data.addGeoJson(this['geoJson']);
      } else if (this['geoJsonUrl']) {
        // loadGeoJson from a URL
        this.nguiMapComponent.map.data.loadGeoJson(this['geoJsonUrl']);
      } else {
        this.objectOptions = this.optionBuilder.googlizeAllInputs(this.inputs, this);
        this.nguiMapComponent.map.data.add(this.objectOptions);
      } // unlike others, data belongs to map. e.g., map.data.loadGeoJson(), map.data.add()


      this.mapObject = this.nguiMapComponent.map.data; // set google events listeners and emits to this outputs listeners

      this.nguiMap.setObjectEvents(this.outputs, this, 'mapObject');
      this.nguiMapComponent.addToMapObjectGroup(this.mapObjectName, this.mapObject);
      this.initialized$.emit(this.mapObject);
    }
  }]);

  return DataLayer;
}(BaseMapDirective);

DataLayer.ɵfac = function DataLayer_Factory(t) {
  return new (t || DataLayer)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](NguiMapComponent));
};

DataLayer.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineDirective"]({
  type: DataLayer,
  selectors: [["data-layer"]],
  inputs: {
    controlPosition: "controlPosition",
    controls: "controls",
    drawingMode: "drawingMode",
    featureFactory: "featureFactory",
    style: "style",
    geoJson: "geoJson",
    geoJsonUrl: "geoJsonUrl"
  },
  outputs: {
    addfeature: "addfeature",
    click: "click",
    dblclick: "dblclick",
    mousedown: "mousedown",
    mouseout: "mouseout",
    mouseover: "mouseover",
    mouseup: "mouseup",
    removefeature: "removefeature",
    removeproperty: "removeproperty",
    rightclick: "rightclick",
    setgeometry: "setgeometry",
    setproperty: "setproperty"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]]
});
/** @nocollapse */

DataLayer.ctorParameters = function () {
  return [{
    type: NguiMapComponent
  }];
};

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](DataLayer, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Directive,
    args: [{
      selector: 'ngui-map > data-layer',
      inputs: INPUTS$5,
      outputs: OUTPUTS$5
    }]
  }], function () {
    return [{
      type: NguiMapComponent
    }];
  }, null);
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */


var INPUTS$6 = ['directions', 'draggable', 'hideRouteList', 'infoWindow', 'panel', 'markerOptions', 'polylineOptions', 'preserveViewport', 'routeIndex', 'suppressBicyclingLayer', 'suppressInfoWindows', 'suppressMarkers', 'suppressPolylines'];
var OUTPUTS$6 = ['directions_changed'];

var DirectionsRenderer = /*#__PURE__*/function (_BaseMapDirective4) {
  (0,D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__.default)(DirectionsRenderer, _BaseMapDirective4);

  var _super7 = (0,D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__.default)(DirectionsRenderer);

  /**
   * @param {?} nguiMapComponent
   * @param {?} geolocation
   */
  function DirectionsRenderer(nguiMapComponent, geolocation) {
    var _this24;

    (0,D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__.default)(this, DirectionsRenderer);

    _this24 = _super7.call(this, nguiMapComponent, 'DirectionsRenderer', INPUTS$6, OUTPUTS$6);
    _this24.geolocation = geolocation;
    return _this24;
  }
  /**
   * @return {?}
   */


  (0,D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__.default)(DirectionsRenderer, [{
    key: "initialize",
    value: function initialize() {
      this.objectOptions = this.optionBuilder.googlizeAllInputs(this.inputs, this);

      if (typeof this.objectOptions['panel'] === 'string') {
        // find a Node for panel
        this.objectOptions['panel'] = document.querySelector(this.objectOptions['panel']);
      }

      this.directionsService = new google.maps.DirectionsService();
      this.directionsRenderer = new google.maps.DirectionsRenderer(this.objectOptions);
      this.directionsRenderer.setMap(this.nguiMapComponent.map); // set google events listeners and emidirectionsRenderer to this outputs listeners

      this.showDirections(this.directionsRequest);
      this.nguiMap.setObjectEvents(this.outputs, this, 'directionsRenderer');
      this.nguiMapComponent.addToMapObjectGroup(this.mapObjectName, this.mapObject);
      this.initialized$.emit(this.directionsRenderer);
    }
    /**
     * @param {?} changes
     * @return {?}
     */

  }, {
    key: "ngOnChanges",
    value: function ngOnChanges(changes) {
      var
      /** @type {?} */
      newOptions = {};

      for (var
      /** @type {?} */
      key in changes) {
        if (this.inputs.indexOf(key) !== -1) {
          newOptions[key] = this.optionBuilder.googlize(changes[key].currentValue);
        }
      }

      if (changes['directionsRequest'] && this.directionsRenderer) {
        this.directionsService && this.showDirections(this.directionsRequest);
      }
    }
    /**
     * @param {?} directionsRequest
     * @return {?}
     */

  }, {
    key: "showDirections",
    value: function showDirections(directionsRequest) {
      var _this25 = this;

      this.directionsService.route(directionsRequest, function (response, status) {
        // in some-case the callback is called during destroy component,
        // we should make sure directionsRenderer is still defined (cancelling `route` callback is not possible).
        if (!_this25.directionsRenderer) {
          return;
        }

        if (status === google.maps.DirectionsStatus.OK) {
          _this25.directionsRenderer.setDirections(response);
        } else {
          console.error('Directions request failed due to ' + status);
        }
      });
    }
    /**
     * @return {?}
     */

  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      (0,D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_0__.default)((0,D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_1__.default)(DirectionsRenderer.prototype), "ngOnDestroy", this).call(this);

      this.nguiMap.clearObjectEvents(this.outputs, this, 'directionsRenderer');
    }
  }]);

  return DirectionsRenderer;
}(BaseMapDirective);

DirectionsRenderer.ɵfac = function DirectionsRenderer_Factory(t) {
  return new (t || DirectionsRenderer)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](NguiMapComponent), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](NavigatorGeolocation));
};

DirectionsRenderer.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineDirective"]({
  type: DirectionsRenderer,
  selectors: [["directions-renderer"]],
  inputs: {
    directions: "directions",
    draggable: "draggable",
    hideRouteList: "hideRouteList",
    infoWindow: "infoWindow",
    panel: "panel",
    markerOptions: "markerOptions",
    polylineOptions: "polylineOptions",
    preserveViewport: "preserveViewport",
    routeIndex: "routeIndex",
    suppressBicyclingLayer: "suppressBicyclingLayer",
    suppressInfoWindows: "suppressInfoWindows",
    suppressMarkers: "suppressMarkers",
    suppressPolylines: "suppressPolylines",
    directionsRequest: ["directions-request", "directionsRequest"]
  },
  outputs: {
    directions_changed: "directions_changed"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵNgOnChangesFeature"]]
});
/** @nocollapse */

DirectionsRenderer.ctorParameters = function () {
  return [{
    type: NguiMapComponent
  }, {
    type: NavigatorGeolocation
  }];
};

DirectionsRenderer.propDecorators = {
  "directionsRequest": [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input,
    args: ['directions-request']
  }]
};

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](DirectionsRenderer, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Directive,
    args: [{
      selector: 'ngui-map > directions-renderer',
      inputs: INPUTS$6,
      outputs: OUTPUTS$6
    }]
  }], function () {
    return [{
      type: NguiMapComponent
    }, {
      type: NavigatorGeolocation
    }];
  }, {
    directionsRequest: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input,
      args: ['directions-request']
    }]
  });
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */


var INPUTS$7 = ['options', 'circleOptions', 'drawingControl', 'drawingControlOptions', 'drawingMode', 'map', 'markerOptions', 'polygonOptions', 'polylineOptions', 'rectangleOptions'];
var OUTPUTS$7 = ['circlecomplete', 'markercomplete', 'overlaycomplete', 'polygoncomplete', 'polylinecomplete', 'rectanglecomplete'];

var DrawingManager = /*#__PURE__*/function (_BaseMapDirective5) {
  (0,D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__.default)(DrawingManager, _BaseMapDirective5);

  var _super8 = (0,D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__.default)(DrawingManager);

  /**
   * @param {?} nguiMapComp
   */
  function DrawingManager(nguiMapComp) {
    var _this26;

    (0,D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__.default)(this, DrawingManager);

    _this26 = _super8.call(this, nguiMapComp, 'DrawingManager', INPUTS$7, OUTPUTS$7);
    _this26.libraryName = 'drawing';
    return _this26;
  }

  return DrawingManager;
}(BaseMapDirective);

DrawingManager.ɵfac = function DrawingManager_Factory(t) {
  return new (t || DrawingManager)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](NguiMapComponent));
};

DrawingManager.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineDirective"]({
  type: DrawingManager,
  selectors: [["drawing-manager"]],
  inputs: {
    options: "options",
    circleOptions: "circleOptions",
    drawingControl: "drawingControl",
    drawingControlOptions: "drawingControlOptions",
    drawingMode: "drawingMode",
    map: "map",
    markerOptions: "markerOptions",
    polygonOptions: "polygonOptions",
    polylineOptions: "polylineOptions",
    rectangleOptions: "rectangleOptions"
  },
  outputs: {
    circlecomplete: "circlecomplete",
    markercomplete: "markercomplete",
    overlaycomplete: "overlaycomplete",
    polygoncomplete: "polygoncomplete",
    polylinecomplete: "polylinecomplete",
    rectanglecomplete: "rectanglecomplete"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]]
});
/** @nocollapse */

DrawingManager.ctorParameters = function () {
  return [{
    type: NguiMapComponent
  }];
};

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](DrawingManager, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Directive,
    args: [{
      selector: 'ngui-map > drawing-manager',
      inputs: INPUTS$7,
      outputs: OUTPUTS$7
    }]
  }], function () {
    return [{
      type: NguiMapComponent
    }];
  }, null);
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */


var INPUTS$8 = ['url', 'bounds', 'clickable', 'opacity'];
var OUTPUTS$8 = ['click', 'dblclick'];

var GroundOverlay = /*#__PURE__*/function (_BaseMapDirective6) {
  (0,D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__.default)(GroundOverlay, _BaseMapDirective6);

  var _super9 = (0,D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__.default)(GroundOverlay);

  /**
   * @param {?} nguiMapComp
   */
  function GroundOverlay(nguiMapComp) {
    var _this27;

    (0,D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__.default)(this, GroundOverlay);

    _this27 = _super9.call(this, nguiMapComp, 'GroundOverlay', INPUTS$8, OUTPUTS$8);
    _this27.objectOptions =
    /** @type {?} */
    {};
    return _this27;
  }
  /**
   * @return {?}
   */


  (0,D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__.default)(GroundOverlay, [{
    key: "initialize",
    value: function initialize() {
      // url, bounds are not the options of GroundOverlay
      this.objectOptions = this.optionBuilder.googlizeAllInputs(['clickable', 'opacity'], this); // noinspection TypeScriptUnresolvedFunction

      this.mapObject = new google.maps.GroundOverlay(this['url'], this['bounds'], this.objectOptions);
      this.mapObject.setMap(this.nguiMapComponent.map);
      this.mapObject['mapObjectName'] = this.mapObjectName; // set google events listeners and emits to this outputs listeners

      this.nguiMap.setObjectEvents(this.outputs, this, 'mapObject');
      this.nguiMapComponent.addToMapObjectGroup(this.mapObjectName, this.mapObject);
      this.initialized$.emit(this.mapObject);
    }
  }]);

  return GroundOverlay;
}(BaseMapDirective);

GroundOverlay.ɵfac = function GroundOverlay_Factory(t) {
  return new (t || GroundOverlay)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](NguiMapComponent));
};

GroundOverlay.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineDirective"]({
  type: GroundOverlay,
  selectors: [["ground-overlay"]],
  inputs: {
    url: "url",
    bounds: "bounds",
    clickable: "clickable",
    opacity: "opacity"
  },
  outputs: {
    click: "click",
    dblclick: "dblclick"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]]
});
/** @nocollapse */

GroundOverlay.ctorParameters = function () {
  return [{
    type: NguiMapComponent
  }];
};

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](GroundOverlay, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Directive,
    args: [{
      selector: 'ngui-map > ground-overlay',
      inputs: INPUTS$8,
      outputs: OUTPUTS$8
    }]
  }], function () {
    return [{
      type: NguiMapComponent
    }];
  }, null);
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */


var INPUTS$9 = ['data', 'dissipating', 'gradient', 'maxIntensity', 'opacity', 'radius', 'options'];
var OUTPUTS$9 = [];

var HeatmapLayer = /*#__PURE__*/function (_BaseMapDirective7) {
  (0,D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__.default)(HeatmapLayer, _BaseMapDirective7);

  var _super10 = (0,D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__.default)(HeatmapLayer);

  /**
   * @param {?} nguiMapComp
   */
  function HeatmapLayer(nguiMapComp) {
    var _this28;

    (0,D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__.default)(this, HeatmapLayer);

    _this28 = _super10.call(this, nguiMapComp, 'HeatmapLayer', INPUTS$9, OUTPUTS$9);
    _this28.libraryName = 'visualization';
    return _this28;
  }

  return HeatmapLayer;
}(BaseMapDirective);

HeatmapLayer.ɵfac = function HeatmapLayer_Factory(t) {
  return new (t || HeatmapLayer)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](NguiMapComponent));
};

HeatmapLayer.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineDirective"]({
  type: HeatmapLayer,
  selectors: [["heatmap-layer"]],
  inputs: {
    data: "data",
    dissipating: "dissipating",
    gradient: "gradient",
    maxIntensity: "maxIntensity",
    opacity: "opacity",
    radius: "radius",
    options: "options"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]]
});
/** @nocollapse */

HeatmapLayer.ctorParameters = function () {
  return [{
    type: NguiMapComponent
  }];
};

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](HeatmapLayer, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Directive,
    args: [{
      selector: 'ngui-map > heatmap-layer',
      inputs: INPUTS$9,
      outputs: OUTPUTS$9
    }]
  }], function () {
    return [{
      type: NguiMapComponent
    }];
  }, null);
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */


var INPUTS$10 = ['clickable', 'preserveViewport', 'screenOverlays', 'suppressInfoWindows', 'url', 'zIndex', 'options'];
var OUTPUTS$10 = ['click', 'defaultviewport_changed', 'status_changed'];

var KmlLayer = /*#__PURE__*/function (_BaseMapDirective8) {
  (0,D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__.default)(KmlLayer, _BaseMapDirective8);

  var _super11 = (0,D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__.default)(KmlLayer);

  /**
   * @param {?} nguiMapComp
   */
  function KmlLayer(nguiMapComp) {
    (0,D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__.default)(this, KmlLayer);

    return _super11.call(this, nguiMapComp, 'KmlLayer', INPUTS$10, OUTPUTS$10);
  }

  return KmlLayer;
}(BaseMapDirective);

KmlLayer.ɵfac = function KmlLayer_Factory(t) {
  return new (t || KmlLayer)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](NguiMapComponent));
};

KmlLayer.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineDirective"]({
  type: KmlLayer,
  selectors: [["kml-layer"]],
  inputs: {
    clickable: "clickable",
    preserveViewport: "preserveViewport",
    screenOverlays: "screenOverlays",
    suppressInfoWindows: "suppressInfoWindows",
    url: "url",
    zIndex: "zIndex",
    options: "options"
  },
  outputs: {
    click: "click",
    defaultviewport_changed: "defaultviewport_changed",
    status_changed: "status_changed"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]]
});
/** @nocollapse */

KmlLayer.ctorParameters = function () {
  return [{
    type: NguiMapComponent
  }];
};

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](KmlLayer, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Directive,
    args: [{
      selector: 'ngui-map > kml-layer',
      inputs: INPUTS$10,
      outputs: OUTPUTS$10
    }]
  }], function () {
    return [{
      type: NguiMapComponent
    }];
  }, null);
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */


var INPUTS$11 = ['anchorPoint', 'animation', 'clickable', 'cursor', 'draggable', 'icon', 'label', 'opacity', 'optimized', 'place', 'position', 'shape', 'title', 'visible', 'zIndex', 'options', 'geoFallbackPosition'];
var OUTPUTS$11 = ['animationChanged', 'click', 'clickableChanged', 'cursorChanged', 'dblclick', 'drag', 'dragend', 'draggableChanged', 'dragstart', 'flatChanged', 'iconChanged', 'mousedown', 'mouseout', 'mouseover', 'mouseup', 'positionChanged', 'rightclick', 'shapeChanged', 'titleChanged', 'visibleChanged', 'zindexChanged'];

var Marker = /*#__PURE__*/function (_BaseMapDirective9) {
  (0,D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__.default)(Marker, _BaseMapDirective9);

  var _super12 = (0,D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__.default)(Marker);

  /**
   * @param {?} nguiMapComp
   */
  function Marker(nguiMapComp) {
    var _this29;

    (0,D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__.default)(this, Marker);

    _this29 = _super12.call(this, nguiMapComp, 'Marker', INPUTS$11, OUTPUTS$11);
    _this29.nguiMapComp = nguiMapComp;
    _this29.objectOptions =
    /** @type {?} */
    {};
    return _this29;
  }
  /**
   * @return {?}
   */


  (0,D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__.default)(Marker, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this30 = this;

      if (this.nguiMapComponent.mapIdledOnce) {
        // map is ready already
        this.initialize();
      } else {
        this.nguiMapComponent.mapReady$.subscribe(function (map) {
          return _this30.initialize();
        });
      }
    }
    /**
     * @return {?}
     */

  }, {
    key: "initialize",
    value: function initialize() {
      (0,D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_0__.default)((0,D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_1__.default)(Marker.prototype), "initialize", this).call(this);

      this.setPosition();
    }
    /**
     * @return {?}
     */

  }, {
    key: "setPosition",
    value: function setPosition() {
      var _this31 = this;

      if (!this['position']) {
        this._subscriptions.push(this.nguiMapComp.geolocation.getCurrentPosition().subscribe(function (position) {
          var
          /** @type {?} */
          latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

          _this31.mapObject.setPosition(latLng);
        }, function (error) {
          console.error('ngui-map, error finding the current location');

          _this31.mapObject.setPosition(_this31.objectOptions['geoFallbackPosition'] || new google.maps.LatLng(0, 0));
        }));
      } else if (typeof this['position'] === 'string') {
        this._subscriptions.push(this.nguiMapComp.geoCoder.geocode({
          address: this['position']
        }).subscribe(function (results) {
          _this31.mapObject.setPosition(results[0].geometry.location);
        }, function (error) {
          console.error('ngui-map, error finding the location from', _this31['position']);

          _this31.mapObject.setPosition(_this31.objectOptions['geoFallbackPosition'] || new google.maps.LatLng(0, 0));
        }));
      }
    }
  }]);

  return Marker;
}(BaseMapDirective);

Marker.ɵfac = function Marker_Factory(t) {
  return new (t || Marker)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](NguiMapComponent));
};

Marker.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineDirective"]({
  type: Marker,
  selectors: [["marker"]],
  inputs: {
    anchorPoint: "anchorPoint",
    animation: "animation",
    clickable: "clickable",
    cursor: "cursor",
    draggable: "draggable",
    icon: "icon",
    label: "label",
    opacity: "opacity",
    optimized: "optimized",
    place: "place",
    position: "position",
    shape: "shape",
    title: "title",
    visible: "visible",
    zIndex: "zIndex",
    options: "options",
    geoFallbackPosition: "geoFallbackPosition"
  },
  outputs: {
    animationChanged: "animationChanged",
    click: "click",
    clickableChanged: "clickableChanged",
    cursorChanged: "cursorChanged",
    dblclick: "dblclick",
    drag: "drag",
    dragend: "dragend",
    draggableChanged: "draggableChanged",
    dragstart: "dragstart",
    flatChanged: "flatChanged",
    iconChanged: "iconChanged",
    mousedown: "mousedown",
    mouseout: "mouseout",
    mouseover: "mouseover",
    mouseup: "mouseup",
    positionChanged: "positionChanged",
    rightclick: "rightclick",
    shapeChanged: "shapeChanged",
    titleChanged: "titleChanged",
    visibleChanged: "visibleChanged",
    zindexChanged: "zindexChanged"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]]
});
/** @nocollapse */

Marker.ctorParameters = function () {
  return [{
    type: NguiMapComponent
  }];
};

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](Marker, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Directive,
    args: [{
      selector: 'ngui-map > marker',
      inputs: INPUTS$11,
      outputs: OUTPUTS$11
    }]
  }], function () {
    return [{
      type: NguiMapComponent
    }];
  }, null);
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */


var PlacesAutoComplete =
/**
 * @param {?} optionBuilder
 * @param {?} elementRef
 * @param {?} apiLoader
 */
function PlacesAutoComplete(optionBuilder, elementRef, apiLoader) {
  var _this32 = this;

  (0,D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__.default)(this, PlacesAutoComplete);

  this.optionBuilder = optionBuilder;
  this.elementRef = elementRef;
  this.apiLoader = apiLoader;
  this.place_changed = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
  this.initialized$ = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter(); // only called when map is ready

  this.initialize = function () {
    _this32.objectOptions = _this32.optionBuilder.googlizeAllInputs(['bounds', 'componentRestrictions', 'types'], _this32);

    if (!google.maps.places) {
      throw missingLibraryError('PlacesAutoComplete', 'places');
    }

    _this32.autocomplete = new google.maps.places.Autocomplete(_this32.elementRef.nativeElement, _this32.objectOptions);

    _this32.autocomplete.addListener('place_changed', function (place) {
      _this32.place_changed.emit(_this32.autocomplete.getPlace());
    });

    _this32.initialized$.emit(_this32.autocomplete);
  };

  apiLoader.load();
  apiLoader.api$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.first)()).subscribe(function () {
    return _this32.initialize();
  });
};

PlacesAutoComplete.ɵfac = function PlacesAutoComplete_Factory(t) {
  return new (t || PlacesAutoComplete)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](OptionBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](NgMapApiLoader));
};

PlacesAutoComplete.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineDirective"]({
  type: PlacesAutoComplete,
  selectors: [["", "places-auto-complete", ""]],
  inputs: {
    bounds: "bounds",
    componentRestrictions: "componentRestrictions",
    types: "types"
  },
  outputs: {
    place_changed: "place_changed",
    initialized$: "initialized$"
  }
});
/** @nocollapse */

PlacesAutoComplete.ctorParameters = function () {
  return [{
    type: OptionBuilder
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ElementRef
  }, {
    type: NgMapApiLoader
  }];
};

PlacesAutoComplete.propDecorators = {
  "bounds": [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
  }],
  "componentRestrictions": [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
  }],
  "types": [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
  }],
  "place_changed": [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Output,
    args: ['place_changed']
  }],
  "initialized$": [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Output
  }]
};

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](PlacesAutoComplete, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Directive,
    args: [{
      selector: '[places-auto-complete]'
    }]
  }], function () {
    return [{
      type: OptionBuilder
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ElementRef
    }, {
      type: NgMapApiLoader
    }];
  }, {
    place_changed: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Output,
      args: ['place_changed']
    }],
    initialized$: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Output
    }],
    bounds: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
    }],
    componentRestrictions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
    }],
    types: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
    }]
  });
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */


var INPUTS$12 = ['clickable', 'draggable', 'editable', 'fillColor', 'fillOpacity', 'geodesic', 'paths', 'strokeColor', 'strokeOpacity', 'strokePosition', 'strokeWeight', 'visible', 'zIndex', 'options'];
var OUTPUTS$12 = ['click', 'dblclick', 'drag', 'dragend', 'dragstart', 'mousedown', 'mousemove', 'mouseout', 'mouseover', 'mouseup', 'rightclick'];

var Polygon = /*#__PURE__*/function (_BaseMapDirective10) {
  (0,D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__.default)(Polygon, _BaseMapDirective10);

  var _super13 = (0,D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__.default)(Polygon);

  /**
   * @param {?} nguiMapComp
   */
  function Polygon(nguiMapComp) {
    (0,D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__.default)(this, Polygon);

    return _super13.call(this, nguiMapComp, 'Polygon', INPUTS$12, OUTPUTS$12);
  }

  return Polygon;
}(BaseMapDirective);

Polygon.ɵfac = function Polygon_Factory(t) {
  return new (t || Polygon)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](NguiMapComponent));
};

Polygon.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineDirective"]({
  type: Polygon,
  selectors: [["polygon"], ["map-polygon"]],
  inputs: {
    clickable: "clickable",
    draggable: "draggable",
    editable: "editable",
    fillColor: "fillColor",
    fillOpacity: "fillOpacity",
    geodesic: "geodesic",
    paths: "paths",
    strokeColor: "strokeColor",
    strokeOpacity: "strokeOpacity",
    strokePosition: "strokePosition",
    strokeWeight: "strokeWeight",
    visible: "visible",
    zIndex: "zIndex",
    options: "options"
  },
  outputs: {
    click: "click",
    dblclick: "dblclick",
    drag: "drag",
    dragend: "dragend",
    dragstart: "dragstart",
    mousedown: "mousedown",
    mousemove: "mousemove",
    mouseout: "mouseout",
    mouseover: "mouseover",
    mouseup: "mouseup",
    rightclick: "rightclick"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]]
});
/** @nocollapse */

Polygon.ctorParameters = function () {
  return [{
    type: NguiMapComponent
  }];
};

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](Polygon, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Directive,
    args: [{
      selector: 'ngui-map>polygon, ngui-map>map-polygon',
      inputs: INPUTS$12,
      outputs: OUTPUTS$12
    }]
  }], function () {
    return [{
      type: NguiMapComponent
    }];
  }, null);
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */


var INPUTS$13 = ['clickable', 'draggable', 'editable', 'geodesic', 'icons', 'path', 'strokeColor', 'strokeOpacity', 'strokeWeight', 'visible', 'zIndex', 'options'];
var OUTPUTS$13 = ['click', 'dblclick', 'drag', 'dragend', 'dragstart', 'mousedown', 'mousemove', 'mouseout', 'mouseover', 'mouseup', 'rightclick'];

var Polyline = /*#__PURE__*/function (_BaseMapDirective11) {
  (0,D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__.default)(Polyline, _BaseMapDirective11);

  var _super14 = (0,D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__.default)(Polyline);

  /**
   * @param {?} nguiMapComp
   */
  function Polyline(nguiMapComp) {
    (0,D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__.default)(this, Polyline);

    return _super14.call(this, nguiMapComp, 'Polyline', INPUTS$13, OUTPUTS$13);
  }

  return Polyline;
}(BaseMapDirective);

Polyline.ɵfac = function Polyline_Factory(t) {
  return new (t || Polyline)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](NguiMapComponent));
};

Polyline.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineDirective"]({
  type: Polyline,
  selectors: [["polyline"]],
  inputs: {
    clickable: "clickable",
    draggable: "draggable",
    editable: "editable",
    geodesic: "geodesic",
    icons: "icons",
    path: "path",
    strokeColor: "strokeColor",
    strokeOpacity: "strokeOpacity",
    strokeWeight: "strokeWeight",
    visible: "visible",
    zIndex: "zIndex",
    options: "options"
  },
  outputs: {
    click: "click",
    dblclick: "dblclick",
    drag: "drag",
    dragend: "dragend",
    dragstart: "dragstart",
    mousedown: "mousedown",
    mousemove: "mousemove",
    mouseout: "mouseout",
    mouseover: "mouseover",
    mouseup: "mouseup",
    rightclick: "rightclick"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]]
});
/** @nocollapse */

Polyline.ctorParameters = function () {
  return [{
    type: NguiMapComponent
  }];
};

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](Polyline, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Directive,
    args: [{
      selector: 'ngui-map > polyline',
      inputs: INPUTS$13,
      outputs: OUTPUTS$13
    }]
  }], function () {
    return [{
      type: NguiMapComponent
    }];
  }, null);
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */


var INPUTS$14 = ['selector', 'options', 'addressControl', 'addressControlOptions', 'clickToGo', 'disableDefaultUI', 'disableDoubleClickZoom', 'enableCloseButton', 'fullscreenControl', 'fullscreenControlOptions', 'imageDateControl', 'linksControl', 'motionTracking', 'motionTrackingControl', 'panControl', 'panControlOptions', 'pano', 'position', 'pov', 'scrollwheel', 'showRoadLabels', 'visible', 'zoomControl', 'zoomControlOptions'];
var OUTPUTS$14 = ['closeclick', 'pano_changed', 'position_changed', 'pov_changed', 'resize', 'status_changed', 'visible_changed', 'zoom_changed'];

var StreetViewPanorama = /*#__PURE__*/function (_BaseMapDirective12) {
  (0,D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__.default)(StreetViewPanorama, _BaseMapDirective12);

  var _super15 = (0,D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__.default)(StreetViewPanorama);

  /**
   * @param {?} nguiMapComp
   */
  function StreetViewPanorama(nguiMapComp) {
    (0,D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__.default)(this, StreetViewPanorama);

    return _super15.call(this, nguiMapComp, 'StreetViewPanorama', INPUTS$14, OUTPUTS$14);
  }
  /**
   * @return {?}
   */


  (0,D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__.default)(StreetViewPanorama, [{
    key: "initialize",
    value: function initialize() {
      this.objectOptions = this.optionBuilder.googlizeAllInputs(this.inputs, this);
      var
      /** @type {?} */
      element;

      if (this.objectOptions.selector) {
        // noinspection TypeScriptValidateTypes
        element = document.querySelector(this['selector']);
        delete this.objectOptions.selector;
      } else {
        element = this.nguiMapComponent.el;
      } // will be set after geocoded


      typeof this.objectOptions.position === 'string' && delete this.objectOptions.position;
      this.mapObject = new google.maps[this.mapObjectName](element, this.objectOptions);
      this.mapObject['mapObjectName'] = this.mapObjectName;
      this.mapObject['nguiMapComponent'] = this.nguiMapComponent; // set google events listeners and emits to this outputs listeners

      this.nguiMap.setObjectEvents(this.outputs, this, 'mapObject');
      this.nguiMapComponent.addToMapObjectGroup(this.mapObjectName, this.mapObject);
      this.initialized$.emit(this.mapObject);
    }
    /**
     * @return {?}
     */

  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      if (this.nguiMapComponent.el) {
        this.nguiMap.clearObjectEvents(this.outputs, this, 'mapObject');
      }
    }
  }]);

  return StreetViewPanorama;
}(BaseMapDirective);

StreetViewPanorama.ɵfac = function StreetViewPanorama_Factory(t) {
  return new (t || StreetViewPanorama)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](NguiMapComponent));
};

StreetViewPanorama.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineDirective"]({
  type: StreetViewPanorama,
  selectors: [["street-view-panorama"]],
  inputs: {
    selector: "selector",
    options: "options",
    addressControl: "addressControl",
    addressControlOptions: "addressControlOptions",
    clickToGo: "clickToGo",
    disableDefaultUI: "disableDefaultUI",
    disableDoubleClickZoom: "disableDoubleClickZoom",
    enableCloseButton: "enableCloseButton",
    fullscreenControl: "fullscreenControl",
    fullscreenControlOptions: "fullscreenControlOptions",
    imageDateControl: "imageDateControl",
    linksControl: "linksControl",
    motionTracking: "motionTracking",
    motionTrackingControl: "motionTrackingControl",
    panControl: "panControl",
    panControlOptions: "panControlOptions",
    pano: "pano",
    position: "position",
    pov: "pov",
    scrollwheel: "scrollwheel",
    showRoadLabels: "showRoadLabels",
    visible: "visible",
    zoomControl: "zoomControl",
    zoomControlOptions: "zoomControlOptions"
  },
  outputs: {
    closeclick: "closeclick",
    pano_changed: "pano_changed",
    position_changed: "position_changed",
    pov_changed: "pov_changed",
    resize: "resize",
    status_changed: "status_changed",
    visible_changed: "visible_changed",
    zoom_changed: "zoom_changed"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]]
});
/** @nocollapse */

StreetViewPanorama.ctorParameters = function () {
  return [{
    type: NguiMapComponent
  }];
};

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](StreetViewPanorama, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Directive,
    args: [{
      selector: 'ngui-map > street-view-panorama',
      inputs: INPUTS$14,
      outputs: OUTPUTS$14
    }]
  }], function () {
    return [{
      type: NguiMapComponent
    }];
  }, null);
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */


var INPUTS$15 = ['autoRefresh', 'options'];
var OUTPUTS$15 = [];

var TrafficLayer = /*#__PURE__*/function (_BaseMapDirective13) {
  (0,D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__.default)(TrafficLayer, _BaseMapDirective13);

  var _super16 = (0,D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__.default)(TrafficLayer);

  /**
   * @param {?} nguiMapComp
   */
  function TrafficLayer(nguiMapComp) {
    (0,D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__.default)(this, TrafficLayer);

    return _super16.call(this, nguiMapComp, 'TrafficLayer', INPUTS$15, OUTPUTS$15);
  }

  return TrafficLayer;
}(BaseMapDirective);

TrafficLayer.ɵfac = function TrafficLayer_Factory(t) {
  return new (t || TrafficLayer)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](NguiMapComponent));
};

TrafficLayer.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineDirective"]({
  type: TrafficLayer,
  selectors: [["traffic-layer"]],
  inputs: {
    autoRefresh: "autoRefresh",
    options: "options"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]]
});
/** @nocollapse */

TrafficLayer.ctorParameters = function () {
  return [{
    type: NguiMapComponent
  }];
};

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](TrafficLayer, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Directive,
    args: [{
      selector: 'ngui-map > traffic-layer',
      inputs: INPUTS$15,
      outputs: OUTPUTS$15
    }]
  }], function () {
    return [{
      type: NguiMapComponent
    }];
  }, null);
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */


var INPUTS$16 = [];
var OUTPUTS$16 = [];

var TransitLayer = /*#__PURE__*/function (_BaseMapDirective14) {
  (0,D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__.default)(TransitLayer, _BaseMapDirective14);

  var _super17 = (0,D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__.default)(TransitLayer);

  /**
   * @param {?} nguiMapComp
   */
  function TransitLayer(nguiMapComp) {
    (0,D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__.default)(this, TransitLayer);

    return _super17.call(this, nguiMapComp, 'TransitLayer', INPUTS$16, OUTPUTS$16);
  }

  return TransitLayer;
}(BaseMapDirective);

TransitLayer.ɵfac = function TransitLayer_Factory(t) {
  return new (t || TransitLayer)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](NguiMapComponent));
};

TransitLayer.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineDirective"]({
  type: TransitLayer,
  selectors: [["transit-layer"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]]
});
/** @nocollapse */

TransitLayer.ctorParameters = function () {
  return [{
    type: NguiMapComponent
  }];
};

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](TransitLayer, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Directive,
    args: [{
      selector: 'ngui-map > transit-layer',
      inputs: INPUTS$16,
      outputs: OUTPUTS$16
    }]
  }], function () {
    return [{
      type: NguiMapComponent
    }];
  }, null);
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */


var COMPONENTS_DIRECTIVES = [NguiMapComponent, InfoWindow, Marker, Circle, CustomMarker, Polygon, InfoWindow, Polyline, GroundOverlay, TransitLayer, TrafficLayer, HeatmapLayer, BicyclingLayer, KmlLayer, DataLayer, StreetViewPanorama, PlacesAutoComplete, DirectionsRenderer, DrawingManager];

var NguiMapModule = /*#__PURE__*/function () {
  function NguiMapModule() {
    (0,D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__.default)(this, NguiMapModule);
  }

  (0,D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__.default)(NguiMapModule, null, [{
    key: "forRoot",
    value:
    /**
     * @param {?=} config
     * @return {?}
     */
    function forRoot() {
      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return {
        ngModule: NguiMapModule,
        providers: [{
          provide: NG_MAP_CONFIG_TOKEN,
          useValue: config
        }]
      };
    }
  }]);

  return NguiMapModule;
}();

NguiMapModule.ɵfac = function NguiMapModule_Factory(t) {
  return new (t || NguiMapModule)();
};

NguiMapModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
  type: NguiMapModule
});
NguiMapModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
  providers: [GeoCoder, NavigatorGeolocation, NguiMap, OptionBuilder, {
    provide: NgMapApiLoader,
    useClass: NgMapAsyncCallbackApiLoader
  }],
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](NguiMapModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule],
      declarations: COMPONENTS_DIRECTIVES,
      exports: [COMPONENTS_DIRECTIVES],
      providers: [GeoCoder, NavigatorGeolocation, NguiMap, OptionBuilder, {
        provide: NgMapApiLoader,
        useClass: NgMapAsyncCallbackApiLoader
      }]
    }]
  }], null, null);
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](NguiMapModule, {
    declarations: function declarations() {
      return [NguiMapComponent, InfoWindow, Marker, Circle, CustomMarker, Polygon, InfoWindow, Polyline, GroundOverlay, TransitLayer, TrafficLayer, HeatmapLayer, BicyclingLayer, KmlLayer, DataLayer, StreetViewPanorama, PlacesAutoComplete, DirectionsRenderer, DrawingManager];
    },
    imports: function imports() {
      return [_angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule];
    },
    exports: function exports() {
      return [NguiMapComponent, InfoWindow, Marker, Circle, CustomMarker, Polygon, InfoWindow, Polyline, GroundOverlay, TransitLayer, TrafficLayer, HeatmapLayer, BicyclingLayer, KmlLayer, DataLayer, StreetViewPanorama, PlacesAutoComplete, DirectionsRenderer, DrawingManager];
    }
  });
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * Generated bundle index. Do not edit.
 */


 //# sourceMappingURL=ngui-map.js.map

/***/ }),

/***/ 39522:
/*!***************************************************************!*\
  !*** ./src/app/maps/fullscreenmap/fullscreenmap.component.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FullScreenMapsComponent": function() { return /* binding */ FullScreenMapsComponent; }
/* harmony export */ });
/* harmony import */ var _raw_loader_fullscreenmap_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./fullscreenmap.component.html */ 19841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var FullScreenMapsComponent = /** @class */ (function () {
    function FullScreenMapsComponent() {
    }
    FullScreenMapsComponent.prototype.ngOnInit = function () {
    };
    FullScreenMapsComponent = __decorate([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Component)({
            selector: 'fullscreen-map-cmp',
            template: _raw_loader_fullscreenmap_component_html__WEBPACK_IMPORTED_MODULE_0__.default
        })
    ], FullScreenMapsComponent);
    return FullScreenMapsComponent;
}());



/***/ }),

/***/ 32659:
/*!*********************************************************!*\
  !*** ./src/app/maps/googlemaps/googlemaps.component.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GoogleMapsComponent": function() { return /* binding */ GoogleMapsComponent; }
/* harmony export */ });
/* harmony import */ var _raw_loader_googlemaps_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./googlemaps.component.html */ 20528);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var GoogleMapsComponent = /** @class */ (function () {
    function GoogleMapsComponent() {
    }
    GoogleMapsComponent.prototype.ngOnInit = function () {
    };
    GoogleMapsComponent = __decorate([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Component)({
            selector: 'vector-maps-cmp',
            template: _raw_loader_googlemaps_component_html__WEBPACK_IMPORTED_MODULE_0__.default
        })
    ], GoogleMapsComponent);
    return GoogleMapsComponent;
}());



/***/ }),

/***/ 83842:
/*!*************************************!*\
  !*** ./src/app/maps/maps.module.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapsModule": function() { return /* binding */ MapsModule; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ngui_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngui/map */ 29704);
/* harmony import */ var _maps_routing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./maps.routing */ 9638);
/* harmony import */ var _fullscreenmap_fullscreenmap_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fullscreenmap/fullscreenmap.component */ 39522);
/* harmony import */ var _googlemaps_googlemaps_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./googlemaps/googlemaps.component */ 32659);
/* harmony import */ var _vectormaps_vectormaps_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./vectormaps/vectormaps.component */ 92191);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var MapsModule = /** @class */ (function () {
    function MapsModule() {
    }
    MapsModule = __decorate([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
                _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(_maps_routing__WEBPACK_IMPORTED_MODULE_1__.MapsRoutes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
                _ngui_map__WEBPACK_IMPORTED_MODULE_0__.NguiMapModule.forRoot({ apiUrl: 'https://maps.google.com/maps/api/js?key=YOUR_KEY_HERE' })
            ],
            declarations: [
                _fullscreenmap_fullscreenmap_component__WEBPACK_IMPORTED_MODULE_2__.FullScreenMapsComponent,
                _googlemaps_googlemaps_component__WEBPACK_IMPORTED_MODULE_3__.GoogleMapsComponent,
                _vectormaps_vectormaps_component__WEBPACK_IMPORTED_MODULE_4__.VectorMapsComponent
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_5__.CUSTOM_ELEMENTS_SCHEMA]
        })
    ], MapsModule);
    return MapsModule;
}());



/***/ }),

/***/ 9638:
/*!**************************************!*\
  !*** ./src/app/maps/maps.routing.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapsRoutes": function() { return /* binding */ MapsRoutes; }
/* harmony export */ });
/* harmony import */ var _fullscreenmap_fullscreenmap_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fullscreenmap/fullscreenmap.component */ 39522);
/* harmony import */ var _googlemaps_googlemaps_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./googlemaps/googlemaps.component */ 32659);
/* harmony import */ var _vectormaps_vectormaps_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vectormaps/vectormaps.component */ 92191);



var MapsRoutes = [{
        path: '',
        children: [{
                path: 'fullscreen',
                component: _fullscreenmap_fullscreenmap_component__WEBPACK_IMPORTED_MODULE_0__.FullScreenMapsComponent
            }]
    }, {
        path: '',
        children: [{
                path: 'google',
                component: _googlemaps_googlemaps_component__WEBPACK_IMPORTED_MODULE_1__.GoogleMapsComponent
            }]
    }, {
        path: '',
        children: [{
                path: 'vector',
                component: _vectormaps_vectormaps_component__WEBPACK_IMPORTED_MODULE_2__.VectorMapsComponent
            }]
    }
];


/***/ }),

/***/ 92191:
/*!*********************************************************!*\
  !*** ./src/app/maps/vectormaps/vectormaps.component.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VectorMapsComponent": function() { return /* binding */ VectorMapsComponent; }
/* harmony export */ });
/* harmony import */ var _raw_loader_vectormaps_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./vectormaps.component.html */ 42358);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var VectorMapsComponent = /** @class */ (function () {
    function VectorMapsComponent() {
    }
    VectorMapsComponent.prototype.ngOnInit = function () {
        var mapData = {
            "AU": 760,
            "BR": 550,
            "CA": 120,
            "DE": 1300,
            "FR": 540,
            "GB": 690,
            "GE": 200,
            "IN": 200,
            "RO": 600,
            "RU": 300,
            "US": 2920,
        };
        $('#worldMap').vectorMap({
            map: 'world_mill_en',
            backgroundColor: "transparent",
            zoomOnScroll: false,
            regionStyle: {
                initial: {
                    fill: '#e4e4e4',
                    "fill-opacity": 0.9,
                    stroke: 'none',
                    "stroke-width": 0,
                    "stroke-opacity": 0
                }
            },
            series: {
                regions: [{
                        values: mapData,
                        scale: ["#AAAAAA", "#444444"],
                        normalizeFunction: 'polynomial'
                    }]
            },
        });
    };
    VectorMapsComponent = __decorate([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Component)({
            selector: 'vector-maps-cmp',
            template: _raw_loader_vectormaps_component_html__WEBPACK_IMPORTED_MODULE_0__.default
        })
    ], VectorMapsComponent);
    return VectorMapsComponent;
}());



/***/ }),

/***/ 19841:
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/maps/fullscreenmap/fullscreenmap.component.html ***!
  \*******************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\n\n          <ngui-map zoom=\"13\" center=\"40.748817,-73.985428\" style=\"margin-top:60px;height: 100%; width: 100%; position: absolute;top: 0px;\n    left: 0px;\n    background-color: rgb(229, 227, 223);\">\n              <marker [position]=\"[40.748817,-73.985428]\"></marker>\n          </ngui-map>\n\n</div>\n");

/***/ }),

/***/ 20528:
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/maps/googlemaps/googlemaps.component.html ***!
  \*************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card \">\n        <div class=\"card-header\">\n            <h4 class=\"card-title\">Satellite Map</h4>\n        </div>\n        <div class=\"card-body \">\n          <ngui-map zoom=\"3\" center=\"40.748817,-73.985428\"  mapTypeId=\"satellite\" >\n              <marker [position]=\"[40.748817,-73.985428]\"></marker>\n          </ngui-map>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-12\">\n      <div class=\"card \">\n        <div class=\"card-header \">\n          <h4 class='card-title'>Regular Map</h4>\n        </div>\n        <div class=\"card-body \">\n          <ngui-map zoom=\"13\" center=\"40.748817,-73.985428\" >\n              <marker [position]=\"[40.748817,-73.985428]\"></marker>\n          </ngui-map>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ 42358:
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/maps/vectormaps/vectormaps.component.html ***!
  \*************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <h3 class=\"text-center\">\n                    World Map<br />\n                    <small>\n                        Looks great on any resolution. Made by our friends from jVector Map.\n                    </small>\n                </h3>\n                <div class=\"card card-plain\">\n                    <div class=\"card-content\">\n                        <div id=\"worldMap\" class=\"map map-big\"></div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_maps_maps_module_ts.js.map