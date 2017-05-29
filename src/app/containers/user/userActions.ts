import { AppAction } from 'app/interfaces'
import { UserInformation, UserSettings } from 'app/interfaces/user'

export const UPDATE_SETTINGS = 'UPDATE_SETTINGS'
export const UPDATE_INFORMATION = 'UPDATE_INFORMATION'
export const LOGGED_STATE = 'LOGGED_STATE'
export const ATTEMPT_LOGIN = 'ATTEMPT_LOGIN'
export const SUCCESS_LOGIN = 'SUCCESS_LOGIN'

export function updateUserSettings (newSettings: UserSettings): AppAction {
  return {
    type: UPDATE_SETTINGS,
    payload: {
      newSettings
    }
  }
}

export function updateUserInformation (newInformation: UserInformation): AppAction {
  return {
    type: UPDATE_INFORMATION,
    payload: {
      newInformation
    }
  }
}

export function attemptLogin (formInfo: Object): AppAction {
  return {
    type: ATTEMPT_LOGIN,
    payload: {
      formInfo
    }
  }
}

export function successLogin (userInfo: Object): AppAction {
  return {
    type: SUCCESS_LOGIN,
    payload: {
      userInfo
    }
  }
}

export function loggedState (theState: boolean): AppAction {
  return {
    type: LOGGED_STATE,
    payload: {
      theState
    }
  }
}
