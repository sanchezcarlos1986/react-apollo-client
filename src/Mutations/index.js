import gql from 'graphql-tag'

export const NEW_POST = gql`
  mutation createPost($title: String, $body: String) {
    createPost(data: { 
      status: PUBLISHED, 
      title: $title 
      body: $body 
    }) {
      id
      title
      body
    }
  }
`;

export const UPDATE_POST = gql`
  mutation updatePost($id: ID!, $title: String!, $body: String!) {
    updatePost(
      where: {
        id: $id
      }
      data: { 
        status: PUBLISHED, 
        title: $title 
        body: $body 
      }
    ) {
      id
      title
      body
    }
  }
`;