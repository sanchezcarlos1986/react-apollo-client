import gql from 'graphql-tag'

export const NEW_POST = gql`
  mutation createPost($title: String, $year: String, $picture: String, $body: String) {
    createPost(data: { 
      status: PUBLISHED, 
      title: $title
      year: $year
      picture: $picture
      body: $body 
    }) {
      id
      title
      year
      picture
      body
    }
  }
`;

export const UPDATE_POST = gql`
  mutation updatePost($id: ID!, $title: String!, $year: String!, $picture: String!, $body: String!) {
    updatePost(
      where: {
        id: $id
      }
      data: { 
        status: PUBLISHED, 
        title: $title
        year: $year
        picture: $picture
        body: $body 
      }
    ) {
      id
      title
      year
      picture
      body
    }
  }
`;