import { ModuleWithProviders } from '@angular/core';
export * from './actions';
export * from './effects';
export * from './interfaces';
export * from './reducers';
export * from './services';
export declare class Angular2InstagramCoreModule {
    /**
     * @description Use this method in your other (non root) modules to import the services
     * @returns {ModuleWithProviders}
     */
    static forChild(): ModuleWithProviders;
}
