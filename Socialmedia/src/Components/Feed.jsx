import { Box } from '@mui/material';
import React, { useState, useEffect } from 'react';
import Post from './Post';
import { getPosts } from '../api/PostRequest/postReqest';
import { useSelector } from 'react-redux';
import LoadingComponent from './Modal/Loadingcomponent';

const Feed = ({ render }) => {
  const token = useSelector((state) => state.Authslice.token);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const getPost = async () => {
    const response = await getPosts(token);
    console.log(response.posts);
    setPosts(response.posts);
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    getPost();
  }, [render]);

  return (
    <Box p={2} sx={{ width: '90%', height: '90%' }}>
      {loading ? (
        <LoadingComponent />
      ) : (
        posts.map((item) => (
          <Post
            key={item._id}
            image={item.image}
            userName={item.userId.userName}
            description={item.description}
            date={item.updatedAt}
            profilepicture={item.userId.image}
            userId={item.userId._id}
          />
        ))
      )}
    </Box>
  );
};

export default Feed;
