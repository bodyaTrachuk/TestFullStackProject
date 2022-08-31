import React from 'react'
import Login from './Login/Login'
import Lang from './Language/Lang'
import Basket from './Basket/Basket'
import './UserBlock.css'

function UserBlock() {
  return (
    <div className='userBlock-container'>
      <Basket/>
      <Login/>
      <Lang/>
    </div>
  )
}

export default UserBlock