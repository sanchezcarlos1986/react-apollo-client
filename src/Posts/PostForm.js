import React, { useState, useEffect } from 'react'
import { Form, Icon, Input, Button } from 'antd'
import PropTypes from 'prop-types'

function PostForm({ post, onSubmit, onSuccess }) {
  const [id, setId] = useState('')
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [year, setYear] = useState('')

  useEffect(() => {
    if ('id' in post) {
      setId(post.id)
      setTitle(post.title)
      setBody(post.body)
      setYear(post.year)
    }
  }, [post])

  const handleSubmit = e => {
    e.preventDefault()

    onSubmit({
      variables: {
        id, title, body, year
      }
    }).then(() => onSuccess())
  }

  return (
    <Form layout="inline" onSubmit={handleSubmit}>
      <Form.Item>
        <Input
          prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
          placeholder="Title"
          onChange={e => setTitle(e.target.value)}
          value={title}
        />
      </Form.Item>
      <Form.Item>
        <Input
          prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
          placeholder="Year"
          onChange={e => setYear(e.target.value)}
          value={year}
        />
      </Form.Item>
      <Form.Item>
        <Input
          type="textarea"
          prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
          placeholder="Description"
          onChange={e => setBody(e.target.value)}
          value={body}
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">Submit</Button>
      </Form.Item>
    </Form>
  )
}

PostForm.propTypes = {
  post: PropTypes.object,
  onSubmit: PropTypes.func.isRequired,
  onSuccess: PropTypes.func
}

PostForm.defaultProps = {
  post: {},
  onSuccess: () => null,
  onSubmit: data => { console.warn(data) },
}

export default PostForm