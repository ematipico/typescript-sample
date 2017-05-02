
import { SagaIterator } from 'redux-saga'
import { take, fork, put, call } from 'redux-saga/effects'
import { ATTEMPT_LOGIN, loggedState, updateUserInformation, updateUserSettings } from 'app/containers/user/userActions'
import { AppAction } from 'app/interfaces'
import api from 'app/api'
import { UserInformation, UserSettings } from 'app/interfaces/user'

export function* watchAttemptLogin (): SagaIterator {
  while (true) {
    const action = yield take(ATTEMPT_LOGIN);
    yield fork(fetchUser, action)
  }
}

export function* fetchUser(action: AppAction): SagaIterator {
  const { payload }: AppAction = action
  const { email, password} = payload.formInfo
  if (email === 'ema@all.com' && password === 'ema') {
    yield put(loggedState(true))
    const information = {
      firstName: 'Myname',
      lastName: 'Lastname',
      age: 999,
      description: 'I am a good person',
      email
    } as UserInformation
    const settings = {
      receiveNotification: true
    } as UserSettings
    yield put(updateUserInformation(information))
    yield put(updateUserSettings(settings))
  } else {
    throw new Error('invalid login')
  }
}
