import * as React from 'react'
import Navigation from 'app/components/Navigation'
import Home from 'app/containers/home/home'
import Channel from 'app/containers/channel/channel'
import Product from 'app/containers/product/product'
import User from 'app/containers/user/user'
import { Dispatch, IState } from 'app/interfaces'
import { requestProducts } from 'app/containers/products/productsActions'
import { selectProducts } from 'app/containers/products/productsReducer'
import { CHANNELS } from 'app/api'

const { connect } = require('react-redux')
const { BrowserRouter, Route, Link } = require('react-router-dom')

interface IAppProps {
  dispatchRequestProdcuts: (channel: string) => void
}

export class App extends React.Component<IAppProps, void> {
  constructor (props: IAppProps) {
    super(props)
  }

  public componentDidMount () {
    CHANNELS.forEach(channel => this.props.dispatchRequestProdcuts(channel))
  }

  public render () {
    return (
      <BrowserRouter>
        <div>
          <Navigation />
          <Route exact={true} path='/' component={Home} />
          <Route path='/:channel' component={Channel} />
          <Route path='/:channel/:productId' component={Product} />
          <Route path='/my-page' component={User} />
        </div>
      </BrowserRouter>
    )
  }
}

function mapDispatchToProps (dispatch: Dispatch): object {
  return {
    dispatchRequestProdcuts(channel: string) {
      dispatch(requestProducts(channel))
    }
  }
}

export default connect(null, mapDispatchToProps)(App)
