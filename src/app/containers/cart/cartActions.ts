import { AppAction, Product } from 'app/interfaces'
import { Action } from 'redux'

export const ADD_ITEM = 'ADD_ITEM'
export const REMOVE_ITEM = 'REMOVE_ITEM'
export const FLUSH_CART = 'FLUSH_CART'

export function addItem (item: Product): AppAction {
  return {
    type: ADD_ITEM,
    payload: {
      item
    }
  }
}

export function removeItem (id: string): AppAction {
  return {
    type: REMOVE_ITEM,
    payload: {
      id
    }
  }
}

export function flushCart (): Action {
  return {
    type: FLUSH_CART
  }
}
