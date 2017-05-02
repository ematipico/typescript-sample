import * as React from "react"
import { State } from 'app/interfaces'
import { userLoggedState } from 'app/containers/user/userReducer'
import _isEmpty from 'lodash/isEmpty'
const { connect } = require('react-redux')
const { Link } = require('react-router-dom')


interface NavigationProps {
  loggedIn: boolean
}

export class Navigation extends React.Component<NavigationProps, void> {

  render () {
    const { loggedIn } = this.props
    return (
      <nav className='navbar'>
        <div className='left-hand'>
          <Link to='/'>Home</Link>
        </div>
        <div className='right-hand'>
          <Link to='/my-page'>{!loggedIn ? 'Sign in' : 'My Page'}</Link>
        </div>
      </nav>
    )
  }
}

function mapDispatchToProps (state: State.All, ownProps: Object) {
  const loggedIn = userLoggedState(state)
  return {
    loggedIn
  }
}

export default connect(mapDispatchToProps)(Navigation)
