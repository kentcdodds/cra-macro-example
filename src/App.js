import React from 'react'
import ms from 'ms.macro'
import logo from './logo.svg'
import './App.css'
import evil from './evil.macro'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://github.com/kentcdodds/babel-plugin-macros"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Babel Plugin Macros
        </a>
        <p>This is calculated at compile-time: {evil`19 + 23`}</p>
        <p>And so is this: {ms('1.5 days')}ms (that's 1.5 days)</p>
      </header>
    </div>
  )
}

export default App
