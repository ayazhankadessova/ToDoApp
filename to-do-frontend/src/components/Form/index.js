import React from 'react'
import { FormContainer, Button, Input } from './styles'

function Form({ input, setInput, addTodo }) {
  return (
    <FormContainer>
      <Input value='' type='text' role='input' />
      {/* pass in the event */}
      <Button type='submit' onSubmit={(e) => addTodo(e)}>
        Add
      </Button>
    </FormContainer>
  )
}

export default Form
