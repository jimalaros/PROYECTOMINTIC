import React from 'react';
import 'styles/Sidebar.css';

const Sidebar = () => {
  return (
  <div className="d-flex">
    <div id="sidebar" class="bg-primary">
      <div className="menu">
      <li classNameName="nav-item">
        <a href="./" className="d-block text-light p-3">Principal</a>
        <a href="./Usuarios" className="d-block text-light p-3">Usuarios</a>
        <a href="./Ventas" className="d-block text-light p-3">Ventas</a>
        </li>
        </div>
      </div>
  
      <div id="content">
          <section className="linear-gradient(to right, #ffe100, #edbf00">
          <div className="container">
            <div class="row">
            <div class="row align-items-start">
              <div class="col-lg-9">
              </div>
            </div>
          </div>
          </div>
          </section>          
      </div>
    </div>
  )
};

export default Sidebar;
