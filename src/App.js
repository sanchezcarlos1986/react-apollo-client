import React from 'react'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import Posts from './Posts/Posts'
import Post from './Posts/Post'
import NewPost from './Posts/NewPost'

const client = new ApolloClient({
  uri: 'https://api-useast.graphcms.com/v1/cjqtzxlhd2j3g01dnwortupa6/master'
})

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
      <div className="App">
        <header>
          <Link to="/">Home</Link>
          <Link to="/posts/new">Add Post</Link>
          <hr />
        </header>
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
