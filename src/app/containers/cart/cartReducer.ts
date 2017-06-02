import { Reducer } from 'redux'
import { IState, IProduct, IAppAction, ICart } from 'app/interfaces'
import { ADD_ITEM, REMOVE_ITEM, FLUSH_CART } from './cartActions'

const initialState: ICart = {
  items: []
}

export function selectInformation (state: IState) {
  return state.products
}

export function selectSettings (state: IState) {
  return state.user.settings
}

export default function userReducer<Reducer> (state: ICart = initialState, action: IAppAction): ICart {
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
