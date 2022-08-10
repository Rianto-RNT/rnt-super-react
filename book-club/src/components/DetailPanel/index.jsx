import React, {useRef, useEffect} from 'react'

import Book from '../Book'
import {Panel, P, Em, CloseWrapper, BG} from './styles' // >>> from DetailPanel
import {Close} from '../../styles' // >>> from GlobalStyle

const DetailPanel = ({book, closePanel, state}) => {
  const panelEl = useRef(null)
  const prevBook = useRef(null)

  useEffect(() => {
    if (prevBook.current !== book) {
      panelEl.current.scrollTop = 0
    }

    prevBook.current = book
  }, [book, prevBook])

  // console.log(state)
  return (
    <>
      <BG onClick={closePanel} $state={state}>
        <Panel $state={state} ref={panelEl}>
          <CloseWrapper oncClick={closePanel} $state={state}>
            <Close />
          </CloseWrapper>

          {book && (
            <>
              <Book book={book} isLarge={true} />
              <P>{book.description}</P>
              <P>
                <Em>Published in {book.published}</Em>
              </P>
            </>
          )}
        </Panel>
      </BG>
    </>
  )
}

export default DetailPanel
