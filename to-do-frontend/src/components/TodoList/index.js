import React from 'react'
import { ListContainer, Row, Text, DeleteSymbol } from './styles'

function TodoList({ todos }) {
  console.log(todos, 'check')
  return (
    <div>
      {/* todos - bullet points */}
      <ListContainer>
        {/* render all todos*/}

        {/* check if todos are there; implicit; render for each todo*/}
        {todos?.map((todo) => (
          <Row key={todo._id}>
            <Text>{todo.text}</Text>
            <DeleteSymbol>✖</DeleteSymbol>
          </Row>
        ))}
      </ListContainer>
    </div>
  )
}

export default TodoList
