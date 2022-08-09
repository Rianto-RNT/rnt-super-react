import React, {useState, useEffect} from 'react'

import BooksContainer from './components/BooksContainer'
import Header from './components/Header'

import {GlobalStyle} from './styles'

const App = () => {
  const [books, setBooks] = useState([])
  const [selectedBook, setSelectedBook] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      // const response = await fetch('http://localhost:5000/api/v1/books')
      const response = await fetch('https://rnt-book-club-json.herokuapp.com/api/v1/books')
      const books = await response.json()
      setBooks(books)
    }

    fetchData()
  }, [])

  // console.log(`the books array in our state: `, books)

  const pickBook = (book) => {
    setSelectedBook(book)
  }

  console.log(selectedBook)

  return (
    <>
      <GlobalStyle />
      <Header />
      <BooksContainer books={books} pickBook={pickBook} />
    </>
  )
}

export default App
