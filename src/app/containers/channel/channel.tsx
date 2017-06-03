import * as React from 'react'
import { selectProductsFromChannel } from 'app/containers/products/productsReducer'
import { IState, IChannel } from 'app/interfaces'
import ChannelPreview from 'app/components/ChannelPreview'
import { RouteProps } from 'react-router'
import Product from 'app/containers/product/product'

const { connect } = require('react-redux')
const { Link, Route, Match } = require('react-router-dom')

interface IChannelProps extends RouteProps {
  channel: string,
  products: IChannel,
  match: {
    url: string
  }
}

export class Channel extends React.Component<IChannelProps, void> {

  public render (): JSX.Element {
    const { channel, products, match } = this.props
    return (
      <div>
        <h1>Channel {channel}</h1>
        <ul>
        {Object.keys(products).map((id) => {
          const product = products[id]
          return (
            <li key={id}>
              <span>{product.title}</span>
              <span>
                <Link to={`/products/${channel}/${id}`}> More details</Link>
              </span>
            </li>
          )
        })}
        </ul>
      </div>
    )
  }
}

function mapStateToProps (state: IState, ownProps: any): object {
  const { channel } = ownProps.match.params
  const products = selectProductsFromChannel(state, channel)
  return {
    products,
    channel
  }
}

export default connect(mapStateToProps)(Channel)
