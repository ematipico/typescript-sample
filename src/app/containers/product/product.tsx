import * as React from "react"
import { selectProduct } from 'app/containers/products/productsReducer'
import { State, ProductInfo } from 'app/interfaces'
import ChannelPreview from 'app/components/ChannelPreview'
const { connect } = require('react-redux')

interface ProductProps {
  product: ProductInfo
}

export class Product extends React.Component<ProductProps, void> {

  render () {
    const { product } = this.props
    return (
      <div className='container product'>
        <h1>{product.title}</h1>
        <p>{product.selftext}</p>
        <span className='author'>{product.author}</span>
      </div>
    )
  }
}

function mapStateToProps (state: State.All, ownProps: any) {
  const { channel, productId } = ownProps.match.params
  const product = selectProduct(state, channel, productId)
  return {
    product
  }
}

export default connect(mapStateToProps)(Product)
