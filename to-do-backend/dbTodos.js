const mongoose = require('mongoose')
const Schema = mongoose.Schema

// The instance of schema can now be used to define a schema.
const todoSchema = Schema(
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
