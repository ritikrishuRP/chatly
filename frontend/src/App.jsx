import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import getCurrentUser from './customHooks/getCurrentUser'

const App = () => {
  getCurrentUser();
  return (
    <Routes>
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<SignUp />} />
      {/* Add more routes as needed */}
    </Routes>  
  )
}

export default App