import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './container/Home';
import Login from './components/Login';

export const App = () => {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="/*" element={<Home />} />
    </Routes>
  );
};

export default App;
