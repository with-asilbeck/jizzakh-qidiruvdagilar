import React, { useState } from 'react';
import './Navbar.css';
import search_icon from './search-icon.png'
import phone_call_icon from './phne-call.png'

const NavbarContainer = ({ onDistrictSelect }) => {
  const districts = [
    'Arnasoy t.',
    'G\'allaorol t.',
    'Forish t.',
    'Yangiobod t.',
    'Paxtakor t.',
    'Mirzacho\'l t.',
    'Zomin t.',
    'Zafarobod t.',
    'Zarbdor t.',
    'Sharof Rashidov t.',
    'Do\'stlik t.',
    'Baxmal t.',
    'Jizzax t.',
    'Jizzax sh.',
    'Xitoy----',
    'Turkiya',
    'Sirdaryo v.',
    'Jizzax v.',
    'Guliston sh.',
    'Oqdaryo t.',
    'Toshkent t.',
    'Toshkent sh.',
    'Samarqand v.',
  ];

  return (
    <div className="navbar-container">
      <div className="title">JIZZAX VILOYATI IIB<br />JIZZAX QIDIRUVDAGI SHAXSLAR</div>
      {/* <a href="/" className="back">Orqaga</a> */}
    <div className='upper-navbar'>
           <div className='pc-icon'><img src={phone_call_icon} alt="phone-call" /></div>
           <div className='contacts'>Navbatchilik qismi +998 72 226 03 02</div>
           <div className='pc-icon'><img src={phone_call_icon} alt="phone-call" /></div>
           <div className='contacts2'>Ishonch raqami 1002</div>
    </div>
      <div className="dropdown">
        <button className="dropdown-btn">Hududlar</button>
        <div className="dropdown-content">
          <button onClick={() => onDistrictSelect('')}>Hammasi</button>
          {districts.map((district) => (
            <button className="btn-town" key={district} onClick={() => onDistrictSelect(district)}>
              {district}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavbarContainer;

// import React, {useState} from 'react'
// import './Navbar.css'
// import search_icon from './search-icon.png'
// import phone_call_icon from './phne-call.png'

// const NavbarContainer = () => {
//   return (
//     <div className="navbar-container">
//         <div className='title'>JIZZAX VILOYATI IIB<br></br>
//         JIZZAX QIDIRUVDAGI SHAXSLAR</div>

//         <a href="/" className='back'>Orqaga</a>
      
//         <div className='upper-navbar'>
//           <div className='pc-icon'><img src={phone_call_icon} alt="phone-call" /></div>
//           <div className='contacts'>Navbatchilik qismi +998 72 226 03 02</div>
//           <div className='pc-icon'><img src={phone_call_icon} alt="phone-call" /></div>
//           <div className='contacts2'>Ishonch raqami 1002</div>
//         </div>
        
//         <img src={search_icon} alt="icon" className='icon'/>

//         <div class="dropdown" onChange={console.log("working")}>
//          <button class="dropdown-btn">Tumanlar</button>
//          <div class="dropdown-content">
//           <a href="/arnasoy">Arnasoy</a><br></br>
//           <a href="#">G'allaorol</a><br></br>
//           <a href="#">Forish</a><br></br>
//           <a href="#">Yangiobod</a><br></br>
//           <a href="#">Paxtakor</a><br></br>
//           <a href="#">Mirzacho'l</a><br></br>
//           <a href="#">Zomin</a><br></br>
//           <a href="#">Zafarobod</a><br></br>
//           <a href="#">Zarbdor</a><br></br>
//           <a href="#">Sharof Rashidov</a><br></br>
//           <a href="#">Do'stlik</a><br></br>
//           <a href="#">Baxmal</a><br></br>
//          </div>
//        </div>

//     </div>
//   )
// }

// export default NavbarContainer;