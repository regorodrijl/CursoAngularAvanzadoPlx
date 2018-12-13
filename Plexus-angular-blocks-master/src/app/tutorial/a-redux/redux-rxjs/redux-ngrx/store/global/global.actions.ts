import { Action } from '@ngrx/store';

export enum GlobalActionTypes {
  ShowMessage = '[Global] Show Message'
}

export class ShowMessage implements Action {
  readonly type = GlobalActionTypes.ShowMessage;
  constructor(public readonly payload: string) {}
}

export type GlobalActions = ShowMessage;
