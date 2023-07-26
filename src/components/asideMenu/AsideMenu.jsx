import React, { useEffect, useState } from 'react'
import './asidemenu.scss'
import { AiFillHome, AiOutlinePlayCircle,AiOutlineHistory,AiOutlineDownload,AiOutlineLike,AiOutlineFire,AiOutlineShopping } from 'react-icons/ai';
import { MdOutlineSubscriptions,MdVideoLibrary,MdLiveTv,MdOutlinePodcasts,MdOutlineFeedback } from 'react-icons/md';
import {TfiCup} from 'react-icons/tfi';
import {GiChampions,GiClothes} from 'react-icons/gi';
import {BsMusicNote} from 'react-icons/bs';
import {GoLightBulb} from 'react-icons/go';
import {BiTimeFive,BiMoviePlay,BiNews,BiHelpCircle} from 'react-icons/bi';
import {TiSocialYoutube} from 'react-icons/ti';
import { SiYoutubemusic,SiYoutubegaming,SiYoutubestudio } from 'react-icons/si';
import {CiYoutube,CiSettings,CiFlag1} from 'react-icons/ci';
import {TbBrandYoutubeKids} from 'react-icons/tb';
import {MdKeyboardArrowDown} from 'react-icons/md';
import axios from 'axios';
import list from './asideItems.json'
import {useSelector } from 'react-redux';


const iconComponents = {
  AiFillHome,
  AiOutlinePlayCircle,
  MdOutlineSubscriptions,
  SiYoutubemusic,
  MdVideoLibrary,
  AiOutlineHistory,CiYoutube,BiTimeFive,AiOutlineDownload,MdKeyboardArrowDown,AiOutlineLike,AiOutlineFire,AiOutlineShopping,BiMoviePlay,BsMusicNote,MdLiveTv,SiYoutubegaming,BiNews,GiChampions,GoLightBulb,GiClothes,MdOutlinePodcasts,SiYoutubestudio,TbBrandYoutubeKids,TiSocialYoutube,CiSettings,CiFlag1,BiHelpCircle,MdOutlineFeedback,TfiCup
};

const AsideMenu = () => {
  
  const toggleAside = useSelector(state=>state.burgerToggle.toggleAside);
  const [data, setData] = useState([]);




const renderIcon = (iconName) => {
    const IconComponent = iconComponents[iconName];
    if (IconComponent) {
      return <IconComponent />;
    }
    return null;
  };




  async function getChannelInfo() {
    try {
      const response = await axios.get('https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&key=AIzaSyCAe0KPONaQqZb84N5IY7uo7upv-TJxiqU');
  
      // console.log(response.data.items[0].snippet);
      setData(response.data.items);
    } catch (error) {
    }
  }

  
  useEffect(() => {
    getChannelInfo();
  },[])
  

  return (
    <div className={` ${toggleAside ? "toggleActive" : "asideMenu"}`} >
      <ul className='asideItem' >
      {list.slice(0,4).map((item) => (
          <li key={item.id}><span className="icons">{renderIcon(item.icon)}</span><span>{item.content}</span></li>
          ))}
          </ul>

          <ul className='asideItem second-section' >
      {list.slice(4,11).map((item) => (
          <li key={item.id}><span className="icons">{renderIcon(item.icon)}</span><span>{item.content}</span></li>
          ))}
          </ul>


      <div className='subscription'>
        <ul>
        <div className='aside-title '>Subscription</div>
          {
              data.map((item)=>(
                    <li key={item.id} className='aside-channel'>
                       <div className="profile-photo">
                        <img src={item.snippet.thumbnails.medium.url} alt="" />
                       </div>
                       <div className='channel-name'>{item.snippet.channelTitle}</div>
                  </li>
              ))
          }


            
        </ul>
      </div>

      <div className='explore'>
        <ul>
        <div className='aside-title '>Explore</div>
          {
            list.map((item)=>{
              if(item.categoryName==="explore"){
                return(
                  <li key={item.id}><span className="icons">{renderIcon(item.icon)}</span><span>{item.content}</span></li>
                )
              }else{
                return null
              }
            })
          }
        </ul>
      </div>

      <div className='moreFromYoutube'>
        <ul>
        <div className='aside-title '>More From YouTube</div>
          {
            list.map((item)=>{
              if(item.categoryName==="morefromyoutube"){
                return(
                  <li className='morefromyoutube' key={item.id}><span className="icons">{renderIcon(item.icon)}</span><span>{item.content}</span></li>
                )
              }else{
                return null
              }
            })
          }
        </ul>
      </div>

      <div className='settings'>
        <ul>
          {
            list.map((item)=>{
              if(item.categoryName==="settings"){
                return(
                  <li key={item.id}>
                    <span className="icons">{renderIcon(item.icon)}</span>
                    <span>{item.content}</span>
                    </li>
                )
              }else{
                return null
              }
            })
          }
        </ul>
      </div>
      
    </div>
  );
};

export default AsideMenu
