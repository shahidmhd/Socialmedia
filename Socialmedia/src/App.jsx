import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from './pages/Home'
import Loginpage from './pages/Loginpage'
import Signuppage from './pages/Signuppage'


const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/login' element={<Loginpage/>} />
          <Route exact path='/signup' element={<Signuppage/>} />
        </Routes>
      </Router>
    </>

  )
}

export default App
