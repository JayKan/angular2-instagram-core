(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@angular/http"), require("rxjs/add/operator/map"), require("rxjs/add/operator/let"), require("rxjs/add/operator/do"), require("rxjs/add/operator/distinctUntilChanged"), require("rxjs/add/operator/catch"), require("rxjs/add/observable/throw"), require("rxjs/add/observable/of"), require("rxjs/Observable"), require("immutable"), require("@ngrx/store"), require("@ngrx/effects"), require("@angular/core"), require("@ngrx/core/add/operator/select"), require("rxjs/add/operator/switchMap"));
	else if(typeof define === 'function' && define.amd)
		define("angular2-instagram-core", ["@angular/http", "rxjs/add/operator/map", "rxjs/add/operator/let", "rxjs/add/operator/do", "rxjs/add/operator/distinctUntilChanged", "rxjs/add/operator/catch", "rxjs/add/observable/throw", "rxjs/add/observable/of", "rxjs/Observable", "immutable", "@ngrx/store", "@ngrx/effects", "@angular/core", "@ngrx/core/add/operator/select", "rxjs/add/operator/switchMap"], factory);
	else if(typeof exports === 'object')
		exports["angular2-instagram-core"] = factory(require("@angular/http"), require("rxjs/add/operator/map"), require("rxjs/add/operator/let"), require("rxjs/add/operator/do"), require("rxjs/add/operator/distinctUntilChanged"), require("rxjs/add/operator/catch"), require("rxjs/add/observable/throw"), require("rxjs/add/observable/of"), require("rxjs/Observable"), require("immutable"), require("@ngrx/store"), require("@ngrx/effects"), require("@angular/core"), require("@ngrx/core/add/operator/select"), require("rxjs/add/operator/switchMap"));
	else
		root["angular2-instagram-core"] = factory(root["@angular/http"], root["rxjs/add/operator/map"], root["rxjs/add/operator/let"], root["rxjs/add/operator/do"], root["rxjs/add/operator/distinctUntilChanged"], root["rxjs/add/operator/catch"], root["rxjs/add/observable/throw"], root["rxjs/add/observable/of"], root["rxjs/Observable"], root["immutable"], root["@ngrx/store"], root["@ngrx/effects"], root["@angular/core"], root["@ngrx/core/add/operator/select"], root["rxjs/add/operator/switchMap"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_6__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_13__, __WEBPACK_EXTERNAL_MODULE_12__, __WEBPACK_EXTERNAL_MODULE_11__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_10__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_9__, __WEBPACK_EXTERNAL_MODULE_8__, __WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_7__, __WEBPACK_EXTERNAL_MODULE_14__) {
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions__ = __webpack_require__("./src/actions/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services__ = __webpack_require__("./src/services/index.ts");
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
     * @returns {ModuleWithProviders}
     */
    Angular2InstagramCoreModule.forChild = function () {
        return {
            ngModule: Angular2InstagramCoreModule_1,
            providers: [
                __WEBPACK_IMPORTED_MODULE_1__actions__["a" /* FiltersActions */],
                __WEBPACK_IMPORTED_MODULE_2__services__["a" /* FiltersService */]
            ]
        };
    };
    return Angular2InstagramCoreModule;
}());
Angular2InstagramCoreModule = Angular2InstagramCoreModule_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({})
], Angular2InstagramCoreModule);

var Angular2InstagramCoreModule_1;


/***/ }),

/***/ "./src/constants.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_immutable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_immutable__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return presets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return overlayOptions; });

