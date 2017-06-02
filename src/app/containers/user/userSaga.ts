
import { SagaIterator } from 'redux-saga'
import { take, fork, put, call } from 'redux-saga/effects'
import { ATTEMPT_LOGIN, loggedState, updateIUserInformation, updateIUserSettings } from 'app/containers/user/userActions'
import { IAppAction } from 'app/interfaces'
import api from 'app/api'
import { IUserInformation, IUserSettings } from 'app/interfaces/user'

export function* watchAttemptLogin (): SagaIterator {
  while (true) {
    const action = yield take(ATTEMPT_LOGIN);
    yield fork(fetchUser, action)
  }
}

export function* fetchUser(action: IAppAction): SagaIterator {
  const { payload }: IAppAction = action
  const { email, password} = payload.formInfo
  if (email === 'ema@all.com' && password === 'ema') {
    yield put(loggedState(true))
    const information: IUserInformation = {
      age: 999,
      description: 'I am a good person',
      email,
      firstName: 'Myname',
      lastName: 'Lastname',
    }
    const settings: IUserSettings = {
      receiveNotification: true
    }
    yield put(updateIUserInformation(information))
    yield put(updateIUserSettings(settings))
  } else {
    throw new Error('invalid login')
  }
}
