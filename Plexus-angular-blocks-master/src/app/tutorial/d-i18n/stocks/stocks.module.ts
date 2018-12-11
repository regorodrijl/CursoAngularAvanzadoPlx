import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StocksRoutingModule } from './stocks-routing.module';
import { StocksContainerComponent } from './stocks-container/stocks-container.component';

@NgModule({
  declarations: [StocksContainerComponent],
  imports: [
    CommonModule,
    StocksRoutingModule
  ]
})
export class StocksModule { }
