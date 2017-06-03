import * as React from 'react'
import { IState } from 'app/interfaces'
import { userLoggedState } from 'app/containers/user/userReducer'
import _isEmpty from 'lodash/isEmpty'
const { connect } = require('react-redux')
const { Link } = require('react-router-dom')

interface INavigationProps {
  loggedIn: boolean
}

export class Navigation extends React.Component<INavigationProps, void> {

  public render (): JSX.Element {
    const { loggedIn } = this.props
    return (
      <nav className='navbar'>
        <div className='left-hand'>
          <Link to='/'>Home</Link>
        </div>
        <div className='right-hand'>
          <Link to='/mypage'>{!loggedIn ? 'Sign in' : 'My Page'}</Link>
        </div>
      </nav>
    )
  }
}

function mapDispatchToProps (state: IState, ownProps: object) {
  const loggedIn = userLoggedState(state)
  return {
    loggedIn
  }
}

export default connect(mapDispatchToProps)(Navigation)
