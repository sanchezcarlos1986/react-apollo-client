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
        return (
          <div data-testid="Posts" className="Posts">
            {
              posts.map(({ id, title, picture, year }) => (
                <Link key={id} to={`/post/${id}`}>
                  <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt={title} src={picture} />}>
                      <Card.Meta title={title} description={year} />
                  </Card>
                </Link>
              ))
            }
          </div>
        )
      }}
    </Query>     
  )
}

export default Posts