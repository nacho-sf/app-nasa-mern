import React from 'react';
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className='nav'>
      <Link  to="/">Home</Link>
      <div className='space1'></div>
      <Link to="/landing">Landings</Link>
      <div className='space2'></div>
      <Link to="/landing/list">List</Link>
    </div>
  )
}

export default Nav