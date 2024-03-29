import React from 'react'

import {Container, Cover, Title, Author} from './styles'

const Book = ({book, pickBook, isLarge}) => {
  return (
    <>
      <Container $isLarge={isLarge} onClick={() => pickBook(book)}>
        <Cover alt={`BookCover for ${book.title} by ${book.author}`} src={book.image} />
        <figcaption>
          <Title $isLarge={isLarge}>{book.title}</Title>
          <Author>by {book.author}</Author>
        </figcaption>
      </Container>
    </>
  )
}

export default Book
