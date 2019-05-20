import React from 'react'
import { Mutation } from 'react-apollo'

import { UPDATE_POST } from '../Mutations'
import PostForm from './PostForm'

function UpdatePost({ post }){
  return (
    <Mutation mutation={UPDATE_POST}>
      {(updatePost, result) => {
        const onSuccess = () => {
          result.client.writeData({ data: { isEditMode: false } })
        }
        return <PostForm post={post} onSuccess={onSuccess} onSubmit={updatePost} />
      }}
    </Mutation>
  )
}

export default UpdatePost