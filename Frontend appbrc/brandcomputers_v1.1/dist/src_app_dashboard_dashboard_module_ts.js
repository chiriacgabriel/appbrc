(self["webpackChunkpaper_dashboard_pro_angular"] = self["webpackChunkpaper_dashboard_pro_angular"] || []).push([["src_app_dashboard_dashboard_module_ts"],{

/***/ 15971:
/*!******************************************************************!*\
  !*** ./node_modules/@agm/core/__ivy_ngcc__/fesm2015/agm-core.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AgmBicyclingLayer": function() { return /* binding */ AgmBicyclingLayer; },
/* harmony export */   "AgmCircle": function() { return /* binding */ AgmCircle; },
/* harmony export */   "AgmCoreModule": function() { return /* binding */ AgmCoreModule; },
/* harmony export */   "AgmDataLayer": function() { return /* binding */ AgmDataLayer; },
/* harmony export */   "AgmFitBounds": function() { return /* binding */ AgmFitBounds; },
/* harmony export */   "AgmGeocoder": function() { return /* binding */ AgmGeocoder; },
/* harmony export */   "AgmInfoWindow": function() { return /* binding */ AgmInfoWindow; },
/* harmony export */   "AgmKmlLayer": function() { return /* binding */ AgmKmlLayer; },
/* harmony export */   "AgmMap": function() { return /* binding */ AgmMap; },
/* harmony export */   "AgmMarker": function() { return /* binding */ AgmMarker; },
/* harmony export */   "AgmPolygon": function() { return /* binding */ AgmPolygon; },
/* harmony export */   "AgmPolyline": function() { return /* binding */ AgmPolyline; },
/* harmony export */   "AgmPolylineIcon": function() { return /* binding */ AgmPolylineIcon; },
/* harmony export */   "AgmPolylinePoint": function() { return /* binding */ AgmPolylinePoint; },
/* harmony export */   "AgmRectangle": function() { return /* binding */ AgmRectangle; },
/* harmony export */   "AgmTransitLayer": function() { return /* binding */ AgmTransitLayer; },
/* harmony export */   "CircleManager": function() { return /* binding */ CircleManager; },
/* harmony export */   "ControlPosition": function() { return /* binding */ ControlPosition; },
/* harmony export */   "DataLayerManager": function() { return /* binding */ DataLayerManager; },
/* harmony export */   "FitBoundsAccessor": function() { return /* binding */ FitBoundsAccessor; },
/* harmony export */   "GeocoderLocationType": function() { return /* binding */ GeocoderLocationType; },
/* harmony export */   "GeocoderStatus": function() { return /* binding */ GeocoderStatus; },
/* harmony export */   "GoogleMapsAPIWrapper": function() { return /* binding */ GoogleMapsAPIWrapper; },
/* harmony export */   "GoogleMapsScriptProtocol": function() { return /* binding */ GoogleMapsScriptProtocol; },
/* harmony export */   "InfoWindowManager": function() { return /* binding */ InfoWindowManager; },
/* harmony export */   "KmlLayerManager": function() { return /* binding */ KmlLayerManager; },
/* harmony export */   "LAZY_MAPS_API_CONFIG": function() { return /* binding */ LAZY_MAPS_API_CONFIG; },
/* harmony export */   "LayerManager": function() { return /* binding */ LayerManager; },
/* harmony export */   "LazyMapsAPILoader": function() { return /* binding */ LazyMapsAPILoader; },
/* harmony export */   "MapTypeId": function() { return /* binding */ MapTypeId; },
/* harmony export */   "MapsAPILoader": function() { return /* binding */ MapsAPILoader; },
/* harmony export */   "MarkerManager": function() { return /* binding */ MarkerManager; },
/* harmony export */   "NoOpMapsAPILoader": function() { return /* binding */ NoOpMapsAPILoader; },
/* harmony export */   "PolygonManager": function() { return /* binding */ PolygonManager; },
/* harmony export */   "PolylineManager": function() { return /* binding */ PolylineManager; },
/* harmony export */   "RectangleManager": function() { return /* binding */ RectangleManager; },
/* harmony export */   "ScaleControlStyle": function() { return /* binding */ ScaleControlStyle; },
/* harmony export */   "ZoomControlStyle": function() { return /* binding */ ZoomControlStyle; },
/* harmony export */   "ɵa": function() { return /* binding */ FitBoundsService; },
/* harmony export */   "ɵb": function() { return /* binding */ coreDirectives; },
/* harmony export */   "ɵc": function() { return /* binding */ WindowRef; },
/* harmony export */   "ɵd": function() { return /* binding */ DocumentRef; },
/* harmony export */   "ɵe": function() { return /* binding */ BROWSER_GLOBALS_PROVIDERS; }
/* harmony export */ });
/* harmony import */ var D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ 28784);
/* harmony import */ var D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ 84999);
/* harmony import */ var D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ 42578);
/* harmony import */ var D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ 66581);
/* harmony import */ var D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 41998);
/* harmony import */ var D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 31112);
/* harmony import */ var D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 88774);
/* harmony import */ var D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 69165);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 26215);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 69412);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 46797);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs */ 79765);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! rxjs */ 89108);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! rxjs */ 66682);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! rxjs */ 88229);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! rxjs */ 46008);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! rxjs */ 25917);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! rxjs */ 40205);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 19773);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 60615);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 43190);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 88002);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/operators */ 47349);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs/operators */ 87519);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs/operators */ 46782);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! rxjs/operators */ 39761);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! rxjs/operators */ 13653);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! rxjs/operators */ 94458);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/common */ 38583);













var _c0 = ["*"];

var MapsAPILoader = function MapsAPILoader() {
  (0,D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__.default)(this, MapsAPILoader);
};

MapsAPILoader.ɵfac = function MapsAPILoader_Factory(t) {
  return new (t || MapsAPILoader)();
};

MapsAPILoader.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({
  token: MapsAPILoader,
  factory: function factory(t) {
    return MapsAPILoader.ɵfac(t);
  }
});
/**
 * Wrapper class that handles the communication with the Google Maps Javascript
 * API v3
 */

var GoogleMapsAPIWrapper = /*#__PURE__*/function () {
  function GoogleMapsAPIWrapper(_loader, _zone) {
    var _this = this;

    (0,D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__.default)(this, GoogleMapsAPIWrapper);

    this._loader = _loader;
    this._zone = _zone;
    this._map = new Promise(function (resolve) {
      _this._mapResolver = resolve;
    });
  }

  (0,D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__.default)(GoogleMapsAPIWrapper, [{
    key: "createMap",
    value: function createMap(el, mapOptions) {
      var _this2 = this;

      return this._zone.runOutsideAngular(function () {
        return _this2._loader.load().then(function () {
          var map = new google.maps.Map(el, mapOptions);

          _this2._mapResolver(map);

          return;
        });
      });
    }
  }, {
    key: "setMapOptions",
    value: function setMapOptions(options) {
      var _this3 = this;

      return this._zone.runOutsideAngular(function () {
        _this3._map.then(function (m) {
          m.setOptions(options);
        });
      });
    }
    /**
     * Creates a google map marker with the map context
     */

  }, {
    key: "createMarker",
    value: function createMarker() {
      var _this4 = this;

      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var addToMap = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      return this._zone.runOutsideAngular(function () {
        return _this4._map.then(function (map) {
          if (addToMap) {
            options.map = map;
          }

          return new google.maps.Marker(options);
        });
      });
    }
  }, {
    key: "createInfoWindow",
    value: function createInfoWindow(options) {
      var _this5 = this;

      return this._zone.runOutsideAngular(function () {
        return _this5._map.then(function () {
          return new google.maps.InfoWindow(options);
        });
      });
    }
    /**
     * Creates a google.map.Circle for the current map.
     */

  }, {
    key: "createCircle",
    value: function createCircle(options) {
      var _this6 = this;

      return this._zone.runOutsideAngular(function () {
        return _this6._map.then(function (map) {
          if (typeof options.strokePosition === 'string') {
            options.strokePosition = google.maps.StrokePosition[options.strokePosition];
          }

          options.map = map;
          return new google.maps.Circle(options);
        });
      });
    }
    /**
     * Creates a google.map.Rectangle for the current map.
     */

  }, {
    key: "createRectangle",
    value: function createRectangle(options) {
      var _this7 = this;

      return this._zone.runOutsideAngular(function () {
        return _this7._map.then(function (map) {
          options.map = map;
          return new google.maps.Rectangle(options);
        });
      });
    }
  }, {
    key: "createPolyline",
    value: function createPolyline(options) {
      var _this8 = this;

      return this._zone.runOutsideAngular(function () {
        return _this8.getNativeMap().then(function (map) {
          var line = new google.maps.Polyline(options);
          line.setMap(map);
          return line;
        });
      });
    }
  }, {
    key: "createPolygon",
    value: function createPolygon(options) {
      var _this9 = this;

      return this._zone.runOutsideAngular(function () {
        return _this9.getNativeMap().then(function (map) {
          var polygon = new google.maps.Polygon(options);
          polygon.setMap(map);
          return polygon;
        });
      });
    }
    /**
     * Creates a new google.map.Data layer for the current map
     */

  }, {
    key: "createDataLayer",
    value: function createDataLayer(options) {
      var _this10 = this;

      return this._zone.runOutsideAngular(function () {
        return _this10._map.then(function (m) {
          var data = new google.maps.Data(options);
          data.setMap(m);
          return data;
        });
      });
    }
    /**
     * Creates a TransitLayer instance for a map
     * @param {TransitLayerOptions} options - used for setting layer options
     * @returns {Promise<TransitLayer>} a new transit layer object
     */

  }, {
    key: "createTransitLayer",
    value: function createTransitLayer(options) {
      var _this11 = this;

      return this._zone.runOutsideAngular(function () {
        return _this11._map.then(function (map) {
          var newLayer = new google.maps.TransitLayer();
          newLayer.setMap(options.visible ? map : null);
          return newLayer;
        });
      });
    }
    /**
     * Creates a BicyclingLayer instance for a map
     * @param {BicyclingLayerOptions} options - used for setting layer options
     * @returns {Promise<BicyclingLayer>} a new bicycling layer object
     */

  }, {
    key: "createBicyclingLayer",
    value: function createBicyclingLayer(options) {
      var _this12 = this;

      return this._zone.runOutsideAngular(function () {
        return _this12._map.then(function (map) {
          var newLayer = new google.maps.BicyclingLayer();
          newLayer.setMap(options.visible ? map : null);
          return newLayer;
        });
      });
    }
    /**
     * Determines if given coordinates are insite a Polygon path.
     */

  }, {
    key: "containsLocation",
    value: function containsLocation(latLng, polygon) {
      return google.maps.geometry.poly.containsLocation(latLng, polygon);
    }
  }, {
    key: "subscribeToMapEvent",
    value: function subscribeToMapEvent(eventName) {
      var _this13 = this;

      return new rxjs__WEBPACK_IMPORTED_MODULE_8__.Observable(function (observer) {
        _this13._map.then(function (m) {
          m.addListener(eventName, function (arg) {
            _this13._zone.run(function () {
              return observer.next(arg);
            });
          });
        });
      });
    }
  }, {
    key: "clearInstanceListeners",
    value: function clearInstanceListeners() {
      var _this14 = this;

      return this._zone.runOutsideAngular(function () {
        _this14._map.then(function (map) {
          google.maps.event.clearInstanceListeners(map);
        });
      });
    }
  }, {
    key: "setCenter",
    value: function setCenter(latLng) {
      var _this15 = this;

      return this._zone.runOutsideAngular(function () {
        return _this15._map.then(function (map) {
          return map.setCenter(latLng);
        });
      });
    }
  }, {
    key: "getZoom",
    value: function getZoom() {
      var _this16 = this;

      return this._zone.runOutsideAngular(function () {
        return _this16._map.then(function (map) {
          return map.getZoom();
        });
      });
    }
  }, {
    key: "getBounds",
    value: function getBounds() {
      var _this17 = this;

      return this._zone.runOutsideAngular(function () {
        return _this17._map.then(function (map) {
          return map.getBounds();
        });
      });
    }
  }, {
    key: "getMapTypeId",
    value: function getMapTypeId() {
      var _this18 = this;

      return this._zone.runOutsideAngular(function () {
        return _this18._map.then(function (map) {
          return map.getMapTypeId();
        });
      });
    }
  }, {
    key: "setZoom",
    value: function setZoom(zoom) {
      var _this19 = this;

      return this._zone.runOutsideAngular(function () {
        return _this19._map.then(function (map) {
          return map.setZoom(zoom);
        });
      });
    }
  }, {
    key: "getCenter",
    value: function getCenter() {
      var _this20 = this;

      return this._zone.runOutsideAngular(function () {
        return _this20._map.then(function (map) {
          return map.getCenter();
        });
      });
    }
  }, {
    key: "panTo",
    value: function panTo(latLng) {
      var _this21 = this;

      return this._zone.runOutsideAngular(function () {
        return _this21._map.then(function (map) {
          return map.panTo(latLng);
        });
      });
    }
  }, {
    key: "panBy",
    value: function panBy(x, y) {
      var _this22 = this;

      return this._zone.runOutsideAngular(function () {
        return _this22._map.then(function (map) {
          return map.panBy(x, y);
        });
      });
    }
  }, {
    key: "fitBounds",
    value: function fitBounds(latLng, padding) {
      var _this23 = this;

      return this._zone.runOutsideAngular(function () {
        return _this23._map.then(function (map) {
          return map.fitBounds(latLng, padding);
        });
      });
    }
  }, {
    key: "panToBounds",
    value: function panToBounds(latLng, padding) {
      var _this24 = this;

      return this._zone.runOutsideAngular(function () {
        return _this24._map.then(function (map) {
          return map.panToBounds(latLng, padding);
        });
      });
    }
    /**
     * Returns the native Google Maps Map instance. Be careful when using this instance directly.
     */

  }, {
    key: "getNativeMap",
    value: function getNativeMap() {
      return this._map;
    }
    /**
     * Triggers the given event name on the map instance.
     */

  }, {
    key: "triggerMapEvent",
    value: function triggerMapEvent(eventName) {
      return this._map.then(function (m) {
        return google.maps.event.trigger(m, eventName);
      });
    }
  }]);

  return GoogleMapsAPIWrapper;
}();

GoogleMapsAPIWrapper.ɵfac = function GoogleMapsAPIWrapper_Factory(t) {
  return new (t || GoogleMapsAPIWrapper)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](MapsAPILoader), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgZone));
};

GoogleMapsAPIWrapper.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({
  token: GoogleMapsAPIWrapper,
  factory: function factory(t) {
    return GoogleMapsAPIWrapper.ɵfac(t);
  }
});

GoogleMapsAPIWrapper.ctorParameters = function () {
  return [{
    type: MapsAPILoader
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.NgZone
  }];
};

GoogleMapsAPIWrapper = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:paramtypes", [MapsAPILoader, _angular_core__WEBPACK_IMPORTED_MODULE_7__.NgZone])], GoogleMapsAPIWrapper);
/**
 * This class manages Transit and Bicycling Layers for a Google Map instance.
 */

var LayerManager = /*#__PURE__*/function () {
  function LayerManager(_wrapper) {
    (0,D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__.default)(this, LayerManager);

    this._wrapper = _wrapper;
    this._layers = new Map();
  }
  /**
   * Adds a transit layer to a map instance.
   * @param {AgmTransitLayer} layer - a TransitLayer object
   * @param {TransitLayerOptions} options - TransitLayerOptions options
   * @returns void
   */


  (0,D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__.default)(LayerManager, [{
    key: "addTransitLayer",
    value: function addTransitLayer(layer, options) {
      var newLayer = this._wrapper.createTransitLayer(options);

      this._layers.set(layer, newLayer);
    }
    /**
     * Adds a bicycling layer to a map instance.
     * @param {AgmBicyclingLayer} layer - a bicycling layer object
     * @param {BicyclingLayerOptions} options - BicyclingLayer options
     * @returns void
     */

  }, {
    key: "addBicyclingLayer",
    value: function addBicyclingLayer(layer, options) {
      var newLayer = this._wrapper.createBicyclingLayer(options);

      this._layers.set(layer, newLayer);
    }
    /**
     * Deletes a map layer
     * @param {AgmTransitLayer|AgmBicyclingLayer} layer - the layer to delete
     * @returns  Promise<void>
     */

  }, {
    key: "deleteLayer",
    value: function deleteLayer(layer) {
      var _this25 = this;

      return this._layers.get(layer).then(function (currentLayer) {
        currentLayer.setMap(null);

        _this25._layers.delete(layer);
      });
    }
    /**
     * Hide/Show a google map layer
     * @param { AgmTransitLayer|AgmBicyclingLayer} layer - the layer to hide/show
     * @param {TransitLayerOptions|BicyclingLayerOptions} options - used to set visibility of the layer
     * @returns Promise<void>
     */

  }, {
    key: "toggleLayerVisibility",
    value: function toggleLayerVisibility(layer, options) {
      var _this26 = this;

      return this._layers.get(layer).then(function (currentLayer) {
        if (!options.visible) {
          currentLayer.setMap(null);
          return;
        } else {
          return _this26._wrapper.getNativeMap().then(function (map) {
            currentLayer.setMap(map);
          });
        }
      });
    }
  }]);

  return LayerManager;
}();

LayerManager.ɵfac = function LayerManager_Factory(t) {
  return new (t || LayerManager)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](GoogleMapsAPIWrapper));
};

LayerManager.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({
  token: LayerManager,
  factory: function factory(t) {
    return LayerManager.ɵfac(t);
  }
});

LayerManager.ctorParameters = function () {
  return [{
    type: GoogleMapsAPIWrapper
  }];
};

LayerManager = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:paramtypes", [GoogleMapsAPIWrapper])], LayerManager);
var layerId = 0;
/*
 * This directive adds a bicycling layer to a google map instance
 * <agm-bicycling-layer [visible]="true|false"> <agm-bicycling-layer>
 * */

var AgmBicyclingLayer = /*#__PURE__*/function () {
  function AgmBicyclingLayer(_manager) {
    (0,D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__.default)(this, AgmBicyclingLayer);

    this._manager = _manager;
    this._addedToManager = false;
    this._id = (layerId++).toString();
    /**
     * Hide/show bicycling layer
     */

    this.visible = true;
  }

  (0,D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__.default)(AgmBicyclingLayer, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      if (this._addedToManager) {
        return;
      }

      this._manager.addBicyclingLayer(this, {
        visible: this.visible
      });

      this._addedToManager = true;
    }
  }, {
    key: "ngOnChanges",
    value: function ngOnChanges(changes) {
      if (!this._addedToManager) {
        return;
      }

      if (changes['visible'] != null) {
        this._manager.toggleLayerVisibility(this, {
          visible: changes['visible'].currentValue
        });
      }
    }
    /** @internal */

  }, {
    key: "id",
    value: function id() {
      return this._id;
    }
    /** @internal */

  }, {
    key: "toString",
    value: function toString() {
      return "AgmBicyclingLayer-".concat(this._id.toString());
    }
    /** @internal */

  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this._manager.deleteLayer(this);
    }
  }]);

  return AgmBicyclingLayer;
}();

AgmBicyclingLayer.ɵfac = function AgmBicyclingLayer_Factory(t) {
  return new (t || AgmBicyclingLayer)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](LayerManager));
};

AgmBicyclingLayer.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineDirective"]({
  type: AgmBicyclingLayer,
  selectors: [["agm-bicycling-layer"]],
  inputs: {
    visible: "visible"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵNgOnChangesFeature"]]
});

AgmBicyclingLayer.ctorParameters = function () {
  return [{
    type: LayerManager
  }];
};

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Object)], AgmBicyclingLayer.prototype, "visible", void 0);

AgmBicyclingLayer = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:paramtypes", [LayerManager])], AgmBicyclingLayer);

var CircleManager = /*#__PURE__*/function () {
  function CircleManager(_apiWrapper, _zone) {
    (0,D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__.default)(this, CircleManager);

    this._apiWrapper = _apiWrapper;
    this._zone = _zone;
    this._circles = new Map();
  }

  (0,D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__.default)(CircleManager, [{
    key: "addCircle",
    value: function addCircle(circle) {
      this._circles.set(circle, this._apiWrapper.createCircle({
        center: {
          lat: circle.latitude,
          lng: circle.longitude
        },
        clickable: circle.clickable,
        draggable: circle.draggable,
        editable: circle.editable,
        fillColor: circle.fillColor,
        fillOpacity: circle.fillOpacity,
        radius: circle.radius,
        strokeColor: circle.strokeColor,
        strokeOpacity: circle.strokeOpacity,
        strokePosition: circle.strokePosition,
        strokeWeight: circle.strokeWeight,
        visible: circle.visible,
        zIndex: circle.zIndex
      }));
    }
    /**
     * Removes the given circle from the map.
     */

  }, {
    key: "removeCircle",
    value: function removeCircle(circle) {
      var _this27 = this;

      return this._circles.get(circle).then(function (c) {
        c.setMap(null);

        _this27._circles.delete(circle);
      });
    }
  }, {
    key: "setOptions",
    value: function setOptions(circle, options) {
      return this._circles.get(circle).then(function (c) {
        if (typeof options.strokePosition === 'string') {
          options.strokePosition = google.maps.StrokePosition[options.strokePosition];
        }

        c.setOptions(options);
      });
    }
  }, {
    key: "getBounds",
    value: function getBounds(circle) {
      return this._circles.get(circle).then(function (c) {
        return c.getBounds();
      });
    }
  }, {
    key: "getCenter",
    value: function getCenter(circle) {
      return this._circles.get(circle).then(function (c) {
        return c.getCenter();
      });
    }
  }, {
    key: "getRadius",
    value: function getRadius(circle) {
      return this._circles.get(circle).then(function (c) {
        return c.getRadius();
      });
    }
  }, {
    key: "setCenter",
    value: function setCenter(circle) {
      return this._circles.get(circle).then(function (c) {
        return c.setCenter({
          lat: circle.latitude,
          lng: circle.longitude
        });
      });
    }
  }, {
    key: "setEditable",
    value: function setEditable(circle) {
      return this._circles.get(circle).then(function (c) {
        return c.setEditable(circle.editable);
      });
    }
  }, {
    key: "setDraggable",
    value: function setDraggable(circle) {
      return this._circles.get(circle).then(function (c) {
        return c.setDraggable(circle.draggable);
      });
    }
  }, {
    key: "setVisible",
    value: function setVisible(circle) {
      return this._circles.get(circle).then(function (c) {
        return c.setVisible(circle.visible);
      });
    }
  }, {
    key: "setRadius",
    value: function setRadius(circle) {
      return this._circles.get(circle).then(function (c) {
        return c.setRadius(circle.radius);
      });
    }
  }, {
    key: "getNativeCircle",
    value: function getNativeCircle(circle) {
      return this._circles.get(circle);
    }
  }, {
    key: "createEventObservable",
    value: function createEventObservable(eventName, circle) {
      var _this28 = this;

      return new rxjs__WEBPACK_IMPORTED_MODULE_8__.Observable(function (observer) {
        var listener = null;

        _this28._circles.get(circle).then(function (c) {
          listener = c.addListener(eventName, function (e) {
            return _this28._zone.run(function () {
              return observer.next(e);
            });
          });
        });

        return function () {
          if (listener !== null) {
            listener.remove();
          }
        };
      });
    }
  }]);

  return CircleManager;
}();

CircleManager.ɵfac = function CircleManager_Factory(t) {
  return new (t || CircleManager)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](GoogleMapsAPIWrapper), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgZone));
};

CircleManager.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({
  token: CircleManager,
  factory: function factory(t) {
    return CircleManager.ɵfac(t);
  }
});

CircleManager.ctorParameters = function () {
  return [{
    type: GoogleMapsAPIWrapper
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.NgZone
  }];
};

CircleManager = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:paramtypes", [GoogleMapsAPIWrapper, _angular_core__WEBPACK_IMPORTED_MODULE_7__.NgZone])], CircleManager);
var AgmCircle_1;

var AgmCircle = AgmCircle_1 = /*#__PURE__*/function () {
  function AgmCircle(_manager) {
    (0,D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__.default)(this, AgmCircle);

    this._manager = _manager;
    /**
     * Indicates whether this Circle handles mouse events. Defaults to true.
     */

    this.clickable = true;
    /**
     * If set to true, the user can drag this circle over the map. Defaults to false.
     */
    // tslint:disable-next-line:no-input-rename

    this.draggable = false;
    /**
     * If set to true, the user can edit this circle by dragging the control points shown at
     * the center and around the circumference of the circle. Defaults to false.
     */

    this.editable = false;
    /**
     * The radius in meters on the Earth's surface.
     */

    this.radius = 0;
    /**
     * The stroke position. Defaults to CENTER.
     * This property is not supported on Internet Explorer 8 and earlier.
     */

    this.strokePosition = 'CENTER';
    /**
     * The stroke width in pixels.
     */

    this.strokeWeight = 0;
    /**
     * Whether this circle is visible on the map. Defaults to true.
     */

    this.visible = true;
    /**
     * This event is fired when the circle's center is changed.
     */

    this.centerChange = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
    /**
     * This event emitter gets emitted when the user clicks on the circle.
     */

    this.circleClick = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
    /**
     * This event emitter gets emitted when the user clicks on the circle.
     */

    this.circleDblClick = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
    /**
     * This event is repeatedly fired while the user drags the circle.
     */

    this.drag = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
    /**
     * This event is fired when the user stops dragging the circle.
     */

    this.dragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
    /**
     * This event is fired when the user starts dragging the circle.
     */

    this.dragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
    /**
     * This event is fired when the DOM mousedown event is fired on the circle.
     */

    this.mouseDown = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
    /**
     * This event is fired when the DOM mousemove event is fired on the circle.
     */

    this.mouseMove = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
    /**
     * This event is fired on circle mouseout.
     */

    this.mouseOut = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
    /**
     * This event is fired on circle mouseover.
     */

    this.mouseOver = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
    /**
     * This event is fired when the DOM mouseup event is fired on the circle.
     */

    this.mouseUp = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
    /**
     * This event is fired when the circle's radius is changed.
     */

    this.radiusChange = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
    /**
     * This event is fired when the circle is right-clicked on.
     */

    this.rightClick = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
    this._circleAddedToManager = false;
    this._eventSubscriptions = [];
  }
  /** @internal */


  (0,D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__.default)(AgmCircle, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      this._manager.addCircle(this);

      this._circleAddedToManager = true;

      this._registerEventListeners();
    }
    /** @internal */

  }, {
    key: "ngOnChanges",
    value: function ngOnChanges(changes) {
      if (!this._circleAddedToManager) {
        return;
      }

      if (changes['latitude'] || changes['longitude']) {
        this._manager.setCenter(this);
      }

      if (changes['editable']) {
        this._manager.setEditable(this);
      }

      if (changes['draggable']) {
        this._manager.setDraggable(this);
      }

      if (changes['visible']) {
        this._manager.setVisible(this);
      }

      if (changes['radius']) {
        this._manager.setRadius(this);
      }

      this._updateCircleOptionsChanges(changes);
    }
  }, {
    key: "_updateCircleOptionsChanges",
    value: function _updateCircleOptionsChanges(changes) {
      var options = {};
      var optionKeys = Object.keys(changes).filter(function (k) {
        return AgmCircle_1._mapOptions.indexOf(k) !== -1;
      });
      optionKeys.forEach(function (k) {
        options[k] = changes[k].currentValue;
      });

      if (optionKeys.length > 0) {
        this._manager.setOptions(this, options);
      }
    }
  }, {
    key: "_registerEventListeners",
    value: function _registerEventListeners() {
      var _this29 = this;

      var events = new Map();
      events.set('center_changed', this.centerChange);
      events.set('click', this.circleClick);
      events.set('dblclick', this.circleDblClick);
      events.set('drag', this.drag);
      events.set('dragend', this.dragEnd);
      events.set('dragstart', this.dragStart);
      events.set('mousedown', this.mouseDown);
      events.set('mousemove', this.mouseMove);
      events.set('mouseout', this.mouseOut);
      events.set('mouseover', this.mouseOver);
      events.set('mouseup', this.mouseUp);
      events.set('radius_changed', this.radiusChange);
      events.set('rightclick', this.rightClick);
      events.forEach(function (eventEmitter, eventName) {
        _this29._eventSubscriptions.push(_this29._manager.createEventObservable(eventName, _this29).subscribe(function (value) {
          switch (eventName) {
            case 'radius_changed':
              _this29._manager.getRadius(_this29).then(function (radius) {
                return eventEmitter.emit(radius);
              });

              break;

            case 'center_changed':
              _this29._manager.getCenter(_this29).then(function (center) {
                return eventEmitter.emit({
                  lat: center.lat(),
                  lng: center.lng()
                });
              });

              break;

            default:
              eventEmitter.emit({
                coords: {
                  lat: value.latLng.lat(),
                  lng: value.latLng.lng()
                }
              });
          }
        }));
      });
    }
    /** @internal */

  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this._eventSubscriptions.forEach(function (s) {
        s.unsubscribe();
      });

      this._eventSubscriptions = null;

      this._manager.removeCircle(this);
    }
    /**
     * Gets the LatLngBounds of this Circle.
     */

  }, {
    key: "getBounds",
    value: function getBounds() {
      return this._manager.getBounds(this);
    }
  }, {
    key: "getCenter",
    value: function getCenter() {
      return this._manager.getCenter(this);
    }
  }]);

  return AgmCircle;
}();

