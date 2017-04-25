import * as  React from 'react'
const { connect } = require('react-redux')

export class Products extends React.Component<void, void> {
  render () {
    return (
      <h1>Products PAGE</h1>
    )
  }
}

export default connect()(Products)
