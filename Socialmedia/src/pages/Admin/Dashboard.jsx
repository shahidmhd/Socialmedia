import React from 'react'
import Adminnavbar from './Adminnavbar'
import { Typography } from '@mui/material'

const Dashboard = () => {
  return (
    <>
    <Adminnavbar/>
    <Typography variant='h1' align='center' color="red" justifyContent={'center'} m={45}>dashboard</Typography>
    </>
  )
}

export default Dashboard