AgmCircle.ɵfac = function AgmCircle_Factory(t) {
  return new (t || AgmCircle)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](CircleManager));
};

AgmCircle.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineDirective"]({
  type: AgmCircle,
  selectors: [["agm-circle"]],
  inputs: {
    clickable: "clickable",
    draggable: ["circleDraggable", "draggable"],
    editable: "editable",
    radius: "radius",
    strokePosition: "strokePosition",
    strokeWeight: "strokeWeight",
    visible: "visible",
    latitude: "latitude",
    longitude: "longitude",
    fillColor: "fillColor",
    fillOpacity: "fillOpacity",
    strokeColor: "strokeColor",
    strokeOpacity: "strokeOpacity",
    zIndex: "zIndex"
  },
  outputs: {
    centerChange: "centerChange",
    circleClick: "circleClick",
    circleDblClick: "circleDblClick",
    drag: "drag",
    dragEnd: "dragEnd",
    dragStart: "dragStart",
    mouseDown: "mouseDown",
    mouseMove: "mouseMove",
    mouseOut: "mouseOut",
    mouseOver: "mouseOver",
    mouseUp: "mouseUp",
    radiusChange: "radiusChange",
    rightClick: "rightClick"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵNgOnChangesFeature"]]
});
AgmCircle._mapOptions = ['fillColor', 'fillOpacity', 'strokeColor', 'strokeOpacity', 'strokePosition', 'strokeWeight', 'visible', 'zIndex', 'clickable'];

AgmCircle.ctorParameters = function () {
  return [{
    type: CircleManager
  }];
};

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Number)], AgmCircle.prototype, "latitude", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Number)], AgmCircle.prototype, "longitude", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Object)], AgmCircle.prototype, "clickable", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)('circleDraggable'), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Object)], AgmCircle.prototype, "draggable", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Object)], AgmCircle.prototype, "editable", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", String)], AgmCircle.prototype, "fillColor", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Number)], AgmCircle.prototype, "fillOpacity", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Object)], AgmCircle.prototype, "radius", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", String)], AgmCircle.prototype, "strokeColor", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Number)], AgmCircle.prototype, "strokeOpacity", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", String)], AgmCircle.prototype, "strokePosition", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Object)], AgmCircle.prototype, "strokeWeight", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Object)], AgmCircle.prototype, "visible", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Number)], AgmCircle.prototype, "zIndex", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Output)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter)], AgmCircle.prototype, "centerChange", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Output)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter)], AgmCircle.prototype, "circleClick", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Output)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter)], AgmCircle.prototype, "circleDblClick", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Output)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter)], AgmCircle.prototype, "drag", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Output)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter)], AgmCircle.prototype, "dragEnd", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Output)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter)], AgmCircle.prototype, "dragStart", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Output)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter)], AgmCircle.prototype, "mouseDown", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Output)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter)], AgmCircle.prototype, "mouseMove", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Output)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter)], AgmCircle.prototype, "mouseOut", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Output)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter)], AgmCircle.prototype, "mouseOver", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Output)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter)], AgmCircle.prototype, "mouseUp", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Output)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter)], AgmCircle.prototype, "radiusChange", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Output)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter)], AgmCircle.prototype, "rightClick", void 0);

AgmCircle = AgmCircle_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:paramtypes", [CircleManager])], AgmCircle);
/**
 * Manages all Data Layers for a Google Map instance.
 */

var DataLayerManager = /*#__PURE__*/function () {
  function DataLayerManager(_wrapper, _zone) {
    (0,D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__.default)(this, DataLayerManager);

    this._wrapper = _wrapper;
    this._zone = _zone;
    this._layers = new Map();
  }
  /**
   * Adds a new Data Layer to the map.
   */


  (0,D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__.default)(DataLayerManager, [{
    key: "addDataLayer",
    value: function addDataLayer(layer) {
      var _this30 = this;

      var newLayer = this._wrapper.createDataLayer({
        style: layer.style
      }).then(function (d) {
        if (layer.geoJson) {
          _this30.getDataFeatures(d, layer.geoJson).then(function (features) {
            return d.features = features;
          });
        }

        return d;
      });

      this._layers.set(layer, newLayer);
    }
  }, {
    key: "deleteDataLayer",
    value: function deleteDataLayer(layer) {
      var _this31 = this;

      this._layers.get(layer).then(function (l) {
        l.setMap(null);

        _this31._layers.delete(layer);
      });
    }
  }, {
    key: "updateGeoJson",
    value: function updateGeoJson(layer, geoJson) {
      var _this32 = this;

      this._layers.get(layer).then(function (l) {
        l.forEach(function (feature) {
          l.remove(feature);
          var index = l.features.indexOf(feature, 0);

          if (index > -1) {
            l.features.splice(index, 1);
          }
        });

        _this32.getDataFeatures(l, geoJson).then(function (features) {
          return l.features = features;
        });
      });
    }
  }, {
    key: "setDataOptions",
    value: function setDataOptions(layer, options) {
      this._layers.get(layer).then(function (l) {
        l.setControlPosition(options.controlPosition);
        l.setControls(options.controls);
        l.setDrawingMode(options.drawingMode);
        l.setStyle(options.style);
      });
    }
    /**
     * Creates a Google Maps event listener for the given DataLayer as an Observable
     */

  }, {
    key: "createEventObservable",
    value: function createEventObservable(eventName, layer) {
      var _this33 = this;

      return new rxjs__WEBPACK_IMPORTED_MODULE_8__.Observable(function (observer) {
        _this33._layers.get(layer).then(function (d) {
          d.addListener(eventName, function (e) {
            return _this33._zone.run(function () {
              return observer.next(e);
            });
          });
        });
      });
    }
    /**
     * Extract features from a geoJson using google.maps Data Class
     * @param d : google.maps.Data class instance
     * @param geoJson : url or geojson object
     */

  }, {
    key: "getDataFeatures",
    value: function getDataFeatures(d, geoJson) {
      return new Promise(function (resolve, reject) {
        if (typeof geoJson === 'object') {
          try {
            var features = d.addGeoJson(geoJson);
            resolve(features);
          } catch (e) {
            reject(e);
          }
        } else if (typeof geoJson === 'string') {
          d.loadGeoJson(geoJson, null, resolve);
        } else {
          reject("Impossible to extract features from geoJson: wrong argument type");
        }
      });
    }
  }]);

  return DataLayerManager;
}();

DataLayerManager.ɵfac = function DataLayerManager_Factory(t) {
  return new (t || DataLayerManager)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](GoogleMapsAPIWrapper), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgZone));
};

DataLayerManager.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({
  token: DataLayerManager,
  factory: function factory(t) {
    return DataLayerManager.ɵfac(t);
  }
});

DataLayerManager.ctorParameters = function () {
  return [{
    type: GoogleMapsAPIWrapper
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.NgZone
  }];
};

DataLayerManager = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:paramtypes", [GoogleMapsAPIWrapper, _angular_core__WEBPACK_IMPORTED_MODULE_7__.NgZone])], DataLayerManager);
var AgmDataLayer_1;
var layerId$1 = 0;
/**
 * AgmDataLayer enables the user to add data layers to the map.
 *
 * ### Example
 * ```typescript
 * import { Component } from 'angular2/core';
 * import { AgmMap, AgmDataLayer } from
 * 'angular-google-maps/core';
 *
 * @Component({
 *  selector: 'my-map-cmp',
 *  directives: [AgmMap, AgmDataLayer],
 *  styles: [`
 *    .agm-container {
 *      height: 300px;
 *    }
 * `],
 *  template: `
 * <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
 * 	  <agm-data-layer [geoJson]="geoJsonObject" (layerClick)="clicked($event)" [style]="styleFunc">
 * 	  </agm-data-layer>
 * </agm-map>
 *  `
 * })
 * export class MyMapCmp {
 *   lat: number = -25.274449;
 *   lng: number = 133.775060;
 *   zoom: number = 5;
 *
 * clicked(clickEvent) {
 *    console.log(clickEvent);
 *  }
 *
 *  styleFunc(feature) {
 *    return ({
 *      clickable: false,
 *      fillColor: feature.getProperty('color'),
 *      strokeWeight: 1
 *    });
 *  }
 *
 *  geoJsonObject: Object = {
 *    "type": "FeatureCollection",
 *    "features": [
 *      {
 *        "type": "Feature",
 *        "properties": {
 *          "letter": "G",
 *          "color": "blue",
 *          "rank": "7",
 *          "ascii": "71"
 *        },
 *        "geometry": {
 *          "type": "Polygon",
 *          "coordinates": [
 *            [
 *              [123.61, -22.14], [122.38, -21.73], [121.06, -21.69], [119.66, -22.22], [119.00, -23.40],
 *              [118.65, -24.76], [118.43, -26.07], [118.78, -27.56], [119.22, -28.57], [120.23, -29.49],
 *              [121.77, -29.87], [123.57, -29.64], [124.45, -29.03], [124.71, -27.95], [124.80, -26.70],
 *              [124.80, -25.60], [123.61, -25.64], [122.56, -25.64], [121.72, -25.72], [121.81, -26.62],
 *              [121.86, -26.98], [122.60, -26.90], [123.57, -27.05], [123.57, -27.68], [123.35, -28.18],
 *              [122.51, -28.38], [121.77, -28.26], [121.02, -27.91], [120.49, -27.21], [120.14, -26.50],
 *              [120.10, -25.64], [120.27, -24.52], [120.67, -23.68], [121.72, -23.32], [122.43, -23.48],
 *              [123.04, -24.04], [124.54, -24.28], [124.58, -23.20], [123.61, -22.14]
 *            ]
 *          ]
 *        }
 *      },
 *      {
 *        "type": "Feature",
 *        "properties": {
 *          "letter": "o",
 *          "color": "red",
 *          "rank": "15",
 *          "ascii": "111"
 *        },
 *        "geometry": {
 *          "type": "Polygon",
 *          "coordinates": [
 *            [
 *              [128.84, -25.76], [128.18, -25.60], [127.96, -25.52], [127.88, -25.52], [127.70, -25.60],
 *              [127.26, -25.79], [126.60, -26.11], [126.16, -26.78], [126.12, -27.68], [126.21, -28.42],
 *              [126.69, -29.49], [127.74, -29.80], [128.80, -29.72], [129.41, -29.03], [129.72, -27.95],
 *              [129.68, -27.21], [129.33, -26.23], [128.84, -25.76]
 *            ],
 *            [
 *              [128.45, -27.44], [128.32, -26.94], [127.70, -26.82], [127.35, -27.05], [127.17, -27.80],
 *              [127.57, -28.22], [128.10, -28.42], [128.49, -27.80], [128.45, -27.44]
 *            ]
 *          ]
 *        }
 *      },
 *      {
 *        "type": "Feature",
 *        "properties": {
 *          "letter": "o",
 *          "color": "yellow",
 *          "rank": "15",
 *          "ascii": "111"
 *        },
 *        "geometry": {
 *          "type": "Polygon",
 *          "coordinates": [
 *            [
 *              [131.87, -25.76], [131.35, -26.07], [130.95, -26.78], [130.82, -27.64], [130.86, -28.53],
 *              [131.26, -29.22], [131.92, -29.76], [132.45, -29.87], [133.06, -29.76], [133.72, -29.34],
 *              [134.07, -28.80], [134.20, -27.91], [134.07, -27.21], [133.81, -26.31], [133.37, -25.83],
 *              [132.71, -25.64], [131.87, -25.76]
 *            ],
 *            [
 *              [133.15, -27.17], [132.71, -26.86], [132.09, -26.90], [131.74, -27.56], [131.79, -28.26],
 *              [132.36, -28.45], [132.93, -28.34], [133.15, -27.76], [133.15, -27.17]
 *            ]
 *          ]
 *        }
 *      },
 *      {
 *        "type": "Feature",
 *        "properties": {
 *          "letter": "g",
 *          "color": "blue",
 *          "rank": "7",
 *          "ascii": "103"
 *        },
 *        "geometry": {
 *          "type": "Polygon",
 *          "coordinates": [
 *            [
 *              [138.12, -25.04], [136.84, -25.16], [135.96, -25.36], [135.26, -25.99], [135, -26.90],
 *              [135.04, -27.91], [135.26, -28.88], [136.05, -29.45], [137.02, -29.49], [137.81, -29.49],
 *              [137.94, -29.99], [137.90, -31.20], [137.85, -32.24], [136.88, -32.69], [136.45, -32.36],
 *              [136.27, -31.80], [134.95, -31.84], [135.17, -32.99], [135.52, -33.43], [136.14, -33.76],
 *              [137.06, -33.83], [138.12, -33.65], [138.86, -33.21], [139.30, -32.28], [139.30, -31.24],
 *              [139.30, -30.14], [139.21, -28.96], [139.17, -28.22], [139.08, -27.41], [139.08, -26.47],
 *              [138.99, -25.40], [138.73, -25.00], [138.12, -25.04]
 *            ],
 *            [
 *              [137.50, -26.54], [136.97, -26.47], [136.49, -26.58], [136.31, -27.13], [136.31, -27.72],
 *              [136.58, -27.99], [137.50, -28.03], [137.68, -27.68], [137.59, -26.78], [137.50, -26.54]
 *            ]
 *          ]
 *        }
 *      },
 *      {
 *        "type": "Feature",
 *        "properties": {
 *          "letter": "l",
 *          "color": "green",
 *          "rank": "12",
 *          "ascii": "108"
 *        },
 *        "geometry": {
 *          "type": "Polygon",
 *          "coordinates": [
 *            [
 *              [140.14, -21.04], [140.31, -29.42], [141.67, -29.49], [141.59, -20.92], [140.14, -21.04]
 *            ]
 *          ]
 *        }
 *      },
 *      {
 *        "type": "Feature",
 *        "properties": {
 *          "letter": "e",
 *          "color": "red",
 *          "rank": "5",
 *          "ascii": "101"
 *        },
 *        "geometry": {
 *          "type": "Polygon",
 *          "coordinates": [
 *            [
 *              [144.14, -27.41], [145.67, -27.52], [146.86, -27.09], [146.82, -25.64], [146.25, -25.04],
 *              [145.45, -24.68], [144.66, -24.60], [144.09, -24.76], [143.43, -25.08], [142.99, -25.40],
 *              [142.64, -26.03], [142.64, -27.05], [142.64, -28.26], [143.30, -29.11], [144.18, -29.57],
 *              [145.41, -29.64], [146.46, -29.19], [146.64, -28.72], [146.82, -28.14], [144.84, -28.42],
 *              [144.31, -28.26], [144.14, -27.41]
 *            ],
 *            [
 *              [144.18, -26.39], [144.53, -26.58], [145.19, -26.62], [145.72, -26.35], [145.81, -25.91],
 *              [145.41, -25.68], [144.97, -25.68], [144.49, -25.64], [144, -25.99], [144.18, -26.39]
 *            ]
 *          ]
 *        }
 *      }
 *    ]
 *  };
 * }
 * ```
 */

var AgmDataLayer = AgmDataLayer_1 = /*#__PURE__*/function () {
  function AgmDataLayer(_manager) {
    (0,D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__.default)(this, AgmDataLayer);

    this._manager = _manager;
    this._addedToManager = false;
    this._id = (layerId$1++).toString();
    this._subscriptions = [];
    /**
     * This event is fired when a feature in the layer is clicked.
     */

    this.layerClick = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
    /**
     * The geoJson to be displayed
     */

    this.geoJson = null;
  }

  (0,D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__.default)(AgmDataLayer, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      if (this._addedToManager) {
        return;
      }

      this._manager.addDataLayer(this);

      this._addedToManager = true;

      this._addEventListeners();
    }
  }, {
    key: "_addEventListeners",
    value: function _addEventListeners() {
      var _this34 = this;

      var listeners = [{
        name: 'click',
        handler: function handler(ev) {
          return _this34.layerClick.emit(ev);
        }
      }];
      listeners.forEach(function (obj) {
        var os = _this34._manager.createEventObservable(obj.name, _this34).subscribe(obj.handler);

        _this34._subscriptions.push(os);
      });
    }
    /** @internal */

  }, {
    key: "id",
    value: function id() {
      return this._id;
    }
    /** @internal */

  }, {
    key: "toString",
    value: function toString() {
      return "AgmDataLayer-".concat(this._id.toString());
    }
    /** @internal */

  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this._manager.deleteDataLayer(this); // unsubscribe all registered observable subscriptions


      this._subscriptions.forEach(function (s) {
        return s.unsubscribe();
      });
    }
    /** @internal */

  }, {
    key: "ngOnChanges",
    value: function ngOnChanges(changes) {
      var _this35 = this;

      if (!this._addedToManager) {
        return;
      }

      var geoJsonChange = changes['geoJson'];

      if (geoJsonChange) {
        this._manager.updateGeoJson(this, geoJsonChange.currentValue);
      }

      var dataOptions = {};

      AgmDataLayer_1._dataOptionsAttributes.forEach(function (k) {
        return dataOptions[k] = changes.hasOwnProperty(k) ? changes[k].currentValue : _this35[k];
      });

      this._manager.setDataOptions(this, dataOptions);
    }
  }]);

  return AgmDataLayer;
}();

AgmDataLayer.ɵfac = function AgmDataLayer_Factory(t) {
  return new (t || AgmDataLayer)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](DataLayerManager));
};

AgmDataLayer.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineDirective"]({
  type: AgmDataLayer,
  selectors: [["agm-data-layer"]],
  inputs: {
    geoJson: "geoJson",
    style: "style"
  },
  outputs: {
    layerClick: "layerClick"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵNgOnChangesFeature"]]
});
AgmDataLayer._dataOptionsAttributes = ['style'];

AgmDataLayer.ctorParameters = function () {
  return [{
    type: DataLayerManager
  }];
};

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Output)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter)], AgmDataLayer.prototype, "layerClick", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Object)], AgmDataLayer.prototype, "geoJson", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Function)], AgmDataLayer.prototype, "style", void 0);

AgmDataLayer = AgmDataLayer_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:paramtypes", [DataLayerManager])], AgmDataLayer);
/**
 * Class to implement when you what to be able to make it work with the auto fit bounds feature
 * of AGM.
 */

var FitBoundsAccessor = function FitBoundsAccessor() {
  (0,D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__.default)(this, FitBoundsAccessor);
};
/**
 * The FitBoundsService is responsible for computing the bounds of the a single map.
 */


var FitBoundsService = /*#__PURE__*/function () {
  function FitBoundsService(loader) {
    var _this36 = this;

    (0,D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__.default)(this, FitBoundsService);

    this._boundsChangeSampleTime$ = new rxjs__WEBPACK_IMPORTED_MODULE_10__.BehaviorSubject(200);
    this._includeInBounds$ = new rxjs__WEBPACK_IMPORTED_MODULE_10__.BehaviorSubject(new Map());
    this.bounds$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.from)(loader.load()).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.flatMap)(function () {
      return _this36._includeInBounds$;
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.sample)(this._boundsChangeSampleTime$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.switchMap)(function (time) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_15__.timer)(0, time);
    }))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.map)(function (includeInBounds) {
      return _this36._generateBounds(includeInBounds);
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.shareReplay)(1));
  }

  (0,D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__.default)(FitBoundsService, [{
    key: "_generateBounds",
    value: function _generateBounds(includeInBounds) {
      var bounds = new google.maps.LatLngBounds();
      includeInBounds.forEach(function (b) {
        return bounds.extend(b);
      });
      return bounds;
    }
  }, {
    key: "addToBounds",
    value: function addToBounds(latLng) {
      var id = this._createIdentifier(latLng);

      if (this._includeInBounds$.value.has(id)) {
        return;
      }

      var map = this._includeInBounds$.value;
      map.set(id, latLng);

      this._includeInBounds$.next(map);
    }
  }, {
    key: "removeFromBounds",
    value: function removeFromBounds(latLng) {
      var map = this._includeInBounds$.value;
      map.delete(this._createIdentifier(latLng));

      this._includeInBounds$.next(map);
    }
  }, {
    key: "changeFitBoundsChangeSampleTime",
    value: function changeFitBoundsChangeSampleTime(timeMs) {
      this._boundsChangeSampleTime$.next(timeMs);
    }
  }, {
    key: "getBounds$",
    value: function getBounds$() {
      return this.bounds$;
    }
  }, {
    key: "_createIdentifier",
    value: function _createIdentifier(latLng) {
      return "".concat(latLng.lat, "+").concat(latLng.lng);
    }
  }]);

  return FitBoundsService;
}();

FitBoundsService.ɵfac = function FitBoundsService_Factory(t) {
  return new (t || FitBoundsService)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](MapsAPILoader));
};

FitBoundsService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({
  token: FitBoundsService,
  factory: function factory(t) {
    return FitBoundsService.ɵfac(t);
  }
});

FitBoundsService.ctorParameters = function () {
  return [{
    type: MapsAPILoader
  }];
};

FitBoundsService = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:paramtypes", [MapsAPILoader])], FitBoundsService);
/**
 * Adds the given directive to the auto fit bounds feature when the value is true.
 * To make it work with you custom AGM component, you also have to implement the {@link FitBoundsAccessor} abstract class.
 * @example
 * <agm-marker [agmFitBounds]="true"></agm-marker>
 */

var AgmFitBounds = /*#__PURE__*/function () {
  function AgmFitBounds(_fitBoundsAccessor, _fitBoundsService) {
    (0,D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__.default)(this, AgmFitBounds);

    this._fitBoundsAccessor = _fitBoundsAccessor;
    this._fitBoundsService = _fitBoundsService;
    /**
     * If the value is true, the element gets added to the bounds of the map.
     * Default: true.
     */

    this.agmFitBounds = true;
    this._destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_18__.Subject();
    this._latestFitBoundsDetails = null;
  }
  /**
   * @internal
   */


  (0,D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__.default)(AgmFitBounds, [{
    key: "ngOnChanges",
    value: function ngOnChanges() {
      this._updateBounds();
    }
    /**
     * @internal
     */

  }, {
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this37 = this;

      this._fitBoundsAccessor.getFitBoundsDetails$().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.distinctUntilChanged)(function (x, y) {
        return x.latLng.lat === y.latLng.lat && x.latLng.lng === y.latLng.lng;
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.takeUntil)(this._destroyed$)).subscribe(function (details) {
        return _this37._updateBounds(details);
      });
    }
    /*
     Either the location changed, or visible status changed.
     Possible state changes are
     invisible -> visible
     visible -> invisible
     visible -> visible (new location)
    */

  }, {
    key: "_updateBounds",
    value: function _updateBounds(newFitBoundsDetails) {
      // either visibility will change, or location, so remove the old one anyway
      if (this._latestFitBoundsDetails) {
        this._fitBoundsService.removeFromBounds(this._latestFitBoundsDetails.latLng); // don't set latestFitBoundsDetails to null, because we can toggle visibility from
        // true -> false -> true, in which case we still need old value cached here

      }

      if (newFitBoundsDetails) {
        this._latestFitBoundsDetails = newFitBoundsDetails;
      }

      if (!this._latestFitBoundsDetails) {
        return;
      }

      if (this.agmFitBounds === true) {
        this._fitBoundsService.addToBounds(this._latestFitBoundsDetails.latLng);
      }
    }
    /**
     * @internal
     */

  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this._destroyed$.next();

      this._destroyed$.complete();

      if (this._latestFitBoundsDetails !== null) {
        this._fitBoundsService.removeFromBounds(this._latestFitBoundsDetails.latLng);
      }
    }
  }]);

  return AgmFitBounds;
}();

AgmFitBounds.ɵfac = function AgmFitBounds_Factory(t) {
  return new (t || AgmFitBounds)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](FitBoundsAccessor, 2), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](FitBoundsService));
};

AgmFitBounds.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineDirective"]({
  type: AgmFitBounds,
  selectors: [["", "agmFitBounds", ""]],
  inputs: {
    agmFitBounds: "agmFitBounds"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵNgOnChangesFeature"]]
});

AgmFitBounds.ctorParameters = function () {
  return [{
    type: FitBoundsAccessor,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Self
    }]
  }, {
    type: FitBoundsService
  }];
};

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Object)], AgmFitBounds.prototype, "agmFitBounds", void 0);

AgmFitBounds = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__param)(0, (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Self)()), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:paramtypes", [FitBoundsAccessor, FitBoundsService])], AgmFitBounds);

