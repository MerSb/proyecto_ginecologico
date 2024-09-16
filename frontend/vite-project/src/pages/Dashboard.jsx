import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-6">Panel de Administración</h1>
      <div className="grid grid-cols-3 gap-6">
        <Link to="/pacientes" className="p-6 bg-blue-600 text-white rounded-lg shadow">
          Gestionar Pacientes
        </Link>
        <Link to="/citas" className="p-6 bg-green-600 text-white rounded-lg shadow">
          Gestionar Citas
        </Link>
        <Link to="/historiales" className="p-6 bg-purple-600 text-white rounded-lg shadow">
          Gestionar Historiales Médicos
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
