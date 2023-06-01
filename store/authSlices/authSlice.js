import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: '',
  initialized : false,

}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
        signin: (state) => {
          state.user = 'admin'
          state.initialized = true;
        } 
    },
})

// Action creators are generated for each case reducer function
export const { signin } = authSlice.actions

export default authSlice.reducer