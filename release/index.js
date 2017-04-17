(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@angular/core"));
	else if(typeof define === 'function' && define.amd)
		define("angular2-instagram-core", ["@angular/core"], factory);
	else if(typeof exports === 'object')
		exports["angular2-instagram-core"] = factory(require("@angular/core"));
	else
		root["angular2-instagram-core"] = factory(root["@angular/core"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/actions/filters-actions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FiltersActions; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FiltersActions = FiltersActions_1 = (function () {
    function FiltersActions() {
    }
    FiltersActions.prototype.changeContrast = function (value, type) {
        if (type === void 0) { type = 'contrast'; }
        return {
            type: FiltersActions_1.CHANGE_CONTRAST,
            payload: {
                value: value,
                type: type
            }
        };
    };
    FiltersActions.prototype.changeBrightness = function (value, type) {
        if (type === void 0) { type = 'brightness'; }
        return {
            type: FiltersActions_1.CHANGE_BRIGHTNESS,
            payload: {
                value: value,
                type: type
            }
        };
    };
    FiltersActions.prototype.changeSaturate = function (value, type) {
        if (type === void 0) { type = 'saturate'; }
        return {
            type: FiltersActions_1.CHANGE_SATURATE,
            payload: {
                value: value,
                type: type
            }
        };
    };
    FiltersActions.prototype.changeSepia = function (value, type) {
        if (type === void 0) { type = 'sepia'; }
        return {
            type: FiltersActions_1.CHANGE_SEPIA,
            payload: {
                value: value,
                type: type
            }
        };
    };
    FiltersActions.prototype.changeGrayScale = function (value, type) {
        if (type === void 0) { type = 'grayScale'; }
        return {
            type: FiltersActions_1.CHANGE_GRAYSCALE,
            payload: {
                value: value,
                type: type
            }
        };
    };
    FiltersActions.prototype.changeInvert = function (value, type) {
        if (type === void 0) { type = 'invert'; }
        return {
            type: FiltersActions_1.CHANGE_INVERT,
            payload: {
                value: value,
                type: type
            }
        };
    };
    FiltersActions.prototype.changeHueRotate = function (value, type) {
        if (type === void 0) { type = 'hueRotate'; }
        return {
            type: FiltersActions_1.CHANGE_HUEROTATE,
            payload: {
                value: value,
                type: type
            }
        };
    };
    FiltersActions.prototype.changeBlur = function (value, type) {
        if (type === void 0) { type = 'blur'; }
        return {
            type: FiltersActions_1.CHANGE_BLUR,
            payload: {
                value: value,
                type: type
            }
        };
    };
    FiltersActions.prototype.changeBlend = function (value, type) {
        if (type === void 0) { type = 'blend'; }
        return {
            type: FiltersActions_1.CHANGE_BLEND,
            payload: {
                value: value,
                type: type
            }
        };
    };
    FiltersActions.prototype.changeLoading = function (value, type) {
        if (type === void 0) { type = 'loading'; }
        return {
            type: FiltersActions_1.LOADING,
            payload: {
                value: value
            }
        };
    };
    FiltersActions.prototype.changePreset = function (_a) {
        var figureStyle = _a.figureStyle, overlayStyle = _a.overlayStyle, key = _a.key;
        return {
            type: FiltersActions_1.CHANGE_PRESET,
            payload: {
                figureStyle: figureStyle,
                overlayStyle: overlayStyle,
                key: key
            }
        };
    };
    FiltersActions.prototype.loadImages = function () {
        return {
            type: FiltersActions_1.LOAD_IMAGES,
            payload: {
                api: FiltersActions_1.API
            }
        };
    };
    FiltersActions.prototype.fetchImagesFailed = function (error) {
        return {
            type: FiltersActions_1.FETCH_IMAGES_FAILED,
            payload: {
                error: error
            }
        };
    };
    FiltersActions.prototype.fetchImagesFulfilled = function (data) {
        return {
            type: FiltersActions_1.FETCH_IMAGES_FULFILLED,
            payload: {
                data: Object.assign([], data)
            }
        };
    };
    FiltersActions.prototype.changeSelectImage = function (value, type) {
        if (type === void 0) { type = 'selectedImage'; }
        return {
            type: FiltersActions_1.CHANGE_SELECTED_IMAGE,
            payload: {
                value: value,
                type: type
            }
        };
    };
    FiltersActions.prototype.resetToDefaults = function () {
        return {
            type: FiltersActions_1.RESET_DEFAULTS
        };
    };
    return FiltersActions;
}());
FiltersActions.CHANGE_CONTRAST = 'CHANGE_CONTRAST';
FiltersActions.CHANGE_BRIGHTNESS = 'CHANGE_BRIGHTNESS';
FiltersActions.CHANGE_SATURATE = 'CHANGE_SATURATE';
FiltersActions.CHANGE_SEPIA = 'CHANGE_SEPIA';
FiltersActions.CHANGE_GRAYSCALE = 'CHANGE_GRAYSCALE';
FiltersActions.CHANGE_INVERT = 'CHANGE_INVERT';
FiltersActions.CHANGE_HUEROTATE = 'CHANGE_HUEROTATE';
FiltersActions.CHANGE_BLUR = 'CHANGE_BLUR';
FiltersActions.CHANGE_BLEND = 'CHANGE_BLEND';
FiltersActions.CHANGE_PRESET = 'CHANGE_PRESET';
FiltersActions.LOAD_IMAGES = 'LOAD_IMAGES';
FiltersActions.FETCH_IMAGES_FAILED = 'FETCH_IMAGES_FAILED';
FiltersActions.FETCH_IMAGES_FULFILLED = 'FETCH_IMAGES_FULFILLED';
FiltersActions.CHANGE_SELECTED_IMAGE = 'CHANGE_SELECTED_IMAGE';
FiltersActions.RESET_DEFAULTS = 'RESET_DEFAULTS';
FiltersActions.LOADING = 'LOADING';
FiltersActions.API = 'https://api.unsplash.com/photos/?per_page=50&client_id=86f6167ee81be7b8aea6aa0d999c1bae79b3351b43e8df03c8baaa9c630f24ba';
FiltersActions = FiltersActions_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], FiltersActions);

var FiltersActions_1;


/***/ }),

/***/ "./src/actions/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__filters_actions__ = __webpack_require__("./src/actions/filters-actions.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__filters_actions__["a"]; });



/***/ }),

/***/ "./src/angular2-instagram-core.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Angular2InstagramCoreModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Angular2InstagramCoreModule = Angular2InstagramCoreModule_1 = (function () {
    function Angular2InstagramCoreModule() {
    }
    /**
     * @description Use this method in your other (non root) modules to import the services
     * @param config
     * @returns {ModuleWithProviders}
     */
    Angular2InstagramCoreModule.forChild = function (config) {
        return {
            ngModule: Angular2InstagramCoreModule_1,
            providers: []
        };
    };
    return Angular2InstagramCoreModule;
}());
Angular2InstagramCoreModule = Angular2InstagramCoreModule_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({})
], Angular2InstagramCoreModule);

var Angular2InstagramCoreModule_1;


/***/ }),

/***/ "./src/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular2_instagram_core_module__ = __webpack_require__("./src/angular2-instagram-core.module.ts");
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Angular2InstagramCoreModule", function() { return __WEBPACK_IMPORTED_MODULE_0__angular2_instagram_core_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions__ = __webpack_require__("./src/actions/index.ts");
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "FiltersActions", function() { return __WEBPACK_IMPORTED_MODULE_1__actions__["a"]; });




/***/ }),

/***/ 0:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ })

/******/ });
});
//# sourceMappingURL=index.map