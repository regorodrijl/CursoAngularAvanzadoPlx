import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ItemsApiService } from '../../../core/items-api.service';

@Component({
  selector: 'app-items-container',
  templateUrl: './items-container.component.html',
  styles: []
})
export class ItemsContainerComponent implements OnInit {
  public items$: Observable<any[]>;
  constructor(private itemsApiService: ItemsApiService) {}

  public ngOnInit() {
    this.items$ = this.itemsApiService.getAll();
  }

  public onSave(newItem) {
    this.items$ = this.itemsApiService
      .post(newItem)
      .pipe(switchMap(() => this.itemsApiService.getAll()));
  }
}
