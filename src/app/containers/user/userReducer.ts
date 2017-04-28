import { Reducer, combineReducers } from 'redux'
import { State, AppAction } from 'app/interfaces'
import { User } from 'app/interfaces/user'
import informationReducer from './informationReducer'
import settingsReducer from './settingsReducer'

const initialState = {
  settings: {},
  information: {}
} as User

export function selectInformation (state: State.All) {
  return state.user.information
}

export function selectSettings (state: State.All) {
  return state.user.settings
}

export default combineReducers({
  information: informationReducer,
  settings: settingsReducer
})
