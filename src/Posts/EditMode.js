import React from 'react'
import { ApolloConsumer } from 'react-apollo'

function EditMode({ isEditMode }) {
  return (
    <ApolloConsumer>
      {client => (
        <button 
          onClick={() => { client.writeData({ data: { isEditMode: !isEditMode } }) }}>Edit Mode</button>
      )}
    </ApolloConsumer>
  )
}

export default EditMode