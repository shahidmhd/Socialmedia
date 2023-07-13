import { Box } from '@mui/material'
import React,{useState,useEffect} from 'react'
import Post from './Post'
import { getPosts } from '../api/PostRequest/postReqest'
import { useSelector } from 'react-redux'
const Feed = ({render}) => {
  const token = useSelector((state) => state.Authslice.token);
  const [post,setposts]=useState([])
  const getPost = async () => {
    const response = await getPosts(token);
      console.log(response.posts);
      setposts(response.posts)
    
  };


  useEffect(()=>{
    getPost()
  },[render])

 
  return (
    <Box p={2}  sx={{width:"90%",height:"90%"}}>
   {

    post.map((item)=>{
        return(
          <Post 
          key={item._id} 
          image={item.image}
          userName={item.userName}
          description={item.description}
          date={item.updatedAt}
          />
        )
    })
             


   }
  
    </Box>
  )
}

export default Feed
