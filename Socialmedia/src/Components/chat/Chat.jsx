import React from 'react'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import { Box, Grid } from '@mui/material'

const Chat = () => {


  return (
  <>
  <Navbar/>
  <Box pt={7}>
  <Grid container spacing={2}>
  <Grid item md={2} lg={1.5}>
  <Sidebar/>
  </Grid>
  <Grid item md={10} lg={10}>

  <Box
  height='100vh'
  width='320'
bgcolor='red'
  >

  </Box>
  </Grid>
</Grid>
</Box> 
  </>
  )
}

export default Chat
