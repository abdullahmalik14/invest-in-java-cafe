import React from 'react'
import "./App.css"
import "./Responsive.css"
import { Route, Routes } from 'react-router-dom'
import Home from './screens/Home'
const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </>
  )
}

export default App
