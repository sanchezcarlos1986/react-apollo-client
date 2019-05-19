import React from 'react'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Header from './Header'
import Posts from './Posts/Posts'
import Post from './Posts/Post'
import NewPost from './Posts/NewPost'

const defaultState = {
  greeting: 'Good morning!',
  isEditMode: false
}

const client = new ApolloClient({
  uri: 'https://api-useast.graphcms.com/v1/cjqtzxlhd2j3g01dnwortupa6/master',
  clientState: {
    defaults: defaultState,
    resolvers: {}
  }
})

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' component={Posts} />
          <Route exact path='/post/:id' component={Post} />
          <Route exact path='/posts/new' component={NewPost} />
        </Switch> 
      </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
