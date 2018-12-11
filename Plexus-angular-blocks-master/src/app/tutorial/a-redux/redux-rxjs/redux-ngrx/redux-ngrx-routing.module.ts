import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemsContainerComponent } from './items-container/items-container.component';

const routes: Routes = [
  {
    path: '',
    component: ItemsContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReduxNgrxRoutingModule {}
