import React from 'react'
import AsideMenu from "../../components/asideMenu/AsideMenu"
import MainVideoContent from '../../components/main-video-content/MainVideoContent'
import "./homepage.scss"
const Homepage = () => {
  return (
    <div className='homepage'>
        <AsideMenu/>
        <MainVideoContent/>
    </div>
  )
}

export default Homepage
