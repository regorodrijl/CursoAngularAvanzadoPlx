import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  private message = '';
  private message$ = new BehaviorSubject<string>(this.message);

  constructor() {}

  public getMessage$() {
    return this.message$.asObservable();
  }

  public setMessage(message) {
    this.message = message;
    this.message$.next(message);
    setTimeout(() => {
      this.message$.next('');
    }, 3000);
  }
}
