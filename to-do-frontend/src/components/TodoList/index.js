import axios from '../../axios'
import React from 'react'
import { ListContainer, Row, Text, DeleteSymbol } from './styles'

function TodoList({ todos, fetchData }) {
  console.log(todos, 'check')

  // UPDATE ToDO
  const updateTodo = async (id) => {
    try {
      //  The first parameter to axios.put() is the endpoint (passed to requests param), and the 2nd is the HTTP request body.
      const response = await axios.put(`/todos/${id}`, { id })
      fetchData()
      return response.data.json
      //  updating Todo -> refetch data
    } catch (err) {
      // outputs an error message to the Web console.
      console.error(err.message)
    }
  }
  // Delete ToDo
  return (
    <div>
      {/* todos - bullet points */}
      <ListContainer>
        {/* render all todos*/}

        {/* check if todos are there; implicit; render for each todo*/}
        {todos?.map((todo) => (
          <Row key={todo._id}>
            {/* pass id of element we want to update */}
            <Text
              onClick={() => updateTodo(todo._id)}
              isCompleted={todo.completed === true}
            >
              {todo.text}
            </Text>
            <DeleteSymbol>X</DeleteSymbol>
          </Row>
        ))}
      </ListContainer>
    </div>
  )
}

export default TodoList
