import React from 'react'
import "./burger.scss"
import {RxHamburgerMenu} from "react-icons/rx"

const Burger = () => {
  return (
    <div>
      <span className='burger'>
      <RxHamburgerMenu/>
      </span>
    </div>
  )
}

export default Burger
