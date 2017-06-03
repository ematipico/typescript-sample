import * as React from 'react'
import { IProduct, IChannel} from 'app/interfaces'

const { Link } = require('react-router-dom')

interface IChannelPreviewProps {
  productsInChannel?: IChannel
  key?: any,
  channelName?: string
}

export default class ChannelPreview extends React.Component<IChannelPreviewProps, void> {
  private filteredProps: IProduct[]
  private onClick: React.EventHandler<React.MouseEvent<HTMLDivElement>>

  constructor (props: IChannelPreviewProps) {
    super(props)
    this.filteredProps = []
    const idsToTake = Object.keys(props.productsInChannel).slice(0, 5)
    idsToTake.forEach((id) => {
      this.filteredProps.push(props.productsInChannel[id])
    })
    this.onClick = this._onClick.bind(this)
  }

  private _onClick (evt: React.SyntheticEvent<HTMLDivElement>) {
    evt.preventDefault()

  }

  public render (): JSX.Element {
    const { productsInChannel, channelName } = this.props

    return (
      <div className='preview-box'>
        <div className='title' onClick={this.onClick}>
        <Link to={`/products/${channelName}`}>
          {channelName}
        </Link>
        </div>
        <div className='preview'>
          {this.filteredProps.map(product => {
            return (
              <div key={product.id.toString()} className='preview'>
                <Link to={`/products/${channelName}/${product.id}`}>
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
