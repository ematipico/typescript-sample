import { AppAction } from 'app/interfaces'

export const UPDATE_SETTINGS = 'UPDATE_SETTINGS'
export const UPDATE_INFORMATION = 'UPDATE_INFORMATION'
export const LOGGED_STATE = 'LOGGED_STATE'
export const ATTEMPT_LOGIN = 'ATTEMPT_LOGIN'

export function updateUserSettings (newSettings: Object): AppAction {
  return {
    type: UPDATE_SETTINGS,
    payload: {
      newSettings
    }
  }
}

export function updateUserInformation (newInformation: Object): AppAction {
  return {
    type: UPDATE_INFORMATION,
    payload: {
      newInformation
    }
  }
}

export function attemptLogin (formInfo: Object): AppAction {
  return {
    type: UPDATE_INFORMATION,
    payload: {
      formInfo
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
