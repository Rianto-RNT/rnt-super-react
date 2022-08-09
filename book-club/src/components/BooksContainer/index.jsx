import React from 'react'

import Book from '../Book'

import {Container, H2, BookList} from './styles'

const BooksContainer = ({books}) => {
  return (
    <Container>
      <H2>All Books</H2>
      <BookList>
        {books.map((book) => (
          <Book key={book._id} book={book} />
        ))}
      </BookList>
    </Container>
  )
}

export default BooksContainer
