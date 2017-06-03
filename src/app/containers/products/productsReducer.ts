import { Reducer } from 'redux'
import { IState, IAppAction, IProduct, IChannel } from 'app/interfaces'
import { STORE_PRODUCTS } from './productsActions'

export function selectProducts (state: IState) {
  return state.products
}

export function selectProductsFromChannel (state: IState, channel: string): IChannel {
  return state.products[channel]
}

export function selectProduct (state: IState, channel: string, productId: string) {
  return state.products[channel][productId]
}

export default function productsReducer<Reducer> (state: IProduct[] = [], action: IAppAction): object {
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

function normalizeProducts (products: any[]): object {
  const newProducts: {
    [key: string]: object
  } = {}
  products.forEach(product => {
    const id: string = product.data.id
    newProducts[id] = product.data
  })
  return newProducts
}
