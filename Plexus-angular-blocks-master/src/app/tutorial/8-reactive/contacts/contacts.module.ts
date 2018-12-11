import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactsContainerComponent } from './contacts-container/contacts-container.component';
import { ContactsListComponent } from './contacts-container/contacts-list/contacts-list.component';
import { ContactsNewComponent } from './contacts-container/contacts-new/contacts-new.component';
import { ContactsRoutingModule } from './contacts-routing.module';

@NgModule({
  declarations: [
    ContactsContainerComponent,
    ContactsNewComponent,
    ContactsListComponent
  ],
  imports: [CommonModule, ContactsRoutingModule, ReactiveFormsModule]
})
export class ContactsModule {}
