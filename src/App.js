import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './Header'

const Posts = lazy(() => import('./Posts/Posts'))
const Post = lazy(() => import('./Posts/Post'))
const NewPost = lazy(() => import('./Posts/NewPost'))

function WaitingComponent(Component) {
  return props => (
    <Suspense fallback={<div>Cargando...</div>}>
      <Component {...props} />
    </Suspense>
  )
}

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={WaitingComponent(Posts)} />
          <Route exact path="/post/:id" component={WaitingComponent(Post)} />
          <Route exact path="/posts/new" component={WaitingComponent(NewPost)} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
