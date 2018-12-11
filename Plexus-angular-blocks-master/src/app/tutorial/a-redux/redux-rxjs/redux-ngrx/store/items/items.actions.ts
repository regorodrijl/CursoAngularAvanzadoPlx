import { Action } from '@ngrx/store';

export enum ItemActionTypes {
  GetAll = '[ItemsApiService] Get All Command',
  GetAllOk = '[ItemsApiService] Get All OK Event',
  GetAllError = '[ItemsApiService] Get All Error Event'
}

export class GetAll implements Action {
  readonly type = ItemActionTypes.GetAll;
  constructor() {}
}

export class GetAllOk implements Action {
  readonly type = ItemActionTypes.GetAllOk;
  constructor(public readonly payload: any[]) {}
}

export class GetAllError implements Action {
  readonly type = ItemActionTypes.GetAllError;
  constructor(public readonly payload: string) {}
}

export type ItemActions = GetAll | GetAllOk | GetAllError;
