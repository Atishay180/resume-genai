import React from 'react'
import { Route, Routes } from 'react-router'

import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Logout from './components/features/Logout'
import { ProtectedRoute } from './components/features/ProtectedRoute'
import { Toaster } from '@/components/ui/sonner'

const App = () => {
  return (
    <div className='w-full h-screen'>
      <Toaster />
      <Routes>

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/" element={
            <div>
              <h1>Home Page</h1>
              <Logout props={{ className: '' }} />
            </div>
          } />
        </Route>
      </Routes>
    </div>
  )
}

export default App
