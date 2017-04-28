import * as React from "react"
import { selectProduct } from 'app/containers/products/productsReducer'
import { State } from 'app/interfaces'
import ChannelPreview from 'app/components/ChannelPreview'
const { connect } = require('react-redux')

interface ProductProps {

}

export class Product extends React.Component<ProductProps, void> {

  render () {
    return (
      <div></div>
    )
  }
}

function mapStateToProps (state: State.All, ownProps: any) {
  const { channel, productId } = ownProps.match.params
  const product = selectProduct(state, channel, productId)
  return {

  }
}

export default connect(mapStateToProps)(Product)
