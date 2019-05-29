import React from 'react'
import ReactDOM from 'react-dom'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { persistCache } from 'apollo-cache-persist'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'

import 'antd/dist/antd.css'

const defaultState = {
  isEditMode: false
}

const cache = new InMemoryCache()

persistCache({
  cache,
  storage: window.sessionStorage
}).then(() => {
  const client = new ApolloClient({
    cache,
    uri: 'https://api-useast.graphcms.com/v1/cjqtzxlhd2j3g01dnwortupa6/master',
    clientState: {
      defaults: defaultState,
      resolvers: {}
    }
  })

  ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>, 
  document.getElementById('root'))

  // If you want your app to work offline and load faster, you can change
  // unregister() to register() below. Note this comes with some pitfalls.
  // Learn more about service workers: https://bit.ly/CRA-PWA
  serviceWorker.unregister()
})
