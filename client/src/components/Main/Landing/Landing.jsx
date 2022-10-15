import React from 'react';
import { Link } from "react-router-dom";
import Map from './Map';

function Landing() {

  return (
    <div className='landing'>
      <Map />
      <Link to="/landing/list"></Link>
    </div>
  )
}

export default Landing