import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './app.effects';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, CoreModule, ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }), EffectsModule.forRoot([AppEffects]), StoreModule.forRoot(reducers, { metaReducers })],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
