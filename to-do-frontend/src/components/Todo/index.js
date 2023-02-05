import React, { useEffect, useState } from 'react'
import { Container } from './styles'
import Form from '../Form'
import axios from '../../axios'

const Todo = () => {
  const [input, setInput] = useState('')
  // usesate of Todos is empty array
  // to get all the Todos in the array format
  // initial state - 2 empty arrays
  const [todos, setTodos] = useState([])
  // console.log(input, 'input')

  // Create function to fetch all data from db
  const fetchData = async () => {
    try {
      // get everything from todos endpoint
      const response = await axios.get('/todos')
      // set data from response as todos
      setTodos(response.data)
    } catch (err) {
      console.log(err.message)
    }
  }

  // What does useEffect do? By using this Hook, you tell React that your component needs to do something after render. React will remember
  //the function you passed (we’ll refer to it as our “effect”), and call it later after performing the DOM updates. In this effect, we set
  // the document title, but we could also perform data fetching or call some other imperative API.
  // our useEffect works with callback functions
  useEffect(() => {
    fetchData()
  }, [])

  // async - Asynchronous programming is a technique that enables your program to start a potentially long-running task and still be able to be responsive to other events while that task runs, rather than having to wait until that task has finished. Once that task has finished, your program is presented with the result.
  const addTodo = async (e) => {
    // prevent screen refreshing
    e.preventDefault()
    console.log('addedtoDo')
  }

  console.log(todos, 'todos')

  return (
    <Container>
      <h2>List of ToDos</h2>
      {/* Form Component */}
      <Form input={input} setInput={setInput} addTodo={addTodo} />
      {/* To Do List */}
      {/* Key - to Do Completed or not? */}
      {/* giffy */}
    </Container>
  )
}

export default Todo
