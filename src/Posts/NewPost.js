import React, { Fragment } from 'react'
import { Mutation } from 'react-apollo'

import { NEW_POST } from '../Mutations'
import PostForm from './PostForm'


function NewPost({ history }) {
  return (
    <Fragment>
      <h1>New Post</h1>
      <Mutation mutation={NEW_POST} onCompleted={
        () => history.push('/')
      }>
        { createPost => <PostForm onSubmit={createPost} /> }
      </Mutation>
    </Fragment>
  )
}

export default NewPost