import React, { useState } from 'react'
import './videocomments.scss'
import { AiOutlineDislike, AiOutlineLike } from 'react-icons/ai'
import {SlArrowDown,SlArrowUp} from 'react-icons/sl'
import avatar from "../../../assets/images/avatar/avatar.jpeg"
const VideoComments = ({selectedVideo}) => {

  const [showReply,setShowReply] = useState(false)
  return (
    <div className='video-comments'>
      <span>{selectedVideo.statistics.commentCount} Comments</span>
      <div className="add-comment">
         <div className="channel-pic">
          <img src={avatar} alt="" />
         </div>
         <input type="text" placeholder='Add a comment...' />
      </div>
      <div className="all-comments">
        <div className="comment">
           <div className="channel-pic">
          <img src={avatar} alt="" />
          </div>
           <div className="comment-right">
        <span><strong>username@123434</strong> - 1 day ago</span>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste beatae obcaecati at doloremque nostrum nemo consectetur quod dolorum est. Alias.</p>
        <div className="comment-like">
          <span><AiOutlineLike/>  <span>456</span></span>
          <span><AiOutlineDislike/> <span>123</span></span>
        </div>
        <span onClick={()=>setShowReply(!showReply)} className="reply-btn">{showReply ? <SlArrowDown/> : <SlArrowUp/>}<span>24 replies</span> </span>
           </div>
        </div>
        <div className={`comment reply ${showReply ? 'show' : ''}` }>
           <div className="users-reply">
           <div className="channel-pic reply-pic">
          <img src={avatar} alt="" />
          </div>
           <div className="comment-right reply-right">
        <span><strong>username@123434</strong> - 1 day ago</span>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste beatae obcaecati at doloremque nostrum nemo consectetur quod dolorum est. Alias.</p>
        <div className="comment-like reply-like">
          <span><AiOutlineLike/>  <span>456</span></span>
          <span><AiOutlineDislike/> <span>123</span></span>
        </div>
           </div>
           </div>
           <div className="users-reply">
           <div className="channel-pic reply-pic">
          <img src={avatar} alt="" />
          </div>
           <div className="comment-right reply-right">
        <span><strong>username@123434</strong> - 1 day ago</span>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste beatae obcaecati at doloremque nostrum nemo consectetur quod dolorum est. Alias.</p>
        <div className="comment-like reply-like">
          <span><AiOutlineLike/>  <span>456</span></span>
          <span><AiOutlineDislike/> <span>123</span></span>
        </div>
           </div>
           </div>
           <div className="users-reply">
           <div className="channel-pic reply-pic">
          <img src={avatar} alt="" />
          </div>
           <div className="comment-right reply-right">
        <span><strong>username@123434</strong> - 1 day ago</span>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste beatae obcaecati at doloremque nostrum nemo consectetur quod dolorum est. Alias.</p>
        <div className="comment-like reply-like">
          <span><AiOutlineLike/>  <span>456</span></span>
          <span><AiOutlineDislike/> <span>123</span></span>
        </div>
           </div>
           </div>
           <div className="users-reply">
           <div className="channel-pic reply-pic">
          <img src={avatar} alt="" />
          </div>
           <div className="comment-right reply-right">
        <span><strong>username@123434</strong> - 1 day ago</span>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste beatae obcaecati at doloremque nostrum nemo consectetur quod dolorum est. Alias.</p>
        <div className="comment-like reply-like">
          <span><AiOutlineLike/>  <span>456</span></span>
          <span><AiOutlineDislike/> <span>123</span></span>
        </div>
           </div>
           </div>
        </div>
      </div>
    </div>
  )
}

export default VideoComments
