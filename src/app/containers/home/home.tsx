import * as React from 'react'
import { selectProducts } from 'app/containers/products/productsReducer'
import { IState, IProduct, IProducts, IChannel } from 'app/interfaces'
import ChannelPreview from 'app/components/ChannelPreview'

const { connect } = require('react-redux')

interface IHomeProps {
  products: IProducts
}

export class Home extends React.Component<IHomeProps, void> {

  private renderProductsByChannel (products: IProducts): JSX.Element[] {
    const blocks: JSX.Element[] = []
    for (const channelName in products) {
      if (products.hasOwnProperty(channelName)) {
        const productsInChannel = products[channelName]
        blocks.push(
          <ChannelPreview productsInChannel={productsInChannel} key={channelName} channelName={channelName} />
        )
      }
    }
    return blocks;
  }

  public render (): JSX.Element {
    const { products } = this.props
    return (
      <div className='container'>
        <h1>I am the homepage</h1>

        <div className='row home'>
          {this.renderProductsByChannel(products)}
        </div>
      </div>
    )
  }
}

function mapStateToProps (state: IState, ownProps: IHomeProps): object {
  return {
    products: selectProducts(state)
  }
}

export default connect(mapStateToProps)(Home)
