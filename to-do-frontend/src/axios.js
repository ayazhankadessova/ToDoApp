// axios converts data in json but it manages headers

import axios from 'axios'

// To use Axios, we have to import it. We have to make it usable in our code.
// This is how we do that.
// const axios = require('axios')
// After doing this, we can use functions from the Axios package.
// The most notable functions are GET, POST, PATCH, and ALL.

// create object
const instance = axios.create({
  // URL which we will fetch data from
  // port in server js
  baseURL: 'http://localhost:8000',
})

export default instance
