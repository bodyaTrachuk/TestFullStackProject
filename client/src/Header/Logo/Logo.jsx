import React from 'react'
import { NavLink } from "react-router-dom";
import './Logo.css'
import {ReactComponent as LogoYellow} from '../../img/logo-dark.svg'
import {ReactComponent as LogoBlue} from '../../img/logo2-black.svg'

function Logo() {
  return (
    <div className='logo-container'>
        <NavLink to="/pizza" className='logo-yellow'>
            <LogoYellow alt="logo1" className="size-yellow "/>
            </NavLink>
        <NavLink to="#2" className='logo-blue'>
            <LogoBlue alt="logo2" className="size-blue"/>
            </NavLink>
    </div>
  )
}

export default Logo