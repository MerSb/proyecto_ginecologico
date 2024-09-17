import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 text-white p-4 shadow-md">
      <ul className="flex space-x-4">
        <li><Link to="/" className="hover:underline">Inicio</Link></li>
        <li><Link to="/dashboard" className="hover:underline">Dashboard</Link></li>
        <li><Link to="/pacientes" className="hover:underline">Pacientes</Link></li>
        <li><Link to="/citas" className="hover:underline">Citas</Link></li>
        <li><Link to="/historiales" className="hover:underline">Historiales</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
