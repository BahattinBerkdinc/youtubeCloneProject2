import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios"


const initialState = {
    videoInfo : [],
    isLoading : false,
    error : ""
}

const API_KEY = "AIzaSyCAe0KPONaQqZb84N5IY7uo7upv-TJxiqU"

export const fetchVideoInfo = createAsyncThunk('videoInfo/fetchVideoInfo', async () => {
    const response = await axios.get(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&part=statistics&part=contentDetails&chart=mostPopular&maxResults=50&key=${API_KEY}`
    );
    const data = response.data.items;
    return data;
  });


  export const videoSlice = createSlice({
    name: 'videoInfo',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(fetchVideoInfo.pending, (state) => {
        state.isLoading = true;
      });
      builder.addCase(fetchVideoInfo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.videoInfo = action.payload;
      });
      builder.addCase(fetchVideoInfo.rejected, (state) => {
        state.isLoading = false;
        state.error = state.error || "Something went wrong";
      });
    }
  });


export default videoSlice.reducer