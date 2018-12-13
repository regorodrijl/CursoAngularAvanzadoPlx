import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from "@angular/elements";
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  entryComponents: [AppComponent],
  bootstrap: []
})
export class AppModule {
  public constructor(private injector: Injector) { }

  public ngDoBootstrap() {
    const el = createCustomElement(AppComponent, {
      injector: this.injector
    });
    customElements.define("mi-webcomponents", el);
  }
}
