import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import configureStore from './store/configureStore'

const store = configureStore()
console.log(store.getState())

store.subscribe(() => {
  console.log(store.getState())
})

const ele = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)

ReactDOM.render(ele, document.getElementById('root'));

