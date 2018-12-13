import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MathModule } from 'math';
import { MathslabContainerComponent } from './mathslab-container/mathslab-container.component';
import { MathslabRoutingModule } from './mathslab-routing.module';

@NgModule({
  declarations: [MathslabContainerComponent],
  imports: [CommonModule, MathslabRoutingModule, MathModule]
})
export class MathslabModule {}
