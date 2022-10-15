import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Landing from './Landing';
import List from './Landing/List';
import Map from './Landing/Map';
import Neas from './Neas';
import NotFound from '../NotFound';

function Main() {
  return (
    <div className='main'>
      <Routes>
        <Route element={<Home />} path={"/"} />
        <Route element={<Landing />} path={"/landing"} />
        <Route element={<Map />} path={"/landing"} />
        <Route element={<List />} path={"/landing/list"} />
        <Route element={<Neas />} path={"/neas"} />
        <Route element={<NotFound />} path={"/*"} />
      </Routes>
    </div>
  )
}

export default Main