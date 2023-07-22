import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  token: null,
  admin: null,
  adminToken: null,
  posts: [],
  followers: [],
  following: [],
};

export const Authslice = createSlice({
  name: 'auth',
  initialState, // Corrected from 'initialstate'
  reducers: {
    setLogin: (state, action) => {
      state.token = action.payload.token.token;
      state.user = action.payload.token.user;
    },
    setLogout: (state) => {
      state.user = null;
      state.token = null;
      state.followers = [];
      state.following = [];
    },
    setAdminLogin: (state, action) => {

      state.adminToken = action.payload.admintoken.token;
      state.admin = action.payload.admintoken.admin;
    },
    setadminLogout: (state) => {
      state.admin = null;
      state.adminToken = null;
    },
    setPosts: (state, action) => {
      state.posts = action.payload.posts;
    },
    setUpdate: (state, action) => {
      state.user = action.payload;
    },
    setFollowers: (state, action) => {
      if (state.user) {
        state.user.followers = action.payload.followers;
        state.followers = action.payload.followers
      } else {
        console.error("user friends non-existent :(");
      }
    },

    setFollowing: (state, action) => {
      if (state.user) {
        state.user.following = action.payload.following;
        state.following = action.payload.following
      } else {
        console.error("user friends non-existent :(");
      }
    },
    setPost: (state, action) => {
      const updatedPosts = state.posts.map((post) => {
          if (post._id === action.payload.post._id) return action.payload.post;
          return post;
      });
      state.posts = updatedPosts;
  },
  setcomment: (state, action) => {
    const updatedPosts = state.posts.map((post) => {
      if (post._id === action.payload.post._id) {
        const updatedComments = action.payload.post.comments.map((comment) => {
          // Extract and store the userId
          const userId = comment.userId;
          // You can do any further processing or store the userId in your state as required
          // For example, you can store it in an array, an object, or any other data structure
          // For this example, let's assume you want to store userIds in an array
          state.userIds.push(userId);
          return comment;
        });
        
        // Update the comments array with the new updatedComments array
        return { ...post, comments: updatedComments };
      }
      
      return post;
    });
    
    state.posts = updatedPosts;
  }


  }
});

export const { setLogin, setLogout, setAdminLogin, setadminLogout, setPosts, setUpdate, setFollowers, setFollowing,setPost,setcomments } = Authslice.actions;
export default Authslice.reducer;
