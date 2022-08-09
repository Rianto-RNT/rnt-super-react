import React from 'react'

import Book from '../Book'

import {Container, H2, BookList} from './styles'

const BooksContainer = ({books, pickBook}) => {
  return (
    <Container>
      <H2>All Books</H2>
      <BookList>
        {books.map((book) => (
          <Book key={book._id} book={book} pickBook={pickBook} />
        ))}
      </BookList>
    </Container>
  )
}

export default BooksContainer
