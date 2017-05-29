import * as React from "react"
import { selectProducts } from 'app/containers/products/productsReducer'
import { State } from 'app/interfaces'
import { UserSettings, UserInformation } from 'app/interfaces/user'
import ChannelPreview from 'app/components/ChannelPreview'
import Login from 'app/components/Login'
import MyPage from 'app/components/MyPage'
import { userLoggedState, selectSettings, selectInformation } from 'app/containers/user/userReducer'
import { Dispatch } from 'app/interfaces'
import { attemptLogin } from './userActions'

const { connect } = require('react-redux')

interface UserProps {
  loggedIn: boolean,
  dispatchAttemptLogin: Function,
  information: UserInformation,
  settings: UserSettings
}

export class User extends React.Component<UserProps, void> {

  render () {
    const {loggedIn, dispatchAttemptLogin, information, settings} = this.props
    return (
      <div className='user'>
        {(() => {
          if (loggedIn) {
            return <MyPage information={information} settings={settings} />
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
  const information = selectInformation(state)
  const settings = selectSettings(state)
  return {
    loggedIn,
    information,
    settings
  }
}

function mapDispatchToProps (dispatch: Dispatch) {
  return {
    dispatchAttemptLogin(formInfo: Object) {
      dispatch(attemptLogin(formInfo))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(User)
