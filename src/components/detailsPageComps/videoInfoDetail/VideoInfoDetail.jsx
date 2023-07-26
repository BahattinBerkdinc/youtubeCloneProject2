import React, { useState } from 'react'
import './videoinfodetail.scss'
import { formatViews, getTimeAgo } from '../../../helpers/helpers'
const VideoInfoDetail = ({selectedVideo}) => {

    const [showMore, setShowMore] = useState(false)



  return (
    <div className={`video-detail-info ${showMore ? 'show' : ''}`}>
      <div className="video-detail-info-top">
      <span>{formatViews(selectedVideo.statistics.viewCount)} Views - {getTimeAgo(selectedVideo.snippet.publishedAt)} <span style={{color:"blue", fontWeight:"400", fontSize:".8rem", marginLeft:"1rem", cursor:"pointer"}}>  #{selectedVideo.snippet.tags?.slice(0,1)}</span></span> 
      
        <pre><p>{selectedVideo.snippet.description}</p></pre>
      
      </div>
      <div className="video-detail-info-bottom">
      <div className="left-side">
                <div className="channel-pic">
                <img src={selectedVideo.snippet.thumbnails.high.url} alt="" />
                </div>
                <div className="channel-info">
                  <span>{selectedVideo.snippet.channelTitle}</span>
                  <span>1.5M subscribe</span>
                </div>
            </div>
      </div>
      <span  onClick={()=>setShowMore(!showMore)} className='show-btn'>{showMore ? 'Show Less' : 'Show more'}</span>
    </div>
  )
}

export default VideoInfoDetail
