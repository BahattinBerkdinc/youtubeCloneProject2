import React, { useEffect } from 'react'
import VideoPlayer from '../../components/detailsPageComps/videoPlayer/VideoPlayer'
import './videodetail.scss'
import AsideMenu from '../../components/asideMenu/AsideMenu'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchVideoInfo } from '../../redux/slices/ytvideoSlice'
const VideoDetail = () => {

  const toggleAside = useSelector(state => state.burgerToggle.toggleAside)

  const { videoId } = useParams();
  const selectedVideo = useSelector((state) => state.videosInfo.videoInfo.find((video) => video.id === videoId));
  const dispatch =useDispatch();


  useEffect(() => {
    dispatch(fetchVideoInfo());
    window.scrollTo(0, 0);

  }, [dispatch]);
 

  return (
    <div className='video-detail-page'>
      <VideoPlayer selectedVideo={selectedVideo} />  
      <div className={`detail-aside ${toggleAside ? 'show-aside' : ''}`}>
        <AsideMenu />
      </div>
    </div>
  )
}

export default VideoDetail
