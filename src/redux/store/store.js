import {configureStore} from '@reduxjs/toolkit'
import  videoSlice  from '../slices/ytvideoSlice'
import selectedVideoSlice from '../slices/selectedVideoSlice'
import burgerToggleSlice from '../slices/burgerToggleSlice'
import inputSlice from '../slices/inputSlice'


export const store = configureStore({
    reducer: {
        videosInfo : videoSlice,
        selectedVideo : selectedVideoSlice,
        burgerToggle : burgerToggleSlice,
        input : inputSlice
    },
    preloadedState: {
        selectedVideo: {
          selectedVideo: null, // Boş başlangıç değeri olarak null atıyoruz
        },
      },
})