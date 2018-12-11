import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { ItemsApiService } from '../../../../../../core/items-api.service';
import { GetAllError, GetAllOk, ItemActionTypes } from './items.actions';

@Injectable()
export class ItemsEffects {
  // @Effect()
  // public miEfecto: Observable<Action> = this.actions$.pipe(
  //   filter(accion => accion.type === ItemActionTypes.GetAll),
  //   tap(accion => console.log(accion)),
  //   switchMap(accion =>
  //     this.itemsApiService.getAll().pipe(
  //       map(items => new GetAllOk(items)),
  //       catchError(error => of(new GetAllError(error.message)))
  //     )
  //   )
  // );

  constructor(
    private actions$: Actions,
    private itemsApiService: ItemsApiService
  ) {
    // const valor$ = of(5);
    // valor$.subscribe(dato => console.log(dato)); // 5
    // const valores$ = from([2, 'a', {}]);
    // valores$.subscribe(dato => console.log(dato)); // 2, 'a', {}
    // const intervalo$ = interval(1000);
    // intervalo$.subscribe(dato => console.log(dato)); // 1, 2, 3
    // const promesa$ = from(new Promise(resolve => resolve(9))); // 9
  }

  @Effect()
  public getItemsEffect$ = this.actions$.pipe(
    ofType(ItemActionTypes.GetAll),
    switchMap(getAllAction =>
      this.itemsApiService.getAll().pipe(
        map(items => {
          if (Array.isArray(items)) {
            return new GetAllOk(items);
          } else {
            return new GetAllOk([]);
          }
        }),
        catchError(err => of(new GetAllError(err.message)))
      )
    )
  );
}
