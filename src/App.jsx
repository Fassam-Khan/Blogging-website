import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './Pages/Home'
import Signup from './Pages/Signup'
import Login from './Pages/Login'

const App = () => {
  return (

    <BrowserRouter  >

    <Routes>

      <Route element={<Home/>} path='/'/>
      <Route element={<Signup/>} path='/singup'/>
      <Route element={<Login/>} path='/login'/>


    </Routes>
    
    
    </BrowserRouter>
  )
}

export default App
