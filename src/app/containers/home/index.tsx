import * as  React from 'react'
const { connect } = require('react-redux')

export class Home extends React.Component<void, void> {
  render () {
    return (
      <h1>HOME PAGE</h1>
    )
  }
}

export default connect()(Home)
