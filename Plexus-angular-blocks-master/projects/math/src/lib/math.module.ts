import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MathComponent } from './math.component';

@NgModule({
  declarations: [MathComponent],
  imports: [FormsModule],
  exports: [MathComponent]
})
export class MathModule {}
