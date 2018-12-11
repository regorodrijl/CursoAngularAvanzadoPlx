import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { RecounterComponent } from './recounter/recounter.component';

const routes: Routes = [
  {
    path: '',
    component: CounterComponent
  },
  {
    path: 'recounter',
    component: RecounterComponent
  },
  {
    path: 'ngrxitems',
    loadChildren: './redux-ngrx/redux-ngrx.module#ReduxNgrxModule'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReduxRxjsRoutingModule {}
