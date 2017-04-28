import { Reducer } from 'redux'
import { State, AppAction } from 'app/interfaces'
import { UserInformation } from 'app/interfaces/user'
import { UPDATE_INFORMATION } from './userActions'

const initialState = {} as UserInformation

export default function informationReducer<Reducer> (state: State.UserInformation = initialState, action: AppAction): State.UserInformation {
  switch (action.type) {
    case UPDATE_INFORMATION: {
      return {
        ...state,
        ...action.payload.newInformation
      }
    }
    default:
      return state
  }
}
