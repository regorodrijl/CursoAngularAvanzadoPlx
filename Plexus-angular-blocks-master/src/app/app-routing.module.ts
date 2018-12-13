import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: './home/home.module#HomeModule'
  },
  {
    path: 'about',
    loadChildren: './about/about.module#AboutModule'
  },
  {
    path: 'items',
    loadChildren: './base/items/items.module#ItemsModule'
  },
  {
    path: '8-reactive',
    loadChildren:
      './tutorial/8-reactive/contacts/contacts.module#ContactsModule'
  },
  {
    path: '9-change',
    loadChildren: './tutorial/9-change/counter/counter.module#CounterModule'
  },
  {
    path: 'a-redux',
    loadChildren:
      './tutorial/a-redux/redux-rxjs/redux-rxjs.module#ReduxRxjsModule'
  },
  {
    path: 'b-pwa',
    loadChildren: './tutorial/b-pwa/local/local.module#LocalModule'
  },
  {
    path: 'c-universal',
    loadChildren:
      './tutorial/c-universal/commerce/commerce.module#CommerceModule'
  },
  {
    path: 'd-i18n',
    loadChildren: './tutorial/d-i18n/stocks/stocks.module#StocksModule'
  },
  {
    path: 'e-library',
    loadChildren: './tutorial/e-library/mathslab/mathslab.module#MathslabModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