var presets = {
    '1977': {
        filter: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_immutable__["Map"])({
            contrast: '110',
            brightness: '110',
            saturate: '130',
            opacity: '100',
            blend: 'screen'
        }),
        overlay: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_immutable__["Map"])({
            type: 'solid',
            color: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_immutable__["Map"])({ a: 0.3, b: 188, g: 106, r: 243 })
        })
    },
    'aden': {
        filter: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_immutable__["Map"])({
            hueRotate: '20',
            contrast: '90',
            saturate: '85',
            brightness: '120',
            opacity: '100',
            blend: 'darken'
        }),
        overlay: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_immutable__["Map"])({
            type: 'linear',
            direction: 'to right',
            color1: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_immutable__["Map"])({
                color: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_immutable__["Map"])({ a: 0.2, b: 14, g: 10, r: 66 }),
                stop: 1
            }),
            color2: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_immutable__["Map"])({
                color: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_immutable__["Map"])({ a: 0, b: 14, g: 10, r: 66 }),
                stop: 100
            })
        })
    },
    'brooklyn': {
        filter: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_immutable__["Map"])({
            contrast: '90',
            brightness: '110',
            opacity: '100',
            blend: 'overlay'
        }),
        overlay: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_immutable__["Map"])({
            type: 'radial',
            position: 'center center',
            size: 'closest-corner',
            color1: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_immutable__["Map"])({
                color: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_immutable__["Map"])({ a: 0.4, b: 193, g: 223, r: 168 }),
                stop: 1
            }),
            color2: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_immutable__["Map"])({
                color: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_immutable__["Map"])({ a: 0.2, b: 200, g: 196, r: 183 }),
                stop: 100
            })
        })
    },
    'gingham': {
        filter: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_immutable__["Map"])({
            brightness: '105',
            hueRotate: '350',
            blend: 'darken',
            opacity: '100'
        }),
        overlay: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_immutable__["Map"])({
            type: 'linear',
            direction: 'to right',
            color1: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_immutable__["Map"])({
                color: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_immutable__["Map"])({ a: 0.2, b: 14, g: 10, r: 66 }),
                stop: 1
            }),
            color2: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_immutable__["Map"])({
                color: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_immutable__["Map"])({ a: 0, b: 0, g: 0, r: 0 }),
                stop: 100
            })
        })
    },
    'earlybird': {
        filter: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_immutable__["Map"])({
            contrast: '90',
            sepia: '20',
            blend: 'overlay',
            opacity: '100'
        }),
        overlay: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_immutable__["Map"])({
            type: 'radial',
            color1: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_immutable__["Map"])({
                color: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_immutable__["Map"])({ a: 1, b: 142, g: 186, r: 208 }),
                stop: 20
            }),
            color2: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_immutable__["Map"])({
                color: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_immutable__["Map"])({ a: 0.2, b: 16, g: 2, r: 29 }),
                stop: 100
            })
        })
    },
    'hudson': {
        filter: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_immutable__["Map"])({
            brightness: '120',
            contrast: '90',
            saturate: '110',
            blend: 'multiply',
            opacity: '50'
        }),
        overlay: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_immutable__["Map"])({
            type: 'radial',
            color1: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_immutable__["Map"])({
                color: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_immutable__["Map"])({ a: 1, b: 166, g: 177, r: 255 }),
                stop: 50
            }),
            color2: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_immutable__["Map"])({
                color: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_immutable__["Map"])({ a: 1, b: 52, g: 33, r: 52 }),
                stop: 100
            })
        })
    },
    'inkwell': {
        filter: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_immutable__["Map"])({
            sepia: '30',
            contrast: '110',
            brightness: '110',
            grayscale: '100',
            opacity: '100'
        }),
        overlay: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_immutable__["Map"])({
            type: 'solid',
            color: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_immutable__["Map"])({ a: 0, b: 0, g: 0, r: 0 })
        })
    },
    'lofi': {
        filter: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_immutable__["Map"])({
            saturate: '110',
            contrast: '150',
            opacity: '100',
            blend: 'multiply'
        }),
        overlay: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_immutable__["Map"])({
            type: 'radial',
            color1: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_immutable__["Map"])({
                color: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_immutable__["Map"])({ a: 0, b: 0, g: 0, r: 0 }),
                stop: 70
            }),
            color2: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_immutable__["Map"])({
                color: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_immutable__["Map"])({ a: 1, b: 34, g: 34, r: 34 }),
                stop: 100
            })
        })
    },
    'perpetua': {
        filter: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_immutable__["Map"])({
            opacity: '50',
            blend: 'soft-light'
        }),
        overlay: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_immutable__["Map"])({
            type: 'linear',
            direction: 'to bottom',
            color1: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_immutable__["Map"])({
                color: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_immutable__["Map"])({ a: 1, b: 154, g: 91, r: 0 }),
                stop: 1
            }),
            color2: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_immutable__["Map"])({
                color: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_immutable__["Map"])({ a: 0, b: 230, g: 193, r: 61 }),
                stop: 100
            })
        })
    },
    'toaster': {
        filter: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_immutable__["Map"])({
            contrast: '150',
            brightness: '90',
            opacity: '50',
            blend: 'screen'
        }),
        overlay: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_immutable__["Map"])({
            type: 'radial',
            color1: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_immutable__["Map"])({
                color: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_immutable__["Map"])({ a: 1, b: 128, g: 78, r: 15 }),
                stop: 1
            }),
            color2: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_immutable__["Map"])({
                color: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_immutable__["Map"])({ a: 1, b: 59, g: 0, r: 59 }),
                stop: 100
            })
        })
    },
    'xpro2': {
        filter: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_immutable__["Map"])({
            sepia: '30',
            opacity: '100',
            blend: 'color-burn'
        }),
        overlay: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_immutable__["Map"])({
            type: 'radial',
            color1: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_immutable__["Map"])({
                color: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_immutable__["Map"])({ a: 1, b: 230, g: 231, r: 224 }),
                stop: 40
            }),
            color2: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_immutable__["Map"])({
                color: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_immutable__["Map"])({ a: 0.6, b: 161, g: 42, r: 43 }),
                stop: 100
            })
        })
    }
};
var overlayOptions = [
    { val: 'none', label: 'None' },
    { val: 'solid_background', label: 'Solid Background' },
    { val: 'linear_gradient', label: 'Linear Gradient' },
    { val: 'radial_gradient', label: 'Radial Gradient' }
];


