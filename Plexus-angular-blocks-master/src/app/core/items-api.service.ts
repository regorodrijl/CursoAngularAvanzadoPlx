import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { GlobalService } from './global.service';

@Injectable({
  providedIn: 'root'
})
export class ItemsApiService {
  private url = environment.apiUrl + 'pub/items';
  constructor(private http: HttpClient, private globalService: GlobalService) {}

  public post(newItem) {
    return this.http
      .post(this.url, newItem)
      .pipe(tap(res => this.globalService.setMessage('Saved')));
  }
  public getAll() {
    return this.http
      .get<any[]>(this.url)
      .pipe(tap(res => this.globalService.setMessage('Got Items')));
  }
  public getById(itemId) {
    return this.http
      .get<any>(this.url + '/' + itemId)
      .pipe(tap(res => this.globalService.setMessage('Got Item')));
  }
  public deleteById(itemId) {
    return this.http
      .delete<any>(this.url + '/' + itemId)
      .pipe(tap(res => this.globalService.setMessage('Deleted')));
  }
}
