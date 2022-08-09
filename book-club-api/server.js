const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const colors = require('colors')
const cors = require('cors')

const connectDB = require('./config/db')

dotenv.config({path: './config/config.env'})

connectDB()

const app = express()

app.use(express.json())

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello Book Club')
})

const PORT = process.env.PORT || 5000
const server = app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} node on port ${PORT}`.magenta.bold)
)

process.on('unhandledRejection', (err) => {
  console.log(`Error: ${err.message}`.red)
  server.close(() => process.exit(1))
})
