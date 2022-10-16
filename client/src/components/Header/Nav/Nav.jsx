import React from 'react';
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className='nav'>
      <Link  to="/">Home</Link>
      <div className='space1'></div>
      <Link to="/landing">Geolocalización</Link>
      <div className='space2'></div>
      <Link to="/landing/list">Base de datos</Link>
    </div>
  )
}

export default Nav