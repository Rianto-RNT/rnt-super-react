import React, {useState, useEffect} from 'react'

import BooksContainer from './components/BooksContainer'
import Header from './components/Header'
import DetailPanel from './components/DetailPanel'

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

  const pickBook = (book) => {
    setSelectedBook(book)
  }

  const closePanel = () => {
    setSelectedBook(null)
  }

  console.log(selectedBook)

  return (
    <>
      <GlobalStyle />
      <Header />
      <BooksContainer books={books} pickBook={pickBook} isPanelOpen={selectedBook !== null} />
      {selectedBook && <DetailPanel book={selectedBook} closePanel={closePanel} />}
    </>
  )
}

export default App
