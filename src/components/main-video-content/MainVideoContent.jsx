import React from 'react'
import {Col, Row} from "react-bootstrap"
import VideoCard from '../video-card/VideoCard'
import './mainvideocontent.scss'
const MainVideoContent = () => {


  return (
    <Row className='main-video-content'>
      
      <VideoCard/>
    
    </Row>
  )
}

export default MainVideoContent
