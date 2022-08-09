import React, {useState, useEffect} from 'react'

import BooksContainer from './components/BooksContainer'
import Header from './components/Header'

import {GlobalStyle} from './styles'

const App = () => {
  const [books, setBooks] = useState([])

  console.log('load every time the component renders...')

  useEffect(() => {
    const fetchdata = async () => {
      try {
        // const response = await fetch('http://localhost:5000/api/v1/books')
        const response = await fetch('https://rnt-book-club-json.herokuapp.com/api/v1/books')
        console.log('here is what our fetch request returns', response)

        const books = await response.json()
        console.log('Our json-ified response', books)
        setBooks(books)
      } catch (error) {
        console.log(error)
      }
    }

    fetchdata()
  }, [])

  console.log(`the books array in our state: `, books)

  return (
    <>
      <GlobalStyle />
      <Header />
      <BooksContainer books={books} />
    </>
  )
}

export default App
