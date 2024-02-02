import React from 'react';
import NavBarPagesLinkComponent from '../components/NavBarPagesLinkComponent';
import NavBarUserInformationComponent from '../components/NavBarUserInformationComponent';
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
      NAVBAR
      <NavBarUserInformationComponent/>
      <NavBarPagesLinkComponent/>
    </div>
  );
}

export default Navbar;