/***/ }),

/***/ "./src/effects/filters-effects.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngrx_effects__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngrx_effects___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__ngrx_effects__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__actions_filters_actions__ = __webpack_require__("./src/actions/filters-actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_filters_service__ = __webpack_require__("./src/services/filters-service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FiltersEffects; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var FiltersEffects = (function () {
    function FiltersEffects(actions$, filtersService, filtersActions) {
        var _this = this;
        this.actions$ = actions$;
        this.filtersService = filtersService;
        this.filtersActions = filtersActions;
        this.fetchImages$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_7__actions_filters_actions__["a" /* FiltersActions */].LOAD_IMAGES)
            .switchMap(function (_a) {
            var payload = _a.payload;
            return _this.filtersService.fetchImages(payload.api)
                .map(function (data) { return _this.filtersActions.fetchImagesFulfilled(data); })
                .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["Observable"].of(_this.filtersActions.fetchImagesFailed(error)); });
        });
    }
    return FiltersEffects;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__ngrx_effects__["Effect"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["Observable"])
], FiltersEffects.prototype, "fetchImages$", void 0);
FiltersEffects = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__ngrx_effects__["Actions"],
        __WEBPACK_IMPORTED_MODULE_8__services_filters_service__["a" /* FiltersService */],
        __WEBPACK_IMPORTED_MODULE_7__actions_filters_actions__["a" /* FiltersActions */]])
], FiltersEffects);



/***/ }),

/***/ "./src/effects/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__filters_effects__ = __webpack_require__("./src/effects/filters-effects.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__filters_effects__["a"]; });



/***/ }),

/***/ "./src/helpers.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_immutable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_immutable__);
/* harmony export (immutable) */ __webpack_exports__["a"] = getFilterStyles;
/* harmony export (immutable) */ __webpack_exports__["b"] = updateFilterStyle;
/* harmony export (immutable) */ __webpack_exports__["c"] = getOverlayColor;
/* harmony export (immutable) */ __webpack_exports__["d"] = updateOverlayStyle;

function getFilterStyles(state) {
    var filters = '';
    filters += "contrast(" + state.get('contrast') + "%) ";
    filters += "brightness(" + state.get('brightness') + "%) ";
    filters += "saturate(" + state.get('saturate') + "%) ";
    filters += "sepia(" + state.get('sepia') + "%) ";
    filters += "grayscale(" + state.get('grayScale') + "%) ";
    filters += "invert(" + state.get('invert') + "%) ";
    filters += "hue-rotate(" + state.get('hueRotate') + "deg) ";
    filters += "blur(" + state.get('blur') + "px) ";
    return filters;
}
function updateFilterStyle(state) {
    var styles = {
        WebkitFilter: getFilterStyles(state),
        filter: getFilterStyles(state),
        position: 'relative'
    };
    return {
        styles: styles
    };
}
function getOverlayColor(overlayType) {
    var solidBackground = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_immutable__["Map"])({
        a: 0.5,
        b: 253,
        g: 162,
        r: 62
    });
    var linearBackground = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_immutable__["Map"])({
        a: 0.5,
        b: 253,
        g: 162,
        r: 62,
        stop: 10,
        direction: 'to bottom'
    });
    var radialBackground = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_immutable__["Map"])({
        a: 0.04,
        b: 70,
        g: 70,
        r: 70,
        stop: 100,
        position: 'center center',
        size: 'closest-corner'
    });
    var stop1 = linearBackground.get('stop');
    var stop2 = radialBackground.get('stop');
    var color1 = "rgba(" + linearBackground.get('r') + ", " + linearBackground.get('g') + ", " + linearBackground.get('b') + ", " + linearBackground.get('a') + ")";
    var color2 = "rgba(" + radialBackground.get('r') + ", " + radialBackground.get('g') + ", " + radialBackground.get('b') + ", " + radialBackground.get('a') + ")";
    switch (overlayType) {
        case 'solid_background':
            return "rgba(" + solidBackground.get('r') + ", " + solidBackground.get('g') + ", " + solidBackground.get('b') + ", " + solidBackground.get('a') + ")";
        case 'linear_gradient':
            var direction = linearBackground.get('direction');
            return "linear-gradient(" + direction + ", " + color1 + " " + stop1 + "%, " + color2 + " " + stop2 + "%)";
        case 'radial_gradient':
            var position = radialBackground.get('position');
            var size = radialBackground.get('size');
            return "-webkit-radial-gradient(" + position + ", circle " + size + ", " + color1 + " " + stop1 + "%, " + color2 + " " + stop2 + "%)";
        case 'none':
            return null;
    }
}
function updateOverlayStyle(state) {
    var opacity = state.get('opacity');
    var overlayBackground = state.get('blend');
    var background = getOverlayColor(overlayBackground);
    var overlay = {
        content: ' ',
        display: 'block',
        height: '100%',
        width: '100%',
        top: '0',
        left: '0',
        pointerEvents: 'none',
        position: 'absolute',
        mixBlendMode: 'normal',
        opacity: (opacity / 100),
        background: background
    };
    return {
        overlay: overlay
    };
}


