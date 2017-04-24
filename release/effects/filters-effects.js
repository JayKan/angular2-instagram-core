var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { FiltersActions } from '../actions/filters-actions';
import { FiltersService } from '../services/filters-service';
var FiltersEffects = (function () {
    function FiltersEffects(actions$, filtersService, filtersActions) {
        var _this = this;
        this.actions$ = actions$;
        this.filtersService = filtersService;
        this.filtersActions = filtersActions;
        this.fetchImages$ = this.actions$
            .ofType(FiltersActions.LOAD_IMAGES)
            .switchMap(function (_a) {
            var payload = _a.payload;
            return _this.filtersService.fetchImages(payload.api)
                .map(function (data) { return _this.filtersActions.fetchImagesFulfilled(data); })
                .catch(function (error) { return Observable.of(_this.filtersActions.fetchImagesFailed(error)); });
        });
    }
    return FiltersEffects;
}());
export { FiltersEffects };
FiltersEffects.decorators = [
    { type: Injectable },
];
/** @nocollapse */
FiltersEffects.ctorParameters = function () { return [
    { type: Actions, },
    { type: FiltersService, },
    { type: FiltersActions, },
]; };
__decorate([
    Effect(),
    __metadata("design:type", Observable)
], FiltersEffects.prototype, "fetchImages$", void 0);
//# sourceMappingURL=filters-effects.js.map