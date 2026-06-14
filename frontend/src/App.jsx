import React from 'react'
import { Route, Routes } from 'react-router'
import { ProtectedRoute } from './components/features/ProtectedRoute'
import { Toaster } from '@/components/ui/sonner'

import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Dashboard from './pages/Dashboard'
import MainLayout from './layouts/MainLayout'
import InterviewReport from './pages/InterviewReport'

const App = () => {
  return (
    <>
      <Toaster richColors position="top-center" />

      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        {/* Protected Routes */}
        <Route element={<ProtectedRoute />}>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/interview-report" element={<InterviewReport />} />
          </Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
