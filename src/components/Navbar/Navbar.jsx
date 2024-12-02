import React from 'react'
import './Navbar.css'
import search_icon from './search-icon.png'
import phone_call_icon from './phne-call.png'

const NavbarContainer = () => {
  return (
    <div className="navbar-container">
        <div className='title'>JIZZAX VILOYATI IIB<br></br>
        JIZZAX QIDIRUVDAGI SHAXSLAR</div>
      
        <div className='upper-navbar'>
          <div className='pc-icon'><img src={phone_call_icon} alt="phone-call" /></div>
          <div className='contacts'>Navbatchilik qismi +998 72 226 03 02</div>
          <div className='pc-icon'><img src={phone_call_icon} alt="phone-call" /></div>
          <div className='contacts2'>Ishonch raqami 1002</div>
        </div>
        
        <img src={search_icon} alt="icon" className='icon'/>
        
        <div class="dropdown">
         <button class="dropdown-btn">Viloyatlar</button>
         <div class="dropdown-content">
          <a href="#">Andijon</a><br></br>
          <a href="#">Samarqand</a><br></br>
          <a href="#">Buxoro</a><br></br>
          <a href="#">Jizzax</a><br></br>
          <a href="#">Fargona</a><br></br>
          <a href="#">Xorazm</a><br></br>
          <a href="#">Namangan</a><br></br>
          <a href="#">Navoiy</a><br></br>
          <a href="#">Qashqadaryo</a><br></br>
          <a href="#">Qoraqalpogiston Res.</a><br></br>
          <a href="#">Surxondaryo</a><br></br>
          <a href="#">Sirdaryo</a><br></br>
          <a href="#">Toshkent</a><br></br>
         </div>
       </div>
    </div>
  )
}

export default NavbarContainer;