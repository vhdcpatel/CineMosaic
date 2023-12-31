import { createSlice } from "@reduxjs/toolkit";

// setting the intial state.
const initialState = {
  url: {},
  genres: {},
};

export const homeSlice = createSlice({
  name: "HomeSlice",
  initialState,
  reducers: {
    getApiConfiguration: (state,action)=>{
      state.url = action.payload;
    },

    getGenres: (state,action)=>{
      state.genres = action.payload;
    },

  },
});

export const { getApiConfiguration, getGenres } = homeSlice.actions;

export default homeSlice.reducer;