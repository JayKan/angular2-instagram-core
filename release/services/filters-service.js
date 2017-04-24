import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { FiltersActions } from '../actions/filters-actions';
import { getContrastFilterValue, getBrightnessFilterValue, getSaturateFilterValue, getSepiaFilterValue, getGrayScaleFilterValue, getInvertFilterValue, getHueRotateFilterValue, getBlurFilterValue, getBlendFilterValue, getFilterStyleValue, getOverlayStyleValue, getSelectedImage, getImages, getError, getLoading } from '../reducers/selectors';
var FiltersService = (function () {
    function FiltersService(store$, actions, http) {
        this.store$ = store$;
        this.actions = actions;
        this.http = http;
        this.cache = new Map();
        this.contrast$ = getContrastFilterValue(store$);
        this.brightness$ = getBrightnessFilterValue(store$);
        this.saturate$ = getSaturateFilterValue(store$);
        this.sepia$ = getSepiaFilterValue(store$);
        this.grayscale$ = getGrayScaleFilterValue(store$);
        this.invert$ = getInvertFilterValue(store$);
        this.hueRotate$ = getHueRotateFilterValue(store$);
        this.blur$ = getBlurFilterValue(store$);
        this.blend$ = getBlendFilterValue(store$);
        this.filterStyle$ = getFilterStyleValue(store$);
        this.overlayStyle$ = getOverlayStyleValue(store$);
        this.selectedImage$ = getSelectedImage(store$);
        this.images$ = getImages(store$);
        this.error$ = getError(store$);
        this.loading$ = getLoading(store$);
    }
    FiltersService.prototype.change = function (_a) {
        var value = _a.value, type = _a.type;
        switch (type) {
            case FiltersService.CONTRAST:
                this.changeContrast(value);
                break;
            case FiltersService.BRIGHTNESS:
                this.changeBrightness(value);
                break;
            case FiltersService.SATURATE:
                this.changeSaturate(value);
                break;
            case FiltersService.SEPIA:
                this.changeSepia(value);
                break;
            case FiltersService.GRAYSCALE:
                this.changeGrayScale(value);
                break;
            case FiltersService.INVERT:
                this.changeInvert(value);
                break;
            case FiltersService.HUE_ROTATE:
                this.changeHueRotate(value);
                break;
            case FiltersService.BLUR:
                this.changeBlur(value);
                break;
            case FiltersService.BLEND:
                this.changeBlend(value);
                break;
            case FiltersService.PRESET:
                this.changePreset(value);
                break;
            case FiltersService.IMAGE:
                this.changeSelectImage(value);
                break;
            case FiltersService.LOADING:
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
            return Observable.of(cache);
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
            .catch(function (error) { return Observable.throw('Error fetching images from Unsplash API. Please try again later.'); });
    };
    return FiltersService;
}());
export { FiltersService };
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
FiltersService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
FiltersService.ctorParameters = function () { return [
    { type: Store, },
    { type: FiltersActions, },
    { type: Http, },
]; };
//# sourceMappingURL=filters-service.js.map