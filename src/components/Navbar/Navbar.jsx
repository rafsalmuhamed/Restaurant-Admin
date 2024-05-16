import React from 'react'
import './Navbar.css'
import {assets} from '../../assets/assets'


const Navbar = () => {
  return (
    <div className='navbar'>
        <h2 className='logotext'>CHILLIES <span>RestoCafe</span></h2>
        <img className='profile' src={assets.profile_image} alt="" />

    </div>
  )
}

export default Navbar