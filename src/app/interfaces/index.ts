import { UserInformation, UserSettings } from './user'
import { Store as ReduxStore, Action } from 'redux'

export type Dispatch = (a: AppAction) => void

export interface Product {
  [key: string]: ProductInfo
}

export interface ProductInfo {
    author: string,
    title: string,
    id: string,
    selftext: string
}

export interface Cart {
  items: Array<Product>
}

export namespace State {
  export type Products = {
    [key: string]: {
      [key: string]: Product
    }
  }

  export type User = {
    loggedIn: boolean
    settings: UserSettings,
    information: UserInformation
  }

  export type UserInformation = {

  }

  export type UserSettings = {

  }

  export type Cart = {
    items: Array<Product>
  }

  export type All = {
    products: Products,
    dispatch: Dispatch,
    user: User
  }
}

export interface AppAction extends Action {
  payload: any
}

export interface Store extends ReduxStore<State.All> {
  dispatch: Dispatch
}
