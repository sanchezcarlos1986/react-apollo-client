import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { MockedProvider } from 'react-apollo/test-utils'

it('renders without crashing', () => {
  const div = document.createElement('div')
  const wrapper = <MockedProvider><App /></MockedProvider>
  ReactDOM.render(wrapper, div)
  ReactDOM.unmountComponentAtNode(div)
})
