import gql from 'graphql-tag'

export const POSTS_QUERY = gql`
  query allPosts {
    posts {
      id
      picture
      title
      year
    }
  }
`

export const POST_QUERY = gql`
  query onePost($id: ID!) {
    post(where: { id: $id }) {
      body
      id
      picture
      title
      year
    }
    isEditMode @client
  }
`
