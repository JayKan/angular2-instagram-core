import { NgModule } from '@angular/core';
var Angular2InstagramCoreModule = (function () {
    function Angular2InstagramCoreModule() {
    }
    /**
     * @description Use this method in your other (non root) modules to import the services
     * @param config
     * @returns {ModuleWithProviders}
     */
    Angular2InstagramCoreModule.forChild = function (config) {
        return {
            ngModule: Angular2InstagramCoreModule,
            providers: []
        };
    };
    return Angular2InstagramCoreModule;
}());
export { Angular2InstagramCoreModule };
Angular2InstagramCoreModule.decorators = [
    { type: NgModule, args: [{},] },
];
/** @nocollapse */
Angular2InstagramCoreModule.ctorParameters = function () { return []; };
//# sourceMappingURL=angular2-instagram-core.module.js.map