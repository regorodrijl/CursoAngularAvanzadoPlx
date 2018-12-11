import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { ProductsApiService } from '../../../../core/products-api.service';

@Component({
  selector: 'app-commerce-container',
  templateUrl: './commerce-container.component.html',
  styles: []
})
export class CommerceContainerComponent implements OnInit {
  public products$: Observable<any[]>;
  constructor(
    private title: Title,
    private meta: Meta,
    private productsApiService: ProductsApiService
  ) {}

  ngOnInit() {
    this.title.setTitle('The best e-commerce store');
    this.meta.addTag({ name: 'description', content: 'products store' });
    this.products$ = this.productsApiService.getProducts$();
  }
}
