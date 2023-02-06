import React from 'react'

function TodoList({ todos }) {
  return (
    <div>
      {/* todos - bullet points */}
      <ListContainer>{/* render all todos*/}</ListContainer>
    </div>
  )
}

export default TodoList
