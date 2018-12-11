import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsApiService {
  private url = environment.assetsUrl + 'products.json';
  constructor(private http: HttpClient) {}

  public getProducts$() {
    return this.http.get<any[]>(this.url);
  }
}
