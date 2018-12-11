import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ItemsApiService } from '../../../../core/items-api.service';

@Component({
  selector: 'app-item-container',
  templateUrl: './item-container.component.html',
  styles: []
})
export class ItemContainerComponent implements OnInit {
  public item$: Observable<any>;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private itemsApiService: ItemsApiService
  ) {}

  public ngOnInit() {
    this.item$ = this.route.params.pipe(
      switchMap(params => this.itemsApiService.getById(params['id']))
    );
  }

  public onDelete(item) {
    this.itemsApiService
      .deleteById(item._id)
      .subscribe(() => this.router.navigate(['../items']));
  }
}
