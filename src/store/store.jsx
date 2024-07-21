import { configureStore } from "@reduxjs/toolkit";
import homeSlice from "./Slices/homeSlice";
import authReducer from './Slices/authSlice';

export const store = configureStore({
   reducer:{
    home: homeSlice,
    auth: authReducer,
   },
})