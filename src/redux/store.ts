import { createStore, combineReducers, Store as ReduxStore, compose, applyMiddleware, GenericStoreEnhancer } from 'redux'
import allReducers from './allReducers'
import allSagas from './allSagas'
import { State, Store } from 'interfaces'
import createSagaMiddleware from 'redux-saga'

export default function configureStore () {
  const sagaMiddleware = createSagaMiddleware()
  const devToolsExtension: GenericStoreEnhancer = (window as any).__REDUX_DEVTOOLS_EXTENSION__ && process.env.NODE_ENV === 'development' ? (window as any).__REDUX_DEVTOOLS_EXTENSION__() : compose;
  const store = createStore(
    combineReducers(allReducers),
    compose(
      applyMiddleware(sagaMiddleware),
      devToolsExtension
    ) as GenericStoreEnhancer
  )

  sagaMiddleware.run(allSagas)
  return store
}
