import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import Blogs from './Pages/Blogs'
import ProtectedRoute from './components/ProtectedRoute'

const App = () => {
  return (

    <BrowserRouter  >

      <Routes>

        <Route element={<Home />} path='/' />
        <Route element={<Signup />} path='/singup' />
        <Route element={<Login />} path='/login' />
        <Route element={<ProtectedRoute />}>
          <Route element={<Blogs />} path='blogs' />

        </Route>


      </Routes>


    </BrowserRouter>
  )
}

export default App
