import React from 'react'
import { Route, Routes } from 'react-router'
import LoginScreen from './Screens/LoginScreen/LoginScreen'
import RegisterScreen from './Screens/RegisterScreen/RegisterScreen'
import HomeScreen from './Screens/HomeScreen/HomeScreen'
import AuthMiddleware from './Middelware/AuthMiddleware.jsx'

function App() {


  return (
   <div>
    <Routes>
      <Route path="/" element={<LoginScreen/>}/>
      <Route path='/login' element={<LoginScreen/>}/>
      <Route path='/register' element={<RegisterScreen/>}/>
      <Route element={<AuthMiddleware/>} > {/* PASA POR ESTE AARCHIVO ANTES DE IR A HOME PARA PODER AHCER Q OSLO USUARIOS CO AUTH TOKEN PUEDAN PASAR AL HOME  */}
        <Route path='/home' element={<HomeScreen/>}/>
      </Route>
    </Routes>
   </div>
  )
}

export default App