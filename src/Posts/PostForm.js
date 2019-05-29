import React, { useState, useEffect } from 'react'
import { Form, Icon, Input, Button } from 'antd'
import PropTypes from 'prop-types'

function PostForm({ post, onSubmit, onSuccess }) {
  const [id, setId] = useState('')
  const [title, setTitle] = useState('')
  const [year, setYear] = useState('')
  const [picture, setPicture] = useState('')
  const [body, setBody] = useState('')

  useEffect(() => {
    if ('id' in post) {
      setId(post.id)
      setTitle(post.title)
      setYear(post.year)
      setPicture(post.picture)
      setBody(post.body)
    }
  }, [post])

  const handleSubmit = e => {
    e.preventDefault()

    onSubmit({
      variables: {
        id, title, year, picture, body
      }
    }).then(() => onSuccess())
  }

  return (
    <Form onSubmit={handleSubmit}>
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
          prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
          placeholder="Picture"
          onChange={e => setPicture(e.target.value)}
          value={picture}
        />
      </Form.Item>
      <Form.Item>
        <Input.TextArea
          prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
          placeholder="Description"
          autosize={{ minRows: 2, maxRows: 6 }}
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