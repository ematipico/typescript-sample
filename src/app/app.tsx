import * as React from 'react'
import Home from 'app/containers/home/home'
import Channel from 'app/containers/channel/channel'
import Product from 'app/containers/product/product'
import { Dispatch, State } from 'app/interfaces'
import { requestProducts } from 'app/containers/products/productsActions'
import { selectProducts } from 'app/containers/products/productsReducer'
import { CHANNELS } from 'app/api'

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
    CHANNELS.forEach(channel => this.props.dispatchRequestProdcuts(channel))
  }

  render () {
    return (
      <BrowserRouter>
        <div>
          <Route exact path='/' component={Home} />
          <Route path='/:channel' component={Channel} />
          <Route path='/:channel/:productId' component={Product} />      
        </div>
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
