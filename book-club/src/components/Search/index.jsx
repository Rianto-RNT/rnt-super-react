import React, {useRef, useState} from 'react'

import {SearchContainer, Input, Icon, Wrapper} from './styles' // >>> from Search
import {Close} from '../../styles' // >>> from GlobalStyle

const Search = ({filterBooks}) => {
  const inputEl = useRef(null)
  const [showOnDesktop, setShowOnDesktop] = useState(false)

  const handleChange = (event) => {
    console.log(event.target)
    filterBooks(event.target.value)
  }

  const clearSearch = () => {
    filterBooks('')
    inputEl.current.value = ''
  }

  const showSearch = () => {
    setShowOnDesktop()
  }

  return (
    <Wrapper>
      <SearchContainer $showOnDesktop={showOnDesktop}>
        <Icon onClick={showSearch} />
        <Input ref={inputEl} type="text" name="search" autoComplete="off" onChange={handleChange} />
        <Close onClick={clearSearch} />
      </SearchContainer>
    </Wrapper>
  )
}

export default Search
