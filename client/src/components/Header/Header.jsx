import React from 'react';
import Nav from './Nav';

function Header() {
  return (
    <div className='header'>
      <div className='container-title'>
        <div className='logo-header'></div>
        <div className='title-header'>Landings Search</div>
      </div>
      <Nav />
    </div>
  )
}

export default Header