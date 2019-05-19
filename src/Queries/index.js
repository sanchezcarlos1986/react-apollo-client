import gql from 'graphql-tag'

export const POSTS_QUERY = gql`
  query allPosts {
    posts {
      id
      title
      body
    }
  }
`

export const POST_QUERY = gql`
  query onePost($id: ID!) {
    post(where: { id: $id }) {
      id
      title
      body
    }
  }
`