var MarkerManager = /*#__PURE__*/function () {
  function MarkerManager(_mapsWrapper, _zone) {
    (0,D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__.default)(this, MarkerManager);

    this._mapsWrapper = _mapsWrapper;
    this._zone = _zone;
    this._markers = new Map();
  }

  (0,D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__.default)(MarkerManager, [{
    key: "convertAnimation",
    value: function convertAnimation(uiAnim) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default().mark(function _callee() {
        return D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(uiAnim === null)) {
                  _context.next = 4;
                  break;
                }

                return _context.abrupt("return", null);

              case 4:
                return _context.abrupt("return", this._mapsWrapper.getNativeMap().then(function () {
                  return google.maps.Animation[uiAnim];
                }));

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
    }
  }, {
    key: "deleteMarker",
    value: function deleteMarker(marker) {
      var _this38 = this;

      var m = this._markers.get(marker);

      if (m == null) {
        // marker already deleted
        return Promise.resolve();
      }

      return m.then(function (m) {
        return _this38._zone.run(function () {
          m.setMap(null);

          _this38._markers.delete(marker);
        });
      });
    }
  }, {
    key: "updateMarkerPosition",
    value: function updateMarkerPosition(marker) {
      return this._markers.get(marker).then(function (m) {
        return m.setPosition({
          lat: marker.latitude,
          lng: marker.longitude
        });
      });
    }
  }, {
    key: "updateTitle",
    value: function updateTitle(marker) {
      return this._markers.get(marker).then(function (m) {
        return m.setTitle(marker.title);
      });
    }
  }, {
    key: "updateLabel",
    value: function updateLabel(marker) {
      return this._markers.get(marker).then(function (m) {
        m.setLabel(marker.label);
      });
    }
  }, {
    key: "updateDraggable",
    value: function updateDraggable(marker) {
      return this._markers.get(marker).then(function (m) {
        return m.setDraggable(marker.draggable);
      });
    }
  }, {
    key: "updateIcon",
    value: function updateIcon(marker) {
      return this._markers.get(marker).then(function (m) {
        return m.setIcon(marker.iconUrl);
      });
    }
  }, {
    key: "updateOpacity",
    value: function updateOpacity(marker) {
      return this._markers.get(marker).then(function (m) {
        return m.setOpacity(marker.opacity);
      });
    }
  }, {
    key: "updateVisible",
    value: function updateVisible(marker) {
      return this._markers.get(marker).then(function (m) {
        return m.setVisible(marker.visible);
      });
    }
  }, {
    key: "updateZIndex",
    value: function updateZIndex(marker) {
      return this._markers.get(marker).then(function (m) {
        return m.setZIndex(marker.zIndex);
      });
    }
  }, {
    key: "updateClickable",
    value: function updateClickable(marker) {
      return this._markers.get(marker).then(function (m) {
        return m.setClickable(marker.clickable);
      });
    }
  }, {
    key: "updateAnimation",
    value: function updateAnimation(marker) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default().mark(function _callee2() {
        var m;
        return D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this._markers.get(marker);

              case 2:
                m = _context2.sent;
                _context2.t0 = m;
                _context2.next = 6;
                return this.convertAnimation(marker.animation);

              case 6:
                _context2.t1 = _context2.sent;

                _context2.t0.setAnimation.call(_context2.t0, _context2.t1);

              case 8:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));
    }
  }, {
    key: "addMarker",
    value: function addMarker(marker) {
      var _this39 = this;

      var markerPromise = new Promise(function (resolve) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(_this39, void 0, void 0, /*#__PURE__*/D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default().mark(function _callee3() {
          return D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default().wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.t0 = this._mapsWrapper;
                  _context3.t1 = {
                    lat: marker.latitude,
                    lng: marker.longitude
                  };
                  _context3.t2 = marker.label;
                  _context3.t3 = marker.draggable;
                  _context3.t4 = marker.iconUrl;
                  _context3.t5 = marker.opacity;
                  _context3.t6 = marker.visible;
                  _context3.t7 = marker.zIndex;
                  _context3.t8 = marker.title;
                  _context3.t9 = marker.clickable;
                  _context3.next = 12;
                  return this.convertAnimation(marker.animation);

                case 12:
                  _context3.t10 = _context3.sent;
                  _context3.t11 = {
                    position: _context3.t1,
                    label: _context3.t2,
                    draggable: _context3.t3,
                    icon: _context3.t4,
                    opacity: _context3.t5,
                    visible: _context3.t6,
                    zIndex: _context3.t7,
                    title: _context3.t8,
                    clickable: _context3.t9,
                    animation: _context3.t10
                  };
                  return _context3.abrupt("return", _context3.t0.createMarker.call(_context3.t0, _context3.t11).then(resolve));

                case 15:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3, this);
        }));
      });

      this._markers.set(marker, markerPromise);
    }
  }, {
    key: "getNativeMarker",
    value: function getNativeMarker(marker) {
      return this._markers.get(marker);
    }
  }, {
    key: "createEventObservable",
    value: function createEventObservable(eventName, marker) {
      var _this40 = this;

      return new rxjs__WEBPACK_IMPORTED_MODULE_8__.Observable(function (observer) {
        _this40._markers.get(marker).then(function (m) {
          m.addListener(eventName, function (e) {
            return _this40._zone.run(function () {
              return observer.next(e);
            });
          });
        });
      });
    }
  }]);

  return MarkerManager;
}();

MarkerManager.ɵfac = function MarkerManager_Factory(t) {
  return new (t || MarkerManager)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](GoogleMapsAPIWrapper), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgZone));
};

MarkerManager.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({
  token: MarkerManager,
  factory: function factory(t) {
    return MarkerManager.ɵfac(t);
  }
});

MarkerManager.ctorParameters = function () {
  return [{
    type: GoogleMapsAPIWrapper
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.NgZone
  }];
};

MarkerManager = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:paramtypes", [GoogleMapsAPIWrapper, _angular_core__WEBPACK_IMPORTED_MODULE_7__.NgZone])], MarkerManager);

var InfoWindowManager = /*#__PURE__*/function () {
  function InfoWindowManager(_mapsWrapper, _zone, _markerManager) {
    (0,D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__.default)(this, InfoWindowManager);

    this._mapsWrapper = _mapsWrapper;
    this._zone = _zone;
    this._markerManager = _markerManager;
    this._infoWindows = new Map();
  }

  (0,D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__.default)(InfoWindowManager, [{
    key: "deleteInfoWindow",
    value: function deleteInfoWindow(infoWindow) {
      var _this41 = this;

      var iWindow = this._infoWindows.get(infoWindow);

      if (iWindow == null) {
        // info window already deleted
        return Promise.resolve();
      }

      return iWindow.then(function (i) {
        return _this41._zone.run(function () {
          i.close();

          _this41._infoWindows.delete(infoWindow);
        });
      });
    }
  }, {
    key: "setPosition",
    value: function setPosition(infoWindow) {
      return this._infoWindows.get(infoWindow).then(function (i) {
        return i.setPosition({
          lat: infoWindow.latitude,
          lng: infoWindow.longitude
        });
      });
    }
  }, {
    key: "setZIndex",
    value: function setZIndex(infoWindow) {
      return this._infoWindows.get(infoWindow).then(function (i) {
        return i.setZIndex(infoWindow.zIndex);
      });
    }
  }, {
    key: "open",
    value: function open(infoWindow) {
      var _this42 = this;

      return this._infoWindows.get(infoWindow).then(function (w) {
        if (infoWindow.hostMarker != null) {
          return _this42._markerManager.getNativeMarker(infoWindow.hostMarker).then(function (marker) {
            return _this42._mapsWrapper.getNativeMap().then(function (map) {
              return w.open(map, marker);
            });
          });
        }

        return _this42._mapsWrapper.getNativeMap().then(function (map) {
          return w.open(map);
        });
      });
    }
  }, {
    key: "close",
    value: function close(infoWindow) {
      return this._infoWindows.get(infoWindow).then(function (w) {
        return w.close();
      });
    }
  }, {
    key: "setOptions",
    value: function setOptions(infoWindow, options) {
      return this._infoWindows.get(infoWindow).then(function (i) {
        return i.setOptions(options);
      });
    }
  }, {
    key: "addInfoWindow",
    value: function addInfoWindow(infoWindow) {
      var options = {
        content: infoWindow.content,
        maxWidth: infoWindow.maxWidth,
        zIndex: infoWindow.zIndex,
        disableAutoPan: infoWindow.disableAutoPan
      };

      if (typeof infoWindow.latitude === 'number' && typeof infoWindow.longitude === 'number') {
        options.position = {
          lat: infoWindow.latitude,
          lng: infoWindow.longitude
        };
      }

      var infoWindowPromise = this._mapsWrapper.createInfoWindow(options);

      this._infoWindows.set(infoWindow, infoWindowPromise);
    }
    /**
     * Creates a Google Maps event listener for the given InfoWindow as an Observable
     */

  }, {
    key: "createEventObservable",
    value: function createEventObservable(eventName, infoWindow) {
      var _this43 = this;

      return new rxjs__WEBPACK_IMPORTED_MODULE_8__.Observable(function (observer) {
        _this43._infoWindows.get(infoWindow).then(function (i) {
          i.addListener(eventName, function (e) {
            return _this43._zone.run(function () {
              return observer.next(e);
            });
          });
        });
      });
    }
  }]);

  return InfoWindowManager;
}();

InfoWindowManager.ɵfac = function InfoWindowManager_Factory(t) {
  return new (t || InfoWindowManager)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](GoogleMapsAPIWrapper), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](MarkerManager));
};

InfoWindowManager.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({
  token: InfoWindowManager,
  factory: function factory(t) {
    return InfoWindowManager.ɵfac(t);
  }
});

InfoWindowManager.ctorParameters = function () {
  return [{
    type: GoogleMapsAPIWrapper
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.NgZone
  }, {
    type: MarkerManager
  }];
};

InfoWindowManager = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:paramtypes", [GoogleMapsAPIWrapper, _angular_core__WEBPACK_IMPORTED_MODULE_7__.NgZone, MarkerManager])], InfoWindowManager);
var AgmInfoWindow_1;
var infoWindowId = 0;
/**
 * AgmInfoWindow renders a info window inside a {@link AgmMarker} or standalone.
 *
 * ### Example
 * ```typescript
 * import { Component } from '@angular/core';
 *
 * @Component({
 *  selector: 'my-map-cmp',
 *  styles: [`
 *    .agm-map-container {
 *      height: 300px;
 *    }
 * `],
 *  template: `
 *    <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
 *      <agm-marker [latitude]="lat" [longitude]="lng" [label]="'M'">
 *        <agm-info-window [disableAutoPan]="true">
 *          Hi, this is the content of the <strong>info window</strong>
 *        </agm-info-window>
 *      </agm-marker>
 *    </agm-map>
 *  `
 * })
 * ```
 */

var AgmInfoWindow = AgmInfoWindow_1 = /*#__PURE__*/function () {
  function AgmInfoWindow(_infoWindowManager, _el) {
    (0,D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__.default)(this, AgmInfoWindow);

    this._infoWindowManager = _infoWindowManager;
    this._el = _el;
    /**
     * Sets the open state for the InfoWindow. You can also call the open() and close() methods.
     */

    this.isOpen = false;
    /**
     * Emits an event when the info window is closed.
     */

    this.infoWindowClose = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
    this._infoWindowAddedToManager = false;
    this._id = (infoWindowId++).toString();
  }

  (0,D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__.default)(AgmInfoWindow, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      this.content = this._el.nativeElement.querySelector('.agm-info-window-content');

      this._infoWindowManager.addInfoWindow(this);

      this._infoWindowAddedToManager = true;

      this._updateOpenState();

      this._registerEventListeners();
    }
    /** @internal */

  }, {
    key: "ngOnChanges",
    value: function ngOnChanges(changes) {
      if (!this._infoWindowAddedToManager) {
        return;
      }

      if ((changes['latitude'] || changes['longitude']) && typeof this.latitude === 'number' && typeof this.longitude === 'number') {
        this._infoWindowManager.setPosition(this);
      }

      if (changes['zIndex']) {
        this._infoWindowManager.setZIndex(this);
      }

      if (changes['isOpen']) {
        this._updateOpenState();
      }

      this._setInfoWindowOptions(changes);
    }
  }, {
    key: "_registerEventListeners",
    value: function _registerEventListeners() {
      var _this44 = this;

      this._infoWindowManager.createEventObservable('closeclick', this).subscribe(function () {
        _this44.isOpen = false;

        _this44.infoWindowClose.emit();
      });
    }
  }, {
    key: "_updateOpenState",
    value: function _updateOpenState() {
      this.isOpen ? this.open() : this.close();
    }
  }, {
    key: "_setInfoWindowOptions",
    value: function _setInfoWindowOptions(changes) {
      var options = {};
      var optionKeys = Object.keys(changes).filter(function (k) {
        return AgmInfoWindow_1._infoWindowOptionsInputs.indexOf(k) !== -1;
      });
      optionKeys.forEach(function (k) {
        options[k] = changes[k].currentValue;
      });

      this._infoWindowManager.setOptions(this, options);
    }
    /**
     * Opens the info window.
     */

  }, {
    key: "open",
    value: function open() {
      return this._infoWindowManager.open(this);
    }
    /**
     * Closes the info window.
     */

  }, {
    key: "close",
    value: function close() {
      var _this45 = this;

      return this._infoWindowManager.close(this).then(function () {
        _this45.infoWindowClose.emit();
      });
    }
    /** @internal */

  }, {
    key: "id",
    value: function id() {
      return this._id;
    }
    /** @internal */

  }, {
    key: "toString",
    value: function toString() {
      return 'AgmInfoWindow-' + this._id.toString();
    }
    /** @internal */

  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this._infoWindowManager.deleteInfoWindow(this);
    }
  }]);

  return AgmInfoWindow;
}();

AgmInfoWindow.ɵfac = function AgmInfoWindow_Factory(t) {
  return new (t || AgmInfoWindow)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](InfoWindowManager), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.ElementRef));
};

AgmInfoWindow.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: AgmInfoWindow,
  selectors: [["agm-info-window"]],
  inputs: {
    isOpen: "isOpen",
    latitude: "latitude",
    longitude: "longitude",
    disableAutoPan: "disableAutoPan",
    zIndex: "zIndex",
    maxWidth: "maxWidth"
  },
  outputs: {
    infoWindowClose: "infoWindowClose"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵNgOnChangesFeature"]],
  ngContentSelectors: _c0,
  decls: 2,
  vars: 0,
  consts: [[1, "agm-info-window-content"]],
  template: function AgmInfoWindow_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵprojection"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    }
  },
  encapsulation: 2
});
AgmInfoWindow._infoWindowOptionsInputs = ['disableAutoPan', 'maxWidth'];

AgmInfoWindow.ctorParameters = function () {
  return [{
    type: InfoWindowManager
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ElementRef
  }];
};

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Number)], AgmInfoWindow.prototype, "latitude", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Number)], AgmInfoWindow.prototype, "longitude", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Boolean)], AgmInfoWindow.prototype, "disableAutoPan", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Number)], AgmInfoWindow.prototype, "zIndex", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Number)], AgmInfoWindow.prototype, "maxWidth", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Object)], AgmInfoWindow.prototype, "isOpen", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Output)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter)], AgmInfoWindow.prototype, "infoWindowClose", void 0);

AgmInfoWindow = AgmInfoWindow_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:paramtypes", [InfoWindowManager, _angular_core__WEBPACK_IMPORTED_MODULE_7__.ElementRef])], AgmInfoWindow);
/**
 * Manages all KML Layers for a Google Map instance.
 */

var KmlLayerManager = /*#__PURE__*/function () {
  function KmlLayerManager(_wrapper, _zone) {
    (0,D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__.default)(this, KmlLayerManager);

    this._wrapper = _wrapper;
    this._zone = _zone;
    this._layers = new Map();
  }
  /**
   * Adds a new KML Layer to the map.
   */


  (0,D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__.default)(KmlLayerManager, [{
    key: "addKmlLayer",
    value: function addKmlLayer(layer) {
      var newLayer = this._wrapper.getNativeMap().then(function (m) {
        return new google.maps.KmlLayer({
          clickable: layer.clickable,
          map: m,
          preserveViewport: layer.preserveViewport,
          screenOverlays: layer.screenOverlays,
          suppressInfoWindows: layer.suppressInfoWindows,
          url: layer.url,
          zIndex: layer.zIndex
        });
      });

      this._layers.set(layer, newLayer);
    }
  }, {
    key: "setOptions",
    value: function setOptions(layer, options) {
      this._layers.get(layer).then(function (l) {
        return l.setOptions(options);
      });
    }
  }, {
    key: "deleteKmlLayer",
    value: function deleteKmlLayer(layer) {
      var _this46 = this;

      this._layers.get(layer).then(function (l) {
        l.setMap(null);

        _this46._layers.delete(layer);
      });
    }
    /**
     * Creates a Google Maps event listener for the given KmlLayer as an Observable
     */

  }, {
    key: "createEventObservable",
    value: function createEventObservable(eventName, layer) {
      var _this47 = this;

      return new rxjs__WEBPACK_IMPORTED_MODULE_8__.Observable(function (observer) {
        _this47._layers.get(layer).then(function (m) {
          m.addListener(eventName, function (e) {
            return _this47._zone.run(function () {
              return observer.next(e);
            });
          });
        });
      });
    }
  }]);

  return KmlLayerManager;
}();

KmlLayerManager.ɵfac = function KmlLayerManager_Factory(t) {
  return new (t || KmlLayerManager)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](GoogleMapsAPIWrapper), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgZone));
};

KmlLayerManager.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({
  token: KmlLayerManager,
  factory: function factory(t) {
    return KmlLayerManager.ɵfac(t);
  }
});

KmlLayerManager.ctorParameters = function () {
  return [{
    type: GoogleMapsAPIWrapper
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.NgZone
  }];
};

KmlLayerManager = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:paramtypes", [GoogleMapsAPIWrapper, _angular_core__WEBPACK_IMPORTED_MODULE_7__.NgZone])], KmlLayerManager);
var AgmKmlLayer_1;
var layerId$2 = 0;

var AgmKmlLayer = AgmKmlLayer_1 = /*#__PURE__*/function () {
  function AgmKmlLayer(_manager) {
    (0,D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__.default)(this, AgmKmlLayer);

    this._manager = _manager;
    this._addedToManager = false;
    this._id = (layerId$2++).toString();
    this._subscriptions = [];
    /**
     * If true, the layer receives mouse events. Default value is true.
     */

    this.clickable = true;
    /**
     * By default, the input map is centered and zoomed to the bounding box of the contents of the
     * layer.
     * If this option is set to true, the viewport is left unchanged, unless the map's center and zoom
     * were never set.
     */

    this.preserveViewport = false;
    /**
     * Whether to render the screen overlays. Default true.
     */

    this.screenOverlays = true;
    /**
     * Suppress the rendering of info windows when layer features are clicked.
     */

    this.suppressInfoWindows = false;
    /**
     * The URL of the KML document to display.
     */

    this.url = null;
    /**
     * The z-index of the layer.
     */

    this.zIndex = null;
    /**
     * This event is fired when a feature in the layer is clicked.
     */

    this.layerClick = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
    /**
     * This event is fired when the KML layers default viewport has changed.
     */

    this.defaultViewportChange = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
    /**
     * This event is fired when the KML layer has finished loading.
     * At this point it is safe to read the status property to determine if the layer loaded
     * successfully.
     */

    this.statusChange = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
  }

  (0,D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__.default)(AgmKmlLayer, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      if (this._addedToManager) {
        return;
      }

      this._manager.addKmlLayer(this);

      this._addedToManager = true;

      this._addEventListeners();
    }
  }, {
    key: "ngOnChanges",
    value: function ngOnChanges(changes) {
      if (!this._addedToManager) {
        return;
      }

      this._updatePolygonOptions(changes);
    }
  }, {
    key: "_updatePolygonOptions",
    value: function _updatePolygonOptions(changes) {
      var options = Object.keys(changes).filter(function (k) {
        return AgmKmlLayer_1._kmlLayerOptions.indexOf(k) !== -1;
      }).reduce(function (obj, k) {
        obj[k] = changes[k].currentValue;
        return obj;
      }, {});

      if (Object.keys(options).length > 0) {
        this._manager.setOptions(this, options);
      }
    }
  }, {
    key: "_addEventListeners",
    value: function _addEventListeners() {
      var _this48 = this;

      var listeners = [{
        name: 'click',
        handler: function handler(ev) {
          return _this48.layerClick.emit(ev);
        }
      }, {
        name: 'defaultviewport_changed',
        handler: function handler() {
          return _this48.defaultViewportChange.emit();
        }
      }, {
        name: 'status_changed',
        handler: function handler() {
          return _this48.statusChange.emit();
        }
      }];
      listeners.forEach(function (obj) {
        var os = _this48._manager.createEventObservable(obj.name, _this48).subscribe(obj.handler);

        _this48._subscriptions.push(os);
      });
    }
    /** @internal */

  }, {
    key: "id",
    value: function id() {
      return this._id;
    }
    /** @internal */

  }, {
    key: "toString",
    value: function toString() {
      return "AgmKmlLayer-".concat(this._id.toString());
    }
    /** @internal */

  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this._manager.deleteKmlLayer(this); // unsubscribe all registered observable subscriptions


      this._subscriptions.forEach(function (s) {
        return s.unsubscribe();
      });
    }
  }]);

  return AgmKmlLayer;
}();

AgmKmlLayer.ɵfac = function AgmKmlLayer_Factory(t) {
  return new (t || AgmKmlLayer)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](KmlLayerManager));
};

AgmKmlLayer.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineDirective"]({
  type: AgmKmlLayer,
  selectors: [["agm-kml-layer"]],
  inputs: {
    clickable: "clickable",
    preserveViewport: "preserveViewport",
    screenOverlays: "screenOverlays",
    suppressInfoWindows: "suppressInfoWindows",
    url: "url",
    zIndex: "zIndex"
  },
  outputs: {
    layerClick: "layerClick",
    defaultViewportChange: "defaultViewportChange",
    statusChange: "statusChange"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵNgOnChangesFeature"]]
});
AgmKmlLayer._kmlLayerOptions = ['clickable', 'preserveViewport', 'screenOverlays', 'suppressInfoWindows', 'url', 'zIndex'];

AgmKmlLayer.ctorParameters = function () {
  return [{
    type: KmlLayerManager
  }];
};

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Object)], AgmKmlLayer.prototype, "clickable", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Object)], AgmKmlLayer.prototype, "preserveViewport", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Object)], AgmKmlLayer.prototype, "screenOverlays", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Object)], AgmKmlLayer.prototype, "suppressInfoWindows", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", String)], AgmKmlLayer.prototype, "url", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Number)], AgmKmlLayer.prototype, "zIndex", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Output)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter)], AgmKmlLayer.prototype, "layerClick", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Output)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter)], AgmKmlLayer.prototype, "defaultViewportChange", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Output)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter)], AgmKmlLayer.prototype, "statusChange", void 0);

AgmKmlLayer = AgmKmlLayer_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:paramtypes", [KmlLayerManager])], AgmKmlLayer);

function createMVCEventObservable(array) {
  var eventNames = ['insert_at', 'remove_at', 'set_at'];
  return (0,rxjs__WEBPACK_IMPORTED_MODULE_21__.fromEventPattern)(function (handler) {
    return eventNames.map(function (evName) {
      return array.addListener(evName, function (index, previous) {
        return handler.apply(array, [{
          'newArr': array.getArray(),
          evName: evName,
          index: index,
          previous: previous
        }]);
      });
    });
  }, function (_handler, evListeners) {
    return evListeners.forEach(function (evListener) {
      return evListener.remove();
    });
  });
}

var MvcArrayMock = /*#__PURE__*/function () {
  function MvcArrayMock() {
    (0,D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__.default)(this, MvcArrayMock);

    this.vals = [];
    this.listeners = {
      'remove_at': [],
      'insert_at': [],
      'set_at': []
    };
  }

  (0,D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__.default)(MvcArrayMock, [{
    key: "clear",
    value: function clear() {
      for (var i = this.vals.length - 1; i >= 0; i--) {
        this.removeAt(i);
      }
    }
  }, {
    key: "getArray",
    value: function getArray() {
      return (0,D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__.default)(this.vals);
    }
  }, {
    key: "getAt",
    value: function getAt(i) {
      return this.vals[i];
    }
  }, {
    key: "getLength",
    value: function getLength() {
      return this.vals.length;
    }
  }, {
    key: "insertAt",
    value: function insertAt(i, elem) {
      this.vals.splice(i, 0, elem);
      this.listeners.insert_at.map(function (listener) {
        return listener(i);
      });
    }
  }, {
    key: "pop",
    value: function pop() {
      var _this49 = this;

      var deleted = this.vals.pop();
      this.listeners.remove_at.map(function (listener) {
        return listener(_this49.vals.length, deleted);
      });
      return deleted;
    }
  }, {
    key: "push",
    value: function push(elem) {
      var _this50 = this;

      this.vals.push(elem);
      this.listeners.insert_at.map(function (listener) {
        return listener(_this50.vals.length - 1);
      });
      return this.vals.length;
    }
  }, {
    key: "removeAt",
    value: function removeAt(i) {
      var deleted = this.vals.splice(i, 1)[0];
      this.listeners.remove_at.map(function (listener) {
        return listener(i, deleted);
      });
      return deleted;
    }
  }, {
    key: "setAt",
    value: function setAt(i, elem) {
      var deleted = this.vals[i];
      this.vals[i] = elem;
      this.listeners.set_at.map(function (listener) {
        return listener(i, deleted);
      });
    }
  }, {
    key: "forEach",
    value: function forEach(callback) {
      this.vals.forEach(callback);
    }
  }, {
    key: "addListener",
    value: function addListener(eventName, handler) {
      var listenerArr = this.listeners[eventName];
      listenerArr.push(handler);
      return {
        remove: function remove() {
          listenerArr.splice(listenerArr.indexOf(handler), 1);
        }
      };
    }
  }]);

  return MvcArrayMock;
}();

