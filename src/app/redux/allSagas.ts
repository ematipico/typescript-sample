import { watchRequestProducts } from 'app/containers/products/productsSaga'
import { watchAttemptLogin } from 'app/containers/user/userSaga'
import { SagaIterator } from 'redux-saga'
import { fork } from 'redux-saga/effects'
export default function * root (): SagaIterator {
  yield [
    fork(watchRequestProducts),
    fork(watchAttemptLogin)
  ]
}
