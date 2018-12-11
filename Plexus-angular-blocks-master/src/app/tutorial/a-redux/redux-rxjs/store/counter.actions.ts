export interface Action {
  readonly type: string;
  readonly payload: any;
}

export enum CounterActionTypes {
  Add = '[Counter] Add',
  Substract = '[Counter] Substract'
}

export interface CounterAction extends Action {
  readonly type: CounterActionTypes;
  readonly payload: number;
}

export class Add implements CounterAction {
  public readonly type = CounterActionTypes.Add;
  constructor(public readonly payload: number) {}
}

export class Substract implements CounterAction {
  public readonly type = CounterActionTypes.Substract;
  constructor(public readonly payload: number) {}
}

export type CounterActions = Add | Substract;
