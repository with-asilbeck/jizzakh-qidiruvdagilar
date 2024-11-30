import React from 'react'
import './Navbar.css'
import search_icon from './search-icon.png'

const NavbarContainer = () => {
  return (
    <div className="navbar-container">
        <div className='title'>JIZZAX QIDIRUVDAGI SHAXSLAR</div>
        <img src={search_icon} alt="icon" className='icon'/>
    </div>
  )
}

export default NavbarContainer;