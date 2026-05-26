import React from 'react'
import { Route, Routes } from 'react-router'

import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Logout from './components/features/Logout'

const App = () => {
  return (
    <div className='w-full h-screen'>
      <Logout props={{ className: '' }}/>
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  )
}

export default App
