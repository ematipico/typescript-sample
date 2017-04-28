import { Reducer } from 'redux'
import { State, AppAction, Cart } from 'app/interfaces'
import { ADD_ITEM, REMOVE_ITEM, FLUSH_CART } from './cartActions'

const initialState = {
  items: []
} as Cart

export function selectInformation (state: State.All) {
  return state.products
}

export function selectSettings (state: State.All) {
  return state.user.settings
}

export default function userReducer<Reducer> (state: State.Cart = initialState, action: AppAction): State.Cart {
  switch (action.type) {
    case ADD_ITEM: {
      const { payload } = action
      const item = {
        [payload.item.id]: payload.item
      }
      return {
        ...state,
        items: [
          ...state.items,
          item
        ]
      }
    }
    case REMOVE_ITEM: {
      const { payload } = action
      const newState = { ...state }
      delete newState.items[payload.id]
      return newState;
    }
    case FLUSH_CART: {
      return {
        ...state,
        items: []
      }
    }
    default:
      return state
  }
}
