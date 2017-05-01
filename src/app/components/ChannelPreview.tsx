import * as React from 'react'
import { Product } from 'app/interfaces'

const { Link } = require('react-router-dom')

interface ChannelPreviewProps {
  products: {
    [key: string]: Product
  },
  key: any,
  channel: String
}

export default class ChannelPreview extends React.Component<ChannelPreviewProps, void> {
  filteredProps: Array<Product>
  onClick: React.EventHandler<React.MouseEvent<HTMLDivElement>>
  constructor (props: ChannelPreviewProps) {
    super(props)
    this.filteredProps = []
    const idsToTake = Object.keys(props.products).slice(0, 5)
    idsToTake.forEach(id => {
      this.filteredProps.push(props.products[id])
    })
    this.onClick = this._onClick.bind(this)
  }

  _onClick (evt: React.SyntheticEvent<HTMLDivElement>) {
    evt.preventDefault()

  }


  render () {
    const { products, channel } = this.props

    return (
      <div className='preview-box'>
        <div className='title' onClick={this.onClick}>{channel}</div>
        <div className='preview'>
          {this.filteredProps.map(product => {
            return (
              <div key={product.id.toString()} className='preview'>
                <Link to={`${channel}/${product.id}`}>
                {product.title}
              </Link>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}
