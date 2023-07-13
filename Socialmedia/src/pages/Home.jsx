import React, { useState } from 'react'
import Sidebar from '../Components/Sidebar'
import Feed from '../Components/Feed'
import Rightbar from '../Components/Rightbar'
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import Navbar from '../Components/Navbar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
const theme = createTheme();
const Home = () => {
  const [render,setrender]=useState(false)
  return (
    <>
     <ThemeProvider theme={theme}>
      {/* navbar */}
      <Navbar />
      {/* <Stack direction="row" spacing={2} justifyContent={'space-between'}>
    <Sidebar />
    <Feed />
    <Rightbar />
    </Stack> */}
      <Box mt={7} sx={{ width: '100%' }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 3, sm: 3, md: 3 }}>
          <Grid item xs={2} sm={3} md={3} lg={2} >
            <Sidebar setrender={setrender}/>
          </Grid>
          <Grid item xs={10} sm={9} md={9} lg={6} >
            <Feed render={render} />
          </Grid>
          <Grid item lg={4}>
            <Rightbar />
          </Grid>

        </Grid>
      </Box>
      </ThemeProvider>
    </>
  )
}

export default Home
