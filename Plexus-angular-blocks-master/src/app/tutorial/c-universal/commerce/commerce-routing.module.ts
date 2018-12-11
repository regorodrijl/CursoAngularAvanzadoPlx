import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommerceContainerComponent } from './commerce-container/commerce-container.component';

const routes: Routes = [
  {
    path: '',
    component: CommerceContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommerceRoutingModule {}
