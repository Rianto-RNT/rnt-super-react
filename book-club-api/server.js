const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const colors = require('colors')
const cors = require('cors')

const errorHandler = require('./middleware/error')
const connectDB = require('./config/db')

dotenv.config({path: './config/config.env'})

connectDB()

const books = require('./routes/books')

const app = express()

app.use(express.json())

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

app.use(cors())

app.use('/api/v1/books', books)

app.use(errorHandler)

const PORT = process.env.PORT || 5000
const server = app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} node on port ${PORT}`.magenta.bold)
)

process.on('unhandledRejection', (err) => {
  console.log(`Error: ${err.message}`.red)
  server.close(() => process.exit(1))
})
