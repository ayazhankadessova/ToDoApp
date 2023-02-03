const express = require('express')
// Mongoose is a client API for node.js which makes it easy to access our database from our Express application.
const mongoose = require('mongoose')
// CORS is a node.js package for providing a Connect/Express middleware that
// can be used to enable CORS with various options.
const Cors = require('cors')
// DotEnv is a lightweight npm package that automatically loads environment variables
// from a .env file into the process.env object.
const dotenv = require('dotenv')

dotenv.config()
// 1) make constants
// 2) use them

// App config
const app = express()

// listen to whatever is in the env port variable or 8000
const port = process.env.PORT || 8000

const connectionURI = process.env.MONGO_URI

// Middleware
// convert everything to json
app.use(express.json)

app.use(Cors)

// DB config
mongoose
  .connect(connectionURI)

  // if successful
  .then(() => {
    app.listen(port, () => console.log(`Running on port: ${port}`))
  })
  // handle errors
  .catch((err) => {
    // return whatever error message
    console.log(err)
  })
// API Endpoints
