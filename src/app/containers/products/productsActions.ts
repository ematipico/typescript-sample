import { AppAction } from 'app/interfaces'

export const REQUEST_PRODUCTS = 'REQUEST_PRODUCTS'
export const STORE_PRODUCTS = 'STORE_PRODUCTS'

export const requestProducts = (channel: String): AppAction => {
  return {
    type: REQUEST_PRODUCTS,
    payload: {
      channel
    }
  }
}

export const storeProducts = (products: Object, channel: String): AppAction => {
  return {
    type: STORE_PRODUCTS,
    payload: {
      products,
      channel
    }
  }
}
