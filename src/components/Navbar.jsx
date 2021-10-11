import React from 'react';
import fondo from 'media/logo.png';

const Navbar = () => {
  return (
  <div class="w-100">    
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container">
      <div class="logo2">
        <img src={fondo} alt="fondo" width='30%' />
      </div>
    </div>
  </nav>
  </div>
  )
};

export default Navbar;

