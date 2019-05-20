import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Header from './Header'
import Posts from './Posts/Posts'
import Post from './Posts/Post'
import NewPost from './Posts/NewPost'



function App() {
  return (
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
  );
}

export default App
