import { IAppAction } from 'app/interfaces'

export const REQUEST_PRODUCTS = 'REQUEST_PRODUCTS'
export const STORE_PRODUCTS = 'STORE_PRODUCTS'

export const requestProducts = (channel: string): IAppAction => {
  return {
    type: REQUEST_PRODUCTS,
    payload: {
      channel
    }
  }
}

export const storeProducts = (products: object, channel: string): IAppAction => {
  return {
    type: STORE_PRODUCTS,
    payload: {
      products,
      channel
    }
  }
}
