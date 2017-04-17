import { NgModule, ModuleWithProviders } from '@angular/core';


@NgModule({})
export class Angular2InstagramCoreModule {
  /**
   * @description Use this method in your other (non root) modules to import the services
   * @param config
   * @returns {ModuleWithProviders}
   */
  static forChild(config): ModuleWithProviders {
    return {
      ngModule: Angular2InstagramCoreModule,
      providers: [

      ]
    }
  }
}