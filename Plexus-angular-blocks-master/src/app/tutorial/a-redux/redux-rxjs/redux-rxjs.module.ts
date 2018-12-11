import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CounterComponent } from './counter/counter.component';
import { RecounterComponent } from './recounter/recounter.component';
import { ReduxRxjsRoutingModule } from './redux-rxjs-routing.module';

@NgModule({
  declarations: [CounterComponent, RecounterComponent],
  imports: [CommonModule, ReduxRxjsRoutingModule]
})
export class ReduxRxjsModule {}
