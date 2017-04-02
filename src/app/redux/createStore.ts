import { createStore, combineReducers } from 'redux'
import allReducers from './allReducers'


export default () => {
  const store = createStore(combineReducers(allReducers))

  return store;
}
