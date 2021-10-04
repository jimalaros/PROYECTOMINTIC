import React from 'react';
import fondo from 'media/logo.png';

const Navbar = () => {
  return (
  <div class="w-100">    
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container">
      <div class="logo">
        <img className='' src={fondo} alt="fondo" width='20%' />
      </div>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a class="nav-link" href="/">Home</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  </div>
  )
};

export default Navbar;