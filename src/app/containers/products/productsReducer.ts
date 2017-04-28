import { Reducer } from 'redux'
import { State, AppAction } from 'app/interfaces'
import { STORE_PRODUCTS } from './productsActions'

export function selectProducts (state: State.All) {
  return state.products
}

export function selectProduct (state: State.All, channel: string, productId: string) {
  return state.products[channel][productId]
}

export default function productsReducer<Reducer> (state: State.Products = {}, action: AppAction): State.Products {
  switch (action.type) {
    case STORE_PRODUCTS: {
      const { products, channel } = action.payload
      return {
        ...state,
        [channel]: normalizeProducts(products)
      }
    }
    default:
      return state
  }
}

function normalizeProducts (products: Array<any>): Object {
  const newProducts: {
    [key: string]: Object
  } = {}
  products.forEach(product => {
    const id: string = product.data.id
    newProducts[id] = product.data
  })
  return newProducts
}
