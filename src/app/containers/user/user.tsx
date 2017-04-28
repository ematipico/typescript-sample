import * as React from "react"
import { selectProducts } from 'app/containers/products/productsReducer'
import { State } from 'app/interfaces'
import ChannelPreview from 'app/components/ChannelPreview'
const { connect } = require('react-redux')

interface UserProps {

}

export class User extends React.Component<UserProps, void> {

  render () {
    return (
      <div></div>
    )
  }
}

function mapStateToProps (state: State.All, ownProps: any) {
  return {

  }
}

export default connect(mapStateToProps)(User)
