/* eslint-disable quotes */
/* eslint-disable quote-props */
/* eslint-disable no-console */
import React from 'react'
import { render, cleanup, waitForElement } from '@testing-library/react'
import 'jest-dom/extend-expect'
import { MemoryRouter } from 'react-router-dom'
import { MockedProvider } from 'react-apollo/test-utils'
import { POSTS_QUERY } from '../../Queries'
import Posts from '../Posts'

afterEach(cleanup)

const mocks = [{
  request: {
    query: POSTS_QUERY,
    variables: {}
  },
  result: {
    data: {
      posts: [
        {
          id: "cjvvcwie784360946t1qmr6iv",
          picture: "http://upload.wikimedia.org/wikipedia/en/a/af/Angra_templeofshadows.jpg",
          title: "Temple Of Shadows",
          year: "2004",
          __typename: "Post"
        },
        {
          id: "cjw982p99hbx80946fnghmelb",
          picture: "htt://www.powermetal.cl/wordpress/wp-content/uploads/2001/11/Angra_-_Rebirth.jpg",
          title: "Rebirth",
          year: "2001",
          __typename: "Post"
        }
      ]
    }
  }
}]

test('<Posts /> with params', async () => {
  const {
    getByText, getByTestId, getAllByTestId,
  } = render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <MemoryRouter>
        <Posts />
      </MemoryRouter>
    </MockedProvider>
  )

  const mockItems = mocks[0].result.data.posts

  const loading = getByText('Loading...')

  expect(loading).toBeTruthy()
  await waitForElement(() => getAllByTestId('post-item'))

  // debug()

  const postsContainer = getByTestId('Posts')
  const postsItems = getAllByTestId('post-item')
  expect(postsItems.length).toBe(mockItems.length)

  expect(postsContainer).toBeInTheDocument()

  // Link
  expect(postsItems[0].getAttribute('href')).toBe(`/post/${mockItems[0].id}`)
  expect(postsItems[1].getAttribute('href')).toBe(`/post/${mockItems[1].id}`)

  // Images
  const postsImages = getAllByTestId('post-image')
  expect(postsImages[0].getAttribute('alt')).toBe(mockItems[0].title)
  expect(postsImages[1].getAttribute('alt')).toBe(mockItems[1].title)
  expect(postsImages[0].getAttribute('src')).toBe(mockItems[0].picture)
  expect(postsImages[1].getAttribute('src')).toBe(mockItems[1].picture)

  // Titles
  /**
   * Here I had to use a document selector to get the items,
   * because I wasn't able to reach the library's divs
   */
  const postsTitle = document.querySelectorAll('.ant-card-meta-title')
  expect(postsTitle[0]).toHaveTextContent(mockItems[0].title)
  expect(postsTitle[1]).toHaveTextContent(mockItems[1].title)

  // Descriptions
  /**
   * Here I had to use a document selector to get the items,
   * because I wasn't able to reach the library's divs
   */
  const postsDescription = document.querySelectorAll('.ant-card-meta-description')
  expect(postsDescription[0]).toHaveTextContent(mockItems[0].year)
  expect(postsDescription[1]).toHaveTextContent(mockItems[1].year)
})
