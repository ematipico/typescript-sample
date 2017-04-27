
import { SagaIterator } from 'redux-saga'
import { take, fork, put, call } from 'redux-saga/effects'
import { REQUEST_PRODUCTS, storeProducts } from 'app/containers/products/productsActions'
import { AppAction } from 'app/interfaces'
import api from 'app/api'

export function* watchRequestProducts (): SagaIterator {
  const action = yield take(REQUEST_PRODUCTS);
  yield fork(getProducts, action)
}

export function* getProducts(action: AppAction): SagaIterator {
  const { payload }: AppAction = action
  const data = yield call(api, payload.channel)
  yield put(storeProducts(data.data.children, payload.channel))
}
