import { Reducer, combineReducers } from 'redux'
import { State, AppAction } from 'app/interfaces'
import { User } from 'app/interfaces/user'
import informationReducer from './informationReducer'
import settingsReducer from './settingsReducer'
import loggedInReducer from './loggedInReducer'

export function selectInformation (state: State.All): State.UserInformation {
  return state.user.information
}

export function selectSettings (state: State.All): State.UserSettings {
  return state.user.settings
}

export function userLoggedState (state: State.All): boolean {
  return state.user.loggedIn
}

export default combineReducers({
  information: informationReducer,
  settings: settingsReducer,
  loggedIn: loggedInReducer
})
