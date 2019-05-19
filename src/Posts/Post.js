import React, { Fragment } from 'react'
import { Query } from 'react-apollo'
import UpdatePost from './UpdatePost'
import { POST_QUERY } from '../Queries'

function Post({ match }) {
  return (
    <Query query={POST_QUERY} variables={{ id: match.params.id }}>
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>
        if (error) return <p>Error...</p>
        const { title, body } = data.post
        return (
          <Fragment>
            <section>
              <h1 >{title}</h1>
              <p >{body}</p>
            </section> 
            <section>
              <h1 >Edit Post</h1>
              <UpdatePost post={data.post} />
            </section> 
          </Fragment>
        )
      }}
    </Query>
  )
}

export default Post