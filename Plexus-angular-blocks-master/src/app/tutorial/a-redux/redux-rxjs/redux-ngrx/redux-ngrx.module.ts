import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../../../../environments/environment';
import { ItemsContainerComponent } from './items-container/items-container.component';
import { ReduxNgrxRoutingModule } from './redux-ngrx-routing.module';
import { ItemsEffects } from './store/items/items.effects';
import { metaReducers, rootReducers } from './store/root';

@NgModule({
  declarations: [ItemsContainerComponent],
  imports: [
    CommonModule,
    ReduxNgrxRoutingModule,
    StoreModule.forRoot(rootReducers, { metaReducers }),
    StoreDevtoolsModule.instrument({
      maxAge: 100,
      logOnly: environment.production
    }),
    EffectsModule.forRoot([ItemsEffects])
  ]
})
export class ReduxNgrxModule {}
