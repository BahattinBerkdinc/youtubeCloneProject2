import {configureStore} from '@reduxjs/toolkit'
import  videoSlice  from '../slices/ytvideoSlice'
import selectedVideoSlice from '../slices/selectedVideoSlice'


export const store = configureStore({
    reducer: {
        videosInfo : videoSlice,
        selectedVideo : selectedVideoSlice
    }
})