/***/ }),

/***/ "./src/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular2_instagram_core_module__ = __webpack_require__("./src/angular2-instagram-core.module.ts");
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Angular2InstagramCoreModule", function() { return __WEBPACK_IMPORTED_MODULE_0__angular2_instagram_core_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions__ = __webpack_require__("./src/actions/index.ts");
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "FiltersActions", function() { return __WEBPACK_IMPORTED_MODULE_1__actions__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__effects__ = __webpack_require__("./src/effects/index.ts");
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "FiltersEffects", function() { return __WEBPACK_IMPORTED_MODULE_2__effects__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reducers__ = __webpack_require__("./src/reducers/index.ts");
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "DEFAULTS", function() { return __WEBPACK_IMPORTED_MODULE_3__reducers__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return __WEBPACK_IMPORTED_MODULE_3__reducers__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "filtersReducer", function() { return __WEBPACK_IMPORTED_MODULE_3__reducers__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "getFiltersState", function() { return __WEBPACK_IMPORTED_MODULE_3__reducers__["d"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "getFilterStyleValue", function() { return __WEBPACK_IMPORTED_MODULE_3__reducers__["e"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "getOverlayStyleValue", function() { return __WEBPACK_IMPORTED_MODULE_3__reducers__["f"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "getContrastFilterValue", function() { return __WEBPACK_IMPORTED_MODULE_3__reducers__["g"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "getBrightnessFilterValue", function() { return __WEBPACK_IMPORTED_MODULE_3__reducers__["h"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "getSaturateFilterValue", function() { return __WEBPACK_IMPORTED_MODULE_3__reducers__["i"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "getSepiaFilterValue", function() { return __WEBPACK_IMPORTED_MODULE_3__reducers__["j"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "getGrayScaleFilterValue", function() { return __WEBPACK_IMPORTED_MODULE_3__reducers__["k"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "getInvertFilterValue", function() { return __WEBPACK_IMPORTED_MODULE_3__reducers__["l"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "getHueRotateFilterValue", function() { return __WEBPACK_IMPORTED_MODULE_3__reducers__["m"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "getBlurFilterValue", function() { return __WEBPACK_IMPORTED_MODULE_3__reducers__["n"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "getBlendFilterValue", function() { return __WEBPACK_IMPORTED_MODULE_3__reducers__["o"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "getSelectedImage", function() { return __WEBPACK_IMPORTED_MODULE_3__reducers__["p"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "getImages", function() { return __WEBPACK_IMPORTED_MODULE_3__reducers__["q"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "getError", function() { return __WEBPACK_IMPORTED_MODULE_3__reducers__["r"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "getLoading", function() { return __WEBPACK_IMPORTED_MODULE_3__reducers__["s"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services__ = __webpack_require__("./src/services/index.ts");
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "FiltersService", function() { return __WEBPACK_IMPORTED_MODULE_4__services__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__helpers__ = __webpack_require__("./src/helpers.ts");
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "getFilterStyles", function() { return __WEBPACK_IMPORTED_MODULE_5__helpers__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "updateFilterStyle", function() { return __WEBPACK_IMPORTED_MODULE_5__helpers__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "getOverlayColor", function() { return __WEBPACK_IMPORTED_MODULE_5__helpers__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "updateOverlayStyle", function() { return __WEBPACK_IMPORTED_MODULE_5__helpers__["d"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__constants__ = __webpack_require__("./src/constants.ts");
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "presets", function() { return __WEBPACK_IMPORTED_MODULE_6__constants__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "overlayOptions", function() { return __WEBPACK_IMPORTED_MODULE_6__constants__["b"]; });









/***/ }),

/***/ "./src/reducers/filters-reducer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_immutable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_immutable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions_filters_actions__ = __webpack_require__("./src/actions/filters-actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__("./src/constants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helpers__ = __webpack_require__("./src/helpers.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DEFAULTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return initialState; });
/* harmony export (immutable) */ __webpack_exports__["c"] = filtersReducer;




var defaultImage = 'https://source.unsplash.com/W_9mOGUwR08/800x600';
var DEFAULTS = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_immutable__["Map"])({
    contrast: 100,
    brightness: 100,
    saturate: 100,
    sepia: 0,
    grayScale: 0,
    invert: 0,
    hueRotate: 0,
    blur: 0,
    blend: 'none',
    opacity: 50
});
var initialState = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_immutable__["Map"])({
    contrast: 100,
    brightness: 100,
    saturate: 100,
    sepia: 0,
    grayScale: 0,
    invert: 0,
    hueRotate: 0,
    blur: 0,
    blend: 'none',
    opacity: 50,
    styles: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_immutable__["Map"])({
        position: 'relative',
        WebkitFilter: null,
        filter: null
    }),
    overlay: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_immutable__["Map"])({
        content: ' ',
        display: 'block',
        height: '100%',
        width: '100%',
        top: '0',
        left: '0',
        pointerEvents: 'none',
        position: 'absolute',
        mixBlendMode: 'normal',
        opacity: 0.5,
        background: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__helpers__["c" /* getOverlayColor */])('none')
    }),
    selectedImage: defaultImage,
    images: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_immutable__["List"])(),
    error: null,
    loading: false
});
function filtersReducer(state, _a) {
    if (state === void 0) { state = initialState; }
    var type = _a.type, payload = _a.payload;
    switch (type) {
        case __WEBPACK_IMPORTED_MODULE_1__actions_filters_actions__["a" /* FiltersActions */].CHANGE_CONTRAST:
        case __WEBPACK_IMPORTED_MODULE_1__actions_filters_actions__["a" /* FiltersActions */].CHANGE_BRIGHTNESS:
        case __WEBPACK_IMPORTED_MODULE_1__actions_filters_actions__["a" /* FiltersActions */].CHANGE_SATURATE:
        case __WEBPACK_IMPORTED_MODULE_1__actions_filters_actions__["a" /* FiltersActions */].CHANGE_SEPIA:
        case __WEBPACK_IMPORTED_MODULE_1__actions_filters_actions__["a" /* FiltersActions */].CHANGE_GRAYSCALE:
        case __WEBPACK_IMPORTED_MODULE_1__actions_filters_actions__["a" /* FiltersActions */].CHANGE_INVERT:
        case __WEBPACK_IMPORTED_MODULE_1__actions_filters_actions__["a" /* FiltersActions */].CHANGE_HUEROTATE:
        case __WEBPACK_IMPORTED_MODULE_1__actions_filters_actions__["a" /* FiltersActions */].CHANGE_BLUR:
        case __WEBPACK_IMPORTED_MODULE_1__actions_filters_actions__["a" /* FiltersActions */].CHANGE_BLEND:
        case __WEBPACK_IMPORTED_MODULE_1__actions_filters_actions__["a" /* FiltersActions */].CHANGE_SELECTED_IMAGE:
            return state.withMutations(function (filtersState) {
                var value = payload.value, type = payload.type;
                filtersState
                    .merge((_a = {}, _a["" + type] = value, _a))
                    .merge(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__helpers__["b" /* updateFilterStyle */])(filtersState))
                    .merge(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__helpers__["d" /* updateOverlayStyle */])(filtersState));
                var _a;
            });
        case __WEBPACK_IMPORTED_MODULE_1__actions_filters_actions__["a" /* FiltersActions */].LOADING:
            return state.withMutations(function (filtersState) {
                var value = payload.value;
                filtersState
                    .merge({ loading: value });
            });
        case __WEBPACK_IMPORTED_MODULE_1__actions_filters_actions__["a" /* FiltersActions */].CHANGE_PRESET:
            return state.withMutations(function (filtersState) {
                var figureStyle = payload.figureStyle, overlayStyle = payload.overlayStyle, key = payload.key;
                var preset = __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* presets */][key];
                var filter = preset.filter, overlay = preset.overlay;
                filtersState
                    .merge({ 'contrast': filter.get('contrast') || 100 })
                    .merge({ 'brightness': filter.get('brightness') || 100 })
                    .merge({ 'saturate': filter.get('saturate') || 100 })
                    .merge({ 'sepia': filter.get('saturate') || 0 })
                    .merge({ 'grayScale': filter.get('grayscale') || 0 })
                    .merge({ 'invert': filter.get('invert') || 0 })
                    .merge({ 'hueRotate': filter.get('hueRotate') || 0 })
                    .merge({ 'blur': filter.get('blur') || 0 })
                    .merge({ 'blend': filter.get('blend') || 'none' })
                    .merge({ 'opacity': filter.get('opacity') || 50 })
                    .set('styles', figureStyle)
                    .set('overlay', overlayStyle);
            });
        case __WEBPACK_IMPORTED_MODULE_1__actions_filters_actions__["a" /* FiltersActions */].FETCH_IMAGES_FULFILLED:
            return state.withMutations(function (filtersState) {
                var data = payload.data;
                filtersState.merge({
                    images: data
                });
            });
        case __WEBPACK_IMPORTED_MODULE_1__actions_filters_actions__["a" /* FiltersActions */].FETCH_IMAGES_FAILED:
            return state.withMutations(function (filtersState) {
                var error = payload.error;
                filtersState.merge({
                    error: error
                });
            });
        case __WEBPACK_IMPORTED_MODULE_1__actions_filters_actions__["a" /* FiltersActions */].RESET_DEFAULTS:
            return state.withMutations(function (filtersState) {
                filtersState
                    .merge({ 'contrast': 100 })
                    .merge({ 'brightness': 100 })
                    .merge({ 'saturate': 100 })
                    .merge({ 'sepia': 0 })
                    .merge({ 'grayScale': 0 })
                    .merge({ 'invert': 0 })
                    .merge({ 'hueRotate': 0 })
                    .merge({ 'blur': 0 })
                    .merge({ 'blend': 'none' })
                    .merge({ 'opacity': 50 })
                    .merge(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__helpers__["b" /* updateFilterStyle */])(DEFAULTS))
                    .merge(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__helpers__["d" /* updateOverlayStyle */])(DEFAULTS));
            });
        default:
            return state.withMutations(function (filtersState) {
                filtersState
                    .merge(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__helpers__["b" /* updateFilterStyle */])(filtersState))
                    .merge(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__helpers__["d" /* updateOverlayStyle */])(filtersState));
            });
    }
}


/***/ }),

/***/ "./src/reducers/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__filters_reducer__ = __webpack_require__("./src/reducers/filters-reducer.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__filters_reducer__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__filters_reducer__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__filters_reducer__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__selectors__ = __webpack_require__("./src/reducers/selectors.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_1__selectors__["p"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_1__selectors__["j"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_1__selectors__["k"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_1__selectors__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_1__selectors__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_1__selectors__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_1__selectors__["d"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_1__selectors__["e"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_1__selectors__["f"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "m", function() { return __WEBPACK_IMPORTED_MODULE_1__selectors__["g"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "n", function() { return __WEBPACK_IMPORTED_MODULE_1__selectors__["h"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "o", function() { return __WEBPACK_IMPORTED_MODULE_1__selectors__["i"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "p", function() { return __WEBPACK_IMPORTED_MODULE_1__selectors__["l"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "q", function() { return __WEBPACK_IMPORTED_MODULE_1__selectors__["m"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "r", function() { return __WEBPACK_IMPORTED_MODULE_1__selectors__["n"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "s", function() { return __WEBPACK_IMPORTED_MODULE_1__selectors__["o"]; });




/***/ }),

/***/ "./src/reducers/selectors.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_core_add_operator_select__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_core_add_operator_select___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__ngrx_core_add_operator_select__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_distinctUntilChanged__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_let__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_let___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_let__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony export (immutable) */ __webpack_exports__["p"] = getFiltersState;
/* harmony export (immutable) */ __webpack_exports__["j"] = getFilterStyleValue;
/* harmony export (immutable) */ __webpack_exports__["k"] = getOverlayStyleValue;
/* harmony export (immutable) */ __webpack_exports__["a"] = getContrastFilterValue;
/* harmony export (immutable) */ __webpack_exports__["b"] = getBrightnessFilterValue;
/* harmony export (immutable) */ __webpack_exports__["c"] = getSaturateFilterValue;
/* harmony export (immutable) */ __webpack_exports__["d"] = getSepiaFilterValue;
/* harmony export (immutable) */ __webpack_exports__["e"] = getGrayScaleFilterValue;
/* harmony export (immutable) */ __webpack_exports__["f"] = getInvertFilterValue;
/* harmony export (immutable) */ __webpack_exports__["g"] = getHueRotateFilterValue;
/* harmony export (immutable) */ __webpack_exports__["h"] = getBlurFilterValue;
/* harmony export (immutable) */ __webpack_exports__["i"] = getBlendFilterValue;
/* harmony export (immutable) */ __webpack_exports__["l"] = getSelectedImage;
/* harmony export (immutable) */ __webpack_exports__["m"] = getImages;
/* harmony export (immutable) */ __webpack_exports__["n"] = getError;
/* harmony export (immutable) */ __webpack_exports__["o"] = getLoading;




function getFiltersState(state$) {
    return state$.select(function (state) { return state.filters; });
}
function getFilterStyleValue(state$) {
    return state$.let(getFiltersState)
        .map(function (filtersState) { return filtersState.get('styles').toJS(); })
        .distinctUntilChanged(function (previous, next) {
        return previous.WebkitFilter === next.WebkitFilter && previous.filter === next.filter;
    });
}
function getOverlayStyleValue(state$) {
    return state$.let(getFiltersState)
        .map(function (filtersState) { return filtersState.get('overlay').toJS(); })
        .distinctUntilChanged(function (previous, next) {
        return previous.background === next.background;
    });
}
function getContrastFilterValue(state$) {
    return state$.let(getFiltersState)
        .map(function (filtersState) { return filtersState.get('contrast'); })
        .distinctUntilChanged();
}
function getBrightnessFilterValue(state$) {
    return state$.let(getFiltersState)
        .map(function (filtersState) { return filtersState.get('brightness'); })
        .distinctUntilChanged();
}
function getSaturateFilterValue(state$) {
    return state$.let(getFiltersState)
        .map(function (filtersState) { return filtersState.get('saturate'); })
        .distinctUntilChanged();
}
function getSepiaFilterValue(state$) {
    return state$.let(getFiltersState)
        .map(function (filtersState) { return filtersState.get('sepia'); })
        .distinctUntilChanged();
}
function getGrayScaleFilterValue(state$) {
    return state$.let(getFiltersState)
        .map(function (filtersState) { return filtersState.get('grayScale'); })
        .distinctUntilChanged();
}
function getInvertFilterValue(state$) {
    return state$.let(getFiltersState)
        .map(function (filersState) { return filersState.get('invert'); })
        .distinctUntilChanged();
}
function getHueRotateFilterValue(state$) {
    return state$.let(getFiltersState)
        .map(function (filtersState) { return filtersState.get('hueRotate'); })
        .distinctUntilChanged();
}
function getBlurFilterValue(state$) {
    return state$.let(getFiltersState)
        .map(function (filtersState) { return filtersState.get('blur'); })
        .distinctUntilChanged();
}
function getBlendFilterValue(state$) {
    return state$.let(getFiltersState)
        .map(function (filtersState) { return filtersState.get('blend'); })
        .distinctUntilChanged();
}
function getSelectedImage(state$) {
    return state$.let(getFiltersState)
        .map(function (filtersState) { return filtersState.get('selectedImage'); })
        .distinctUntilChanged();
}
function getImages(state$) {
    return state$.let(getFiltersState)
        .map(function (filtersState) { return filtersState.get('images').toJS(); })
        .distinctUntilChanged();
}
function getError(state$) {
    return state$.let(getFiltersState)
        .map(function (filtersState) { return filtersState.get('error'); })
        .distinctUntilChanged();
}
function getLoading(state$) {
    return state$.let(getFiltersState)
        .map(function (filtersState) { return filtersState.get('loading'); })
        .distinctUntilChanged();
}


/***/ }),

/***/ "./src/services/filters-service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_do__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngrx_store__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngrx_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__ngrx_store__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_http___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__angular_http__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__actions_filters_actions__ = __webpack_require__("./src/actions/filters-actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__reducers_selectors__ = __webpack_require__("./src/reducers/selectors.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FiltersService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var FiltersService = FiltersService_1 = (function () {
    function FiltersService(store$, actions, http) {
        this.store$ = store$;
        this.actions = actions;
        this.http = http;
        this.cache = new Map();
        this.contrast$ = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10__reducers_selectors__["a" /* getContrastFilterValue */])(store$);
        this.brightness$ = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10__reducers_selectors__["b" /* getBrightnessFilterValue */])(store$);
        this.saturate$ = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10__reducers_selectors__["c" /* getSaturateFilterValue */])(store$);
        this.sepia$ = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10__reducers_selectors__["d" /* getSepiaFilterValue */])(store$);
        this.grayscale$ = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10__reducers_selectors__["e" /* getGrayScaleFilterValue */])(store$);
        this.invert$ = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10__reducers_selectors__["f" /* getInvertFilterValue */])(store$);
        this.hueRotate$ = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10__reducers_selectors__["g" /* getHueRotateFilterValue */])(store$);
        this.blur$ = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10__reducers_selectors__["h" /* getBlurFilterValue */])(store$);
        this.blend$ = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10__reducers_selectors__["i" /* getBlendFilterValue */])(store$);
        this.filterStyle$ = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10__reducers_selectors__["j" /* getFilterStyleValue */])(store$);
        this.overlayStyle$ = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10__reducers_selectors__["k" /* getOverlayStyleValue */])(store$);
        this.selectedImage$ = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10__reducers_selectors__["l" /* getSelectedImage */])(store$);
        this.images$ = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10__reducers_selectors__["m" /* getImages */])(store$);
        this.error$ = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10__reducers_selectors__["n" /* getError */])(store$);
        this.loading$ = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10__reducers_selectors__["o" /* getLoading */])(store$);
    }
    FiltersService.prototype.change = function (_a) {
        var value = _a.value, type = _a.type;
        switch (type) {
            case FiltersService_1.CONTRAST:
                this.changeContrast(value);
                break;
            case FiltersService_1.BRIGHTNESS:
                this.changeBrightness(value);
                break;
            case FiltersService_1.SATURATE:
                this.changeSaturate(value);
                break;
            case FiltersService_1.SEPIA:
                this.changeSepia(value);
                break;
            case FiltersService_1.GRAYSCALE:
                this.changeGrayScale(value);
                break;
            case FiltersService_1.INVERT:
                this.changeInvert(value);
                break;
            case FiltersService_1.HUE_ROTATE:
                this.changeHueRotate(value);
                break;
            case FiltersService_1.BLUR:
                this.changeBlur(value);
                break;
            case FiltersService_1.BLEND:
                this.changeBlend(value);
                break;
            case FiltersService_1.PRESET:
                this.changePreset(value);
                break;
            case FiltersService_1.IMAGE:
                this.changeSelectImage(value);
                break;
            case FiltersService_1.LOADING:
                this.changeLoading(value);
                break;
        }
    };
    FiltersService.prototype.changeContrast = function (value) {
        if (typeof value === 'number') {
            this.store$.dispatch(this.actions.changeContrast(value));
        }
    };
    FiltersService.prototype.changeBrightness = function (value) {
        if (typeof value === 'number') {
            this.store$.dispatch(this.actions.changeBrightness(value));
        }
    };
    FiltersService.prototype.changeSaturate = function (value) {
        if (typeof value === 'number') {
            this.store$.dispatch(this.actions.changeSaturate(value));
        }
    };
    FiltersService.prototype.changeSepia = function (value) {
        if (typeof value === 'number') {
            this.store$.dispatch(this.actions.changeSepia(value));
        }
    };
    FiltersService.prototype.changeGrayScale = function (value) {
        if (typeof value === 'number') {
            this.store$.dispatch(this.actions.changeGrayScale(value));
        }
    };
    FiltersService.prototype.changeInvert = function (value) {
        if (typeof value === 'number') {
            this.store$.dispatch(this.actions.changeInvert(value));
        }
    };
    FiltersService.prototype.changeHueRotate = function (value) {
        if (typeof value === 'number') {
            this.store$.dispatch(this.actions.changeHueRotate(value));
        }
    };
    FiltersService.prototype.changeBlur = function (value) {
        if (typeof value === 'number') {
            this.store$.dispatch(this.actions.changeBlur(value));
        }
    };
    FiltersService.prototype.changeBlend = function (value) {
        this.store$.dispatch(this.actions.changeBlend(value));
    };
    FiltersService.prototype.changePreset = function (value) {
        this.store$.dispatch(this.actions.changePreset(value));
    };
    FiltersService.prototype.changeSelectImage = function (value) {
        this.store$.dispatch(this.actions.changeSelectImage(value));
    };
    FiltersService.prototype.loadAllImages = function () {
        this.store$.dispatch(this.actions.loadImages());
    };
    FiltersService.prototype.resetToDefaults = function () {
        this.store$.dispatch(this.actions.resetToDefaults());
    };
    FiltersService.prototype.changeLoading = function (value) {
        this.store$.dispatch(this.actions.changeLoading(value));
    };
    FiltersService.prototype.fetchImages = function (url) {
        var _this = this;
        var hasCacheData = this.cache.has(url);
        if (hasCacheData) {
            var cache = this.cache.get(url);
            return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"].of(cache);
        }
        return this.http.get(url)
            .map(function (response) { return response.json(); })
            .map(function (records) {
            return records.map(function (record) {
                return {
                    id: record.id,
                    thumb: record.urls.thumb
                };
            });
        })
            .do(function (data) {
            !hasCacheData && _this.cache.set(url, data);
            return data;
        })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"].throw('Error fetching images from Unsplash API. Please try again later.'); });
    };
    return FiltersService;
}());
FiltersService.CONTRAST = 'contrast';
FiltersService.BRIGHTNESS = 'brightness';
FiltersService.SATURATE = 'saturate';
FiltersService.SEPIA = 'sepia';
FiltersService.GRAYSCALE = 'grayScale';
FiltersService.INVERT = 'invert';
FiltersService.HUE_ROTATE = 'hueRotate';
FiltersService.BLUR = 'blur';
FiltersService.BLEND = 'blend';
FiltersService.PRESET = 'preset';
FiltersService.IMAGE = 'image';
FiltersService.LOADING = 'loading';
FiltersService = FiltersService_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__ngrx_store__["Store"],
        __WEBPACK_IMPORTED_MODULE_9__actions_filters_actions__["a" /* FiltersActions */],
        __WEBPACK_IMPORTED_MODULE_8__angular_http__["Http"]])
], FiltersService);

var FiltersService_1;


/***/ }),

/***/ "./src/services/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__filters_service__ = __webpack_require__("./src/services/filters-service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__filters_service__["a"]; });



/***/ }),

/***/ 0:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),

/***/ 10:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_10__;

/***/ }),

/***/ 11:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_11__;

/***/ }),

/***/ 12:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_12__;

/***/ }),

/***/ 13:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_13__;

/***/ }),

/***/ 14:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_14__;

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ }),

/***/ 6:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ }),

/***/ 7:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_7__;

/***/ }),

/***/ 8:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_8__;

/***/ }),

/***/ 9:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_9__;

/***/ })

/******/ });
});
//# sourceMappingURL=index.map