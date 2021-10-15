import React from 'react';
import fondo from 'media/logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
  <div class="w-100">    
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container">
      <div class="logo2">
      <Link to='/Index'><img src={fondo} alt="fondo" width='30%' /></Link> 
      </div>
    </div>
  </nav>
  </div>
  )
};

export default Navbar;

