import React from 'react'

import Book from '../Book'
import {Panel, P, Em, Close, CloseWrapper, BG} from './styles'

const DetailPanel = ({book, closePanel}) => (
  <>
    <BG onClick={closePanel}>
      <Panel>
        <CloseWrapper oncClick={closePanel}>
          <Close />
        </CloseWrapper>
        <Book book={book} isLarge={true} />
        <P>{book.description}</P>
        <P>
          <Em>Published in {book.published}</Em>
        </P>
      </Panel>
    </BG>
  </>
)

export default DetailPanel
