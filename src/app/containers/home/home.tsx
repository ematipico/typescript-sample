import * as React from "react"
import { selectProducts } from 'app/containers/products/productsReducer'
import { State } from 'app/interfaces'
import ChannelPreview from 'app/components/ChannelPreview'

const { connect } = require('react-redux')

interface HomeProps {
  products: State.Products
}

export class Home extends React.Component<HomeProps, void> {

  renderProductsByChannel (products: State.Products) {
    const blocks = []
    for (let channel in products) {
      const productsInChannel = products[channel]
      blocks.push(
        <ChannelPreview products={productsInChannel} key={channel} />
      )
    }
    return blocks;
  }

  render () {
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

function mapStateToProps (state: State.All, ownProps: HomeProps): Object {

  return {
    products: selectProducts(state)
  }
}

export default connect(mapStateToProps)(Home)
