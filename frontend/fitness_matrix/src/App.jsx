import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/home';
import Login from './components/login';
import Navbar from './components/navbar';

function App() {
  
  return(
    <div>
      <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </div>
  ) 
}
export default App
