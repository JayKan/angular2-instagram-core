import { NgModule } from '@angular/core';
import { FiltersActions } from './actions';
import { FiltersService } from './services';
export * from './actions';
export * from './effects';
export * from './reducers';
export * from './services';
var Angular2InstagramCoreModule = (function () {
    function Angular2InstagramCoreModule() {
    }
    return Angular2InstagramCoreModule;
}());
export { Angular2InstagramCoreModule };
/**
 * @description Use this method in your other (non root) modules to import the services
 * @returns {ModuleWithProviders}
 */
// static forChild(): ModuleWithProviders {
//   return {
//     ngModule: Angular2InstagramCoreModule,
//     providers: [
//       FiltersActions,
//       FiltersService
//     ]
//   };
// }
Angular2InstagramCoreModule.decorators = [
    { type: NgModule, args: [{
                providers: [
                    FiltersActions,
                    FiltersService
                ]
            },] },
];
/** @nocollapse */
Angular2InstagramCoreModule.ctorParameters = function () { return []; };
//# sourceMappingURL=angular2-instagram-core.module.js.map