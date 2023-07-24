import React from 'react'
import VideoPlayer from '../../components/detailsPageComps/videoPlayer/VideoPlayer'
import './videodetail.scss'
import AsideMenu from '../../components/asideMenu/AsideMenu'
const VideoDetail = ({toggleAside}) => {

console.log(toggleAside);
 
  return (
    <div className='video-detail-page'>
      <VideoPlayer />
      <div className="detail-aside">
        <AsideMenu/>
      </div>
    </div>
  )
}

export default VideoDetail
