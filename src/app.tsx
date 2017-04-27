import * as React from 'react'
import Home from 'containers/home/home'
import { Dispatch } from 'interfaces'
import { requestProducts } from 'containers/products/productsActions'
const { connect } = require('react-redux')
const { BrowserRouter, Route, Link } = require('react-router-dom')

interface AppProps {
  dispatchRequestProdcuts: Function
}

export class App extends React.Component<AppProps, void> {
  constructor (props: AppProps) {
    super(props)
  }

  componentDidMount () {
    this.props.dispatchRequestProdcuts('food')
  }

  render () {
    return (
      <BrowserRouter>
        <Route exact path='/' component={Home} />
      </BrowserRouter>
    )
  }
}

function mapDispatchToProps (dispatch: Dispatch): Object {
  return {
    dispatchRequestProdcuts(channel: String) {
      dispatch(requestProducts(channel))
    }
  }
}

export default connect(null, mapDispatchToProps)(App)
