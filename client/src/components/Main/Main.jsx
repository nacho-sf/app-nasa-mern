import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Landing from './Landing';
import List from './Landing/List';
import NotFound from '../NotFound';

function Main() {
  return (
    <div className='main'>
      <Routes>
        <Route element={<Home />} path={"/"} />
        <Route element={<Landing />} path={"/landing"} />
        <Route element={<List />} path={"/landing/list"} />
        <Route element={<NotFound />} path={"/*"} />
      </Routes>
    </div>
  )
}

export default Main