import React from 'react'
import Login from './Components/Login'
import Dashboard from './Components/dashboard'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  const user = {
    name:"Gaurav",
    email:"gaurav@gmail.com",
    password:"12345678"
  };
  return (
    <div>
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Login user={user} />} />
          <Route path="/dashboard" element={<Dashboard user={user} />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
