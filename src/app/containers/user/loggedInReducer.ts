import { Reducer } from 'redux'
import { IState, IAppAction } from 'app/interfaces'
import { IUserInformation } from 'app/interfaces/user'
import { LOGGED_STATE } from './userActions'

const initialState = false

export default function informationReducer<Reducer> (state = initialState, action: IAppAction): boolean {
  switch (action.type) {
    case LOGGED_STATE: return action.payload;
    default: return state
  }
}
