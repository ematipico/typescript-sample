import React, { Component } from 'react'
import createStore from 'app/redux/createStore'
import { Provider } from 'react-redux'


export default class App extends Component {

  store: Object

  constructor(props) {
    super(props)
    this.store = createStore()
  }

  render () {
    return (
      <Provider store={this.store}>
      </Provider>
    )
  }
}
