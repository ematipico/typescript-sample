import { IIUserInformation, IIUserSettings } from './user'
import { Store as ReduxStore, Action } from 'redux'

export type Dispatch = (a: IAppAction) => void

export interface IState {
  products: {
    [key: string]: {
      [key: string]: IProduct
    }
  }

  user: {
    loggedIn: boolean
    settings: IIUserSettings,
    information: IIUserInformation
  }

  cart: {
    items: IProduct[]
  }

}

export interface IProduct {
  [key: string]: IProductInfo
}

export interface IProductInfo {
    author: string,
    title: string,
    id: string,
    selftext: string
}

export interface ICart {
  items: IProduct[]
}

export interface IAppAction extends Action {
  payload: any
}

export interface IStore extends IState {
  dispatch: Dispatch
}
