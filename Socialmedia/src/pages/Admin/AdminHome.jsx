import { Button, Typography } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'
import { setadminLogout } from '../../redux/Authslice'

const AdminHome = () => {
    const dispatch=useDispatch()
  return (
    <div>
     <Typography m={5} p={5}>hi i am admin</Typography>
     <Button onClick={()=>{
    dispatch(setadminLogout())
     }}>logout</Button>
    </div>
  )
}

export default AdminHome
