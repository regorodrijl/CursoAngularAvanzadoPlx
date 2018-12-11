import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BlocksService {
  private url = environment.assetsUrl + 'blocks.json';
  constructor(private http: HttpClient) {}

  public getBlocks$() {
    return this.http.get<any[]>(this.url);
  }
}
