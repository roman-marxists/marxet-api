const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const { pgsql, mongodb } = require('../database')

const port = process.env.PORT || 3001;

let app = express()

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.static('client/dist'))

app.listen(port, () => {
  console.log("Listening on port %d...", port)
})