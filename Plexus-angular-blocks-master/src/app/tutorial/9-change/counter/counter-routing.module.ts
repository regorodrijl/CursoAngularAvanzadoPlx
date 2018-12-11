import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsyncComponent } from './async/async.component';
import { ChangeContainerComponent } from './change-container/change-container.component';
import { DetectorComponent } from './detector/detector.component';
import { ParentComponent } from './parent/parent.component';
import { SubscribeComponent } from './subscribe/subscribe.component';

const routes: Routes = [
  {
    path: '',
    component: ChangeContainerComponent,
    children: [
      {
        path: 'detector',
        component: DetectorComponent
      },
      {
        path: 'family',
        component: ParentComponent
      },
      {
        path: 'subscribe',
        component: SubscribeComponent
      },
      {
        path: 'async',
        component: AsyncComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CounterRoutingModule {}
