import { createStore, combineReducers } from 'redux'
import allReducers from 'app/redux/allReducers.ts'


export default function initStore(): Object {
  const store = createStore(combineReducers(allReducers))

  return store;
}
