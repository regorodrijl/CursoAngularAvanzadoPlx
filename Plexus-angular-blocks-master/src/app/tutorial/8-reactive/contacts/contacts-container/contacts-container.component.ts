import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-contacts-container',
  templateUrl: './contacts-container.component.html',
  styles: []
})
export class ContactsContainerComponent implements OnInit {
  public item = {};
  public items$: Subject<any[]> = new Subject();
  private items = [];
  constructor() {}

  public ngOnInit() {}

  public onSave(newItem) {
    if (newItem._id === null) {
      this.items.push({ ...newItem, _id: this.items.length });
    } else {
      this.items[newItem._id] = { ...newItem };
    }
    this.items$.next(this.items);
  }
}
