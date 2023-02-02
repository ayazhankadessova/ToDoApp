import React from 'react'
import { FormContainer, Button, Input } from './styles'

function Form() {
  return (
    <FormContainer>
      <Input value='' type='text' role='input' />
      <Button type='submit'>Add</Button>
    </FormContainer>
  )
}

export default Form
