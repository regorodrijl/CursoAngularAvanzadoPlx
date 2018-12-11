import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ItemsApiService } from '../../../../core/items-api.service';

@Component({
  selector: 'app-async',
  templateUrl: './async.component.html',
  styleUrls: ['./async.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AsyncComponent implements OnInit {
  public items$: Observable<any[]>;
  constructor(private itemsApiService: ItemsApiService) {}

  ngOnInit() {
    this.items$ = this.itemsApiService
      .getAll()
      .pipe(tap(items => console.log('items', items)));
  }
}
