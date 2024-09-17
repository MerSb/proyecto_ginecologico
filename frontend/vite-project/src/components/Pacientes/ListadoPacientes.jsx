import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ListadoPacientes = () => {
  const [pacientes, setPacientes] = useState([]);

  useEffect(() => {
    // Lógica para obtener la lista de pacientes del backend
    const fetchPacientes = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/pacientes');
        setPacientes(response.data);
      } catch (error) {
        console.error('Error al obtener los pacientes:', error);
      }
    };
    fetchPacientes();
  }, []);

  return (
    <div className="max-w-4xl mx-auto mt-10">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Listado de Pacientes</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {pacientes.map((paciente, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-indigo-600 mb-2">{paciente.nombre} {paciente.apellido}</h3>
            <p className="text-gray-700"><strong>Edad:</strong> {paciente.edad} años</p>
            <p className="text-gray-700"><strong>Dirección:</strong> {paciente.direccion}</p>
          </div>
        ))}
      </div>
      {pacientes.length === 0 && (
        <p className="text-center text-gray-500 mt-4">No hay pacientes registrados.</p>
      )}
    </div>
  );
};

export default ListadoPacientes;


