import { Reducer } from 'redux'
import { IState, IAppAction } from 'app/interfaces'
import { IUserInformation } from 'app/interfaces/user'
import { UPDATE_INFORMATION } from './userActions'

export const initialState: IUserInformation = {
  age: 999,
  description: 'I am a good person',
  email: '',
  firstName: 'Myname',
  lastName: 'Lastname',
}

export default function informationReducer<Reducer> (state: IUserInformation = initialState, action: IAppAction): IUserInformation {
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