var PolygonManager = /*#__PURE__*/function () {
  function PolygonManager(_mapsWrapper, _zone) {
    (0,D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__.default)(this, PolygonManager);

    this._mapsWrapper = _mapsWrapper;
    this._zone = _zone;
    this._polygons = new Map();
  }

  (0,D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__.default)(PolygonManager, [{
    key: "addPolygon",
    value: function addPolygon(path) {
      var polygonPromise = this._mapsWrapper.createPolygon({
        clickable: path.clickable,
        draggable: path.draggable,
        editable: path.editable,
        fillColor: path.fillColor,
        fillOpacity: path.fillOpacity,
        geodesic: path.geodesic,
        paths: path.paths,
        strokeColor: path.strokeColor,
        strokeOpacity: path.strokeOpacity,
        strokeWeight: path.strokeWeight,
        visible: path.visible,
        zIndex: path.zIndex
      });

      this._polygons.set(path, polygonPromise);
    }
  }, {
    key: "updatePolygon",
    value: function updatePolygon(polygon) {
      var _this51 = this;

      var m = this._polygons.get(polygon);

      if (m == null) {
        return Promise.resolve();
      }

      return m.then(function (l) {
        return _this51._zone.run(function () {
          l.setPaths(polygon.paths);
        });
      });
    }
  }, {
    key: "setPolygonOptions",
    value: function setPolygonOptions(path, options) {
      return this._polygons.get(path).then(function (l) {
        l.setOptions(options);
      });
    }
  }, {
    key: "deletePolygon",
    value: function deletePolygon(paths) {
      var _this52 = this;

      var m = this._polygons.get(paths);

      if (m == null) {
        return Promise.resolve();
      }

      return m.then(function (l) {
        return _this52._zone.run(function () {
          l.setMap(null);

          _this52._polygons.delete(paths);
        });
      });
    }
  }, {
    key: "getPath",
    value: function getPath(polygon) {
      return this._polygons.get(polygon).then(function (polygon) {
        return polygon.getPath().getArray();
      });
    }
  }, {
    key: "getPaths",
    value: function getPaths(polygon) {
      return this._polygons.get(polygon).then(function (polygon) {
        return polygon.getPaths().getArray().map(function (p) {
          return p.getArray();
        });
      });
    }
  }, {
    key: "createEventObservable",
    value: function createEventObservable(eventName, path) {
      var _this53 = this;

      return new rxjs__WEBPACK_IMPORTED_MODULE_8__.Observable(function (observer) {
        _this53._polygons.get(path).then(function (l) {
          l.addListener(eventName, function (e) {
            return _this53._zone.run(function () {
              return observer.next(e);
            });
          });
        });
      });
    }
  }, {
    key: "createPathEventObservable",
    value: function createPathEventObservable(agmPolygon) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default().mark(function _callee4() {
        var polygon, paths, pathsChanges$;
        return D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this._polygons.get(agmPolygon);

              case 2:
                polygon = _context4.sent;
                paths = polygon.getPaths();
                pathsChanges$ = createMVCEventObservable(paths);
                return _context4.abrupt("return", pathsChanges$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_22__.startWith)({
                  newArr: paths.getArray()
                }), // in order to subscribe to them all
                (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.switchMap)(function (parentMVEvent) {
                  return rxjs__WEBPACK_IMPORTED_MODULE_23__.merge.apply(void 0, (0,D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__.default)( // rest parameter
                  parentMVEvent.newArr.map(function (chMVC, index) {
                    return createMVCEventObservable(chMVC).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.map)(function (chMVCEvent) {
                      return {
                        parentMVEvent: parentMVEvent,
                        chMVCEvent: chMVCEvent,
                        pathIndex: index
                      };
                    }));
                  }))).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_22__.startWith)({
                    parentMVEvent: parentMVEvent,
                    chMVCEvent: null,
                    pathIndex: null
                  }));
                }), // start the merged ob with an event signinifing change to parent
                (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_24__.skip)(1), // skip the manually added event
                (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.map)(function (_ref) {
                  var parentMVEvent = _ref.parentMVEvent,
                      chMVCEvent = _ref.chMVCEvent,
                      pathIndex = _ref.pathIndex;
                  var retVal;

                  if (!chMVCEvent) {
                    retVal = {
                      newArr: parentMVEvent.newArr.map(function (subArr) {
                        return subArr.getArray().map(function (latLng) {
                          return latLng.toJSON();
                        });
                      }),
                      eventName: parentMVEvent.evName,
                      index: parentMVEvent.index
                    };

                    if (parentMVEvent.previous) {
                      retVal.previous = parentMVEvent.previous.getArray();
                    }
                  } else {
                    retVal = {
                      newArr: parentMVEvent.newArr.map(function (subArr) {
                        return subArr.getArray().map(function (latLng) {
                          return latLng.toJSON();
                        });
                      }),
                      pathIndex: pathIndex,
                      eventName: chMVCEvent.evName,
                      index: chMVCEvent.index
                    };

                    if (chMVCEvent.previous) {
                      retVal.previous = chMVCEvent.previous;
                    }
                  }

                  return retVal;
                })));

              case 6:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));
    }
  }]);

  return PolygonManager;
}();

PolygonManager.ɵfac = function PolygonManager_Factory(t) {
  return new (t || PolygonManager)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](GoogleMapsAPIWrapper), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgZone));
};

PolygonManager.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({
  token: PolygonManager,
  factory: function factory(t) {
    return PolygonManager.ɵfac(t);
  }
});

PolygonManager.ctorParameters = function () {
  return [{
    type: GoogleMapsAPIWrapper
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.NgZone
  }];
};

PolygonManager = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:paramtypes", [GoogleMapsAPIWrapper, _angular_core__WEBPACK_IMPORTED_MODULE_7__.NgZone])], PolygonManager);
var PolylineManager_1;

var PolylineManager = PolylineManager_1 = /*#__PURE__*/function () {
  function PolylineManager(_mapsWrapper, _zone) {
    (0,D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__.default)(this, PolylineManager);

    this._mapsWrapper = _mapsWrapper;
    this._zone = _zone;
    this._polylines = new Map();
  }

  (0,D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__.default)(PolylineManager, [{
    key: "addPolyline",
    value: function addPolyline(line) {
      var _this54 = this;

      var polylinePromise = this._mapsWrapper.getNativeMap().then(function () {
        return [PolylineManager_1._convertPoints(line), PolylineManager_1._convertIcons(line)];
      }).then(function (_ref2) {
        var _ref3 = (0,D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.default)(_ref2, 2),
            path = _ref3[0],
            icons = _ref3[1];

        return _this54._mapsWrapper.createPolyline({
          clickable: line.clickable,
          draggable: line.draggable,
          editable: line.editable,
          geodesic: line.geodesic,
          strokeColor: line.strokeColor,
          strokeOpacity: line.strokeOpacity,
          strokeWeight: line.strokeWeight,
          visible: line.visible,
          zIndex: line.zIndex,
          path: path,
          icons: icons
        });
      });

      this._polylines.set(line, polylinePromise);
    }
  }, {
    key: "updatePolylinePoints",
    value: function updatePolylinePoints(line) {
      var _this55 = this;

      var path = PolylineManager_1._convertPoints(line);

      var m = this._polylines.get(line);

      if (m == null) {
        return Promise.resolve();
      }

      return m.then(function (l) {
        return _this55._zone.run(function () {
          l.setPath(path);
        });
      });
    }
  }, {
    key: "updateIconSequences",
    value: function updateIconSequences(line) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default().mark(function _callee5() {
        var _this56 = this;

        var icons, m;
        return D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this._mapsWrapper.getNativeMap();

              case 2:
                icons = PolylineManager_1._convertIcons(line);
                m = this._polylines.get(line);

                if (!(m == null)) {
                  _context5.next = 6;
                  break;
                }

                return _context5.abrupt("return");

              case 6:
                return _context5.abrupt("return", m.then(function (l) {
                  return _this56._zone.run(function () {
                    return l.setOptions({
                      icons: icons
                    });
                  });
                }));

              case 7:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));
    }
  }, {
    key: "setPolylineOptions",
    value: function setPolylineOptions(line, options) {
      return this._polylines.get(line).then(function (l) {
        l.setOptions(options);
      });
    }
  }, {
    key: "deletePolyline",
    value: function deletePolyline(line) {
      var _this57 = this;

      var m = this._polylines.get(line);

      if (m == null) {
        return Promise.resolve();
      }

      return m.then(function (l) {
        return _this57._zone.run(function () {
          l.setMap(null);

          _this57._polylines.delete(line);
        });
      });
    }
  }, {
    key: "getMVCPath",
    value: function getMVCPath(agmPolyline) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default().mark(function _callee6() {
        var polyline;
        return D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default().wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return this._polylines.get(agmPolyline);

              case 2:
                polyline = _context6.sent;
                return _context6.abrupt("return", polyline.getPath());

              case 4:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));
    }
  }, {
    key: "getPath",
    value: function getPath(agmPolyline) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default().mark(function _callee7() {
        return D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default().wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return this.getMVCPath(agmPolyline);

              case 2:
                return _context7.abrupt("return", _context7.sent.getArray());

              case 3:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));
    }
  }, {
    key: "createEventObservable",
    value: function createEventObservable(eventName, line) {
      var _this58 = this;

      return new rxjs__WEBPACK_IMPORTED_MODULE_8__.Observable(function (observer) {
        _this58._polylines.get(line).then(function (l) {
          l.addListener(eventName, function (e) {
            return _this58._zone.run(function () {
              return observer.next(e);
            });
          });
        });
      });
    }
  }, {
    key: "createPathEventObservable",
    value: function createPathEventObservable(line) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default().mark(function _callee8() {
        var mvcPath;
        return D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default().wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return this.getMVCPath(line);

              case 2:
                mvcPath = _context8.sent;
                return _context8.abrupt("return", createMVCEventObservable(mvcPath));

              case 4:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));
    }
  }], [{
    key: "_convertPoints",
    value: function _convertPoints(line) {
      var path = line._getPoints().map(function (point) {
        return {
          lat: point.latitude,
          lng: point.longitude
        };
      });

      return path;
    }
  }, {
    key: "_convertPath",
    value: function _convertPath(path) {
      var symbolPath = google.maps.SymbolPath[path];

      if (typeof symbolPath === 'number') {
        return symbolPath;
      } else {
        return path;
      }
    }
  }, {
    key: "_convertIcons",
    value: function _convertIcons(line) {
      var icons = line._getIcons().map(function (agmIcon) {
        return {
          fixedRotation: agmIcon.fixedRotation,
          offset: agmIcon.offset,
          repeat: agmIcon.repeat,
          icon: {
            anchor: new google.maps.Point(agmIcon.anchorX, agmIcon.anchorY),
            fillColor: agmIcon.fillColor,
            fillOpacity: agmIcon.fillOpacity,
            path: PolylineManager_1._convertPath(agmIcon.path),
            rotation: agmIcon.rotation,
            scale: agmIcon.scale,
            strokeColor: agmIcon.strokeColor,
            strokeOpacity: agmIcon.strokeOpacity,
            strokeWeight: agmIcon.strokeWeight
          }
        };
      }); // prune undefineds;


      icons.forEach(function (icon) {
        Object.entries(icon).forEach(function (_ref4) {
          var _ref5 = (0,D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.default)(_ref4, 2),
              key = _ref5[0],
              val = _ref5[1];

          if (typeof val === 'undefined') {
            delete icon[key];
          }
        });

        if (typeof icon.icon.anchor.x === 'undefined' || typeof icon.icon.anchor.y === 'undefined') {
          delete icon.icon.anchor;
        }
      });
      return icons;
    }
  }]);

  return PolylineManager;
}();

PolylineManager.ɵfac = function PolylineManager_Factory(t) {
  return new (t || PolylineManager)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](GoogleMapsAPIWrapper), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgZone));
};

PolylineManager.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({
  token: PolylineManager,
  factory: function factory(t) {
    return PolylineManager.ɵfac(t);
  }
});

PolylineManager.ctorParameters = function () {
  return [{
    type: GoogleMapsAPIWrapper
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.NgZone
  }];
};

PolylineManager = PolylineManager_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:paramtypes", [GoogleMapsAPIWrapper, _angular_core__WEBPACK_IMPORTED_MODULE_7__.NgZone])], PolylineManager);

var RectangleManager = /*#__PURE__*/function () {
  function RectangleManager(_apiWrapper, _zone) {
    (0,D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__.default)(this, RectangleManager);

    this._apiWrapper = _apiWrapper;
    this._zone = _zone;
    this._rectangles = new Map();
  }

  (0,D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__.default)(RectangleManager, [{
    key: "addRectangle",
    value: function addRectangle(rectangle) {
      this._rectangles.set(rectangle, this._apiWrapper.createRectangle({
        bounds: {
          north: rectangle.north,
          east: rectangle.east,
          south: rectangle.south,
          west: rectangle.west
        },
        clickable: rectangle.clickable,
        draggable: rectangle.draggable,
        editable: rectangle.editable,
        fillColor: rectangle.fillColor,
        fillOpacity: rectangle.fillOpacity,
        strokeColor: rectangle.strokeColor,
        strokeOpacity: rectangle.strokeOpacity,
        strokePosition: rectangle.strokePosition,
        strokeWeight: rectangle.strokeWeight,
        visible: rectangle.visible,
        zIndex: rectangle.zIndex
      }));
    }
    /**
     * Removes the given rectangle from the map.
     */

  }, {
    key: "removeRectangle",
    value: function removeRectangle(rectangle) {
      var _this59 = this;

      return this._rectangles.get(rectangle).then(function (r) {
        r.setMap(null);

        _this59._rectangles.delete(rectangle);
      });
    }
  }, {
    key: "setOptions",
    value: function setOptions(rectangle, options) {
      return this._rectangles.get(rectangle).then(function (r) {
        return r.setOptions(options);
      });
    }
  }, {
    key: "getBounds",
    value: function getBounds(rectangle) {
      return this._rectangles.get(rectangle).then(function (r) {
        return r.getBounds();
      });
    }
  }, {
    key: "setBounds",
    value: function setBounds(rectangle) {
      return this._rectangles.get(rectangle).then(function (r) {
        return r.setBounds({
          north: rectangle.north,
          east: rectangle.east,
          south: rectangle.south,
          west: rectangle.west
        });
      });
    }
  }, {
    key: "setEditable",
    value: function setEditable(rectangle) {
      return this._rectangles.get(rectangle).then(function (r) {
        return r.setEditable(rectangle.editable);
      });
    }
  }, {
    key: "setDraggable",
    value: function setDraggable(rectangle) {
      return this._rectangles.get(rectangle).then(function (r) {
        return r.setDraggable(rectangle.draggable);
      });
    }
  }, {
    key: "setVisible",
    value: function setVisible(rectangle) {
      return this._rectangles.get(rectangle).then(function (r) {
        return r.setVisible(rectangle.visible);
      });
    }
  }, {
    key: "createEventObservable",
    value: function createEventObservable(eventName, rectangle) {
      var _this60 = this;

      return rxjs__WEBPACK_IMPORTED_MODULE_8__.Observable.create(function (observer) {
        var listener = null;

        _this60._rectangles.get(rectangle).then(function (r) {
          listener = r.addListener(eventName, function (e) {
            return _this60._zone.run(function () {
              return observer.next(e);
            });
          });
        });

        return function () {
          if (listener !== null) {
            listener.remove();
          }
        };
      });
    }
  }]);

  return RectangleManager;
}();

RectangleManager.ɵfac = function RectangleManager_Factory(t) {
  return new (t || RectangleManager)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](GoogleMapsAPIWrapper), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgZone));
};

RectangleManager.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({
  token: RectangleManager,
  factory: function factory(t) {
    return RectangleManager.ɵfac(t);
  }
});

RectangleManager.ctorParameters = function () {
  return [{
    type: GoogleMapsAPIWrapper
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.NgZone
  }];
};

RectangleManager = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:paramtypes", [GoogleMapsAPIWrapper, _angular_core__WEBPACK_IMPORTED_MODULE_7__.NgZone])], RectangleManager);
var AgmMap_1;
/**
 * AgmMap renders a Google Map.
 * **Important note**: To be able see a map in the browser, you have to define a height for the
 * element `agm-map`.
 *
 * ### Example
 * ```typescript
 * import { Component } from '@angular/core';
 *
 * @Component({
 *  selector: 'my-map-cmp',
 *  styles: [`
 *    agm-map {
 *      height: 300px;
 *    }
 * `],
 *  template: `
 *    <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
 *    </agm-map>
 *  `
 * })
 * ```
 */

var AgmMap = AgmMap_1 = /*#__PURE__*/function () {
  function AgmMap(_elem, _mapsWrapper, _platformId, _fitBoundsService, _zone) {
    (0,D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__.default)(this, AgmMap);

    this._elem = _elem;
    this._mapsWrapper = _mapsWrapper;
    this._platformId = _platformId;
    this._fitBoundsService = _fitBoundsService;
    this._zone = _zone;
    /**
     * The longitude that defines the center of the map.
     */

    this.longitude = 0;
    /**
     * The latitude that defines the center of the map.
     */

    this.latitude = 0;
    /**
     * The zoom level of the map. The default zoom level is 8.
     */

    this.zoom = 8;
    /**
     * Enables/disables if map is draggable.
     */
    // tslint:disable-next-line:no-input-rename

    this.draggable = true;
    /**
     * Enables/disables zoom and center on double click. Enabled by default.
     */

    this.disableDoubleClickZoom = false;
    /**
     * Enables/disables all default UI of the Google map. Please note: When the map is created, this
     * value cannot get updated.
     */

    this.disableDefaultUI = false;
    /**
     * If false, disables scrollwheel zooming on the map. The scrollwheel is enabled by default.
     */

    this.scrollwheel = true;
    /**
     * If false, prevents the map from being controlled by the keyboard. Keyboard shortcuts are
     * enabled by default.
     */

    this.keyboardShortcuts = true;
    /**
     * Styles to apply to each of the default map types. Note that for Satellite/Hybrid and Terrain
     * modes, these styles will only apply to labels and geometry.
     */

    this.styles = [];
    /**
     * When true and the latitude and/or longitude values changes, the Google Maps panTo method is
     * used to
     * center the map. See: https://developers.google.com/maps/documentation/javascript/reference#Map
     */

    this.usePanning = false;
    /**
     * Sets the viewport to contain the given bounds.
     * If this option to `true`, the bounds get automatically computed from all elements that use the {@link AgmFitBounds} directive.
     */

    this.fitBounds = false;
    /**
     * The initial enabled/disabled state of the Scale control. This is disabled by default.
     */

    this.scaleControl = false;
    /**
     * The initial enabled/disabled state of the Map type control.
     */

    this.mapTypeControl = false;
    /**
     * The initial enabled/disabled state of the Pan control.
     */

    this.panControl = false;
    /**
     * The initial enabled/disabled state of the Rotate control.
     */

    this.rotateControl = false;
    /**
     * The initial enabled/disabled state of the Fullscreen control.
     */

    this.fullscreenControl = false;
    /**
     * The map mapTypeId. Defaults to 'roadmap'.
     */

    this.mapTypeId = 'roadmap';
    /**
     * When false, map icons are not clickable. A map icon represents a point of interest,
     * also known as a POI. By default map icons are clickable.
     */

    this.clickableIcons = true;
    /**
     * A map icon represents a point of interest, also known as a POI.
     * When map icons are clickable by default, an info window is displayed.
     * When this property is set to false, the info window will not be shown but the click event
     * will still fire
     */

    this.showDefaultInfoWindow = true;
    /**
     * This setting controls how gestures on the map are handled.
     * Allowed values:
     * - 'cooperative' (Two-finger touch gestures pan and zoom the map. One-finger touch gestures are not handled by the map.)
     * - 'greedy'      (All touch gestures pan or zoom the map.)
     * - 'none'        (The map cannot be panned or zoomed by user gestures.)
     * - 'auto'        [default] (Gesture handling is either cooperative or greedy, depending on whether the page is scrollable or not.
     */

    this.gestureHandling = 'auto';
    /**
     * Controls the automatic switching behavior for the angle of incidence of
     * the map. The only allowed values are 0 and 45. The value 0 causes the map
     * to always use a 0° overhead view regardless of the zoom level and
     * viewport. The value 45 causes the tilt angle to automatically switch to
     * 45 whenever 45° imagery is available for the current zoom level and
     * viewport, and switch back to 0 whenever 45° imagery is not available
     * (this is the default behavior). 45° imagery is only available for
     * satellite and hybrid map types, within some locations, and at some zoom
     * levels. Note: getTilt returns the current tilt angle, not the value
     * specified by this option. Because getTilt and this option refer to
     * different things, do not bind() the tilt property; doing so may yield
     * unpredictable effects. (Default of AGM is 0 (disabled). Enable it with value 45.)
     */

    this.tilt = 0;
    this._observableSubscriptions = [];
    /**
     * This event emitter gets emitted when the user clicks on the map (but not when they click on a
     * marker or infoWindow).
     */

    this.mapClick = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
    /**
     * This event emitter gets emitted when the user right-clicks on the map (but not when they click
     * on a marker or infoWindow).
     */

    this.mapRightClick = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
    /**
     * This event emitter gets emitted when the user double-clicks on the map (but not when they click
     * on a marker or infoWindow).
     */

    this.mapDblClick = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
    /**
     * This event emitter is fired when the map center changes.
     */

    this.centerChange = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
    /**
     * This event is fired when the viewport bounds have changed.
     */

    this.boundsChange = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
    /**
     * This event is fired when the mapTypeId property changes.
     */

    this.mapTypeIdChange = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
    /**
     * This event is fired when the map becomes idle after panning or zooming.
     */

    this.idle = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
    /**
     * This event is fired when the zoom level has changed.
     */

    this.zoomChange = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
    /**
     * This event is fired when the google map is fully initialized.
     * You get the google.maps.Map instance as a result of this EventEmitter.
     */

    this.mapReady = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
    /**
     * This event is fired when the visible tiles have finished loading.
     */

    this.tilesLoaded = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
  }
  /** @internal */


  (0,D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__.default)(AgmMap, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_25__.isPlatformServer)(this._platformId)) {
        // The code is running on the server, do nothing
        return;
      } // todo: this should be solved with a new component and a viewChild decorator


      var container = this._elem.nativeElement.querySelector('.agm-map-container-inner');

      this._initMapInstance(container);
    }
  }, {
    key: "_initMapInstance",
    value: function _initMapInstance(el) {
      var _this61 = this;

      this._mapsWrapper.createMap(el, {
        center: {
          lat: this.latitude || 0,
          lng: this.longitude || 0
        },
        zoom: this.zoom,
        minZoom: this.minZoom,
        maxZoom: this.maxZoom,
        controlSize: this.controlSize,
        disableDefaultUI: this.disableDefaultUI,
        disableDoubleClickZoom: this.disableDoubleClickZoom,
        scrollwheel: this.scrollwheel,
        backgroundColor: this.backgroundColor,
        draggable: this.draggable,
        draggableCursor: this.draggableCursor,
        draggingCursor: this.draggingCursor,
        keyboardShortcuts: this.keyboardShortcuts,
        styles: this.styles,
        zoomControl: this.zoomControl,
        zoomControlOptions: this.zoomControlOptions,
        streetViewControl: this.streetViewControl,
        streetViewControlOptions: this.streetViewControlOptions,
        scaleControl: this.scaleControl,
        scaleControlOptions: this.scaleControlOptions,
        mapTypeControl: this.mapTypeControl,
        mapTypeControlOptions: this.mapTypeControlOptions,
        panControl: this.panControl,
        panControlOptions: this.panControlOptions,
        rotateControl: this.rotateControl,
        rotateControlOptions: this.rotateControlOptions,
        fullscreenControl: this.fullscreenControl,
        fullscreenControlOptions: this.fullscreenControlOptions,
        mapTypeId: this.mapTypeId,
        clickableIcons: this.clickableIcons,
        gestureHandling: this.gestureHandling,
        tilt: this.tilt,
        restriction: this.restriction
      }).then(function () {
        return _this61._mapsWrapper.getNativeMap();
      }).then(function (map) {
        return _this61.mapReady.emit(map);
      }); // register event listeners


      this._handleMapCenterChange();

      this._handleMapZoomChange();

      this._handleMapMouseEvents();

      this._handleBoundsChange();

      this._handleMapTypeIdChange();

      this._handleTilesLoadedEvent();

      this._handleIdleEvent();
    }
    /** @internal */

  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      // unsubscribe all registered observable subscriptions
      this._observableSubscriptions.forEach(function (s) {
        return s.unsubscribe();
      }); // remove all listeners from the map instance


      this._mapsWrapper.clearInstanceListeners();

      if (this._fitBoundsSubscription) {
        this._fitBoundsSubscription.unsubscribe();
      }
    }
    /* @internal */

  }, {
    key: "ngOnChanges",
    value: function ngOnChanges(changes) {
      this._updateMapOptionsChanges(changes);

      this._updatePosition(changes);
    }
  }, {
    key: "_updateMapOptionsChanges",
    value: function _updateMapOptionsChanges(changes) {
      var options = {};
      var optionKeys = Object.keys(changes).filter(function (k) {
        return AgmMap_1._mapOptionsAttributes.indexOf(k) !== -1;
      });
      optionKeys.forEach(function (k) {
        options[k] = changes[k].currentValue;
      });

      this._mapsWrapper.setMapOptions(options);
    }
    /**
     * Triggers a resize event on the google map instance.
     * When recenter is true, the of the google map gets called with the current lat/lng values or fitBounds value to recenter the map.
     * Returns a promise that gets resolved after the event was triggered.
     */

  }, {
    key: "triggerResize",
    value: function triggerResize() {
      var _this62 = this;

      var recenter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      // Note: When we would trigger the resize event and show the map in the same turn (which is a
      // common case for triggering a resize event), then the resize event would not
      // work (to show the map), so we trigger the event in a timeout.
      return new Promise(function (resolve) {
        setTimeout(function () {
          return _this62._mapsWrapper.triggerMapEvent('resize').then(function () {
            if (recenter) {
              _this62.fitBounds != null ? _this62._fitBounds() : _this62._setCenter();
            }

            resolve();
          });
        });
      });
    }
  }, {
    key: "_updatePosition",
    value: function _updatePosition(changes) {
      if (changes['latitude'] == null && changes['longitude'] == null && !changes['fitBounds']) {
        // no position update needed
        return;
      } // we prefer fitBounds in changes


      if ('fitBounds' in changes) {
        this._fitBounds();

        return;
      }

      if (typeof this.latitude !== 'number' || typeof this.longitude !== 'number') {
        return;
      }

      this._setCenter();
    }
  }, {
    key: "_setCenter",
    value: function _setCenter() {
      var newCenter = {
        lat: this.latitude,
        lng: this.longitude
      };

      if (this.usePanning) {
        this._mapsWrapper.panTo(newCenter);
      } else {
        this._mapsWrapper.setCenter(newCenter);
      }
    }
  }, {
    key: "_fitBounds",
    value: function _fitBounds() {
      switch (this.fitBounds) {
        case true:
          this._subscribeToFitBoundsUpdates();

          break;

        case false:
          if (this._fitBoundsSubscription) {
            this._fitBoundsSubscription.unsubscribe();
          }

          break;

        default:
          this._updateBounds(this.fitBounds, this.fitBoundsPadding);

      }
    }
  }, {
    key: "_subscribeToFitBoundsUpdates",
    value: function _subscribeToFitBoundsUpdates() {
      var _this63 = this;

      this._zone.runOutsideAngular(function () {
        _this63._fitBoundsSubscription = _this63._fitBoundsService.getBounds$().subscribe(function (b) {
          _this63._zone.run(function () {
            return _this63._updateBounds(b, _this63.fitBoundsPadding);
          });
        });
      });
    }
  }, {
    key: "_updateBounds",
    value: function _updateBounds(bounds, padding) {
      if (!bounds) {
        return;
      }

      if (this._isLatLngBoundsLiteral(bounds) && typeof google !== 'undefined' && google && google.maps && google.maps.LatLngBounds) {
        var newBounds = new google.maps.LatLngBounds();
        newBounds.union(bounds);
        bounds = newBounds;
      }

      if (this.usePanning) {
        this._mapsWrapper.panToBounds(bounds, padding);

        return;
      }

      this._mapsWrapper.fitBounds(bounds, padding);
    }
  }, {
    key: "_isLatLngBoundsLiteral",
    value: function _isLatLngBoundsLiteral(bounds) {
      return bounds != null && bounds.extend === undefined;
    }
  }, {
    key: "_handleMapCenterChange",
    value: function _handleMapCenterChange() {
      var _this64 = this;

      var s = this._mapsWrapper.subscribeToMapEvent('center_changed').subscribe(function () {
        _this64._mapsWrapper.getCenter().then(function (center) {
          _this64.latitude = center.lat();
          _this64.longitude = center.lng();

          _this64.centerChange.emit({
            lat: _this64.latitude,
            lng: _this64.longitude
          });
        });
      });

      this._observableSubscriptions.push(s);
    }
  }, {
    key: "_handleBoundsChange",
    value: function _handleBoundsChange() {
      var _this65 = this;

      var s = this._mapsWrapper.subscribeToMapEvent('bounds_changed').subscribe(function () {
        _this65._mapsWrapper.getBounds().then(function (bounds) {
          _this65.boundsChange.emit(bounds);
        });
      });

      this._observableSubscriptions.push(s);
    }
  }, {
    key: "_handleMapTypeIdChange",
    value: function _handleMapTypeIdChange() {
      var _this66 = this;

      var s = this._mapsWrapper.subscribeToMapEvent('maptypeid_changed').subscribe(function () {
        _this66._mapsWrapper.getMapTypeId().then(function (mapTypeId) {
          _this66.mapTypeIdChange.emit(mapTypeId);
        });
      });

      this._observableSubscriptions.push(s);
    }
  }, {
    key: "_handleMapZoomChange",
    value: function _handleMapZoomChange() {
      var _this67 = this;

      var s = this._mapsWrapper.subscribeToMapEvent('zoom_changed').subscribe(function () {
        _this67._mapsWrapper.getZoom().then(function (z) {
          _this67.zoom = z;

          _this67.zoomChange.emit(z);
        });
      });

      this._observableSubscriptions.push(s);
    }
  }, {
    key: "_handleIdleEvent",
    value: function _handleIdleEvent() {
      var _this68 = this;

      var s = this._mapsWrapper.subscribeToMapEvent('idle').subscribe(function () {
        _this68.idle.emit(void 0);
      });

      this._observableSubscriptions.push(s);
    }
  }, {
    key: "_handleTilesLoadedEvent",
    value: function _handleTilesLoadedEvent() {
      var _this69 = this;

      var s = this._mapsWrapper.subscribeToMapEvent('tilesloaded').subscribe(function () {
        return _this69.tilesLoaded.emit(void 0);
      });

      this._observableSubscriptions.push(s);
    }
  }, {
    key: "_handleMapMouseEvents",
    value: function _handleMapMouseEvents() {
      var _this70 = this;

      var events = [{
        name: 'click',
        emitter: this.mapClick
      }, {
        name: 'rightclick',
        emitter: this.mapRightClick
      }, {
        name: 'dblclick',
        emitter: this.mapDblClick
      }];
      events.forEach(function (e) {
        var s = _this70._mapsWrapper.subscribeToMapEvent(e.name).subscribe(function (event) {
          var value = {
            coords: {
              lat: event.latLng.lat(),
              lng: event.latLng.lng()
            },
            placeId: event.placeId
          }; // the placeId will be undefined in case the event was not an IconMouseEvent (google types)

          if (value.placeId && !_this70.showDefaultInfoWindow) {
            event.stop();
          }

          e.emitter.emit(value);
        });

        _this70._observableSubscriptions.push(s);
      });
    }
  }]);

  return AgmMap;
}();

