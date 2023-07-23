import React from 'react'
import './videoinfo.scss'
import {AiOutlineLike,AiOutlineDislike} from 'react-icons/ai'
import {PiShareFatThin} from "react-icons/pi"
import {LiaDownloadSolid} from 'react-icons/lia'
import { BsThreeDots } from 'react-icons/bs'
const VideoInfo = () => {
  return (
    <div className='videoInfo'>
        <span>Video Name - video name</span>
        <div className="videoInfo-top">
            <div className="left-side">
                <div className="channel-pic"></div>
                <div className="channel-info">
                  <span>Deus ec Machina</span>
                  <span>1.5M subscribe</span>
                </div>
                <button className="subscribe-btn btn btn-dark">Subscribe</button>
            </div>
            <div className="right-side">
                
                    <div><AiOutlineLike/><span>7.7K</span>|<AiOutlineDislike/></div>
                    <div><PiShareFatThin/> Share</div>
                    <div><LiaDownloadSolid/> Download</div>
                    <div><BsThreeDots/></div>
                
            </div>
        </div>
    </div>
  )
}

export default VideoInfo
