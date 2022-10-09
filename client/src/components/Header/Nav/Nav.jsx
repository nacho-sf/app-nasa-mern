import React from 'react';
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/landing">Landing</Link>
      <Link to="/neas">Neas</Link>
    </div>
  )
}

export default Nav