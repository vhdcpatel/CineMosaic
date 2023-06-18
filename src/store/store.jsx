import { configureStore } from "@reduxjs/toolkit";
import homeSlice from "./Slices/homeSlice";

export const store = configureStore({
   reducer:{
    home:homeSlice,
   },
})