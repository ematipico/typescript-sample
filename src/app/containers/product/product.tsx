import * as React from 'react'
import { selectProduct } from 'app/containers/products/productsReducer'
import { IState, IProductInfo } from 'app/interfaces'
import ChannelPreview from 'app/components/ChannelPreview'
const { connect } = require('react-redux')

interface IProductProps {
  product: IProductInfo
}

export class Product extends React.Component<IProductProps, void> {
  public render (): JSX.Element {
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

function mapStateToProps (state: IState, ownProps: any) {
  const { channel, productId } = ownProps.match.params
  const product = selectProduct(state, channel, productId)
  return {
    product
  }
}

export default connect(mapStateToProps)(Product)
