import 'styles/app.css'
import * as React from "react"
import * as ReactDOM from "react-dom"
import App from './app'
import configureStore from 'redux/store'
const { Provider } = require('react-redux');
const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