AgmMap.ɵfac = function AgmMap_Factory(t) {
  return new (t || AgmMap)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](GoogleMapsAPIWrapper), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](FitBoundsService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgZone));
};

AgmMap.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: AgmMap,
  selectors: [["agm-map"]],
  hostVars: 2,
  hostBindings: function AgmMap_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("sebm-google-map-container", true);
    }
  },
  inputs: {
    longitude: "longitude",
    latitude: "latitude",
    zoom: "zoom",
    draggable: ["mapDraggable", "draggable"],
    disableDoubleClickZoom: "disableDoubleClickZoom",
    disableDefaultUI: "disableDefaultUI",
    scrollwheel: "scrollwheel",
    keyboardShortcuts: "keyboardShortcuts",
    styles: "styles",
    usePanning: "usePanning",
    fitBounds: "fitBounds",
    scaleControl: "scaleControl",
    mapTypeControl: "mapTypeControl",
    panControl: "panControl",
    rotateControl: "rotateControl",
    fullscreenControl: "fullscreenControl",
    mapTypeId: "mapTypeId",
    clickableIcons: "clickableIcons",
    showDefaultInfoWindow: "showDefaultInfoWindow",
    gestureHandling: "gestureHandling",
    tilt: "tilt",
    minZoom: "minZoom",
    maxZoom: "maxZoom",
    controlSize: "controlSize",
    backgroundColor: "backgroundColor",
    draggableCursor: "draggableCursor",
    draggingCursor: "draggingCursor",
    zoomControl: "zoomControl",
    zoomControlOptions: "zoomControlOptions",
    streetViewControl: "streetViewControl",
    streetViewControlOptions: "streetViewControlOptions",
    fitBoundsPadding: "fitBoundsPadding",
    scaleControlOptions: "scaleControlOptions",
    mapTypeControlOptions: "mapTypeControlOptions",
    panControlOptions: "panControlOptions",
    rotateControlOptions: "rotateControlOptions",
    fullscreenControlOptions: "fullscreenControlOptions",
    restriction: "restriction"
  },
  outputs: {
    mapClick: "mapClick",
    mapRightClick: "mapRightClick",
    mapDblClick: "mapDblClick",
    centerChange: "centerChange",
    boundsChange: "boundsChange",
    mapTypeIdChange: "mapTypeIdChange",
    idle: "idle",
    zoomChange: "zoomChange",
    mapReady: "mapReady",
    tilesLoaded: "tilesLoaded"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵProvidersFeature"]([CircleManager, DataLayerManager, DataLayerManager, FitBoundsService, GoogleMapsAPIWrapper, InfoWindowManager, KmlLayerManager, LayerManager, MarkerManager, PolygonManager, PolylineManager, RectangleManager]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵNgOnChangesFeature"]],
  ngContentSelectors: _c0,
  decls: 3,
  vars: 0,
  consts: [[1, "agm-map-container-inner", "sebm-google-map-container-inner"], [1, "agm-map-content"]],
  template: function AgmMap_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵprojection"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    }
  },
  styles: [".agm-map-container-inner[_ngcontent-%COMP%] {\n      width: inherit;\n      height: inherit;\n    }\n    .agm-map-content[_ngcontent-%COMP%] {\n      display:none;\n    }"]
});
/**
 * Map option attributes that can change over time
 */

AgmMap._mapOptionsAttributes = ['disableDoubleClickZoom', 'scrollwheel', 'draggable', 'draggableCursor', 'draggingCursor', 'keyboardShortcuts', 'zoomControl', 'zoomControlOptions', 'styles', 'streetViewControl', 'streetViewControlOptions', 'zoom', 'mapTypeControl', 'mapTypeControlOptions', 'minZoom', 'maxZoom', 'panControl', 'panControlOptions', 'rotateControl', 'rotateControlOptions', 'fullscreenControl', 'fullscreenControlOptions', 'scaleControl', 'scaleControlOptions', 'mapTypeId', 'clickableIcons', 'gestureHandling', 'tilt', 'restriction'];

AgmMap.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ElementRef
  }, {
    type: GoogleMapsAPIWrapper
  }, {
    type: Object,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Inject,
      args: [_angular_core__WEBPACK_IMPORTED_MODULE_7__.PLATFORM_ID]
    }]
  }, {
    type: FitBoundsService
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.NgZone
  }];
};

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Object)], AgmMap.prototype, "longitude", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Object)], AgmMap.prototype, "latitude", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Object)], AgmMap.prototype, "zoom", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Number)], AgmMap.prototype, "minZoom", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Number)], AgmMap.prototype, "maxZoom", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Number)], AgmMap.prototype, "controlSize", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)('mapDraggable'), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Object)], AgmMap.prototype, "draggable", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Object)], AgmMap.prototype, "disableDoubleClickZoom", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Object)], AgmMap.prototype, "disableDefaultUI", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Object)], AgmMap.prototype, "scrollwheel", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", String)], AgmMap.prototype, "backgroundColor", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", String)], AgmMap.prototype, "draggableCursor", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", String)], AgmMap.prototype, "draggingCursor", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Object)], AgmMap.prototype, "keyboardShortcuts", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Boolean)], AgmMap.prototype, "zoomControl", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Object)], AgmMap.prototype, "zoomControlOptions", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Array)], AgmMap.prototype, "styles", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Object)], AgmMap.prototype, "usePanning", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Boolean)], AgmMap.prototype, "streetViewControl", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Object)], AgmMap.prototype, "streetViewControlOptions", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Object)], AgmMap.prototype, "fitBounds", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Object)], AgmMap.prototype, "fitBoundsPadding", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Object)], AgmMap.prototype, "scaleControl", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Object)], AgmMap.prototype, "scaleControlOptions", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Object)], AgmMap.prototype, "mapTypeControl", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Object)], AgmMap.prototype, "mapTypeControlOptions", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Object)], AgmMap.prototype, "panControl", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Object)], AgmMap.prototype, "panControlOptions", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Object)], AgmMap.prototype, "rotateControl", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Object)], AgmMap.prototype, "rotateControlOptions", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Object)], AgmMap.prototype, "fullscreenControl", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Object)], AgmMap.prototype, "fullscreenControlOptions", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", String)], AgmMap.prototype, "mapTypeId", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Object)], AgmMap.prototype, "clickableIcons", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Object)], AgmMap.prototype, "showDefaultInfoWindow", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", String)], AgmMap.prototype, "gestureHandling", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Object)], AgmMap.prototype, "tilt", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Object)], AgmMap.prototype, "restriction", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Output)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter)], AgmMap.prototype, "mapClick", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Output)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter)], AgmMap.prototype, "mapRightClick", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Output)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter)], AgmMap.prototype, "mapDblClick", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Output)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter)], AgmMap.prototype, "centerChange", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Output)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter)], AgmMap.prototype, "boundsChange", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Output)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter)], AgmMap.prototype, "mapTypeIdChange", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Output)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter)], AgmMap.prototype, "idle", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Output)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter)], AgmMap.prototype, "zoomChange", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Output)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter)], AgmMap.prototype, "mapReady", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Output)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter)], AgmMap.prototype, "tilesLoaded", void 0);

AgmMap = AgmMap_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__param)(2, (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Inject)(_angular_core__WEBPACK_IMPORTED_MODULE_7__.PLATFORM_ID)), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_7__.ElementRef, GoogleMapsAPIWrapper, Object, FitBoundsService, _angular_core__WEBPACK_IMPORTED_MODULE_7__.NgZone])], AgmMap);
var AgmMarker_1;
var markerId = 0;
/**
 * AgmMarker renders a map marker inside a {@link AgmMap}.
 *
 * ### Example
 * ```typescript
 * import { Component } from '@angular/core';
 *
 * @Component({
 *  selector: 'my-map-cmp',
 *  styles: [`
 *    .agm-map-container {
 *      height: 300px;
 *    }
 * `],
 *  template: `
 *    <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
 *      <agm-marker [latitude]="lat" [longitude]="lng" [label]="'M'">
 *      </agm-marker>
 *    </agm-map>
 *  `
 * })
 * ```
 */

var AgmMarker = AgmMarker_1 = /*#__PURE__*/function () {
  function AgmMarker(_markerManager) {
    (0,D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__.default)(this, AgmMarker);

    this._markerManager = _markerManager;
    /**
     * If true, the marker can be dragged. Default value is false.
     */
    // tslint:disable-next-line:no-input-rename

    this.draggable = false;
    /**
     * If true, the marker is visible
     */

    this.visible = true;
    /**
     * Whether to automatically open the child info window when the marker is clicked.
     */

    this.openInfoWindow = true;
    /**
     * The marker's opacity between 0.0 and 1.0.
     */

    this.opacity = 1;
    /**
     * All markers are displayed on the map in order of their zIndex, with higher values displaying in
     * front of markers with lower values. By default, markers are displayed according to their
     * vertical position on screen, with lower markers appearing in front of markers further up the
     * screen.
     */

    this.zIndex = 1;
    /**
     * If true, the marker can be clicked. Default value is true.
     */
    // tslint:disable-next-line:no-input-rename

    this.clickable = true;
    /**
     * This event is fired when the marker's animation property changes.
     *
     * @memberof AgmMarker
     */

    this.animationChange = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
    /**
     * This event emitter gets emitted when the user clicks on the marker.
     */

    this.markerClick = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
    /**
     * This event emitter gets emitted when the user clicks twice on the marker.
     */

    this.markerDblClick = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
    /**
     * This event is fired when the user rightclicks on the marker.
     */

    this.markerRightClick = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
    /**
     * This event is fired when the user starts dragging the marker.
     */

    this.dragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
    /**
     * This event is repeatedly fired while the user drags the marker.
     */

    this.drag = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
    /**
     * This event is fired when the user stops dragging the marker.
     */

    this.dragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
    /**
     * This event is fired when the user mouses over the marker.
     */

    this.mouseOver = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
    /**
     * This event is fired when the user mouses outside the marker.
     */

    this.mouseOut = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
    /** @internal */

    this.infoWindow = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.QueryList();
    this._markerAddedToManger = false;
    this._observableSubscriptions = [];
    this._fitBoundsDetails$ = new rxjs__WEBPACK_IMPORTED_MODULE_26__.ReplaySubject(1);
    this._id = (markerId++).toString();
  }
  /* @internal */


  (0,D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__.default)(AgmMarker, [{
    key: "ngAfterContentInit",
    value: function ngAfterContentInit() {
      var _this71 = this;

      this.handleInfoWindowUpdate();
      this.infoWindow.changes.subscribe(function () {
        return _this71.handleInfoWindowUpdate();
      });
    }
  }, {
    key: "handleInfoWindowUpdate",
    value: function handleInfoWindowUpdate() {
      var _this72 = this;

      if (this.infoWindow.length > 1) {
        throw new Error('Expected no more than one info window.');
      }

      this.infoWindow.forEach(function (marker) {
        marker.hostMarker = _this72;
      });
    }
    /** @internal */

  }, {
    key: "ngOnChanges",
    value: function ngOnChanges(changes) {
      if (typeof this.latitude === 'string') {
        this.latitude = Number(this.latitude);
      }

      if (typeof this.longitude === 'string') {
        this.longitude = Number(this.longitude);
      }

      if (typeof this.latitude !== 'number' || typeof this.longitude !== 'number') {
        return;
      }

      if (!this._markerAddedToManger) {
        this._markerManager.addMarker(this);

        this._updateFitBoundsDetails();

        this._markerAddedToManger = true;

        this._addEventListeners();

        return;
      }

      if (changes['latitude'] || changes['longitude']) {
        this._markerManager.updateMarkerPosition(this);

        this._updateFitBoundsDetails();
      }

      if (changes['title']) {
        this._markerManager.updateTitle(this);
      }

      if (changes['label']) {
        this._markerManager.updateLabel(this);
      }

      if (changes['draggable']) {
        this._markerManager.updateDraggable(this);
      }

      if (changes['iconUrl']) {
        this._markerManager.updateIcon(this);
      }

      if (changes['opacity']) {
        this._markerManager.updateOpacity(this);
      }

      if (changes['visible']) {
        this._markerManager.updateVisible(this);
      }

      if (changes['zIndex']) {
        this._markerManager.updateZIndex(this);
      }

      if (changes['clickable']) {
        this._markerManager.updateClickable(this);
      }

      if (changes['animation']) {
        this._markerManager.updateAnimation(this);
      }
    }
    /** @internal */

  }, {
    key: "getFitBoundsDetails$",
    value: function getFitBoundsDetails$() {
      return this._fitBoundsDetails$.asObservable();
    }
  }, {
    key: "_updateFitBoundsDetails",
    value: function _updateFitBoundsDetails() {
      this._fitBoundsDetails$.next({
        latLng: {
          lat: this.latitude,
          lng: this.longitude
        }
      });
    }
  }, {
    key: "_addEventListeners",
    value: function _addEventListeners() {
      var _this73 = this;

      var cs = this._markerManager.createEventObservable('click', this).subscribe(function () {
        if (_this73.openInfoWindow) {
          _this73.infoWindow.forEach(function (infoWindow) {
            return infoWindow.open();
          });
        }

        _this73.markerClick.emit(_this73);
      });

      this._observableSubscriptions.push(cs);

      var dcs = this._markerManager.createEventObservable('dblclick', this).subscribe(function () {
        _this73.markerDblClick.emit(null);
      });

      this._observableSubscriptions.push(dcs);

      var rc = this._markerManager.createEventObservable('rightclick', this).subscribe(function () {
        _this73.markerRightClick.emit(null);
      });

      this._observableSubscriptions.push(rc);

      var ds = this._markerManager.createEventObservable('dragstart', this).subscribe(function (e) {
        _this73.dragStart.emit({
          coords: {
            lat: e.latLng.lat(),
            lng: e.latLng.lng()
          }
        });
      });

      this._observableSubscriptions.push(ds);

      var d = this._markerManager.createEventObservable('drag', this).subscribe(function (e) {
        _this73.drag.emit({
          coords: {
            lat: e.latLng.lat(),
            lng: e.latLng.lng()
          }
        });
      });

      this._observableSubscriptions.push(d);

      var de = this._markerManager.createEventObservable('dragend', this).subscribe(function (e) {
        _this73.dragEnd.emit({
          coords: {
            lat: e.latLng.lat(),
            lng: e.latLng.lng()
          }
        });
      });

      this._observableSubscriptions.push(de);

      var mover = this._markerManager.createEventObservable('mouseover', this).subscribe(function (e) {
        _this73.mouseOver.emit({
          coords: {
            lat: e.latLng.lat(),
            lng: e.latLng.lng()
          }
        });
      });

      this._observableSubscriptions.push(mover);

      var mout = this._markerManager.createEventObservable('mouseout', this).subscribe(function (e) {
        _this73.mouseOut.emit({
          coords: {
            lat: e.latLng.lat(),
            lng: e.latLng.lng()
          }
        });
      });

      this._observableSubscriptions.push(mout);

      var anChng = this._markerManager.createEventObservable('animation_changed', this).subscribe(function () {
        _this73.animationChange.emit(_this73.animation);
      });

      this._observableSubscriptions.push(anChng);
    }
    /** @internal */

  }, {
    key: "id",
    value: function id() {
      return this._id;
    }
    /** @internal */

  }, {
    key: "toString",
    value: function toString() {
      return 'AgmMarker-' + this._id.toString();
    }
    /** @internal */

  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this._markerManager.deleteMarker(this); // unsubscribe all registered observable subscriptions


      this._observableSubscriptions.forEach(function (s) {
        return s.unsubscribe();
      });
    }
  }]);

  return AgmMarker;
}();

AgmMarker.ɵfac = function AgmMarker_Factory(t) {
  return new (t || AgmMarker)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](MarkerManager));
};

AgmMarker.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineDirective"]({
  type: AgmMarker,
  selectors: [["agm-marker"]],
  contentQueries: function AgmMarker_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵcontentQuery"](dirIndex, AgmInfoWindow, 4);
    }

    if (rf & 2) {
      var _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.infoWindow = _t);
    }
  },
  inputs: {
    latitude: "latitude",
    longitude: "longitude",
    title: "title",
    label: "label",
    draggable: ["markerDraggable", "draggable"],
    iconUrl: "iconUrl",
    openInfoWindow: "openInfoWindow",
    opacity: "opacity",
    visible: "visible",
    zIndex: "zIndex",
    animation: "animation",
    clickable: ["markerClickable", "clickable"]
  },
  outputs: {
    markerClick: "markerClick",
    dragStart: "dragStart",
    drag: "drag",
    dragEnd: "dragEnd",
    mouseOver: "mouseOver",
    mouseOut: "mouseOut",
    animationChange: "animationChange",
    markerDblClick: "markerDblClick",
    markerRightClick: "markerRightClick"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵProvidersFeature"]([{
    provide: FitBoundsAccessor,
    useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.forwardRef)(function () {
      return AgmMarker_1;
    })
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵNgOnChangesFeature"]]
});

AgmMarker.ctorParameters = function () {
  return [{
    type: MarkerManager
  }];
};

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Number)], AgmMarker.prototype, "latitude", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Number)], AgmMarker.prototype, "longitude", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", String)], AgmMarker.prototype, "title", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Object)], AgmMarker.prototype, "label", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)('markerDraggable'), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Object)], AgmMarker.prototype, "draggable", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", String)], AgmMarker.prototype, "iconUrl", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Object)], AgmMarker.prototype, "visible", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Object)], AgmMarker.prototype, "openInfoWindow", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Object)], AgmMarker.prototype, "opacity", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Object)], AgmMarker.prototype, "zIndex", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)('markerClickable'), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Object)], AgmMarker.prototype, "clickable", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", String)], AgmMarker.prototype, "animation", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Output)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Object)], AgmMarker.prototype, "animationChange", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Output)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter)], AgmMarker.prototype, "markerClick", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Output)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter)], AgmMarker.prototype, "markerDblClick", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Output)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter)], AgmMarker.prototype, "markerRightClick", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Output)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter)], AgmMarker.prototype, "dragStart", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Output)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter)], AgmMarker.prototype, "drag", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Output)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter)], AgmMarker.prototype, "dragEnd", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Output)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter)], AgmMarker.prototype, "mouseOver", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Output)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter)], AgmMarker.prototype, "mouseOut", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.ContentChildren)(AgmInfoWindow), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_7__.QueryList)], AgmMarker.prototype, "infoWindow", void 0);

AgmMarker = AgmMarker_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:paramtypes", [MarkerManager])], AgmMarker);
var AgmPolygon_1;
/**
 * AgmPolygon renders a polygon on a {@link AgmMap}
 *
 * ### Example
 * ```typescript
 * import { Component } from '@angular/core';
 *
 * @Component({
 *  selector: 'my-map-cmp',
 *  styles: [`
 *    agm-map {
 *      height: 300px;
 *    }
 * `],
 *  template: `
 *    <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
 *      <agm-polygon [paths]="paths">
 *      </agm-polygon>
 *    </agm-map>
 *  `
 * })
 * export class MyMapCmp {
 *   lat: number = 0;
 *   lng: number = 0;
 *   zoom: number = 10;
 *   paths: Array<LatLngLiteral> = [
 *     { lat: 0,  lng: 10 },
 *     { lat: 0,  lng: 20 },
 *     { lat: 10, lng: 20 },
 *     { lat: 10, lng: 10 },
 *     { lat: 0,  lng: 10 }
 *   ]
 *   // Nesting paths will create a hole where they overlap;
 *   nestedPaths: Array<Array<LatLngLiteral>> = [[
 *     { lat: 0,  lng: 10 },
 *     { lat: 0,  lng: 20 },
 *     { lat: 10, lng: 20 },
 *     { lat: 10, lng: 10 },
 *     { lat: 0,  lng: 10 }
 *   ], [
 *     { lat: 0, lng: 15 },
 *     { lat: 0, lng: 20 },
 *     { lat: 5, lng: 20 },
 *     { lat: 5, lng: 15 },
 *     { lat: 0, lng: 15 }
 *   ]]
 * }
 * ```
 */

var AgmPolygon = AgmPolygon_1 = /*#__PURE__*/function () {
  function AgmPolygon(_polygonManager) {
    (0,D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__.default)(this, AgmPolygon);

    this._polygonManager = _polygonManager;
    /**
     * Indicates whether this Polygon handles mouse events. Defaults to true.
     */

    this.clickable = true;
    /**
     * If set to true, the user can drag this shape over the map. The geodesic
     * property defines the mode of dragging. Defaults to false.
     */
    // tslint:disable-next-line:no-input-rename

    this.draggable = false;
    /**
     * If set to true, the user can edit this shape by dragging the control
     * points shown at the vertices and on each segment. Defaults to false.
     */

    this.editable = false;
    /**
     * When true, edges of the polygon are interpreted as geodesic and will
     * follow the curvature of the Earth. When false, edges of the polygon are
     * rendered as straight lines in screen space. Note that the shape of a
     * geodesic polygon may appear to change when dragged, as the dimensions
     * are maintained relative to the surface of the earth. Defaults to false.
     */

    this.geodesic = false;
    /**
     * The ordered sequence of coordinates that designates a closed loop.
     * Unlike polylines, a polygon may consist of one or more paths.
     *  As a result, the paths property may specify one or more arrays of
     * LatLng coordinates. Paths are closed automatically; do not repeat the
     * first vertex of the path as the last vertex. Simple polygons may be
     * defined using a single array of LatLngs. More complex polygons may
     * specify an array of arrays. Any simple arrays are converted into Arrays.
     * Inserting or removing LatLngs from the Array will automatically update
     * the polygon on the map.
     */

    this.paths = [];
    /**
     * This event is fired when the DOM click event is fired on the Polygon.
     */

    this.polyClick = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
    /**
     * This event is fired when the DOM dblclick event is fired on the Polygon.
     */

    this.polyDblClick = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
    /**
     * This event is repeatedly fired while the user drags the polygon.
     */

    this.polyDrag = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
    /**
     * This event is fired when the user stops dragging the polygon.
     */

    this.polyDragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
    /**
     * This event is fired when the user starts dragging the polygon.
     */

    this.polyDragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
    /**
     * This event is fired when the DOM mousedown event is fired on the Polygon.
     */

    this.polyMouseDown = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
    /**
     * This event is fired when the DOM mousemove event is fired on the Polygon.
     */

    this.polyMouseMove = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
    /**
     * This event is fired on Polygon mouseout.
     */

    this.polyMouseOut = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
    /**
     * This event is fired on Polygon mouseover.
     */

    this.polyMouseOver = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
    /**
     * This event is fired whe the DOM mouseup event is fired on the Polygon
     */

    this.polyMouseUp = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
    /**
     * This event is fired when the Polygon is right-clicked on.
     */

    this.polyRightClick = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
    /**
     * This event is fired after Polygon first path changes.
     */

    this.polyPathsChange = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
    this._polygonAddedToManager = false;
    this._subscriptions = [];
  }
  /** @internal */


  (0,D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__.default)(AgmPolygon, [{
    key: "ngAfterContentInit",
    value: function ngAfterContentInit() {
      if (!this._polygonAddedToManager) {
        this._init();
      }
    }
  }, {
    key: "ngOnChanges",
    value: function ngOnChanges(changes) {
      if (!this._polygonAddedToManager) {
        this._init();

        return;
      }

      this._polygonManager.setPolygonOptions(this, this._updatePolygonOptions(changes));
    }
  }, {
    key: "_init",
    value: function _init() {
      this._polygonManager.addPolygon(this);

      this._polygonAddedToManager = true;

      this._addEventListeners();
    }
  }, {
    key: "_addEventListeners",
    value: function _addEventListeners() {
      var _this74 = this;

      var handlers = [{
        name: 'click',
        handler: function handler(ev) {
          return _this74.polyClick.emit(ev);
        }
      }, {
        name: 'dblclick',
        handler: function handler(ev) {
          return _this74.polyDblClick.emit(ev);
        }
      }, {
        name: 'drag',
        handler: function handler(ev) {
          return _this74.polyDrag.emit(ev);
        }
      }, {
        name: 'dragend',
        handler: function handler(ev) {
          return _this74.polyDragEnd.emit(ev);
        }
      }, {
        name: 'dragstart',
        handler: function handler(ev) {
          return _this74.polyDragStart.emit(ev);
        }
      }, {
        name: 'mousedown',
        handler: function handler(ev) {
          return _this74.polyMouseDown.emit(ev);
        }
      }, {
        name: 'mousemove',
        handler: function handler(ev) {
          return _this74.polyMouseMove.emit(ev);
        }
      }, {
        name: 'mouseout',
        handler: function handler(ev) {
          return _this74.polyMouseOut.emit(ev);
        }
      }, {
        name: 'mouseover',
        handler: function handler(ev) {
          return _this74.polyMouseOver.emit(ev);
        }
      }, {
        name: 'mouseup',
        handler: function handler(ev) {
          return _this74.polyMouseUp.emit(ev);
        }
      }, {
        name: 'rightclick',
        handler: function handler(ev) {
          return _this74.polyRightClick.emit(ev);
        }
      }];
      handlers.forEach(function (obj) {
        var os = _this74._polygonManager.createEventObservable(obj.name, _this74).subscribe(obj.handler);

        _this74._subscriptions.push(os);
      });

      this._polygonManager.createPathEventObservable(this).then(function (paths$) {
        var os = paths$.subscribe(function (pathEvent) {
          return _this74.polyPathsChange.emit(pathEvent);
        });

        _this74._subscriptions.push(os);
      });
    }
  }, {
    key: "_updatePolygonOptions",
    value: function _updatePolygonOptions(changes) {
      return Object.keys(changes).filter(function (k) {
        return AgmPolygon_1._polygonOptionsAttributes.indexOf(k) !== -1;
      }).reduce(function (obj, k) {
        obj[k] = changes[k].currentValue;
        return obj;
      }, {});
    }
    /** @internal */

  }, {
    key: "id",
    value: function id() {
      return this._id;
    }
    /** @internal */

  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this._polygonManager.deletePolygon(this); // unsubscribe all registered observable subscriptions


      this._subscriptions.forEach(function (s) {
        return s.unsubscribe();
      });
    }
  }, {
    key: "getPath",
    value: function getPath() {
      return this._polygonManager.getPath(this);
    }
  }, {
    key: "getPaths",
    value: function getPaths() {
      return this._polygonManager.getPaths(this);
    }
  }]);

  return AgmPolygon;
}();

