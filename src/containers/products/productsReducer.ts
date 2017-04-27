import { Reducer } from 'redux'
import { State, AppAction } from 'interfaces'
import { STORE_PRODUCTS } from './productsActions'

export function selectProducts (state: State.All) {
  return state.products
}

export default function productsReducer<Reducer> (state: State.Products = {}, action: AppAction): State.Products {
  switch (action.type) {
    case STORE_PRODUCTS: {
      const { products, channel } = action.payload
      return {
        ...state,
        [channel]: [
          ...products
        ]
      }
    }
    default:
      return state
  }
}
