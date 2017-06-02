import { IAppAction } from 'app/interfaces'
import { IUserInformation, IUserSettings } from 'app/interfaces/user'

export const UPDATE_SETTINGS = 'UPDATE_SETTINGS'
export const UPDATE_INFORMATION = 'UPDATE_INFORMATION'
export const LOGGED_STATE = 'LOGGED_STATE'
export const ATTEMPT_LOGIN = 'ATTEMPT_LOGIN'
export const SUCCESS_LOGIN = 'SUCCESS_LOGIN'

export function updateIUserSettings (newSettings: IUserSettings): IAppAction {
  return {
    type: UPDATE_SETTINGS,
    payload: {
      newSettings
    }
  }
}

export function updateIUserInformation (newInformation: IUserInformation): IAppAction {
  return {
    type: UPDATE_INFORMATION,
    payload: {
      newInformation
    }
  }
}

export function attemptLogin (formInfo: object): IAppAction {
  return {
    type: ATTEMPT_LOGIN,
    payload: {
      formInfo
    }
  }
}

export function successLogin (userInfo: object): IAppAction {
  return {
    type: SUCCESS_LOGIN,
    payload: {
      userInfo
    }
  }
}

export function loggedState (theState: boolean): IAppAction {
  return {
    type: LOGGED_STATE,
    payload: {
      theState
    }
  }
}
