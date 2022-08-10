import React from 'react'

import {SearchContainer, Input, Icon, Wrapper} from './styles'

const Search = ({filterBooks}) => {
  const handleChange = (event) => {
    console.log(event.target)
    filterBooks(event.target.value)
  }

  return (
    <SearchContainer>
      <Input type="text" name="search" autoComplete="off" onChange={handleChange} />
    </SearchContainer>
  )
}

export default Search
