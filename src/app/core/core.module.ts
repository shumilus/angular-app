import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from '../homepage/containers';
import { AddressCheckerComponent } from '../homepage/components';
import { PageLayoutComponent } from '../page-layout/page-layout.component';
import { StoreModule } from '@ngrx/store';
import { templatesSettingsReducer } from './store/page-settings/page-settings.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { pageNameReducer } from './store/page-name/page-name.reducer';

@NgModule({
  declarations: [
    HomepageComponent,
    AddressCheckerComponent,
    PageLayoutComponent,
  ],
  exports: [
    HomepageComponent,
    PageLayoutComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forRoot({
      pageName: pageNameReducer,
      pagesSettings: templatesSettingsReducer,
    }),
    StoreDevtoolsModule.instrument(),
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
