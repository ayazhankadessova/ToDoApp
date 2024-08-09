// callback functions

const mongoose = require('mongoose')
// Schema
const Todos = require('../dbTodos')

// async promises to return a result
// await - function from mongodb to wait for all results/todos
const getTodos = async (req, res) => {
  try {
    const allTodos = await Todos.find({}).sort({ createdAt: -1 })
    res.status(200).send(allTodos)
  } catch (error) {
    // when we have error, but give 400, pass in error.message
    res.status(400).send(error.message)
  }
}

const createTodo = async (req, res) => {
  // extract the data that was sent as JSON in the request body.
  const dbTodo = req.body
  try {
    // create whatever gets send in the request body into the new todo
    const newTodo = await Todos.create(dbTodo)
    res.status(201).send(newTodo)
  } catch (error) {
    // when we have error, but give 400, pass in error.message
    res.status(500).send(error.message)
  }
}

const updateTodo = async (req, res) => {
  // get id from params -> check if it is valid
  const { id } = req.params
  try {
    // if id is not valid, send error
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).send('There is no to do with this id ${id}')
    }
    // _id from mongodb
    const todoID = { _id: id }
    const update = { completed: true }

    const updateTodo = await Todos.findByIdAndUpdate(todoID, update)

    if (!updateTodo) {
      return res.status(404).send('There is no to do with this id ${id}')
    }
    res.status(200).send(updateTodo)
  } catch (error) {
    // when we have error, but give 400, pass in error.message
    res.status(500).send(error.message)
  }
}

const deleteTodo = async (req, res) => {
  // get id from params -> check if it is valid
  const { id } = req.params
  try {
    // if id is not valid, send error
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).send('There is no to do with this id ${id}')
    }
    const deleteTodo = Todos.findByIdAndRemove({ _id: id })

    res.status(200).send(deleteTodo)
  } catch (error) {
    // when we have error, but give 400, pass in error.message
    res.status(500).send(error.message)
  }
}

// export modules
module.exports = {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo,
}
