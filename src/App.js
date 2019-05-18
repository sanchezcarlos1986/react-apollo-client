import React from 'react';
import ApolloClient from 'apollo-boost'
import { ApolloProvider, Query } from 'react-apollo'
import gql from 'graphql-tag'
import logo from './logo.svg';
import './App.css';

const client = new ApolloClient({
  uri: 'https://api-useast.graphcms.com/v1/cjqtzxlhd2j3g01dnwortupa6/master'
})

const POSTS_QUERY = gql`
  {
    posts {
      id
      title
      body
    }
  }
`

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <Query query={POSTS_QUERY}>
            {({ loading, error, data }) => {
              if (loading) return <p>Loading...</p>
              if (error) return <p>Error...</p>
              const { posts } = data
              return posts.map(({ id, title }) => <h1 key={id}>{title}</h1>)
            }}
          </Query>
        </header>        
      </div>
    </ApolloProvider>
  );
}

export default App;
