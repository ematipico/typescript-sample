import * as React from 'react'
import initStore from 'app/redux/createStore.ts'
import Home from 'app/containers/home/index.tsx'
import Products from 'app/containers/products/index.tsx'

const { Provider } = require('react-redux')
const { BrowserRouter, Route, Switch } = require('react-router-dom')


export default class App extends React.Component<void, void> {

  store: Object

  constructor(props: any) {
    super(props)
    this.store = initStore()
  }

  render () {
    return (
      <Provider store={this.store}>
        <BrowserRouter>
          <Route exact path="/" component={Home}/>
          <Route exact path='/products' component={Products} />
        </BrowserRouter>


      </Provider>
    )
  }
}
