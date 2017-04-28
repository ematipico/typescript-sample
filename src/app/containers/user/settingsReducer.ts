import { Reducer } from 'redux'
import { State, AppAction } from 'app/interfaces'
import { UserSettings } from 'app/interfaces/user'
import { UPDATE_SETTINGS } from './userActions'

const initialState = {} as UserSettings

export default function settingsReducer<Reducer> (state: State.UserSettings = initialState, action: AppAction): State.UserSettings {
  switch (action.type) {
    case UPDATE_SETTINGS: {
      return {
        ...state,
        ...action.payload.newSettings
      }
    }
    default:
      return state
  }
}
