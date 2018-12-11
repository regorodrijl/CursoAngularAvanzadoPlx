import { ItemActions, ItemActionTypes } from './items.actions';
import { INITIAL_ITEMS_STATE, ItemsState } from './items.state';

export function itemsReducer(
  state = INITIAL_ITEMS_STATE,
  action: ItemActions
): ItemsState {
  let result: ItemsState;
  switch (action.type) {
    case ItemActionTypes.GetAll:
      result = {
        ...state,
        items: [],
        working: true,
        completed: false,
        message: 'loading items...'
      };
      break;
    case ItemActionTypes.GetAllOk:
      result = {
        ...state,
        items: action.payload,
        working: false,
        completed: true,
        message: 'items loaded'
      };
      break;
    case ItemActionTypes.GetAllError:
      result = {
        ...state,
        items: [],
        working: false,
        completed: false,
        message: action.payload
      };
      break;
    default:
      result = { ...state };
      break;
  }
  return result;
}
