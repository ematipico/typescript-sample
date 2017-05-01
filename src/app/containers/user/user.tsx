import * as React from "react"
import { selectProducts } from 'app/containers/products/productsReducer'
import { State } from 'app/interfaces'
import ChannelPreview from 'app/components/ChannelPreview'
import Login from 'app/components/Login'
import { userLoggedState } from 'app/containers/user/userReducer'
import { Dispatch } from 'app/interfaces'
import { attemptLogin } from './userActions'

const { connect } = require('react-redux')

interface UserProps {
  loggedIn: boolean,
  dispatchAttemptLogin: Function
}

export class User extends React.Component<UserProps, void> {

  render () {
    const {loggedIn, dispatchAttemptLogin} = this.props
    console.log('loggedIn', loggedIn)
    return (
      <div className='user'>
        {(() => {
          if (loggedIn) {
            return (
              <div></div>
            )
          } else {
            return <Login onLogin={dispatchAttemptLogin} />
          }
        })()}

      </div>
    )
  }
}

function mapStateToProps (state: State.All, ownProps: any) {
  const loggedIn = userLoggedState(state)
  return {
    loggedIn
  }
}

function mapDispatchToProps (dispatch: Dispatch) {
  return {
    dispatchAttemptLogin(formInfo: Object) {
      dispatch(attemptLogin(formInfo))
    }
  }
}

export default connect(mapStateToProps)(User)
