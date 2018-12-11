import { Component, OnInit } from '@angular/core';
import { SwUpdate, UpdateAvailableEvent } from '@angular/service-worker';
import { Observable } from 'rxjs';
import { ItemsApiService } from '../../../../core/items-api.service';
import { ProductsApiService } from '../../../../core/products-api.service';

@Component({
  selector: 'app-pwa-container',
  templateUrl: './pwa-container.component.html',
  styles: []
})
export class PwaContainerComponent implements OnInit {
  public items$: Observable<any[]>;
  public products$: Observable<any[]>;
  constructor(
    private swUpdate: SwUpdate,
    private itemsApiService: ItemsApiService,
    private productsApiService: ProductsApiService
  ) {}

  ngOnInit() {
    this.onUpdates();
    this.items$ = this.itemsApiService.getAll();
    this.products$ = this.productsApiService.getProducts$();
  }

  private onUpdates() {
    this.swUpdate.available.subscribe((event: UpdateAvailableEvent) => {
      const appData = event.available.appData;
      const versionMessage = appData
        ? appData['versionMessage']
        : 'New version is available!';
      const msg = `${versionMessage} Do you want to update?`;
      if (confirm(msg)) {
        window.location.reload();
      }
    });
  }
}
