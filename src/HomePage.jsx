import React from 'react'
import NavbarContainer from './components/Navbar/Navbar';
import FooterContainer from './components/Footer/Footer';
import SectionContainer from './components/Section/Section';

const HomePage = () => {
  return (
    <div className='home-page'>
        <NavbarContainer />
        <SectionContainer />
    </div>
  )
}

export default HomePage;    