AgmPolygon.ɵfac = function AgmPolygon_Factory(t) {
  return new (t || AgmPolygon)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](PolygonManager));
};

AgmPolygon.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineDirective"]({
  type: AgmPolygon,
  selectors: [["agm-polygon"]],
  inputs: {
    clickable: "clickable",
    draggable: ["polyDraggable", "draggable"],
    editable: "editable",
    geodesic: "geodesic",
    paths: "paths",
    fillColor: "fillColor",
    fillOpacity: "fillOpacity",
    strokeColor: "strokeColor",
    strokeOpacity: "strokeOpacity",
    strokeWeight: "strokeWeight",
    visible: "visible",
    zIndex: "zIndex"
  },
  outputs: {
    polyClick: "polyClick",
    polyDblClick: "polyDblClick",
    polyDrag: "polyDrag",
    polyDragEnd: "polyDragEnd",
    polyDragStart: "polyDragStart",
    polyMouseDown: "polyMouseDown",
    polyMouseMove: "polyMouseMove",
    polyMouseOut: "polyMouseOut",
    polyMouseOver: "polyMouseOver",
    polyMouseUp: "polyMouseUp",
    polyRightClick: "polyRightClick",
    polyPathsChange: "polyPathsChange"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵNgOnChangesFeature"]]
});
AgmPolygon._polygonOptionsAttributes = ['clickable', 'draggable', 'editable', 'fillColor', 'fillOpacity', 'geodesic', 'icon', 'map', 'paths', 'strokeColor', 'strokeOpacity', 'strokeWeight', 'visible', 'zIndex', 'draggable', 'editable', 'visible'];

AgmPolygon.ctorParameters = function () {
  return [{
    type: PolygonManager
  }];
};

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Object)], AgmPolygon.prototype, "clickable", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)('polyDraggable'), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Object)], AgmPolygon.prototype, "draggable", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Object)], AgmPolygon.prototype, "editable", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", String)], AgmPolygon.prototype, "fillColor", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Number)], AgmPolygon.prototype, "fillOpacity", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Object)], AgmPolygon.prototype, "geodesic", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Array)], AgmPolygon.prototype, "paths", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", String)], AgmPolygon.prototype, "strokeColor", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Number)], AgmPolygon.prototype, "strokeOpacity", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Number)], AgmPolygon.prototype, "strokeWeight", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Boolean)], AgmPolygon.prototype, "visible", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Number)], AgmPolygon.prototype, "zIndex", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Output)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter)], AgmPolygon.prototype, "polyClick", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Output)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter)], AgmPolygon.prototype, "polyDblClick", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Output)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter)], AgmPolygon.prototype, "polyDrag", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Output)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter)], AgmPolygon.prototype, "polyDragEnd", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Output)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter)], AgmPolygon.prototype, "polyDragStart", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Output)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter)], AgmPolygon.prototype, "polyMouseDown", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Output)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter)], AgmPolygon.prototype, "polyMouseMove", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Output)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter)], AgmPolygon.prototype, "polyMouseOut", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Output)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter)], AgmPolygon.prototype, "polyMouseOver", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Output)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter)], AgmPolygon.prototype, "polyMouseUp", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Output)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter)], AgmPolygon.prototype, "polyRightClick", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Output)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Object)], AgmPolygon.prototype, "polyPathsChange", void 0);

AgmPolygon = AgmPolygon_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:paramtypes", [PolygonManager])], AgmPolygon);
/**
 * AgmPolylineIcon enables to add polyline sequences to add arrows, circle,
 * or custom icons either along the entire line, or in a specific part of it.
 * See https://developers.google.com/maps/documentation/javascript/shapes#polyline_customize
 *
 * ### Example
 * ```html
 *    <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
 *      <agm-polyline>
 *          <agm-icon-sequence [fixedRotation]="true" [path]="'FORWARD_OPEN_ARROW'">
 *          </agm-icon-sequence>
 *      </agm-polyline>
 *    </agm-map>
 * ```
 *
 * @export
 * @class AgmPolylineIcon
 */

var AgmPolylineIcon = /*#__PURE__*/function () {
  function AgmPolylineIcon() {
    (0,D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__.default)(this, AgmPolylineIcon);
  }

  (0,D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__.default)(AgmPolylineIcon, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      if (this.path == null) {
        throw new Error('Icon Sequence path is required');
      }
    }
  }]);

  return AgmPolylineIcon;
}();

AgmPolylineIcon.ɵfac = function AgmPolylineIcon_Factory(t) {
  return new (t || AgmPolylineIcon)();
};

AgmPolylineIcon.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineDirective"]({
  type: AgmPolylineIcon,
  selectors: [["agm-icon-sequence"]],
  inputs: {
    fixedRotation: "fixedRotation",
    offset: "offset",
    repeat: "repeat",
    anchorX: "anchorX",
    anchorY: "anchorY",
    fillColor: "fillColor",
    fillOpacity: "fillOpacity",
    path: "path",
    rotation: "rotation",
    scale: "scale",
    strokeColor: "strokeColor",
    strokeOpacity: "strokeOpacity",
    strokeWeight: "strokeWeight"
  }
});

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Boolean)], AgmPolylineIcon.prototype, "fixedRotation", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", String)], AgmPolylineIcon.prototype, "offset", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", String)], AgmPolylineIcon.prototype, "repeat", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Number)], AgmPolylineIcon.prototype, "anchorX", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Number)], AgmPolylineIcon.prototype, "anchorY", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", String)], AgmPolylineIcon.prototype, "fillColor", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Number)], AgmPolylineIcon.prototype, "fillOpacity", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", String)], AgmPolylineIcon.prototype, "path", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Number)], AgmPolylineIcon.prototype, "rotation", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Number)], AgmPolylineIcon.prototype, "scale", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", String)], AgmPolylineIcon.prototype, "strokeColor", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Number)], AgmPolylineIcon.prototype, "strokeOpacity", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Number)], AgmPolylineIcon.prototype, "strokeWeight", void 0);

var AgmPolylinePoint_1;
/**
 * AgmPolylinePoint represents one element of a polyline within a  {@link
 * AgmPolyline}
 */

var AgmPolylinePoint = AgmPolylinePoint_1 = /*#__PURE__*/function () {
  function AgmPolylinePoint() {
    (0,D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__.default)(this, AgmPolylinePoint);

    /**
     * This event emitter gets emitted when the position of the point changed.
     */
    this.positionChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
  }

  (0,D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__.default)(AgmPolylinePoint, [{
    key: "ngOnChanges",
    value: function ngOnChanges(changes) {
      if (changes['latitude'] || changes['longitude']) {
        var position = {
          lat: changes['latitude'] ? changes['latitude'].currentValue : this.latitude,
          lng: changes['longitude'] ? changes['longitude'].currentValue : this.longitude
        };
        this.positionChanged.emit(position);
      }
    }
    /** @internal */

  }, {
    key: "getFitBoundsDetails$",
    value: function getFitBoundsDetails$() {
      return this.positionChanged.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_22__.startWith)({
        lat: this.latitude,
        lng: this.longitude
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.map)(function (position) {
        return {
          latLng: position
        };
      }));
    }
  }]);

  return AgmPolylinePoint;
}();

AgmPolylinePoint.ɵfac = function AgmPolylinePoint_Factory(t) {
  return new (t || AgmPolylinePoint)();
};

AgmPolylinePoint.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineDirective"]({
  type: AgmPolylinePoint,
  selectors: [["agm-polyline-point"]],
  inputs: {
    latitude: "latitude",
    longitude: "longitude"
  },
  outputs: {
    positionChanged: "positionChanged"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵProvidersFeature"]([{
    provide: FitBoundsAccessor,
    useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.forwardRef)(function () {
      return AgmPolylinePoint_1;
    })
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵNgOnChangesFeature"]]
});

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Number)], AgmPolylinePoint.prototype, "latitude", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Number)], AgmPolylinePoint.prototype, "longitude", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Output)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter)], AgmPolylinePoint.prototype, "positionChanged", void 0);

AgmPolylinePoint = AgmPolylinePoint_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:paramtypes", [])], AgmPolylinePoint);
var AgmPolyline_1;
var polylineId = 0;
/**
 * AgmPolyline renders a polyline on a {@link AgmMap}
 *
 * ### Example
 * ```typescript
 * import { Component } from '@angular/core';
 *
 * @Component({
 *  selector: 'my-map-cmp',
 *  styles: [`
 *    .agm-map-container {
 *      height: 300px;
 *    }
 * `],
 *  template: `
 *    <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
 *      <agm-polyline>
 *          <agm-polyline-point [latitude]="latA" [longitude]="lngA">
 *          </agm-polyline-point>
 *          <agm-polyline-point [latitude]="latB" [longitude]="lngB">
 *          </agm-polyline-point>
 *      </agm-polyline>
 *    </agm-map>
 *  `
 * })
 * ```
 */

var AgmPolyline = AgmPolyline_1 = /*#__PURE__*/function () {
  function AgmPolyline(_polylineManager) {
    (0,D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__.default)(this, AgmPolyline);

    this._polylineManager = _polylineManager;
    /**
     * Indicates whether this Polyline handles mouse events. Defaults to true.
     */

    this.clickable = true;
    /**
     * If set to true, the user can drag this shape over the map. The geodesic property defines the
     * mode of dragging. Defaults to false.
     */
    // tslint:disable-next-line:no-input-rename

    this.draggable = false;
    /**
     * If set to true, the user can edit this shape by dragging the control points shown at the
     * vertices and on each segment. Defaults to false.
     */

    this.editable = false;
    /**
     * When true, edges of the polygon are interpreted as geodesic and will follow the curvature of
     * the Earth. When false, edges of the polygon are rendered as straight lines in screen space.
     * Note that the shape of a geodesic polygon may appear to change when dragged, as the dimensions
     * are maintained relative to the surface of the earth. Defaults to false.
     */

    this.geodesic = false;
    /**
     * Whether this polyline is visible on the map. Defaults to true.
     */

    this.visible = true;
    /**
     * This event is fired when the DOM click event is fired on the Polyline.
     */

    this.lineClick = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
    /**
     * This event is fired when the DOM dblclick event is fired on the Polyline.
     */

    this.lineDblClick = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
    /**
     * This event is repeatedly fired while the user drags the polyline.
     */

    this.lineDrag = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
    /**
     * This event is fired when the user stops dragging the polyline.
     */

    this.lineDragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
    /**
     * This event is fired when the user starts dragging the polyline.
     */

    this.lineDragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
    /**
     * This event is fired when the DOM mousedown event is fired on the Polyline.
     */

    this.lineMouseDown = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
    /**
     * This event is fired when the DOM mousemove event is fired on the Polyline.
     */

    this.lineMouseMove = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
    /**
     * This event is fired on Polyline mouseout.
     */

    this.lineMouseOut = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
    /**
     * This event is fired on Polyline mouseover.
     */

    this.lineMouseOver = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
    /**
     * This event is fired whe the DOM mouseup event is fired on the Polyline
     */

    this.lineMouseUp = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
    /**
     * This event is fired when the Polyline is right-clicked on.
     */

    this.lineRightClick = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
    /**
     * This event is fired after Polyline's path changes.
     */

    this.polyPathChange = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
    this._polylineAddedToManager = false;
    this._subscriptions = [];
    this._id = (polylineId++).toString();
  }
  /** @internal */


  (0,D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__.default)(AgmPolyline, [{
    key: "ngAfterContentInit",
    value: function ngAfterContentInit() {
      var _this75 = this;

      if (this.points.length) {
        this.points.forEach(function (point) {
          var s = point.positionChanged.subscribe(function () {
            _this75._polylineManager.updatePolylinePoints(_this75);
          });

          _this75._subscriptions.push(s);
        });
      }

      if (!this._polylineAddedToManager) {
        this._init();
      }

      var pointSub = this.points.changes.subscribe(function () {
        return _this75._polylineManager.updatePolylinePoints(_this75);
      });

      this._subscriptions.push(pointSub);

      this._polylineManager.updatePolylinePoints(this);

      var iconSub = this.iconSequences.changes.subscribe(function () {
        return _this75._polylineManager.updateIconSequences(_this75);
      });

      this._subscriptions.push(iconSub);
    }
  }, {
    key: "ngOnChanges",
    value: function ngOnChanges(changes) {
      if (!this._polylineAddedToManager) {
        this._init();

        return;
      }

      var options = {};
      var optionKeys = Object.keys(changes).filter(function (k) {
        return AgmPolyline_1._polylineOptionsAttributes.indexOf(k) !== -1;
      });
      optionKeys.forEach(function (k) {
        return options[k] = changes[k].currentValue;
      });

      this._polylineManager.setPolylineOptions(this, options);
    }
  }, {
    key: "getPath",
    value: function getPath() {
      return this._polylineManager.getPath(this);
    }
  }, {
    key: "_init",
    value: function _init() {
      this._polylineManager.addPolyline(this);

      this._polylineAddedToManager = true;

      this._addEventListeners();
    }
  }, {
    key: "_addEventListeners",
    value: function _addEventListeners() {
      var _this76 = this;

      var handlers = [{
        name: 'click',
        handler: function handler(ev) {
          return _this76.lineClick.emit(ev);
        }
      }, {
        name: 'dblclick',
        handler: function handler(ev) {
          return _this76.lineDblClick.emit(ev);
        }
      }, {
        name: 'drag',
        handler: function handler(ev) {
          return _this76.lineDrag.emit(ev);
        }
      }, {
        name: 'dragend',
        handler: function handler(ev) {
          return _this76.lineDragEnd.emit(ev);
        }
      }, {
        name: 'dragstart',
        handler: function handler(ev) {
          return _this76.lineDragStart.emit(ev);
        }
      }, {
        name: 'mousedown',
        handler: function handler(ev) {
          return _this76.lineMouseDown.emit(ev);
        }
      }, {
        name: 'mousemove',
        handler: function handler(ev) {
          return _this76.lineMouseMove.emit(ev);
        }
      }, {
        name: 'mouseout',
        handler: function handler(ev) {
          return _this76.lineMouseOut.emit(ev);
        }
      }, {
        name: 'mouseover',
        handler: function handler(ev) {
          return _this76.lineMouseOver.emit(ev);
        }
      }, {
        name: 'mouseup',
        handler: function handler(ev) {
          return _this76.lineMouseUp.emit(ev);
        }
      }, {
        name: 'rightclick',
        handler: function handler(ev) {
          return _this76.lineRightClick.emit(ev);
        }
      }];
      handlers.forEach(function (obj) {
        var os = _this76._polylineManager.createEventObservable(obj.name, _this76).subscribe(obj.handler);

        _this76._subscriptions.push(os);
      });

      this._polylineManager.createPathEventObservable(this).then(function (ob$) {
        var os = ob$.subscribe(function (pathEvent) {
          return _this76.polyPathChange.emit(pathEvent);
        });

        _this76._subscriptions.push(os);
      });
    }
    /** @internal */

  }, {
    key: "_getPoints",
    value: function _getPoints() {
      if (this.points) {
        return this.points.toArray();
      }

      return [];
    }
  }, {
    key: "_getIcons",
    value: function _getIcons() {
      if (this.iconSequences) {
        return this.iconSequences.toArray();
      }

      return [];
    }
    /** @internal */

  }, {
    key: "id",
    value: function id() {
      return this._id;
    }
    /** @internal */

  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this._polylineManager.deletePolyline(this); // unsubscribe all registered observable subscriptions


      this._subscriptions.forEach(function (s) {
        return s.unsubscribe();
      });
    }
  }]);

  return AgmPolyline;
}();

AgmPolyline.ɵfac = function AgmPolyline_Factory(t) {
  return new (t || AgmPolyline)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](PolylineManager));
};

AgmPolyline.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineDirective"]({
  type: AgmPolyline,
  selectors: [["agm-polyline"]],
  contentQueries: function AgmPolyline_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵcontentQuery"](dirIndex, AgmPolylinePoint, 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵcontentQuery"](dirIndex, AgmPolylineIcon, 4);
    }

    if (rf & 2) {
      var _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.points = _t);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.iconSequences = _t);
    }
  },
  inputs: {
    clickable: "clickable",
    draggable: ["polylineDraggable", "draggable"],
    editable: "editable",
    geodesic: "geodesic",
    visible: "visible",
    strokeColor: "strokeColor",
    strokeOpacity: "strokeOpacity",
    strokeWeight: "strokeWeight",
    zIndex: "zIndex"
  },
  outputs: {
    lineClick: "lineClick",
    lineDblClick: "lineDblClick",
    lineDrag: "lineDrag",
    lineDragEnd: "lineDragEnd",
    lineDragStart: "lineDragStart",
    lineMouseDown: "lineMouseDown",
    lineMouseMove: "lineMouseMove",
    lineMouseOut: "lineMouseOut",
    lineMouseOver: "lineMouseOver",
    lineMouseUp: "lineMouseUp",
    lineRightClick: "lineRightClick",
    polyPathChange: "polyPathChange"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵNgOnChangesFeature"]]
});
AgmPolyline._polylineOptionsAttributes = ['draggable', 'editable', 'visible', 'geodesic', 'strokeColor', 'strokeOpacity', 'strokeWeight', 'zIndex'];

AgmPolyline.ctorParameters = function () {
  return [{
    type: PolylineManager
  }];
};

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Object)], AgmPolyline.prototype, "clickable", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)('polylineDraggable'), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Object)], AgmPolyline.prototype, "draggable", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Object)], AgmPolyline.prototype, "editable", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Object)], AgmPolyline.prototype, "geodesic", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", String)], AgmPolyline.prototype, "strokeColor", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Number)], AgmPolyline.prototype, "strokeOpacity", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Number)], AgmPolyline.prototype, "strokeWeight", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Object)], AgmPolyline.prototype, "visible", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Number)], AgmPolyline.prototype, "zIndex", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Output)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter)], AgmPolyline.prototype, "lineClick", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Output)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter)], AgmPolyline.prototype, "lineDblClick", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Output)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter)], AgmPolyline.prototype, "lineDrag", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Output)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter)], AgmPolyline.prototype, "lineDragEnd", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Output)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter)], AgmPolyline.prototype, "lineDragStart", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Output)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter)], AgmPolyline.prototype, "lineMouseDown", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Output)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter)], AgmPolyline.prototype, "lineMouseMove", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Output)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter)], AgmPolyline.prototype, "lineMouseOut", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Output)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter)], AgmPolyline.prototype, "lineMouseOver", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Output)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter)], AgmPolyline.prototype, "lineMouseUp", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Output)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter)], AgmPolyline.prototype, "lineRightClick", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Output)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Object)], AgmPolyline.prototype, "polyPathChange", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.ContentChildren)(AgmPolylinePoint), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_7__.QueryList)], AgmPolyline.prototype, "points", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.ContentChildren)(AgmPolylineIcon), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_7__.QueryList)], AgmPolyline.prototype, "iconSequences", void 0);

AgmPolyline = AgmPolyline_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:paramtypes", [PolylineManager])], AgmPolyline);
var AgmRectangle_1;

var AgmRectangle = AgmRectangle_1 = /*#__PURE__*/function () {
  function AgmRectangle(_manager) {
    (0,D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__.default)(this, AgmRectangle);

    this._manager = _manager;
    /**
     * Indicates whether this Rectangle handles mouse events. Defaults to true.
     */

    this.clickable = true;
    /**
     * If set to true, the user can drag this rectangle over the map. Defaults to false.
     */
    // tslint:disable-next-line:no-input-rename

    this.draggable = false;
    /**
     * If set to true, the user can edit this rectangle by dragging the control points shown at
     * the center and around the circumference of the rectangle. Defaults to false.
     */

    this.editable = false;
    /**
     * The stroke position. Defaults to CENTER.
     * This property is not supported on Internet Explorer 8 and earlier.
     */

    this.strokePosition = 'CENTER';
    /**
     * The stroke width in pixels.
     */

    this.strokeWeight = 0;
    /**
     * Whether this rectangle is visible on the map. Defaults to true.
     */

    this.visible = true;
    /**
     * This event is fired when the rectangle's is changed.
     */

    this.boundsChange = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
    /**
     * This event emitter gets emitted when the user clicks on the rectangle.
     */

    this.rectangleClick = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
    /**
     * This event emitter gets emitted when the user clicks on the rectangle.
     */

    this.rectangleDblClick = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
    /**
     * This event is repeatedly fired while the user drags the rectangle.
     */

    this.drag = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
    /**
     * This event is fired when the user stops dragging the rectangle.
     */

    this.dragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
    /**
     * This event is fired when the user starts dragging the rectangle.
     */

    this.dragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
    /**
     * This event is fired when the DOM mousedown event is fired on the rectangle.
     */

    this.mouseDown = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
    /**
     * This event is fired when the DOM mousemove event is fired on the rectangle.
     */

    this.mouseMove = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
    /**
     * This event is fired on rectangle mouseout.
     */

    this.mouseOut = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
    /**
     * This event is fired on rectangle mouseover.
     */

    this.mouseOver = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
    /**
     * This event is fired when the DOM mouseup event is fired on the rectangle.
     */

    this.mouseUp = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
    /**
     * This event is fired when the rectangle is right-clicked on.
     */

    this.rightClick = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
    this._rectangleAddedToManager = false;
    this._eventSubscriptions = [];
  }
  /** @internal */


  (0,D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__.default)(AgmRectangle, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      this._manager.addRectangle(this);

      this._rectangleAddedToManager = true;

      this._registerEventListeners();
    }
    /** @internal */

  }, {
    key: "ngOnChanges",
    value: function ngOnChanges(changes) {
      if (!this._rectangleAddedToManager) {
        return;
      }

      if (changes['north'] || changes['east'] || changes['south'] || changes['west']) {
        this._manager.setBounds(this);
      }

      if (changes['editable']) {
        this._manager.setEditable(this);
      }

      if (changes['draggable']) {
        this._manager.setDraggable(this);
      }

      if (changes['visible']) {
        this._manager.setVisible(this);
      }

      this._updateRectangleOptionsChanges(changes);
    }
  }, {
    key: "_updateRectangleOptionsChanges",
    value: function _updateRectangleOptionsChanges(changes) {
      var options = {};
      var optionKeys = Object.keys(changes).filter(function (k) {
        return AgmRectangle_1._mapOptions.indexOf(k) !== -1;
      });
      optionKeys.forEach(function (k) {
        options[k] = changes[k].currentValue;
      });

      if (optionKeys.length > 0) {
        this._manager.setOptions(this, options);
      }
    }
  }, {
    key: "_registerEventListeners",
    value: function _registerEventListeners() {
      var _this77 = this;

      var events = new Map();
      events.set('bounds_changed', this.boundsChange);
      events.set('click', this.rectangleClick);
      events.set('dblclick', this.rectangleDblClick);
      events.set('drag', this.drag);
      events.set('dragend', this.dragEnd);
      events.set('dragStart', this.dragStart);
      events.set('mousedown', this.mouseDown);
      events.set('mousemove', this.mouseMove);
      events.set('mouseout', this.mouseOut);
      events.set('mouseover', this.mouseOver);
      events.set('mouseup', this.mouseUp);
      events.set('rightclick', this.rightClick);
      events.forEach(function (eventEmitter, eventName) {
        _this77._eventSubscriptions.push(_this77._manager.createEventObservable(eventName, _this77).subscribe(function (value) {
          switch (eventName) {
            case 'bounds_changed':
              _this77._manager.getBounds(_this77).then(function (bounds) {
                return eventEmitter.emit({
                  north: bounds.getNorthEast().lat(),
                  east: bounds.getNorthEast().lng(),
                  south: bounds.getSouthWest().lat(),
                  west: bounds.getSouthWest().lng()
                });
              });

              break;

            default:
              eventEmitter.emit({
                coords: {
                  lat: value.latLng.lat(),
                  lng: value.latLng.lng()
                }
              });
          }
        }));
      });
    }
    /** @internal */

  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this._eventSubscriptions.forEach(function (s) {
        s.unsubscribe();
      });

      this._eventSubscriptions = null;

      this._manager.removeRectangle(this);
    }
    /**
     * Gets the LatLngBounds of this Rectangle.
     */

  }, {
    key: "getBounds",
    value: function getBounds() {
      return this._manager.getBounds(this);
    }
  }]);

  return AgmRectangle;
}();

AgmRectangle.ɵfac = function AgmRectangle_Factory(t) {
  return new (t || AgmRectangle)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](RectangleManager));
};

AgmRectangle.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineDirective"]({
  type: AgmRectangle,
  selectors: [["agm-rectangle"]],
  inputs: {
    clickable: "clickable",
    draggable: ["rectangleDraggable", "draggable"],
    editable: "editable",
    strokePosition: "strokePosition",
    strokeWeight: "strokeWeight",
    visible: "visible",
    north: "north",
    east: "east",
    south: "south",
    west: "west",
    fillColor: "fillColor",
    fillOpacity: "fillOpacity",
    strokeColor: "strokeColor",
    strokeOpacity: "strokeOpacity",
    zIndex: "zIndex"
  },
  outputs: {
    boundsChange: "boundsChange",
    rectangleClick: "rectangleClick",
    rectangleDblClick: "rectangleDblClick",
    drag: "drag",
    dragEnd: "dragEnd",
    dragStart: "dragStart",
    mouseDown: "mouseDown",
    mouseMove: "mouseMove",
    mouseOut: "mouseOut",
    mouseOver: "mouseOver",
    mouseUp: "mouseUp",
    rightClick: "rightClick"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵNgOnChangesFeature"]]
});
AgmRectangle._mapOptions = ['fillColor', 'fillOpacity', 'strokeColor', 'strokeOpacity', 'strokePosition', 'strokeWeight', 'visible', 'zIndex', 'clickable'];

