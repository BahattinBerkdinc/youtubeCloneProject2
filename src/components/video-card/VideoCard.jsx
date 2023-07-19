import React from 'react'

import './videocard.scss'

const VideoCard = () => {

    const videoName = "bu benim serseri serbest stilim serbest stilim"

  return (
    <div className='videoCard'>
        <div className="video-card-top">
        <img src={require("../../assets/images/fff/rain.jpg")} className='img-fluid' alt="" />
        </div>
      
        <div className="video-card-bottom">
            <div className="channel-pic">
                <img src={require("../../assets/images/fff/rain.jpg")} className='img-fluid' alt="" />
            </div>
            <div className="video-info">
               <h4 className={`video-title ${videoName.length > 30 ? 'long' : ''}`}>{videoName}</h4>
               <span className="channel-name">channel name</span>
               <div className='video-sup-info'>
                    <span>1.2M views</span>
                    <div className="dot"></div>
                    <span>5 years ago</span>
               </div>
            </div>
        </div>
      
    </div>
  )
}

export default VideoCard
