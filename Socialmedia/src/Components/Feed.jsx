import { Box, Typography } from '@mui/material';
import React, { useState, useEffect,Suspense } from 'react';
import Post from './Post';
import { getPosts } from '../api/PostRequest/postReqest';
import { useSelector,useDispatch } from 'react-redux';
// import LoadingComponent from './Modal/Loadingcomponent';
import { setPosts } from '../redux/Authslice';

const Feed = ({ render }) => {
  const dispatch=useDispatch()
  const token = useSelector((state) => state.Authslice.token);
  const posts = useSelector((state) => state.Authslice.posts);
  const [post, setPost] = useState(false);
  // const [loading, setLoading] = useState(true);
  const getPost = async () => {
    const response = await getPosts(token);
    dispatch(setPosts({ posts: response.posts }));
    // setLoading(false);
  };

  const buttonlicked = () => {
    setPost(!post);
  };

  useEffect(() => {
    // setLoading(true);
    getPost();
  }, [render,post]);

  return (
    <Suspense fallback={<Typography>loading..............</Typography>}>
    <Box p={2} sx={{ width: '90%', height:'auto' }}>
     {posts.length > 0 && // Check if posts array is not empty
    posts.map((item) => (
      <Post
        key={item._id}
        postId={item._id}
        likes={item.likes}
        image={item.image}
        userName={item.userId.userName}
        description={item.description}
        date={item.updatedAt}
        profilepicture={item.userId.image}
        userId={item.userId._id}
        buttonlicked={buttonlicked}
      />
    ))}
    </Box>
    </Suspense>
  );
};

export default Feed;
