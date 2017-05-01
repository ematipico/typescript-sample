import { Reducer } from 'redux'
import { State, AppAction } from 'app/interfaces'
import { LOGGED_STATE } from './userActions'

const initialState = false

export default function informationReducer<Reducer> (state = initialState, action: AppAction): State.UserInformation {
  switch (action.type) {
    case LOGGED_STATE: return action.payload;
    default: return state
  }
}
