import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  token: null,
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
       
    }
  }
});

export const { setLogin,setLogout } = Authslice.actions;
export default Authslice.reducer;
