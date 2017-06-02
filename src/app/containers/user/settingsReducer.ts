import { Reducer } from 'redux'
import { IState, IAppAction } from 'app/interfaces'
import { IUserSettings } from 'app/interfaces/user'
import { UPDATE_SETTINGS } from './userActions'

const initialState: IUserSettings = {
  receiveNotification: true,
}

export default function settingsReducer<Reducer> (state: IUserSettings = initialState, action: IAppAction): IUserSettings {
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
