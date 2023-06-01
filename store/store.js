import { configureStore } from '@reduxjs/toolkit'
import authReducer from './authSlices/authSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
})