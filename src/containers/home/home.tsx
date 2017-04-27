import * as React from "react"
import { selectProducts } from 'containers/products/productsReducer'
import { State } from 'interfaces'

const { connect } = require('react-redux')

interface HomeProps {}

export class Home extends React.Component<void, void> {

  render () {
    return (
      <h1>I am the homepage</h1>
    )
  }
}

function mapStateToProps (state: State.All, ownProps: HomeProps): Object {

  return {
    products: selectProducts(state)
  }
}

export default connect(mapStateToProps)(Home)
