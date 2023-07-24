import React from 'react'
import './videoinfo.scss'
import {AiOutlineLike,AiOutlineDislike} from 'react-icons/ai'
import {PiShareFatThin} from "react-icons/pi"
import {LiaDownloadSolid} from 'react-icons/lia'
import { BsThreeDots } from 'react-icons/bs'
import { formatViews } from '../../../helpers/helpers'
const VideoInfo = ({selectedVideo}) => {
  return (
    <div className='videoInfo'>
        <span>{selectedVideo.snippet.title}</span>
        <div className="videoInfo-top">
            <div className="left-side">
                <div className="channel-pic">
                  <img src={selectedVideo.snippet.thumbnails.medium.url} alt="" />
                </div>
                <div className="channel-info">
                  <span>{selectedVideo.snippet.channelTitle}</span>
                  <span>1.5M subscribe</span>
                </div>
                <button className="subscribe-btn btn btn-dark">Subscribe</button>
            </div>
            <div className="right-side">
                
                    <div><AiOutlineLike/><span>{formatViews(selectedVideo.statistics.viewCount)}</span>|<AiOutlineDislike/></div>
                    <div><PiShareFatThin/> Share</div>
                    <div><LiaDownloadSolid/> Download</div>
                    <div><BsThreeDots/></div>
                
            </div>
        </div>
    </div>
  )
}

export default VideoInfo
