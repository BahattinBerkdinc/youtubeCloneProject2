import React, { useEffect } from 'react'
import {Col} from "react-bootstrap"
import { useDispatch, useSelector } from 'react-redux'
import { fetchVideoInfo } from '../../redux/slices/ytvideoSlice'
import './videocard.scss'
import VideoSkelaton from '../videoSkeleton/VideoSkelaton'

const VideoCard = () => {

    const dispatch = useDispatch()
    const videos = useSelector(state=>state.videosInfo.videoInfo)
    const isLoading = useSelector(state=>state.videosInfo.isLoading)
    const error = useSelector(state=>state.videosInfo.error)
    
    useEffect(() => {
        dispatch(fetchVideoInfo())
    },[dispatch])
    

    

    console.log(videos);

    function formatViews(views) {
        if (views >= 1000000) {
          const millions = Math.floor(views / 1000000);
          return millions + 'M';
        } else if (views >= 1000) {
          const thousands = Math.floor(views / 1000);
          return thousands + 'K';
        } else {
          return views.toLocaleString();
        }
      }
      

      function getTimeAgo(timestamp) {
        const currentTime = new Date();
        const givenTime = new Date(timestamp);
        const timeDiffInSeconds = Math.floor((currentTime - givenTime) / 1000);
      
        if (timeDiffInSeconds < 60) {
          return `${timeDiffInSeconds} seconds ago`;
        } else if (timeDiffInSeconds < 3600) {
          const minutes = Math.floor(timeDiffInSeconds / 60);
          return `${minutes} ${minutes === 1 ? 'minute' : 'minutes'} ago`;
        } else if (timeDiffInSeconds < 86400) {
          const hours = Math.floor(timeDiffInSeconds / 3600);
          return `${hours} ${hours === 1 ? 'hour' : 'hours'} ago`;
        } else if (timeDiffInSeconds < 604800) {
          const days = Math.floor(timeDiffInSeconds / 86400);
          return `${days} ${days === 1 ? 'day' : 'days'} ago`;
        } else if (timeDiffInSeconds < 2419200) {
          const weeks = Math.floor(timeDiffInSeconds / 604800);
          return `${weeks} ${weeks === 1 ? 'week' : 'weeks'} ago`;
        } else if (timeDiffInSeconds < 29030400) {
          const months = Math.floor(timeDiffInSeconds / 2419200);
          return `${months} ${months === 1 ? 'month' : 'months'} ago`;
        } else {
          const years = Math.floor(timeDiffInSeconds / 29030400);
          return `${years} ${years === 1 ? 'year' : 'years'} ago`;
        }
      }

      function formatDuration(duration) {
        const match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);
      
        const hours = match[1] ? parseInt(match[1]) : 0;
        const minutes = match[2] ? parseInt(match[2]) : 0;
        const seconds = match[3] ? parseInt(match[3]) : 0;
      
        if (hours === 0) {
          const formattedMinutes = minutes.toString().padStart(2, '0');
          const formattedSeconds = seconds.toString().padStart(2, '0');
          return `${formattedMinutes}:${formattedSeconds}`;
        } else {
          const formattedHours = hours.toString().padStart(2, '0');
          const formattedMinutes = minutes.toString().padStart(2, '0');
          const formattedSeconds = seconds.toString().padStart(2, '0');
          return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
        }
      }
      
    

  return (

      <>
      {isLoading && <VideoSkelaton/>}
      {error && <p>{error}</p>}
      {
          videos.map((video)=>(
              <Col sm={12} md={6} lg={3} key={video.id} >
                    <div className='videoCard custom-flex-direction'  >
                    <div className="video-card-top">
    <img src={video.snippet.thumbnails.medium.url} className='img-fluid' alt="" />
    <span className='duration'>{formatDuration(video.contentDetails.duration)}</span>
</div>


<div className="video-card-bottom">
   <div className="channel-pic">
       <img src={video.snippet.thumbnails.medium.url} className='img-fluid' alt="" />
   </div>
         <div className="video-info">
            <h4 className={`video-title ${video.snippet.title.length > 30 ? 'long' : ''}`}>{video.snippet.title}</h4>
            <span className="channel-name">{video.snippet.channelTitle}</span>
               <div className='video-sup-info'>
            <span>{formatViews(video.statistics.viewCount)} views</span>
                  <div className="dot"></div>
            <span>{getTimeAgo(video.snippet.publishedAt)}</span>
       </div>
</div>
</div>


</div>
              </Col>
                
     
            ))
        }
      </>
  )
}

export default VideoCard
