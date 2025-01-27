import React from 'react'
import { ThemeProvider } from './components/ThemProvider'
import Body from './components/Body'
import Headers from './components/Heders'

function App() {

  return (
    <>
      <ThemeProvider>
        <Headers />
        <Body />
      </ThemeProvider>
    </>
  )
}

export default App
