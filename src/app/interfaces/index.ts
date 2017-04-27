import { Store as ReduxStore, Action } from 'redux'

export type Dispatch = (a: AppAction) => void

export interface Product {
  data: {
    author: string,
    title: string,
    id: string
  }
}

export namespace State {
  export type Products = {
    [key: string]: Array<Product>
  }

  export type All = {
    products: Products,
    dispatch: Dispatch
  }
}

export interface AppAction extends Action {
  payload: any
}

export interface Store extends ReduxStore<State.All> {
  dispatch: Dispatch
}
