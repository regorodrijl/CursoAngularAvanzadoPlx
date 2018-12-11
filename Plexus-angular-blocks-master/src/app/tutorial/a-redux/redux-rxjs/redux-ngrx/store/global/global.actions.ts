import { Action } from '@ngrx/store';

export enum GlobalActionTypes {
  ShowMessage = '[Global] Show Message',
  Limpiar = '[Limpiar] limpiando Redux acción'
}

export class ShowMessage implements Action {
  readonly type = GlobalActionTypes.ShowMessage;
  constructor(public readonly payload: string) { }
}

export class Limpiar implements Action {
  readonly type = GlobalActionTypes.Limpiar;
  constructor() { }
}

export type GlobalActions = ShowMessage | Limpiar;
