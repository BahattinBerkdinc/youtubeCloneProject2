import React from 'react'
import logo from "../../assets/images/logo/ytLogo.png"
import Burger from '../burgerMenu/Burger'
import {AiOutlineSearch} from "react-icons/ai";
import {BsFillMicFill} from "react-icons/bs";
import {BiVideoPlus} from 'react-icons/bi';
import {IoMdNotificationsOutline} from 'react-icons/io';
import {Form, InputGroup} from "react-bootstrap";
import "./navbar.scss"


const Navbaryt = ({toggleAside,setToggleAside}) => {




  return (
    <nav>
       <div className='nav-left'>
      <span onClick={()=>setToggleAside(!toggleAside)}> <Burger /></span>
        <img  style={{width:"100px"}} className='image-fluid' src={logo} alt="" />
       </div>

    <div className="nav-mid">
    <InputGroup >
        <Form.Control 
        className='input'
          placeholder="Search"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
        <InputGroup.Text id="basic-addon1">
          <AiOutlineSearch />
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
        <span>
          <IoMdNotificationsOutline/>
        </span>
        <div className="user-photo">
          <img src={require('../../assets/images/fff/linkednProfilePic.png')} alt="" />
        </div>
      </div>
    </nav>
  )
}

export default Navbaryt
