import React, { useEffect } from 'react'
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


const iconComponents = {
  AiFillHome,
  AiOutlinePlayCircle,
  MdOutlineSubscriptions,
  SiYoutubemusic,
  MdVideoLibrary,
  AiOutlineHistory,CiYoutube,BiTimeFive,AiOutlineDownload,MdKeyboardArrowDown,AiOutlineLike,AiOutlineFire,AiOutlineShopping,BiMoviePlay,BsMusicNote,MdLiveTv,SiYoutubegaming,BiNews,GiChampions,GoLightBulb,GiClothes,MdOutlinePodcasts,SiYoutubestudio,TbBrandYoutubeKids,TiSocialYoutube,CiSettings,CiFlag1,BiHelpCircle,MdOutlineFeedback,TfiCup
};

const AsideMenu = () => {
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
  
      console.log(response.data.items[0].snippet.thumbnails.medium.url);
    } catch (error) {
      console.error(error);
    }
  }

  
  
useEffect(() => {
  getChannelInfo();
},[])
  



  return (
    <div className='asideMenu'>
      <ul className='asideItem' >
      {list.slice(0,4).map((item) => (
          <li key={item.id}>{renderIcon(item.icon)}{item.content}</li>
          ))}
          </ul>

          <ul className='asideItem' >
      {list.slice(5,12).map((item) => (
          <li key={item.id}>{renderIcon(item.icon)}{item.content}</li>
          ))}
          </ul>


      <div>
        <div>Subscription</div>
        <ul>

        </ul>
      </div>

      <div>
        <div>Explore</div>
        <ul>
          {
            list.map((item)=>{
              if(item.categoryName==="explore"){
                return(
                  <li key={item.id}>{renderIcon(item.icon)}{item.content}</li>
                )
              }else{
                return null
              }
            })
          }
        </ul>
      </div>

      <div>
        <div>More From YouTube</div>
        <ul>
          {
            list.map((item)=>{
              if(item.categoryName==="morefromyoutube"){
                return(
                  <li key={item.id}>{renderIcon(item.icon)}{item.content}</li>
                )
              }else{
                return null
              }
            })
          }
        </ul>
      </div>

      <div>
        <ul>
          {
            list.map((item)=>{
              if(item.categoryName==="settings"){
                return(
                  <li key={item.id}>{renderIcon(item.icon)}{item.content}</li>
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
