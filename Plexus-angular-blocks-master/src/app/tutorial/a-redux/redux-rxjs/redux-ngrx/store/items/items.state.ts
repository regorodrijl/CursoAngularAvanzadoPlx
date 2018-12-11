export interface ItemsState {
  items: any[];
  working: boolean;
  completed: boolean;
  message: string;
}
export const INITIAL_ITEMS_STATE: ItemsState = {
  items: [],
  working: false,
  completed: false,
  message: ''
};
