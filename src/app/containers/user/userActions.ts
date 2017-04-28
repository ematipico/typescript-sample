import { AppAction } from 'app/interfaces'

export const UPDATE_SETTINGS = 'UPDATE_SETTINGS'
export const UPDATE_INFORMATION = 'UPDATE_INFORMATION'

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