AgmRectangle.ctorParameters = function () {
  return [{
    type: RectangleManager
  }];
};

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Number)], AgmRectangle.prototype, "north", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Number)], AgmRectangle.prototype, "east", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Number)], AgmRectangle.prototype, "south", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Number)], AgmRectangle.prototype, "west", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Object)], AgmRectangle.prototype, "clickable", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)('rectangleDraggable'), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Object)], AgmRectangle.prototype, "draggable", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Object)], AgmRectangle.prototype, "editable", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", String)], AgmRectangle.prototype, "fillColor", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Number)], AgmRectangle.prototype, "fillOpacity", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", String)], AgmRectangle.prototype, "strokeColor", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Number)], AgmRectangle.prototype, "strokeOpacity", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", String)], AgmRectangle.prototype, "strokePosition", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Object)], AgmRectangle.prototype, "strokeWeight", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Object)], AgmRectangle.prototype, "visible", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Number)], AgmRectangle.prototype, "zIndex", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Output)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter)], AgmRectangle.prototype, "boundsChange", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Output)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter)], AgmRectangle.prototype, "rectangleClick", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Output)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter)], AgmRectangle.prototype, "rectangleDblClick", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Output)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter)], AgmRectangle.prototype, "drag", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Output)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter)], AgmRectangle.prototype, "dragEnd", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Output)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter)], AgmRectangle.prototype, "dragStart", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Output)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter)], AgmRectangle.prototype, "mouseDown", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Output)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter)], AgmRectangle.prototype, "mouseMove", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Output)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter)], AgmRectangle.prototype, "mouseOut", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Output)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter)], AgmRectangle.prototype, "mouseOver", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Output)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter)], AgmRectangle.prototype, "mouseUp", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Output)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter)], AgmRectangle.prototype, "rightClick", void 0);

AgmRectangle = AgmRectangle_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:paramtypes", [RectangleManager])], AgmRectangle);
var layerId$3 = 0;
/*
 * This directive adds a transit layer to a google map instance
 * <agm-transit-layer [visible]="true|false"> <agm-transit-layer>
 * */

var AgmTransitLayer = /*#__PURE__*/function () {
  function AgmTransitLayer(_manager) {
    (0,D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__.default)(this, AgmTransitLayer);

    this._manager = _manager;
    this._addedToManager = false;
    this._id = (layerId$3++).toString();
    /**
     * Hide/show transit layer
     */

    this.visible = true;
  }

  (0,D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__.default)(AgmTransitLayer, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      if (this._addedToManager) {
        return;
      }

      this._manager.addTransitLayer(this, {
        visible: this.visible
      });

      this._addedToManager = true;
    }
  }, {
    key: "ngOnChanges",
    value: function ngOnChanges(changes) {
      if (!this._addedToManager) {
        return;
      }

      if (changes['visible'] != null) {
        this._manager.toggleLayerVisibility(this, {
          visible: changes['visible'].currentValue
        });
      }
    }
    /** @internal */

  }, {
    key: "id",
    value: function id() {
      return this._id;
    }
    /** @internal */

  }, {
    key: "toString",
    value: function toString() {
      return "AgmTransitLayer-".concat(this._id.toString());
    }
    /** @internal */

  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this._manager.deleteLayer(this);
    }
  }]);

  return AgmTransitLayer;
}();

AgmTransitLayer.ɵfac = function AgmTransitLayer_Factory(t) {
  return new (t || AgmTransitLayer)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](LayerManager));
};

AgmTransitLayer.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineDirective"]({
  type: AgmTransitLayer,
  selectors: [["agm-transit-layer"]],
  inputs: {
    visible: "visible"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵNgOnChangesFeature"]]
});

AgmTransitLayer.ctorParameters = function () {
  return [{
    type: LayerManager
  }];
};

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Object)], AgmTransitLayer.prototype, "visible", void 0);

AgmTransitLayer = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:paramtypes", [LayerManager])], AgmTransitLayer);
var google$1;
var SymbolPath;

(function (SymbolPath) {
  SymbolPath[SymbolPath["BACKWARD_CLOSED_ARROW"] = 3] = "BACKWARD_CLOSED_ARROW";
  SymbolPath[SymbolPath["BACKWARD_OPEN_ARROW"] = 4] = "BACKWARD_OPEN_ARROW";
  SymbolPath[SymbolPath["CIRCLE"] = 0] = "CIRCLE";
  SymbolPath[SymbolPath["FORWARD_CLOSED_ARROW"] = 1] = "FORWARD_CLOSED_ARROW";
  SymbolPath[SymbolPath["FORWARD_OPEN_ARROW"] = 2] = "FORWARD_OPEN_ARROW";
})(SymbolPath || (SymbolPath = {}));
/**
 * Identifiers used to specify the placement of controls on the map. Controls are
 * positioned relative to other controls in the same layout position. Controls that
 * are added first are positioned closer to the edge of the map.
 */


var ControlPosition;

(function (ControlPosition) {
  ControlPosition[ControlPosition["RIGHT_BOTTOM"] = 0] = "RIGHT_BOTTOM";
  ControlPosition[ControlPosition["TOP_LEFT"] = 1] = "TOP_LEFT";
  ControlPosition[ControlPosition["TOP_CENTER"] = 2] = "TOP_CENTER";
  ControlPosition[ControlPosition["TOP_RIGHT"] = 3] = "TOP_RIGHT";
  ControlPosition[ControlPosition["LEFT_CENTER"] = 4] = "LEFT_CENTER";
  ControlPosition[ControlPosition["LEFT_TOP"] = 5] = "LEFT_TOP";
  ControlPosition[ControlPosition["LEFT_BOTTOM"] = 6] = "LEFT_BOTTOM";
  ControlPosition[ControlPosition["RIGHT_TOP"] = 7] = "RIGHT_TOP";
  ControlPosition[ControlPosition["RIGHT_CENTER"] = 8] = "RIGHT_CENTER";
  ControlPosition[ControlPosition["BOTTOM_RIGHT"] = 9] = "BOTTOM_RIGHT";
  ControlPosition[ControlPosition["BOTTOM_LEFT"] = 10] = "BOTTOM_LEFT";
  ControlPosition[ControlPosition["BOTTOM_CENTER"] = 11] = "BOTTOM_CENTER";
})(ControlPosition || (ControlPosition = {}));

var MapTypeId;

(function (MapTypeId) {
  /** This map type displays a transparent layer of major streets on satellite images. */
  MapTypeId[MapTypeId["HYBRID"] = 0] = "HYBRID";
  /** This map type displays a normal street map. */

  MapTypeId[MapTypeId["ROADMAP"] = 1] = "ROADMAP";
  /** This map type displays satellite images. */

  MapTypeId[MapTypeId["SATELLITE"] = 2] = "SATELLITE";
  /** This map type displays maps with physical features such as terrain and vegetation. */

  MapTypeId[MapTypeId["TERRAIN"] = 3] = "TERRAIN";
})(MapTypeId || (MapTypeId = {}));

var MapTypeControlStyle;

(function (MapTypeControlStyle) {
  MapTypeControlStyle[MapTypeControlStyle["DEFAULT"] = 0] = "DEFAULT";
  MapTypeControlStyle[MapTypeControlStyle["DROPDOWN_MENU"] = 2] = "DROPDOWN_MENU";
  MapTypeControlStyle[MapTypeControlStyle["HORIZONTAL_BAR"] = 1] = "HORIZONTAL_BAR";
})(MapTypeControlStyle || (MapTypeControlStyle = {}));

var ScaleControlStyle;

(function (ScaleControlStyle) {
  ScaleControlStyle[ScaleControlStyle["DEFAULT"] = 0] = "DEFAULT";
})(ScaleControlStyle || (ScaleControlStyle = {}));

var ZoomControlStyle;

(function (ZoomControlStyle) {
  ZoomControlStyle[ZoomControlStyle["DEFAULT"] = 0] = "DEFAULT";
  ZoomControlStyle[ZoomControlStyle["LARGE"] = 1] = "LARGE";
  ZoomControlStyle[ZoomControlStyle["SMALL"] = 2] = "SMALL";
})(ZoomControlStyle || (ZoomControlStyle = {}));

var GeocoderLocationType;

(function (GeocoderLocationType) {
  GeocoderLocationType["APPROXIMATE"] = "APPROXIMATE";
  GeocoderLocationType["GEOMETRIC_CENTER"] = "GEOMETRIC_CENTER";
  GeocoderLocationType["RANGE_INTERPOLATED"] = "RANGE_INTERPOLATED";
  GeocoderLocationType["ROOFTOP"] = "ROOFTOP";
})(GeocoderLocationType || (GeocoderLocationType = {}));

var GeocoderStatus;

(function (GeocoderStatus) {
  GeocoderStatus["ERROR"] = "ERROR";
  GeocoderStatus["INVALID_REQUEST"] = "INVALID_REQUEST";
  GeocoderStatus["OK"] = "OK";
  GeocoderStatus["OVER_QUERY_LIMIT"] = "OVER_QUERY_LIMIT";
  GeocoderStatus["REQUEST_DENIED"] = "REQUEST_DENIED";
  GeocoderStatus["UNKNOWN_ERROR"] = "UNKNOWN_ERROR";
  GeocoderStatus["ZERO_RESULTS"] = "ZERO_RESULTS";
})(GeocoderStatus || (GeocoderStatus = {}));

var AgmGeocoder = /*#__PURE__*/function () {
  function AgmGeocoder(loader) {
    var _this78 = this;

    (0,D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__.default)(this, AgmGeocoder);

    var connectableGeocoder$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Observable(function (subscriber) {
      loader.load().then(function () {
        return subscriber.next();
      });
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.map)(function () {
      return _this78._createGeocoder();
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_27__.multicast)(new rxjs__WEBPACK_IMPORTED_MODULE_26__.ReplaySubject(1)));
    connectableGeocoder$.connect(); // ignore the subscription
    // since we will remain subscribed till application exits

    this.geocoder$ = connectableGeocoder$;
  }

  (0,D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__.default)(AgmGeocoder, [{
    key: "geocode",
    value: function geocode(request) {
      var _this79 = this;

      return this.geocoder$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.switchMap)(function (geocoder) {
        return _this79._getGoogleResults(geocoder, request);
      }));
    }
  }, {
    key: "_getGoogleResults",
    value: function _getGoogleResults(geocoder, request) {
      var geocodeObservable = (0,rxjs__WEBPACK_IMPORTED_MODULE_28__.bindCallback)(geocoder.geocode);
      return geocodeObservable(request).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.switchMap)(function (_ref6) {
        var _ref7 = (0,D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.default)(_ref6, 2),
            results = _ref7[0],
            status = _ref7[1];

        if (status === GeocoderStatus.OK) {
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_29__.of)(results);
        }

        return (0,rxjs__WEBPACK_IMPORTED_MODULE_30__.throwError)(status);
      }));
    }
  }, {
    key: "_createGeocoder",
    value: function _createGeocoder() {
      return new google.maps.Geocoder();
    }
  }]);

  return AgmGeocoder;
}();

AgmGeocoder.ɵfac = function AgmGeocoder_Factory(t) {
  return new (t || AgmGeocoder)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](MapsAPILoader));
};

AgmGeocoder.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({
  token: AgmGeocoder,
  factory: function factory(t) {
    return AgmGeocoder.ɵfac(t);
  },
  providedIn: 'root'
});

AgmGeocoder.ctorParameters = function () {
  return [{
    type: MapsAPILoader
  }];
};

AgmGeocoder.ngInjectableDef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"])({
  factory: function AgmGeocoder_Factory() {
    return new AgmGeocoder((0,_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"])(MapsAPILoader));
  },
  token: AgmGeocoder,
  providedIn: "root"
});
AgmGeocoder = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:paramtypes", [MapsAPILoader])], AgmGeocoder);

var WindowRef = /*#__PURE__*/function () {
  function WindowRef() {
    (0,D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__.default)(this, WindowRef);
  }

  (0,D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__.default)(WindowRef, [{
    key: "getNativeWindow",
    value: function getNativeWindow() {
      return window;
    }
  }]);

  return WindowRef;
}();

var DocumentRef = /*#__PURE__*/function () {
  function DocumentRef() {
    (0,D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__.default)(this, DocumentRef);
  }

  (0,D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__.default)(DocumentRef, [{
    key: "getNativeDocument",
    value: function getNativeDocument() {
      return document;
    }
  }]);

  return DocumentRef;
}();

var BROWSER_GLOBALS_PROVIDERS = [WindowRef, DocumentRef];
var GoogleMapsScriptProtocol;

(function (GoogleMapsScriptProtocol) {
  GoogleMapsScriptProtocol[GoogleMapsScriptProtocol["HTTP"] = 1] = "HTTP";
  GoogleMapsScriptProtocol[GoogleMapsScriptProtocol["HTTPS"] = 2] = "HTTPS";
  GoogleMapsScriptProtocol[GoogleMapsScriptProtocol["AUTO"] = 3] = "AUTO";
})(GoogleMapsScriptProtocol || (GoogleMapsScriptProtocol = {}));
/**
 * Token for the config of the LazyMapsAPILoader. Please provide an object of type {@link
 * LazyMapsAPILoaderConfig}.
 */


var LAZY_MAPS_API_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.InjectionToken('angular-google-maps LAZY_MAPS_API_CONFIG');

var LazyMapsAPILoader = /*#__PURE__*/function (_MapsAPILoader) {
  (0,D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_0__.default)(LazyMapsAPILoader, _MapsAPILoader);

  var _super = (0,D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_1__.default)(LazyMapsAPILoader);

  function LazyMapsAPILoader() {
    var _this80;

    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var w = arguments.length > 1 ? arguments[1] : undefined;
    var d = arguments.length > 2 ? arguments[2] : undefined;
    var localeId = arguments.length > 3 ? arguments[3] : undefined;

    (0,D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__.default)(this, LazyMapsAPILoader);

    _this80 = _super.call(this);
    _this80.localeId = localeId;
    _this80._SCRIPT_ID = 'agmGoogleMapsApiScript';
    _this80.callbackName = "agmLazyMapsAPILoader";
    _this80._config = config || {};
    _this80._windowRef = w;
    _this80._documentRef = d;
    return _this80;
  }

  (0,D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__.default)(LazyMapsAPILoader, [{
    key: "load",
    value: function load() {
      var window = this._windowRef.getNativeWindow();

      if (window.google && window.google.maps) {
        // Google maps already loaded on the page.
        return Promise.resolve();
      }

      if (this._scriptLoadingPromise) {
        return this._scriptLoadingPromise;
      } // this can happen in HMR situations or Stackblitz.io editors.


      var scriptOnPage = this._documentRef.getNativeDocument().getElementById(this._SCRIPT_ID);

      if (scriptOnPage) {
        this._assignScriptLoadingPromise(scriptOnPage);

        return this._scriptLoadingPromise;
      }

      var script = this._documentRef.getNativeDocument().createElement('script');

      script.type = 'text/javascript';
      script.async = true;
      script.defer = true;
      script.id = this._SCRIPT_ID;
      script.src = this._getScriptSrc(this.callbackName);

      this._assignScriptLoadingPromise(script);

      this._documentRef.getNativeDocument().body.appendChild(script);

      return this._scriptLoadingPromise;
    }
  }, {
    key: "_assignScriptLoadingPromise",
    value: function _assignScriptLoadingPromise(scriptElem) {
      var _this81 = this;

      this._scriptLoadingPromise = new Promise(function (resolve, reject) {
        _this81._windowRef.getNativeWindow()[_this81.callbackName] = function () {
          resolve();
        };

        scriptElem.onerror = function (error) {
          reject(error);
        };
      });
    }
  }, {
    key: "_getScriptSrc",
    value: function _getScriptSrc(callbackName) {
      var protocolType = this._config && this._config.protocol || GoogleMapsScriptProtocol.HTTPS;
      var protocol;

      switch (protocolType) {
        case GoogleMapsScriptProtocol.AUTO:
          protocol = '';
          break;

        case GoogleMapsScriptProtocol.HTTP:
          protocol = 'http:';
          break;

        case GoogleMapsScriptProtocol.HTTPS:
          protocol = 'https:';
          break;
      }

      var hostAndPath = this._config.hostAndPath || 'maps.googleapis.com/maps/api/js';
      var queryParams = {
        v: this._config.apiVersion || 'quarterly',
        callback: callbackName,
        key: this._config.apiKey,
        client: this._config.clientId,
        channel: this._config.channel,
        libraries: this._config.libraries,
        region: this._config.region,
        language: this._config.language || this.localeId !== 'en-US' ? this.localeId : null
      };
      var params = Object.keys(queryParams).filter(function (k) {
        return queryParams[k] != null;
      }).filter(function (k) {
        // remove empty arrays
        return !Array.isArray(queryParams[k]) || Array.isArray(queryParams[k]) && queryParams[k].length > 0;
      }).map(function (k) {
        // join arrays as comma seperated strings
        var i = queryParams[k];

        if (Array.isArray(i)) {
          return {
            key: k,
            value: i.join(',')
          };
        }

        return {
          key: k,
          value: queryParams[k]
        };
      }).map(function (entry) {
        return "".concat(entry.key, "=").concat(entry.value);
      }).join('&');
      return "".concat(protocol, "//").concat(hostAndPath, "?").concat(params);
    }
  }]);

  return LazyMapsAPILoader;
}(MapsAPILoader);

LazyMapsAPILoader.ɵfac = function LazyMapsAPILoader_Factory(t) {
  return new (t || LazyMapsAPILoader)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](LAZY_MAPS_API_CONFIG, 8), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](WindowRef), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](DocumentRef), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.LOCALE_ID));
};

LazyMapsAPILoader.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({
  token: LazyMapsAPILoader,
  factory: function factory(t) {
    return LazyMapsAPILoader.ɵfac(t);
  }
});

LazyMapsAPILoader.ctorParameters = function () {
  return [{
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Optional
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Inject,
      args: [LAZY_MAPS_API_CONFIG]
    }]
  }, {
    type: WindowRef
  }, {
    type: DocumentRef
  }, {
    type: String,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Inject,
      args: [_angular_core__WEBPACK_IMPORTED_MODULE_7__.LOCALE_ID]
    }]
  }];
};

LazyMapsAPILoader = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__param)(0, (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Optional)()), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__param)(0, (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Inject)(LAZY_MAPS_API_CONFIG)), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__param)(3, (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Inject)(_angular_core__WEBPACK_IMPORTED_MODULE_7__.LOCALE_ID)), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:paramtypes", [Object, WindowRef, DocumentRef, String])], LazyMapsAPILoader);
/**
 * When using the NoOpMapsAPILoader, the Google Maps API must be added to the page via a `<script>`
 * Tag.
 * It's important that the Google Maps API script gets loaded first on the page.
 */

var NoOpMapsAPILoader = /*#__PURE__*/function () {
  function NoOpMapsAPILoader() {
    (0,D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__.default)(this, NoOpMapsAPILoader);
  }

  (0,D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__.default)(NoOpMapsAPILoader, [{
    key: "load",
    value: function load() {
      if (!window.google || !window.google.maps) {
        throw new Error('Google Maps API not loaded on page. Make sure window.google.maps is available!');
      }

      return Promise.resolve();
    }
  }]);

  return NoOpMapsAPILoader;
}(); // exported map types


var AgmCoreModule_1;
/**
 * @internal
 */

function coreDirectives() {
  return [AgmBicyclingLayer, AgmCircle, AgmDataLayer, AgmFitBounds, AgmInfoWindow, AgmKmlLayer, AgmMap, AgmMarker, AgmPolygon, AgmPolyline, AgmPolylineIcon, AgmPolylinePoint, AgmRectangle, AgmTransitLayer];
}
/**
 * The angular-google-maps core module. Contains all Directives/Services/Pipes
 * of the core module. Please use `AgmCoreModule.forRoot()` in your app module.
 */


var AgmCoreModule = AgmCoreModule_1 = /*#__PURE__*/function () {
  function AgmCoreModule() {
    (0,D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__.default)(this, AgmCoreModule);
  }

  (0,D_AppBrc_Frontend_appbrc_brandcomputers_v1_1_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__.default)(AgmCoreModule, null, [{
    key: "forRoot",
    value:
    /**
     * Please use this method when you register the module at the root level.
     */
    function forRoot(lazyMapsAPILoaderConfig) {
      return {
        ngModule: AgmCoreModule_1,
        providers: [].concat(BROWSER_GLOBALS_PROVIDERS, [{
          provide: MapsAPILoader,
          useClass: LazyMapsAPILoader
        }, {
          provide: LAZY_MAPS_API_CONFIG,
          useValue: lazyMapsAPILoaderConfig
        }])
      };
    }
  }]);

  return AgmCoreModule;
}();

AgmCoreModule.ɵfac = function AgmCoreModule_Factory(t) {
  return new (t || AgmCoreModule)();
};

AgmCoreModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
  type: AgmCoreModule
});
AgmCoreModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](MapsAPILoader, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Injectable
  }], null, null);
})();

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](GoogleMapsAPIWrapper, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Injectable
  }], function () {
    return [{
      type: MapsAPILoader
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.NgZone
    }];
  }, null);
})();

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](LayerManager, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Injectable
  }], function () {
    return [{
      type: GoogleMapsAPIWrapper
    }];
  }, null);
})();

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](AgmBicyclingLayer, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Directive,
    args: [{
      selector: 'agm-bicycling-layer'
    }]
  }], function () {
    return [{
      type: LayerManager
    }];
  }, {
    visible: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }]
  });
})();

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](CircleManager, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Injectable
  }], function () {
    return [{
      type: GoogleMapsAPIWrapper
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.NgZone
    }];
  }, null);
})();

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](AgmCircle, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Directive,
    args: [{
      selector: 'agm-circle'
    }]
  }], function () {
    return [{
      type: CircleManager
    }];
  }, {
    clickable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    draggable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input,
      args: ['circleDraggable']
    }],
    editable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    radius: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    strokePosition: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    strokeWeight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    visible: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    centerChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output
    }],
    circleClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output
    }],
    circleDblClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output
    }],
    drag: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output
    }],
    dragEnd: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output
    }],
    dragStart: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output
    }],
    mouseDown: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output
    }],
    mouseMove: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output
    }],
    mouseOut: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output
    }],
    mouseOver: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output
    }],
    mouseUp: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output
    }],
    radiusChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output
    }],
    rightClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output
    }],
    latitude: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    longitude: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    fillColor: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    fillOpacity: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    strokeColor: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    strokeOpacity: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    zIndex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }]
  });
})();

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](DataLayerManager, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Injectable
  }], function () {
    return [{
      type: GoogleMapsAPIWrapper
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.NgZone
    }];
  }, null);
})();

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](AgmDataLayer, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Directive,
    args: [{
      selector: 'agm-data-layer'
    }]
  }], function () {
    return [{
      type: DataLayerManager
    }];
  }, {
    layerClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output
    }],
    geoJson: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    style: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }]
  });
})();

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](FitBoundsService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Injectable
  }], function () {
    return [{
      type: MapsAPILoader
    }];
  }, null);
})();

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](AgmFitBounds, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Directive,
    args: [{
      selector: '[agmFitBounds]'
    }]
  }], function () {
    return [{
      type: FitBoundsAccessor,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Self
      }]
    }, {
      type: FitBoundsService
    }];
  }, {
    agmFitBounds: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }]
  });
})();

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](MarkerManager, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Injectable
  }], function () {
    return [{
      type: GoogleMapsAPIWrapper
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.NgZone
    }];
  }, null);
})();

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](InfoWindowManager, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Injectable
  }], function () {
    return [{
      type: GoogleMapsAPIWrapper
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.NgZone
    }, {
      type: MarkerManager
    }];
  }, null);
})();

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](AgmInfoWindow, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Component,
    args: [{
      selector: 'agm-info-window',
      template: "<div class='agm-info-window-content'>\n      <ng-content></ng-content>\n    </div>\n  "
    }]
  }], function () {
    return [{
      type: InfoWindowManager
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ElementRef
    }];
  }, {
    isOpen: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    infoWindowClose: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output
    }],
    latitude: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    longitude: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    disableAutoPan: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    zIndex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    maxWidth: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }]
  });
})();

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](KmlLayerManager, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Injectable
  }], function () {
    return [{
      type: GoogleMapsAPIWrapper
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.NgZone
    }];
  }, null);
})();

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](AgmKmlLayer, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Directive,
    args: [{
      selector: 'agm-kml-layer'
    }]
  }], function () {
    return [{
      type: KmlLayerManager
    }];
  }, {
    clickable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    preserveViewport: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    screenOverlays: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    suppressInfoWindows: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    url: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    zIndex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    layerClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output
    }],
    defaultViewportChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output
    }],
    statusChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output
    }]
  });
})();

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](PolygonManager, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Injectable
  }], function () {
    return [{
      type: GoogleMapsAPIWrapper
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.NgZone
    }];
  }, null);
})();

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](PolylineManager, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Injectable
  }], function () {
    return [{
      type: GoogleMapsAPIWrapper
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.NgZone
    }];
  }, null);
})();

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](RectangleManager, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Injectable
  }], function () {
    return [{
      type: GoogleMapsAPIWrapper
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.NgZone
    }];
  }, null);
})();

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](AgmMap, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Component,
    args: [{
      selector: 'agm-map',
      providers: [CircleManager, DataLayerManager, DataLayerManager, FitBoundsService, GoogleMapsAPIWrapper, InfoWindowManager, KmlLayerManager, LayerManager, MarkerManager, PolygonManager, PolylineManager, RectangleManager],
      host: {
        // todo: deprecated - we will remove it with the next version
        '[class.sebm-google-map-container]': 'true'
      },
      template: "\n              <div class='agm-map-container-inner sebm-google-map-container-inner'></div>\n              <div class='agm-map-content'>\n                <ng-content></ng-content>\n              </div>\n  ",
      styles: ["\n    .agm-map-container-inner {\n      width: inherit;\n      height: inherit;\n    }\n    .agm-map-content {\n      display:none;\n    }\n  "]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ElementRef
    }, {
      type: GoogleMapsAPIWrapper
    }, {
      type: Object,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Inject,
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_7__.PLATFORM_ID]
      }]
    }, {
      type: FitBoundsService
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.NgZone
    }];
  }, {
    longitude: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    latitude: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    zoom: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    draggable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input,
      args: ['mapDraggable']
    }],
    disableDoubleClickZoom: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    disableDefaultUI: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    scrollwheel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    keyboardShortcuts: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    styles: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    usePanning: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    fitBounds: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    scaleControl: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    mapTypeControl: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    panControl: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    rotateControl: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    fullscreenControl: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    mapTypeId: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    clickableIcons: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    showDefaultInfoWindow: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    gestureHandling: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    tilt: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    mapClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output
    }],
    mapRightClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output
    }],
    mapDblClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output
    }],
    centerChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output
    }],
    boundsChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output
    }],
    mapTypeIdChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output
    }],
    idle: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output
    }],
    zoomChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output
    }],
    mapReady: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output
    }],
    tilesLoaded: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output
    }],
    minZoom: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    maxZoom: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    controlSize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    backgroundColor: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    draggableCursor: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    draggingCursor: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    zoomControl: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    zoomControlOptions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    streetViewControl: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    streetViewControlOptions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    fitBoundsPadding: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    scaleControlOptions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    mapTypeControlOptions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    panControlOptions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    rotateControlOptions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    fullscreenControlOptions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    restriction: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }]
  });
})();

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](AgmMarker, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Directive,
    args: [{
      selector: 'agm-marker',
      providers: [{
        provide: FitBoundsAccessor,
        useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.forwardRef)(function () {
          return AgmMarker_1;
        })
      }],
      inputs: ['latitude', 'longitude', 'title', 'label', 'draggable: markerDraggable', 'iconUrl', 'openInfoWindow', 'opacity', 'visible', 'zIndex', 'animation'],
      outputs: ['markerClick', 'dragStart', 'drag', 'dragEnd', 'mouseOver', 'mouseOut']
    }]
  }], function () {
    return [{
      type: MarkerManager
    }];
  }, {
    draggable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input,
      args: ['markerDraggable']
    }],
    visible: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    openInfoWindow: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    opacity: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    zIndex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    clickable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input,
      args: ['markerClickable']
    }],
    animationChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output
    }],
    markerClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output
    }],
    markerDblClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output
    }],
    markerRightClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output
    }],
    dragStart: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output
    }],
    drag: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output
    }],
    dragEnd: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output
    }],
    mouseOver: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output
    }],
    mouseOut: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output
    }],
    infoWindow: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ContentChildren,
      args: [AgmInfoWindow]
    }],
    latitude: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    longitude: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    title: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    label: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    iconUrl: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    animation: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }]
  });
})();

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](AgmPolygon, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Directive,
    args: [{
      selector: 'agm-polygon'
    }]
  }], function () {
    return [{
      type: PolygonManager
    }];
  }, {
    clickable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    draggable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input,
      args: ['polyDraggable']
    }],
    editable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    geodesic: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    paths: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    polyClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output
    }],
    polyDblClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output
    }],
    polyDrag: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output
    }],
    polyDragEnd: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output
    }],
    polyDragStart: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output
    }],
    polyMouseDown: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output
    }],
    polyMouseMove: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output
    }],
    polyMouseOut: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output
    }],
    polyMouseOver: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output
    }],
    polyMouseUp: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output
    }],
    polyRightClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output
    }],
    polyPathsChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output
    }],
    fillColor: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    fillOpacity: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    strokeColor: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    strokeOpacity: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    strokeWeight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    visible: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    zIndex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }]
  });
})();

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](AgmPolylineIcon, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Directive,
    args: [{
      selector: 'agm-polyline agm-icon-sequence'
    }]
  }], null, {
    fixedRotation: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    offset: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    repeat: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    anchorX: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    anchorY: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    fillColor: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    fillOpacity: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    path: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    rotation: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    scale: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    strokeColor: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    strokeOpacity: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    strokeWeight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }]
  });
})();

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](AgmPolylinePoint, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Directive,
    args: [{
      selector: 'agm-polyline-point',
      providers: [{
        provide: FitBoundsAccessor,
        useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.forwardRef)(function () {
          return AgmPolylinePoint_1;
        })
      }]
    }]
  }], function () {
    return [];
  }, {
    positionChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output
    }],
    latitude: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    longitude: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }]
  });
})();

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](AgmPolyline, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Directive,
    args: [{
      selector: 'agm-polyline'
    }]
  }], function () {
    return [{
      type: PolylineManager
    }];
  }, {
    clickable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    draggable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input,
      args: ['polylineDraggable']
    }],
    editable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    geodesic: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    visible: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    lineClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output
    }],
    lineDblClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output
    }],
    lineDrag: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output
    }],
    lineDragEnd: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output
    }],
    lineDragStart: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output
    }],
    lineMouseDown: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output
    }],
    lineMouseMove: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output
    }],
    lineMouseOut: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output
    }],
    lineMouseOver: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output
    }],
    lineMouseUp: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output
    }],
    lineRightClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output
    }],
    polyPathChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output
    }],
    strokeColor: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    strokeOpacity: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    strokeWeight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    zIndex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    points: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ContentChildren,
      args: [AgmPolylinePoint]
    }],
    iconSequences: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ContentChildren,
      args: [AgmPolylineIcon]
    }]
  });
})();

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](AgmRectangle, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Directive,
    args: [{
      selector: 'agm-rectangle'
    }]
  }], function () {
    return [{
      type: RectangleManager
    }];
  }, {
    clickable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    draggable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input,
      args: ['rectangleDraggable']
    }],
    editable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    strokePosition: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    strokeWeight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    visible: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    boundsChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output
    }],
    rectangleClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output
    }],
    rectangleDblClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output
    }],
    drag: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output
    }],
    dragEnd: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output
    }],
    dragStart: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output
    }],
    mouseDown: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output
    }],
    mouseMove: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output
    }],
    mouseOut: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output
    }],
    mouseOver: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output
    }],
    mouseUp: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output
    }],
    rightClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output
    }],
    north: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    east: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    south: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    west: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    fillColor: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    fillOpacity: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    strokeColor: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    strokeOpacity: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    zIndex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }]
  });
})();

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](AgmTransitLayer, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Directive,
    args: [{
      selector: 'agm-transit-layer'
    }]
  }], function () {
    return [{
      type: LayerManager
    }];
  }, {
    visible: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }]
  });
})();

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](AgmGeocoder, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: MapsAPILoader
    }];
  }, null);
})();

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](LazyMapsAPILoader, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Injectable
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Inject,
        args: [LAZY_MAPS_API_CONFIG]
      }]
    }, {
      type: WindowRef
    }, {
      type: DocumentRef
    }, {
      type: String,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Inject,
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_7__.LOCALE_ID]
      }]
    }];
  }, null);
})();

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](AgmCoreModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule,
    args: [{
      declarations: coreDirectives(),
      exports: coreDirectives()
    }]
  }], null, null);
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AgmCoreModule, {
    declarations: [AgmBicyclingLayer, AgmCircle, AgmDataLayer, AgmFitBounds, AgmInfoWindow, AgmKmlLayer, AgmMap, AgmMarker, AgmPolygon, AgmPolyline, AgmPolylineIcon, AgmPolylinePoint, AgmRectangle, AgmTransitLayer],
    exports: [AgmBicyclingLayer, AgmCircle, AgmDataLayer, AgmFitBounds, AgmInfoWindow, AgmKmlLayer, AgmMap, AgmMarker, AgmPolygon, AgmPolyline, AgmPolylineIcon, AgmPolylinePoint, AgmRectangle, AgmTransitLayer]
  });
})(); // main modules

