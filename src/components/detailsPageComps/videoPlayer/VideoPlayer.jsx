import React from 'react'
import "./videoplayer.scss"
import VideoCard from '../../video-card/VideoCard'
import VideoInfo from '../videoInfo/VideoInfo'
import VideoInfoDetail from '../videoInfoDetail/VideoInfoDetail'
import VideoComments from '../videoComments/VideoComments'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
const VideoPlayer = () => {

  

  const { videoId } = useParams();
  const selectedVideo = useSelector((state) => state.videosInfo.videoInfo.find((video) => video.id === videoId));
  
  console.log(selectedVideo);

  if(!selectedVideo) return null

  window.document.title = selectedVideo.snippet.title


  return (
    <div className='maindiv border'>
      <div className="left-side">
           <div className='ratio ratio-16x9 video'>
               <iframe width="731" height="548" title='dskjfds' src={`https://www.youtube.com/embed/${selectedVideo.id}`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
           </div>
           <VideoInfo selectedVideo={selectedVideo}/>
           <VideoInfoDetail selectedVideo={selectedVideo} />
          <div className="video-comments-div">
          <VideoComments selectedVideo={selectedVideo} />
          </div>
      </div>
      
 
      
   <div  className='videos right-side'>
      <VideoCard/>
   </div>
      
    </div>
  )
}

export default VideoPlayer


