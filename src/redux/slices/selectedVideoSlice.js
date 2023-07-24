import { createSlice } from "@reduxjs/toolkit";

const initialState = null

const selectedVideoSlice = createSlice({
    name: 'selectedVideo',
    initialState,
    reducers: {
      setSelectedVideo(state, action) {
        return action.payload; 
      },
    },
  });
  
  export const { setSelectedVideo } = selectedVideoSlice.actions;
  
  export default selectedVideoSlice.reducer;