import React from 'react'
import AsideMenu from "../../components/asideMenu/AsideMenu"
import MainVideoContent from '../../components/main-video-content/MainVideoContent'
import "./homepage.scss"
const Homepage = ({toggleAside}) => {
  return (
    <div className={` ${toggleAside ? "activeToggle" : "homepage"}`}>
        <AsideMenu toggleAside={toggleAside}/>
        <MainVideoContent toggleAside={toggleAside}/>
    </div>
  )
}

export default Homepage
