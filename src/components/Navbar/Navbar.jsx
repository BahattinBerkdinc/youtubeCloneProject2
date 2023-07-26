import React, {useEffect, useState } from 'react'
import logo from "../../assets/images/logo/ytLogo.png"
import Burger from '../burgerMenu/Burger'
import {AiOutlineArrowLeft, AiOutlineSearch} from "react-icons/ai";
import {BsFillMicFill} from "react-icons/bs";
import {BiVideoPlus} from 'react-icons/bi';
import {IoMdNotificationsOutline} from 'react-icons/io';
import {Form, InputGroup} from "react-bootstrap";
import "./navbar.scss"
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setToggleAside } from '../../redux/slices/burgerToggleSlice';
import { setInputvalue } from '../../redux/slices/inputSlice';


const Navbaryt = () => {
  const [searchBtn,setSearchBtn] = useState(false)

  const toggleAside = useSelector(state => state.burgerToggle.toggleAside)
  const inputValue = useSelector(state => state.input.input)
  const dispatch = useDispatch();

  const handleChangeInput = (e) => {
    dispatch(setInputvalue(e.target.value))
  }

  const handleBurgerClick = () => {
    dispatch(setToggleAside(!toggleAside))
  }

  const showInput = () => {
      if (window.innerWidth < 883) {
        setSearchBtn(true); 
      }else{
        setSearchBtn(false);
      }
  }

 useEffect(() => {
  window.addEventListener('resize', showInput);
  
  return ()=>{
    window.removeEventListener('resize', showInput);
  }
 },[])

  
  

  return (
    <nav className={`${searchBtn ? "nav-show" : ""}`}>
       <div className='nav-left'>
      <span onClick={handleBurgerClick}> <Burger /></span>
       <Link to="/"> <img  style={{width:"100px"}} className='image-fluid' src={logo} alt="" /></Link>
       </div>

    <div className="nav-mid">
      <AiOutlineArrowLeft 
      className={`align-self-center ${searchBtn ? "show" : "d-none"}`} 
      style={{fontSize:"2rem",cursor:"pointer"}}
      onClick={()=>setSearchBtn(false)}
      />
    <InputGroup >
        <Form.Control 
        className='input'
          placeholder="Search"
          aria-label="Username"
          aria-describedby="basic-addon1"
          value={inputValue}
          onChange={handleChangeInput}
          
        />
        <InputGroup.Text id="basic-addon1" onClick={showInput}>
          <AiOutlineSearch  />
        </InputGroup.Text>
       
      </InputGroup>
      <div className='mic'>
        <BsFillMicFill className='mic-icon'/>
        </div>
    </div>

      <div className="login nav-right">
        <span>
        <BiVideoPlus/>
        </span>
        <span className='notifications'>
          <IoMdNotificationsOutline/>
          <span className='notification'>9+</span>
        </span>
        <div className="user-photo">
          <img src={require('../../assets/images/fff/linkednProfilePic.png')} alt="" />
        </div>
      </div>
    </nav>
  )
}

export default Navbaryt
