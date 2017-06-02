import { Reducer, combineReducers } from 'redux'
import { IState, IAppAction } from 'app/interfaces'
import { IUser, IUserSettings, IUserInformation } from 'app/interfaces/user'
import informationReducer from './informationReducer'
import settingsReducer from './settingsReducer'
import loggedInReducer from './loggedInReducer'

export function selectInformation (state: IState): IUserInformation {
  return state.user.information
}

export function selectSettings (state: IState): IUserSettings {
  return state.user.settings
}

export function userLoggedIState (state: IState): boolean {
  return state.user.loggedIn
}

export default combineReducers({
  information: informationReducer,
  loggedIn: loggedInReducer,
  settings: settingsReducer
})
