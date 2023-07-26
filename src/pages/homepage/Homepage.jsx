import React from 'react'
import AsideMenu from "../../components/asideMenu/AsideMenu"
import MainVideoContent from '../../components/main-video-content/MainVideoContent'
import "./homepage.scss"
import { useSelector } from 'react-redux'
const Homepage = () => {

  const toggleAside = useSelector(state=>state.burgerToggle.toggleAside)

  const inputValue = useSelector(state=>state.input)

  return (
    <div className={` ${toggleAside ? "activeToggle" : "homepage"}`}>
        <AsideMenu/>
        <MainVideoContent inputValue={inputValue} />
    </div>
  )
}

export default Homepage
