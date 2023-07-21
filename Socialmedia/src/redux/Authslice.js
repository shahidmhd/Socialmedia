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

  }
});

export const { setLogin, setLogout, setAdminLogin, setadminLogout, setPosts, setUpdate, setFollowers, setFollowing,setPost } = Authslice.actions;
export default Authslice.reducer;
