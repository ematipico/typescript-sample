import { createStore, combineReducers, Store as ReduxStore, compose, applyMiddleware, GenericStoreEnhancer } from 'redux'
import allReducers from './allReducers'
import allSagas from './allSagas'
import { IState, IStore } from 'app/interfaces'
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
  if (process.env.NODE_ENV === 'development') {
    (window as any).store = store
    if ((module as any).hot) {
      // Enable Webpack hot module replacement for reducers
      (module as any).hot.accept('./allReducers', () => {
        const nextRootReducer = require('./allReducers');
        store.replaceReducer(nextRootReducer);
      });
    }
  }

  return store
}
