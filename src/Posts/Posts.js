import React from 'react'
import { Query } from 'react-apollo'
import { Link } from 'react-router-dom'

import { POSTS_QUERY } from '../Queries'

function Posts(){
  return (
    <Query query={POSTS_QUERY}>
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>
        if (error) return <p>Error...</p>
        const { posts } = data
        return posts.map(({ id, title }) => (
          <h1 key={id}><Link to={`/post/${id}`}>{title}</Link></h1>
        ))
      }}
    </Query>     
  )
}

export default Posts