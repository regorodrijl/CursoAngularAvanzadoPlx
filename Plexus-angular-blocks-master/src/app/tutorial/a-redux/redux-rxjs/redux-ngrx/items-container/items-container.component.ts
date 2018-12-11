import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { GetAll } from '../store/items/items.actions';
import { RootState } from '../store/root/root.state';

@Component({
  selector: 'app-items-container',
  templateUrl: './items-container.component.html',
  styles: []
})
export class ItemsContainerComponent implements OnInit {
  public itemsRedux$: Observable<any[]>;
  constructor(private store: Store<RootState>) {}

  ngOnInit() {
    this.itemsRedux$ = this.store.select('items', 'items');
    this.store.dispatch(new GetAll());
  }
}
