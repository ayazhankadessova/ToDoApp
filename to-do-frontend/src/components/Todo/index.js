import React, { useState } from 'react'
import { Container } from './styles'
import Form from '../Form'
import axios from '../../axios'

const Todo = () => {
  const [input, setInput] = useState('')
  // usesate of Todos is empty array
  // to get all the Todos in the array format
  const [todos, setTodos] = useState([])
  console.log(input, 'input')

  // Create function to fetch all data from db
  const fetchData = async () => {
    try {
      // get everything from todos endpoint
      const response = await axios.get('/todos')
    } catch (err) {
      console.log(err.message)
    }
  }

  return (
    <Container>
      <h2>List of ToDos</h2>
      {/* Form Component */}
      <Form />
      {/* To Do List */}
      {/* Key - to Do Completed or not? */}
      {/* giffy */}
    </Container>
  )
}

export default Todo
