import { watchRequestProducts } from 'containers/products/productsSaga'
import { SagaIterator } from 'redux-saga'
import { fork } from 'redux-saga/effects'
export default function * root (): SagaIterator {
  yield [
    fork(watchRequestProducts)
  ]
}
