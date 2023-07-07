import React from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom"
import Home from './pages/Home'
import Loginpage from './pages/Loginpage'
import Signuppage from './pages/Signuppage'
import { useSelector } from 'react-redux'


const App = () => {
  const token = useSelector((state) => state.Authslice.token);
  console.log(token, "tttttttttttttt")
  return (
    <>
      <Router>
        <Routes>
          <Route
            path='/'
            element={token ? <Navigate to='home' /> : <Navigate to='/login' />}
          />
          <Route
            path='/home'
            element={token ? <Home /> : <Navigate to='/login' />}
          />
           <Route
            path='/login'
            element={token ? <Navigate to='/' /> : <Loginpage/>}
          />
           <Route
            path='/signup'
            element={token ? <Navigate to='/' /> : <Signuppage/>}
          />
        </Routes>
      </Router>
    </>

  )
}

export default App
