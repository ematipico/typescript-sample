import * as React from 'react'
import { Product } from 'app/interfaces'

const { Link } = require('react-router-dom')

interface ChannelPreviewProps {
  products: Array<Product>,
  channel: String
}

export default class ChannelPreview extends React.Component<ChannelPreviewProps, void> {
  filteredProps: Array<Product>
  onClick: React.EventHandler<React.MouseEvent<HTMLDivElement>>
  constructor (props: ChannelPreviewProps) {
    super(props)
    this.filteredProps = props.products.slice(0, 5)
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
            const data = product.data
            return (
              <div key={data.id} className='preview'>
              <Link to='/'>
              {data.title}
              </Link>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}
