import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

function PostForm({ post, onSubmit }) {
  const [id, setId] = useState('')
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  useEffect(() => {
    if ('id' in post) {
      setId(post.id)
      setTitle(post.title)
      setBody(post.body)
    }
  }, [post])

  const handleSubmit = e => {
    e.preventDefault()

    onSubmit({
      variables: {
        id, title, body
      }
    })

    setTitle('')
    setBody('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={e => setTitle(e.target.value)} value={title} placeholder="title" />
      <textarea value={body} onChange={e => setBody(e.target.value)} placeholder="body" />
      <button>Submit</button>
    </form>
  )
}

PostForm.propTypes = {
  post: PropTypes.object,
  onSubmit: PropTypes.func.isRequired
}

PostForm.defaultProps = {
  post: {},
  onSubmit: data => { console.warn(data) },
}

export default PostForm