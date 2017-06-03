import test from 'ava'
import information, { initialState } from './informationReducer'
import { IAppAction } from 'app/interfaces/index'
const deepFreeze = require('deep-freeze')

test.only('title', t => {
  const state: any = undefined
  const action: IAppAction = {
    type: 'NOTHING',
    payload: ''
  }
  const newState = information(state, action)
  t.deepEqual(newState, initialState)
})
