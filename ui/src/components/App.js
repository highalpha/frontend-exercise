import React from 'react'

import Header from './header'
import Applications from './applications'
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        <h2>Applications</h2>
        <Applications />
      </div>
    </div>
  )
}

export default App
