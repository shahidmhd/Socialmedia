import React,{useState} from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom"
import Home from './pages/Home'
import Loginpage from './pages/Loginpage'
import Signuppage from './pages/Signuppage'
import { useSelector } from 'react-redux'
import AdminLogin from './pages/Admin/AdminLogin'
import AdminHome from './pages/Admin/AdminHome'
import { createTheme } from '@mui/material'
import { ThemeProvider } from '@emotion/react'
import Dashboard from './pages/Admin/Dashboard'



const App = () => {
  const token = useSelector((state) => state.Authslice.token);
  const admintoken=useSelector((state)=>state.Authslice.adminToken)
  console.log(admintoken,"admintoken");
  console.log(token, "tttttttttttttt")


  const [mode,setMode]=useState("dark")

 const darktheme=createTheme({
  palatte:{
    mode:mode
  }
 })

  return (
    <>
    <ThemeProvider theme={darktheme}>
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
           <Route
            path='/admin'
            element={admintoken? <Navigate to='/admin/home'/>:<AdminLogin/>}
          />
          <Route
            path='/admin/dashboard'
            element={admintoken ? <AdminHome/>:<Navigate to='/admin'/>}
          />
          <Route
            path='/admin/home'
            element={admintoken ? <Dashboard/>:<Navigate to='/admin'/>}
          />
          
          
        </Routes>
      </Router>
      </ThemeProvider>
    </>

  )
}

export default App
