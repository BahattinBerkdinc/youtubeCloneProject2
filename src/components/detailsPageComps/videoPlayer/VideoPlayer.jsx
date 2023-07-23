import React from 'react'
import "./videoplayer.scss"
import VideoCard from '../../video-card/VideoCard'
import VideoInfo from '../videoInfo/VideoInfo'
const VideoPlayer = () => {
  return (
    <div className='maindiv border'>

      
      <div className="left-side">
           <div className='ratio ratio-16x9 video'>
               <iframe width="731" height="548" title='dskjfds' src="https://www.youtube.com/embed/RRT3Fz7SRKw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
           </div>
           <VideoInfo/>
      </div>
      
 
      
   <div  className='videos right-side'>
      <VideoCard/>
   </div>
      
  
    
    </div>
  )
}

export default VideoPlayer


