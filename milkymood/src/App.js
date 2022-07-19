import React from 'react'

import {GlobalStyle} from './App.styles'

const App = () => {
  const message = (name) => {
    return `${name} is a software engineer at RNT Creative`
  }

  return (
    <div className="App">
      <GlobalStyle />
      <h1>MilkyMood</h1>
      <h2>{message`Rian`}</h2>
    </div>
  )
}

export default App
