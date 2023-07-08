import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  token: null,
  admin:null,
  adminToken:null,
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
    },
    setAdminLogin: (state, action) => {

      state.adminToken = action.payload.admintoken.token;
      state.admin = action.payload.admintoken.admin;
  },
  setadminLogout: (state) => {
    state.admin = null;
    state.adminToken = null;
},
  }
});

export const { setLogin,setLogout,setAdminLogin ,setadminLogout} = Authslice.actions;
export default Authslice.reducer;
