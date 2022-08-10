import React from 'react'
import {HeaderContainer, Logo} from './styles'

const Header = ({children}) => {
  return (
    <HeaderContainer>
      <a href="/">
        <Logo title="Book Club logo" />
      </a>
      {children}
    </HeaderContainer>
  )
}

export default Header
