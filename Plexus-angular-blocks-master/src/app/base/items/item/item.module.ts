import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ItemContainerComponent } from './item-container/item-container.component';
import { ItemViewComponent } from './item-container/item-view/item-view.component';
import { ItemRoutingModule } from './item-routing.module';

@NgModule({
  declarations: [ItemContainerComponent, ItemViewComponent],
  imports: [CommonModule, ItemRoutingModule]
})
export class ItemModule {}
