import React from 'react'
import ReactDOM from 'react-dom'
import { cleanup } from '@testing-library/react'
import { MockedProvider } from 'react-apollo/test-utils'
import App from './App'

afterEach(cleanup)

it('renders without crashing', () => {
  const div = document.createElement('div')
  const wrapper = (
    <MockedProvider>
      <App />
    </MockedProvider>
  )
    
  ReactDOM.render(wrapper, div)
  ReactDOM.unmountComponentAtNode(div)
})
