import * as React from 'react'
import { Product } from 'app/interfaces'

interface ChannelPreviewProps {
  products: Array<Product>
}

export default class ChannelPreview extends React.Component<ChannelPreviewProps, void> {
  filteredProps: Array<Product>
  onClick: React.EventHandler<React.MouseEvent<HTMLAnchorElement>>
  constructor (props: ChannelPreviewProps) {
    super(props)
    this.filteredProps = props.products.slice(0, 5)
    this.onClick = this._onClick.bind(this)
  }

  _onClick (evt: React.SyntheticEvent<HTMLAnchorElement>) {
    evt.preventDefault()
  }


  render () {
    const { products } = this.props

    return (
      <div className='preview-box'>
        {products.map(product => {
          const data = product.data
          return (
            <div key={data.id} className='preview'>
              <a onClick={this.onClick}>
                <h3>{data.title}</h3>
              </a>
            </div>
          )
        })}
      </div>
    )
  }
}
