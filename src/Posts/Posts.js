import React from 'react'
import { Query } from 'react-apollo'
import { Link } from 'react-router-dom'
import { Card } from 'antd'

import { POSTS_QUERY } from '../Queries'

function Posts(){
  return (
    <Query query={POSTS_QUERY}>
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>
        if (error) return <p>Error...</p>
        const { posts } = data
        return posts.map(({ id, title, picture, year }) => (
          <Card
            key={id}
            hoverable
            style={{ width: 240 }}
            cover={<img alt={title} src={picture} />}
          >
            <Link to={`/post/${id}`}>
              <Card.Meta title={title} description={year} />
            </Link>
          </Card>
        ))
      }}
    </Query>     
  )
}

export default Posts