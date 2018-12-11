import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemsContainerComponent } from './items-container/items-container.component';

const routes: Routes = [
  {
    path: '',
    component: ItemsContainerComponent
  },
  {
    path: ':id',
    loadChildren: './item/item.module#ItemModule'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemsRoutingModule {}
