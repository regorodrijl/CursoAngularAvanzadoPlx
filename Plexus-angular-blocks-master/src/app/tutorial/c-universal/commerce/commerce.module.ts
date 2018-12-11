import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommerceRoutingModule } from './commerce-routing.module';
import { CommerceContainerComponent } from './commerce-container/commerce-container.component';

@NgModule({
  declarations: [CommerceContainerComponent],
  imports: [
    CommonModule,
    CommerceRoutingModule
  ]
})
export class CommerceModule { }
