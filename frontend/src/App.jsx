import React from 'react'
import { Route, Routes } from 'react-router'
import { ProtectedRoute } from './components/features/ProtectedRoute'
import { Toaster } from '@/components/ui/sonner'

import MainLayout from './layouts/MainLayout'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import InterviewReport from './pages/InterviewReport'
import About from './pages/About'
import PreviousReports from './pages/PreviousReports'
import GenerateInterviewReport from './pages/GenerateInterviewReport'

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
            <Route path="/" element={<GenerateInterviewReport />} />
            <Route path="/about" element={<About />} />
            <Route path="/reports" element={<PreviousReports />} />
            <Route path="/interview-reports/:interviewReportId" element={<InterviewReport />} />
          </Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
