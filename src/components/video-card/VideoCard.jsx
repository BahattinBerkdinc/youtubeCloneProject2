import React, { useEffect } from 'react'
import {Col} from "react-bootstrap"
import { useDispatch, useSelector } from 'react-redux'
import { fetchVideoInfo } from '../../redux/slices/ytvideoSlice'
import { setSelectedVideo } from '../../redux/slices/selectedVideoSlice';
import './videocard.scss'
import VideoSkelaton from '../videoSkeleton/VideoSkelaton'
import { Link, useNavigate,  } from 'react-router-dom'
import { formatDuration, formatViews, getTimeAgo } from '../../helpers/helpers'


const VideoCard = ({inputValue}) => {

    const dispatch = useDispatch()
    const videos = useSelector(state=>state.videosInfo.videoInfo)
    const selectedVideoId = useSelector((state) => state.selectedVideo.selectedVideo?.id || null)
    const isLoading = useSelector(state=>state.videosInfo.isLoading)
    const error = useSelector(state=>state.videosInfo.error)
    const navigate = useNavigate()


    
    useEffect(() => {
        dispatch(fetchVideoInfo())
    },[dispatch])
    
    const handleVideoClick = (videoId) => {
      dispatch(setSelectedVideo(videos.find((video) => video.id === videoId)));
      window.scrollTo(0, 0);
      navigate(`/video/${videoId}`);
    };


    

    const searchedVideos = videos.filter((video) => {
      if (inputValue) {
        return video.snippet.title.toLowerCase().includes(inputValue.toString().toLowerCase()) 
      } else {
        return videos;
      }
    });

  

  return (

      <>
      {isLoading && <VideoSkelaton/>}
      {error && <p>{error}</p>}
      {
      
              searchedVideos.length > 0 ? (searchedVideos.map((video)=>(
                <Col sm={12} md={6} lg={3} key={video.id} >
                      <div className={`videoCard custom-flex-direction ${video.id === selectedVideoId ? 'selected' : ''}`}  >
                        <Link to={`/video/${video.id}`}>
                        <div className="video-card-top" onClick={() => handleVideoClick(video.id)}>
                             <img src={video.snippet.thumbnails.medium.url} className='img-fluid' alt="" />
                             <span className='duration'>{formatDuration(video.contentDetails.duration)}</span>
                      </div>
                        </Link>
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
                </Col>))) : (videos.map((video)=>(
              <Col sm={12} md={6} lg={3} key={video.id} >
                    <div className={`videoCard custom-flex-direction ${video.id === selectedVideoId ? 'selected' : ''}`}  >
                      <Link to={`/video/${video.id}`}>
                      <div className="video-card-top" onClick={() => handleVideoClick(video.id)}>
                           <img src={video.snippet.thumbnails.medium.url} className='img-fluid' alt="" />
                           <span className='duration'>{formatDuration(video.contentDetails.duration)}</span>
                    </div>
                      </Link>
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
              </Col>)))
              
              }
      
      </>
  )
}

export default VideoCard
