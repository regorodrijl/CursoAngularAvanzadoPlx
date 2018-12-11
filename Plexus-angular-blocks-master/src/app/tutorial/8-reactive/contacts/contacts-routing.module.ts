import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsContainerComponent } from './contacts-container/contacts-container.component';

const routes: Routes = [
  {
    path: '',
    component: ContactsContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactsRoutingModule {}
