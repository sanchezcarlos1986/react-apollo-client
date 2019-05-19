import React from 'react'
import { Mutation } from 'react-apollo'

import { UPDATE_POST } from '../Mutations'
import PostForm from './PostForm'

function UpdatePost({ post }){
  return (
    <Mutation mutation={UPDATE_POST}>
      {updatePost => <PostForm post={post} onSubmit={updatePost} />}
    </Mutation>
  )
}

export default UpdatePost