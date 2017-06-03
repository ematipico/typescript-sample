import * as React from 'react'
import Navigation from 'app/components/Navigation'
import Home from 'app/containers/home/home'
import Channel from 'app/containers/channel/channel'
import User from 'app/containers/user/user'
import Product from 'app/containers/product/product'
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
          <Route exact={true} path='/products/:channel' component={Channel} />
          <Route exact={true} path='/products/:channel/:productId' component={Product} />
          <Route exact={true} path='/mypage' component={User} />
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
