import React from 'react';
import { Link } from "react-router-dom";
import Map from './Map';

function Landing() {

  return (
    <div>
      <Map />
      <Link to="/landing/list">List</Link>
    </div>
  )
}

export default Landing