/**
 * Generated bundle index. Do not edit.
 */


 //# sourceMappingURL=agm-core.js.map

/***/ }),

/***/ 77528:
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardComponent": function() { return /* binding */ DashboardComponent; }
/* harmony export */ });
/* harmony import */ var _raw_loader_dashboard_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./dashboard.component.html */ 79306);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chart.js */ 6823);
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.chartClicked = function (e) {
        console.log(e);
    };
    DashboardComponent.prototype.chartHovered = function (e) {
        console.log(e);
    };
    DashboardComponent.prototype.hexToRGB = function (hex, alpha) {
        var r = parseInt(hex.slice(1, 3), 16), g = parseInt(hex.slice(3, 5), 16), b = parseInt(hex.slice(5, 7), 16);
        if (alpha) {
            return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
        }
        else {
            return "rgb(" + r + ", " + g + ", " + b + ")";
        }
    };
    DashboardComponent.prototype.ngOnInit = function () {
        this.chartColor = "#FFFFFF";
        var cardStatsMiniLineColor = "#fff", cardStatsMiniDotColor = "#fff";
        this.canvas = document.getElementById("chartActivity");
        this.ctx = this.canvas.getContext("2d");
        this.gradientStroke = this.ctx.createLinearGradient(500, 0, 100, 0);
        this.gradientStroke.addColorStop(0, '#80b6f4');
        this.gradientStroke.addColorStop(1, this.chartColor);
        this.gradientFill = this.ctx.createLinearGradient(0, 170, 0, 50);
        this.gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
        this.gradientFill.addColorStop(1, "rgba(249, 99, 59, 0.40)");
        myChart = new (chart_js__WEBPACK_IMPORTED_MODULE_1___default())(this.ctx, {
            type: 'bar',
            data: {
                labels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
                datasets: [
                    {
                        label: "Data",
                        borderColor: '#fcc468',
                        fill: true,
                        backgroundColor: '#fcc468',
                        hoverBorderColor: '#fcc468',
                        borderWidth: 8,
                        data: [100, 120, 80, 100, 90, 130, 110, 100, 80, 110, 130, 140, 130, 120, 130, 80, 100, 90, 120, 130],
                    },
                    {
                        label: "Data",
                        borderColor: '#4cbdd7',
                        fill: true,
                        backgroundColor: '#4cbdd7',
                        hoverBorderColor: '#4cbdd7',
                        borderWidth: 8,
                        data: [80, 140, 50, 120, 50, 150, 60, 130, 50, 130, 150, 100, 110, 80, 140, 50, 140, 50, 110, 150],
                    }
                ]
            },
            options: {
                tooltips: {
                    tooltipFillColor: "rgba(0,0,0,0.5)",
                    tooltipFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
                    tooltipFontSize: 14,
                    tooltipFontStyle: "normal",
                    tooltipFontColor: "#fff",
                    tooltipTitleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
                    tooltipTitleFontSize: 14,
                    tooltipTitleFontStyle: "bold",
                    tooltipTitleFontColor: "#fff",
                    tooltipYPadding: 6,
                    tooltipXPadding: 6,
                    tooltipCaretSize: 8,
                    tooltipCornerRadius: 6,
                    tooltipXOffset: 10,
                },
                legend: {
                    display: false
                },
                scales: {
                    yAxes: [{
                            ticks: {
                                fontColor: "#9f9f9f",
                                fontStyle: "bold",
                                beginAtZero: true,
                                maxTicksLimit: 5,
                                padding: 20
                            },
                            gridLines: {
                                zeroLineColor: "transparent",
                                display: true,
                                drawBorder: false,
                                color: '#9f9f9f',
                            }
                        }],
                    xAxes: [{
                            barPercentage: 0.4,
                            gridLines: {
                                zeroLineColor: "white",
                                display: false,
                                drawBorder: false,
                                color: 'transparent',
                            },
                            ticks: {
                                padding: 20,
                                fontColor: "#9f9f9f",
                                fontStyle: "bold"
                            }
                        }]
                }
            }
        });
        chart_js__WEBPACK_IMPORTED_MODULE_1___default().pluginService.register({
            beforeDraw: function (chart) {
                if (chart.config.options.elements.center) {
                    //Get ctx from string
                    var ctx = chart.chart.ctx;
                    //Get options from the center object in options
                    var centerConfig = chart.config.options.elements.center;
                    var fontStyle = centerConfig.fontStyle || 'Arial';
                    var txt = centerConfig.text;
                    var color = centerConfig.color || '#000';
                    var sidePadding = centerConfig.sidePadding || 20;
                    var sidePaddingCalculated = (sidePadding / 100) * (chart.innerRadius * 2);
                    //Start with a base font of 30px
                    ctx.font = "30px " + fontStyle;
                    //Get the width of the string and also the width of the element minus 10 to give it 5px side padding
                    var stringWidth = ctx.measureText(txt).width;
                    var elementWidth = (chart.innerRadius * 2) - sidePaddingCalculated;
                    // Find out how much the font can grow in width.
                    var widthRatio = elementWidth / stringWidth;
                    var newFontSize = Math.floor(30 * widthRatio);
                    var elementHeight = (chart.innerRadius * 2);
                    // Pick a new font size so it will not be larger than the height of label.
                    var fontSizeToUse = Math.min(newFontSize, elementHeight);
                    //Set font settings to draw it correctly.
                    ctx.textAlign = 'center';
                    ctx.textBaseline = 'middle';
                    var centerX = ((chart.chartArea.left + chart.chartArea.right) / 2);
                    var centerY = ((chart.chartArea.top + chart.chartArea.bottom) / 2);
                    ctx.font = fontSizeToUse + "px " + fontStyle;
                    ctx.fillStyle = color;
                    //Draw text in center
                    ctx.fillText(txt, centerX, centerY);
                }
            }
        });
        this.canvas = document.getElementById("chartDonut1");
        this.ctx = this.canvas.getContext("2d");
        myChart = new (chart_js__WEBPACK_IMPORTED_MODULE_1___default())(this.ctx, {
            type: 'pie',
            data: {
                labels: [1, 2],
                datasets: [{
                        label: "Emails",
                        pointRadius: 0,
                        pointHoverRadius: 0,
                        backgroundColor: ['#4acccd', '#f4f3ef'],
                        borderWidth: 0,
                        data: [60, 40]
                    }]
            },
            options: {
                elements: {
                    center: {
                        text: '60%',
                        color: '#66615c',
                        fontStyle: 'Arial',
                        sidePadding: 60 // Defualt is 20 (as a percentage)
                    }
                },
                cutoutPercentage: 90,
                legend: {
                    display: false
                },
                tooltips: {
                    enabled: false
                },
                scales: {
                    yAxes: [{
                            ticks: {
                                display: false
                            },
                            gridLines: {
                                drawBorder: false,
                                zeroLineColor: "transparent",
                                color: 'rgba(255,255,255,0.05)'
                            }
                        }],
                    xAxes: [{
                            barPercentage: 1.6,
                            gridLines: {
                                drawBorder: false,
                                color: 'rgba(255,255,255,0.1)',
                                zeroLineColor: "transparent"
                            },
                            ticks: {
                                display: false,
                            }
                        }]
                },
            }
        });
        this.canvas = document.getElementById("chartDonut2");
        this.ctx = this.canvas.getContext("2d");
        myChart = new (chart_js__WEBPACK_IMPORTED_MODULE_1___default())(this.ctx, {
            type: 'pie',
            data: {
                labels: [1, 2],
                datasets: [{
                        label: "Emails",
                        pointRadius: 0,
                        pointHoverRadius: 0,
                        backgroundColor: ['#fcc468', '#f4f3ef'],
                        borderWidth: 0,
                        data: [34, 66]
                    }]
            },
            options: {
                elements: {
                    center: {
                        text: '34%',
                        color: '#66615c',
                        fontStyle: 'Arial',
                        sidePadding: 60 // Defualt is 20 (as a percentage)
                    }
                },
                cutoutPercentage: 90,
                legend: {
                    display: false
                },
                tooltips: {
                    enabled: false
                },
                scales: {
                    yAxes: [{
                            ticks: {
                                display: false
                            },
                            gridLines: {
                                drawBorder: false,
                                zeroLineColor: "transparent",
                                color: 'rgba(255,255,255,0.05)'
                            }
                        }],
                    xAxes: [{
                            barPercentage: 1.6,
                            gridLines: {
                                drawBorder: false,
                                color: 'rgba(255,255,255,0.1)',
                                zeroLineColor: "transparent"
                            },
                            ticks: {
                                display: false,
                            }
                        }]
                },
            }
        });
        this.canvas = document.getElementById("chartDonut3");
        this.ctx = this.canvas.getContext("2d");
        myChart = new (chart_js__WEBPACK_IMPORTED_MODULE_1___default())(this.ctx, {
            type: 'pie',
            data: {
                labels: [1, 2],
                datasets: [{
                        label: "Emails",
                        pointRadius: 0,
                        pointHoverRadius: 0,
                        backgroundColor: ['#f17e5d', '#f4f3ef'],
                        borderWidth: 0,
                        data: [80, 20]
                    }]
            },
            options: {
                elements: {
                    center: {
                        text: '80%',
                        color: '#66615c',
                        fontStyle: 'Arial',
                        sidePadding: 60 // Defualt is 20 (as a percentage)
                    }
                },
                cutoutPercentage: 90,
                legend: {
                    display: false
                },
                tooltips: {
                    enabled: false
                },
                scales: {
                    yAxes: [{
                            ticks: {
                                display: false
                            },
                            gridLines: {
                                drawBorder: false,
                                zeroLineColor: "transparent",
                                color: 'rgba(255,255,255,0.05)'
                            }
                        }],
                    xAxes: [{
                            barPercentage: 1.6,
                            gridLines: {
                                drawBorder: false,
                                color: 'rgba(255,255,255,0.1)',
                                zeroLineColor: "transparent"
                            },
                            ticks: {
                                display: false,
                            }
                        }]
                },
            }
        });
        this.canvas = document.getElementById("chartDonut4");
        this.ctx = this.canvas.getContext("2d");
        myChart = new (chart_js__WEBPACK_IMPORTED_MODULE_1___default())(this.ctx, {
            type: 'pie',
            data: {
                labels: [1, 2],
                datasets: [{
                        label: "Emails",
                        pointRadius: 0,
                        pointHoverRadius: 0,
                        backgroundColor: ['#66615b', '#f4f3ef'],
                        borderWidth: 0,
                        data: [11, 89]
                    }]
            },
            options: {
                elements: {
                    center: {
                        text: '11%',
                        color: '#66615c',
                        fontStyle: 'Arial',
                        sidePadding: 60 // Defualt is 20 (as a percentage)
                    }
                },
                cutoutPercentage: 90,
                legend: {
                    display: false
                },
                tooltips: {
                    enabled: false
                },
                scales: {
                    yAxes: [{
                            ticks: {
                                display: false
                            },
                            gridLines: {
                                drawBorder: false,
                                zeroLineColor: "transparent",
                                color: 'rgba(255,255,255,0.05)'
                            }
                        }],
                    xAxes: [{
                            barPercentage: 1.6,
                            gridLines: {
                                drawBorder: false,
                                color: 'rgba(255,255,255,0.1)',
                                zeroLineColor: "transparent"
                            },
                            ticks: {
                                display: false,
                            }
                        }]
                },
            }
        });
        this.canvas = document.getElementById("activeUsers");
        this.ctx = this.canvas.getContext("2d");
        this.gradientStroke = this.ctx.createLinearGradient(500, 0, 100, 0);
        this.gradientStroke.addColorStop(0, '#80b6f4');
        this.gradientStroke.addColorStop(1, this.chartColor);
        this.gradientFill = this.ctx.createLinearGradient(0, 170, 0, 50);
        this.gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
        this.gradientFill.addColorStop(1, "rgba(249, 99, 59, 0.40)");
        myChart = new (chart_js__WEBPACK_IMPORTED_MODULE_1___default())(this.ctx, {
            type: 'line',
            data: {
                labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
                datasets: [{
                        label: "Active Users",
                        borderColor: "#6bd098",
                        pointRadius: 0,
                        pointHoverRadius: 0,
                        fill: false,
                        borderWidth: 3,
                        data: [542, 480, 430, 550, 530, 453, 380, 434, 568, 610]
                    }]
            },
            options: {
                legend: {
                    display: false
                },
                tooltips: {
                    enabled: false
                },
                scales: {
                    yAxes: [{
                            ticks: {
                                fontColor: "#9f9f9f",
                                beginAtZero: false,
                                maxTicksLimit: 5,
                                //padding: 20
                            },
                            gridLines: {
                                drawBorder: false,
                                zeroLineColor: "transparent",
                                color: 'rgba(255,255,255,0.05)'
                            }
                        }],
                    xAxes: [{
                            barPercentage: 1.6,
                            gridLines: {
                                drawBorder: false,
                                color: 'rgba(255,255,255,0.1)',
                                zeroLineColor: "transparent",
                                display: false,
                            },
                            ticks: {
                                padding: 20,
                                fontColor: "#9f9f9f"
                            }
                        }]
                },
            }
        });
        this.canvas = document.getElementById("emailsCampaignChart");
        this.ctx = this.canvas.getContext("2d");
        this.gradientStroke = this.ctx.createLinearGradient(500, 0, 100, 0);
        this.gradientStroke.addColorStop(0, '#18ce0f');
        this.gradientStroke.addColorStop(1, this.chartColor);
        this.gradientFill = this.ctx.createLinearGradient(0, 170, 0, 50);
        this.gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
        this.gradientFill.addColorStop(1, this.hexToRGB('#18ce0f', 0.4));
        var myChart = new (chart_js__WEBPACK_IMPORTED_MODULE_1___default())(this.ctx, {
            type: 'line',
            data: {
                labels: ["12pm", "3pm", "6pm", "9pm", "12am", "3am", "6am", "9am"],
                datasets: [{
                        label: "Email Stats",
                        borderColor: "#ef8156",
                        pointHoverRadius: 0,
                        pointRadius: 0,
                        fill: false,
                        backgroundColor: this.gradientFill,
                        borderWidth: 3,
                        data: [40, 500, 650, 700, 1200, 1250, 1300, 1900]
                    }]
            },
            options: {
                legend: {
                    display: false
                },
                tooltips: {
                    enabled: false
                },
                scales: {
                    yAxes: [{
                            ticks: {
                                fontColor: "#9f9f9f",
                                beginAtZero: false,
                                maxTicksLimit: 5,
                                //padding: 20
                            },
                            gridLines: {
                                drawBorder: false,
                                zeroLineColor: "transparent",
                                color: 'rgba(255,255,255,0.05)'
                            }
                        }],
                    xAxes: [{
                            barPercentage: 1.6,
                            gridLines: {
                                drawBorder: false,
                                color: 'rgba(255,255,255,0.1)',
                                zeroLineColor: "transparent",
                                display: false,
                            },
                            ticks: {
                                padding: 20,
                                fontColor: "#9f9f9f"
                            }
                        }]
                },
            }
        });
        this.canvas = document.getElementById("activeCountries");
        this.ctx = this.canvas.getContext("2d");
        this.gradientStroke = this.ctx.createLinearGradient(500, 0, 100, 0);
        this.gradientStroke.addColorStop(0, '#2CA8FF');
        this.gradientStroke.addColorStop(1, this.chartColor);
        this.gradientFill = this.ctx.createLinearGradient(0, 170, 0, 50);
        this.gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
        this.gradientFill.addColorStop(1, this.hexToRGB('#2CA8FF', 0.4));
        var a = {
            type: "line",
            data: {
                labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October"],
                datasets: [{
                        label: "Active Countries",
                        backgroundColor: this.gradientFill,
                        borderColor: "#fbc658",
                        pointHoverRadius: 0,
                        pointRadius: 0,
                        fill: false,
                        borderWidth: 3,
                        data: [80, 78, 86, 96, 83, 85, 76, 75, 88, 90]
                    }]
            },
            options: {
                legend: {
                    display: false
                },
                tooltips: {
                    enabled: false
                },
                scales: {
                    yAxes: [{
                            ticks: {
                                fontColor: "#9f9f9f",
                                beginAtZero: false,
                                maxTicksLimit: 5,
                                //padding: 20
                            },
                            gridLines: {
                                drawBorder: false,
                                zeroLineColor: "transparent",
                                color: 'rgba(255,255,255,0.05)'
                            }
                        }],
                    xAxes: [{
                            barPercentage: 1.6,
                            gridLines: {
                                drawBorder: false,
                                color: 'rgba(255,255,255,0.1)',
                                zeroLineColor: "transparent",
                                display: false,
                            },
                            ticks: {
                                padding: 20,
                                fontColor: "#9f9f9f"
                            }
                        }]
                },
            }
        };
        var viewsChart = new (chart_js__WEBPACK_IMPORTED_MODULE_1___default())(this.ctx, a);
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
    DashboardComponent = __decorate([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
            selector: 'app-dashboard',
            template: _raw_loader_dashboard_component_html__WEBPACK_IMPORTED_MODULE_0__.default
        })
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ 34814:
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.module.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardModule": function() { return /* binding */ DashboardModule; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @agm/core */ 15971);
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard.component */ 77528);
/* harmony import */ var _dashboard_routing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.routing */ 7976);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
                _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(_dashboard_routing__WEBPACK_IMPORTED_MODULE_1__.DashboardRoutes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
                _agm_core__WEBPACK_IMPORTED_MODULE_6__.AgmCoreModule.forRoot({
                    apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
                })
            ],
            declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_0__.DashboardComponent],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_2__.CUSTOM_ELEMENTS_SCHEMA]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ }),

/***/ 7976:
/*!************************************************!*\
  !*** ./src/app/dashboard/dashboard.routing.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardRoutes": function() { return /* binding */ DashboardRoutes; }
/* harmony export */ });
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard.component */ 77528);

var DashboardRoutes = [{
        path: '',
        children: [{
                path: 'dashboard',
                component: _dashboard_component__WEBPACK_IMPORTED_MODULE_0__.DashboardComponent
            }]
    }];


/***/ }),

/***/ 79306:
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\n  <div class=\"row\">\n    <div class=\"col-lg-3 col-md-6 col-sm-6\">\n      <div class=\"card card-stats\">\n        <div class=\"card-body \">\n          <div class=\"row\">\n            <div class=\"col-5 col-md-4\">\n              <div class=\"icon-big text-center icon-warning\">\n                <i class=\"nc-icon nc-globe text-warning\"></i>\n              </div>\n            </div>\n            <div class=\"col-7 col-md-8\">\n              <div class=\"numbers\">\n                <p class=\"card-category\">Capacity</p>\n                <p class=\"card-title\">150GB\n                </p>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"card-footer \">\n          <hr>\n          <div class=\"stats\">\n            <i class=\"fa fa-refresh\"></i> Update Now\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-lg-3 col-md-6 col-sm-6\">\n      <div class=\"card card-stats\">\n        <div class=\"card-body \">\n          <div class=\"row\">\n            <div class=\"col-5 col-md-4\">\n              <div class=\"icon-big text-center icon-warning\">\n                <i class=\"nc-icon nc-money-coins text-success\"></i>\n              </div>\n            </div>\n            <div class=\"col-7 col-md-8\">\n              <div class=\"numbers\">\n                <p class=\"card-category\">Revenue</p>\n                <p class=\"card-title\">$ 1,345\n                </p>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"card-footer \">\n          <hr>\n          <div class=\"stats\">\n            <i class=\"fa fa-calendar-o\"></i> Last day\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-lg-3 col-md-6 col-sm-6\">\n      <div class=\"card card-stats\">\n        <div class=\"card-body \">\n          <div class=\"row\">\n            <div class=\"col-5 col-md-4\">\n              <div class=\"icon-big text-center icon-warning\">\n                <i class=\"nc-icon nc-vector text-danger\"></i>\n              </div>\n            </div>\n            <div class=\"col-7 col-md-8\">\n              <div class=\"numbers\">\n                <p class=\"card-category\">Errors</p>\n                <p class=\"card-title\">23\n                </p>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"card-footer \">\n          <hr>\n          <div class=\"stats\">\n            <i class=\"fa fa-clock-o\"></i> In the last hour\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-lg-3 col-md-6 col-sm-6\">\n      <div class=\"card card-stats\">\n        <div class=\"card-body \">\n          <div class=\"row\">\n            <div class=\"col-5 col-md-4\">\n              <div class=\"icon-big text-center icon-warning\">\n                <i class=\"nc-icon nc-favourite-28 text-primary\"></i>\n              </div>\n            </div>\n            <div class=\"col-7 col-md-8\">\n              <div class=\"numbers\">\n                <p class=\"card-category\">Followers</p>\n                <p class=\"card-title\">+45K\n                </p>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"card-footer \">\n          <hr>\n          <div class=\"stats\">\n            <i class=\"fa fa-refresh\"></i> Update now\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_dashboard_dashboard_module_ts.js.map