import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MathslabContainerComponent } from './mathslab-container/mathslab-container.component';

const routes: Routes = [
  {
    path: '',
    component: MathslabContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MathslabRoutingModule {}
