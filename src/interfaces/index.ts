import { Store as ReduxStore, Action } from 'redux'

export type Dispatch = (a: AppAction) => void

export namespace State {
  export type Products = {}

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
