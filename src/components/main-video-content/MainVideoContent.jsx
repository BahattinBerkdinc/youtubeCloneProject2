import React from 'react'
import {Row} from "react-bootstrap"
import VideoCard from '../video-card/VideoCard'
import './mainvideocontent.scss'
const MainVideoContent = ({inputValue}) => {



  return (
    <Row className='main-video-content'>
      
      <VideoCard inputValue={inputValue}/>
    
    </Row>
  )
}

export default MainVideoContent
