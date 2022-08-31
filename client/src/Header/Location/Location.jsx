import React from 'react'
import {ReactComponent as HeaderLocation} from '../../img/header_location.svg'
import "./Location.css"

function Location() {
  return (
    <div className='location-container'>
        <HeaderLocation/>
        <span>Львів</span>
    </div>
  )
}

export default Location