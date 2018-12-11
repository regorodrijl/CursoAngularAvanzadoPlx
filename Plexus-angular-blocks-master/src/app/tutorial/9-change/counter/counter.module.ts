import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AsyncComponent } from './async/async.component';
import { ChangeContainerComponent } from './change-container/change-container.component';
import { CounterRoutingModule } from './counter-routing.module';
import { DetectorComponent } from './detector/detector.component';
import { ChildComponent } from './parent/child/child.component';
import { ParentComponent } from './parent/parent.component';
import { SubscribeComponent } from './subscribe/subscribe.component';

@NgModule({
  declarations: [
    ParentComponent,
    DetectorComponent,
    ChildComponent,
    AsyncComponent,
    SubscribeComponent,
    ChangeContainerComponent
  ],
  imports: [CommonModule, CounterRoutingModule]
})
export class CounterModule {}
