import React, { useState } from 'react'
import Login from './components/log-in/Login'
import './App.css'
import FinalData from './components/FinalData'

function App() {
  const [loggedIn, setIsLoggedIn] = useState(false)

  function submitForm() {
    setIsLoggedIn(true)
  }

  return <>{!loggedIn ? <Login submitForm={submitForm} /> : <FinalData />}</>
}

export default App
