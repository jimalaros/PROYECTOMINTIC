import React from 'react';
import 'styles/Sidebar.css';
import * as FaIcons from 'react-icons/fa';

const SidebarAdmin = () => {
  return (
    <div class="main-menu">
      <h2><FaIcons.FaBars className="me-3"/>MENÚ</h2>
        <ul>
            <section class="home">
            <li className="nav-item"><a href="./Principal" className="list-group-item list-group-item-action bg-dark p-2 border 0"><FaIcons.FaUser className="me-3"/>Principal</a></li>
            <li className="nav-item"><a href="./Ordenes" className="list-group-item list-group-item-action bg-dark p-2 border 0"><FaIcons.FaChartLine className="me-3"/>Ordenes</a></li>
            <li className="nav-item"><a href="/Registro" className="list-group-item list-group-item-action bg-dark p-2 border 0"><FaIcons.FaWindowClose className="me-3"/>Cerrar Sesión</a></li>
            </section>
        </ul>
    </div>
  )
};

export default SidebarAdmin;