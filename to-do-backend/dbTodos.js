const mongoose = require('mongoose')

// The instance of schema can now be used to define a schema.
const todoSchema = mongoose.Schema(
  {
    text: {
      type: String,
      required: true,
    },
    completed: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true }
)

//  We have the model now, all we need is to export it so it can be used elsewhere.
// 1. create model: The first parameter of the mongoose.model is the name of the collection that will contain the documents (todos). The second parameter is the schema we defined earlier.
// 2. export

module.exports = mongoose.model('todos', todoSchema)
