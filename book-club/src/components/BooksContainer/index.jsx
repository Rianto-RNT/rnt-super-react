import React, {useState, useEffect, useRef} from 'react'
import {debounce} from 'lodash-es'

import Book from '../Book'

import {Container, H2, BookList} from './styles'

const BooksContainer = ({books, pickBook, isPanelOpen}) => {
  const [scroll, setScroll] = useState(0)

  const prevPanelState = useRef(false)

  useEffect(() => {
    const handleScroll = debounce(() => {
      setScroll(window.scrollY)
    }, 100)

    if (!isPanelOpen) {
      window.addEventListener('scroll', handleScroll)
    }

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [isPanelOpen])

  useEffect(() => {
    if (prevPanelState.current && !isPanelOpen) {
      window.scroll(0, scroll)
    }

    prevPanelState.current = isPanelOpen
  }, [isPanelOpen, prevPanelState, scroll])

  console.log(scroll)

  return (
    <Container $isPanelOpen={isPanelOpen} $top={scroll}>
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
