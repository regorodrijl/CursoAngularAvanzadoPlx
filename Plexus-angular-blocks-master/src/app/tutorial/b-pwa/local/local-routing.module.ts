import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PwaContainerComponent } from './pwa-container/pwa-container.component';

const routes: Routes = [
  {
    path: '',
    component: PwaContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocalRoutingModule {}
