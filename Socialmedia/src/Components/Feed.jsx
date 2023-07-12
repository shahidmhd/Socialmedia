import { Box } from '@mui/material'
import React from 'react'
import Post from './Post'

const Feed = () => {
  let arr = [1, 2, 3, 4]
  return (
    <Box p={2}  sx={{width:"90%",height:"90%"}}>
      {
        arr.map((item, index) => {
          return(
          <Post />
          )
        })

      }
    </Box>
  )
}

export default Feed
