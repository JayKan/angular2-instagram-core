import { Injectable } from '@angular/core';
var FiltersActions = (function () {
    function FiltersActions() {
    }
    FiltersActions.prototype.changeContrast = function (value, type) {
        if (type === void 0) { type = 'contrast'; }
        return {
            type: FiltersActions.CHANGE_CONTRAST,
            payload: {
                value: value,
                type: type
            }
        };
    };
    FiltersActions.prototype.changeBrightness = function (value, type) {
        if (type === void 0) { type = 'brightness'; }
        return {
            type: FiltersActions.CHANGE_BRIGHTNESS,
            payload: {
                value: value,
                type: type
            }
        };
    };
    FiltersActions.prototype.changeSaturate = function (value, type) {
        if (type === void 0) { type = 'saturate'; }
        return {
            type: FiltersActions.CHANGE_SATURATE,
            payload: {
                value: value,
                type: type
            }
        };
    };
    FiltersActions.prototype.changeSepia = function (value, type) {
        if (type === void 0) { type = 'sepia'; }
        return {
            type: FiltersActions.CHANGE_SEPIA,
            payload: {
                value: value,
                type: type
            }
        };
    };
    FiltersActions.prototype.changeGrayScale = function (value, type) {
        if (type === void 0) { type = 'grayScale'; }
        return {
            type: FiltersActions.CHANGE_GRAYSCALE,
            payload: {
                value: value,
                type: type
            }
        };
    };
    FiltersActions.prototype.changeInvert = function (value, type) {
        if (type === void 0) { type = 'invert'; }
        return {
            type: FiltersActions.CHANGE_INVERT,
            payload: {
                value: value,
                type: type
            }
        };
    };
    FiltersActions.prototype.changeHueRotate = function (value, type) {
        if (type === void 0) { type = 'hueRotate'; }
        return {
            type: FiltersActions.CHANGE_HUEROTATE,
            payload: {
                value: value,
                type: type
            }
        };
    };
    FiltersActions.prototype.changeBlur = function (value, type) {
        if (type === void 0) { type = 'blur'; }
        return {
            type: FiltersActions.CHANGE_BLUR,
            payload: {
                value: value,
                type: type
            }
        };
    };
    FiltersActions.prototype.changeBlend = function (value, type) {
        if (type === void 0) { type = 'blend'; }
        return {
            type: FiltersActions.CHANGE_BLEND,
            payload: {
                value: value,
                type: type
            }
        };
    };
    FiltersActions.prototype.changeLoading = function (value, type) {
        if (type === void 0) { type = 'loading'; }
        return {
            type: FiltersActions.LOADING,
            payload: {
                value: value
            }
        };
    };
    FiltersActions.prototype.changePreset = function (_a) {
        var figureStyle = _a.figureStyle, overlayStyle = _a.overlayStyle, key = _a.key;
        return {
            type: FiltersActions.CHANGE_PRESET,
            payload: {
                figureStyle: figureStyle,
                overlayStyle: overlayStyle,
                key: key
            }
        };
    };
    FiltersActions.prototype.loadImages = function () {
        return {
            type: FiltersActions.LOAD_IMAGES,
            payload: {
                api: FiltersActions.API
            }
        };
    };
    FiltersActions.prototype.fetchImagesFailed = function (error) {
        return {
            type: FiltersActions.FETCH_IMAGES_FAILED,
            payload: {
                error: error
            }
        };
    };
    FiltersActions.prototype.fetchImagesFulfilled = function (data) {
        return {
            type: FiltersActions.FETCH_IMAGES_FULFILLED,
            payload: {
                data: Object.assign([], data)
            }
        };
    };
    FiltersActions.prototype.changeSelectImage = function (value, type) {
        if (type === void 0) { type = 'selectedImage'; }
        return {
            type: FiltersActions.CHANGE_SELECTED_IMAGE,
            payload: {
                value: value,
                type: type
            }
        };
    };
    FiltersActions.prototype.resetToDefaults = function () {
        return {
            type: FiltersActions.RESET_DEFAULTS
        };
    };
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
    FiltersActions.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    FiltersActions.ctorParameters = function () { return []; };
    return FiltersActions;
}());
export { FiltersActions };
//# sourceMappingURL=filters-actions.js.map