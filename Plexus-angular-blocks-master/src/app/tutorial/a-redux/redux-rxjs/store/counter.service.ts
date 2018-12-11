import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CounterActions } from './counter.actions';
import { counterReducer } from './counter.reducer';
import { CounterState, INITIAL_COUNTER_STATE } from './counter.state';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  private state: CounterState = INITIAL_COUNTER_STATE;
  private state$ = new BehaviorSubject<CounterState>(this.state);

  public select$() {
    return this.state$.asObservable();
  }
  public dispatch(command: CounterActions) {
    this.state = counterReducer(this.state, command);
    this.state$.next(this.state);
  }
}
