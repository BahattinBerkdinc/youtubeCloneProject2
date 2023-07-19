import React from 'react'
import logo from "../../assets/images/logo/ytLogo.png"
import Burger from '../burgerMenu/Burger'
import {AiOutlineSearch} from "react-icons/ai";
import {BsFillMicFill} from "react-icons/bs";
import {BiVideoPlus} from 'react-icons/bi';
import {IoMdNotificationsOutline} from 'react-icons/io';
import {Form, InputGroup} from "react-bootstrap";
import "./navbar.scss"


const Navbar = () => {
  return (
    <nav>
       <div className='nav-left'>
       <Burger/>
        <img style={{width:"120px"}} className='image-fluid' src={logo} alt="" />
       </div>

    <div className="nav-mid">
    <InputGroup className='input '>
        <Form.Control 
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

export default Navbar
