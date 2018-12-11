import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../../../../../../environments/environment';
import { globalReducer } from '../global/global.reducer';
import { itemsReducer } from '../items/items.reducer';
import { RootState } from './root.state';

export const rootReducers: ActionReducerMap<RootState> = {
  global: globalReducer,
  items: itemsReducer
};

export const metaReducers: MetaReducer<RootState>[] = !environment.production
  ? []
  : [];
