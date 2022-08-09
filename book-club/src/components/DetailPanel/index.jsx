import React from 'react'

import Book from '../Book'
import {Em, P, Panel} from './styles'

const DetailPanel = ({book}) => (
  <Panel>
    <Book book={book} isLarge={true} />
    <P>{book.description}</P>
    <P>
      <Em>Published in {book.published}</Em>
    </P>
  </Panel>
)

export default DetailPanel