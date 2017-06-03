import { IUserInformation, IUserSettings } from './user'
import { Store as ReduxStore, Action } from 'redux'

export type Dispatch = (a: IAppAction) => void

export interface IState {
  products: {
    [channel: string]: IChannel
  }

  user: {
    loggedIn: boolean
    settings: IUserSettings,
    information: IUserInformation
  }

  cart: {
    items: IProduct[]
  }
}

export interface IProduct {
  [key: string]: IProductInfo
}

export interface IProducts {
  [channel: string]: IChannel
}

export interface IChannel {
  [id: string]: IProduct
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
