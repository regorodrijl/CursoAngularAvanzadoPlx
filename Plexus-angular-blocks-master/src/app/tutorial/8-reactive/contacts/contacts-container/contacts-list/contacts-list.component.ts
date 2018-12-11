import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styles: []
})
export class ContactsListComponent implements OnInit {
  @Input() public items: any[];
  @Output() public edit = new EventEmitter<any>();
  constructor() {}

  ngOnInit() {}

  public onEditClick(item) {
    this.edit.next(item);
  }
}
