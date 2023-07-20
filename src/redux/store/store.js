import {configureStore} from '@reduxjs/toolkit'
import  videoSlice  from '../slices/ytvideoSlice'


export const store = configureStore({
    reducer: {
        videosInfo : videoSlice
    }
})