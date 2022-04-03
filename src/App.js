import React, { useState } from 'react'
import BasicTable from './components/BasicTable'
import UserViewTable from './components/user-view/UserViewTable'
import Login from './components/log-in/Login'
import './App.css'
function App() {
  const [loggedIn, setIsLoggedIn] = useState(false)

  function submitForm() {
    setIsLoggedIn(true)
  }

  return <>{!loggedIn ? <Login submitForm={submitForm} /> : <BasicTable />}</>
}

export default App
