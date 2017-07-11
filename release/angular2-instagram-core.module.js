import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { FiltersActions } from './actions';
import { FiltersService } from './services';
import { FiltersEffects } from './effects/filters-effects';
var Angular2InstagramCoreModule = (function () {
    function Angular2InstagramCoreModule() {
    }
    /**
     * @description Use this method in your other (non root) modules to import the services
     * @returns {ModuleWithProviders}
     */
    Angular2InstagramCoreModule.forChild = function () {
        return {
            ngModule: Angular2InstagramCoreModule,
            providers: [
                FiltersActions,
                FiltersService
            ]
        };
    };
    Angular2InstagramCoreModule.decorators = [
        { type: NgModule, args: [{
                    imports: [EffectsModule.run(FiltersEffects)]
                },] },
    ];
    /** @nocollapse */
    Angular2InstagramCoreModule.ctorParameters = function () { return []; };
    return Angular2InstagramCoreModule;
}());
export { Angular2InstagramCoreModule };
//# sourceMappingURL=angular2-instagram-core.module.js.map