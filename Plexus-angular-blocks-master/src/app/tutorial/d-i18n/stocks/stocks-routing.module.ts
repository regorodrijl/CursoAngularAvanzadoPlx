import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StocksContainerComponent } from './stocks-container/stocks-container.component';

const routes: Routes = [
  {
    path: '',
    component: StocksContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StocksRoutingModule {}
