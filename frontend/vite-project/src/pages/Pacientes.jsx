import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Pacientes = () => {
  const [pacientes, setPacientes] = useState([]);

  useEffect(() => {
    // Llama al backend para obtener los pacientes
    const fetchPacientes = async () => {
      try {
        const response = await axios.get('/api/pacientes');
        setPacientes(response.data);
      } catch (error) {
        console.error('Error al obtener los pacientes', error);
      }
    };

    fetchPacientes();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-semibold text-gray-800">Listado de Pacientes</h2>
      <div className="mt-6">
        {pacientes.length > 0 ? (
          <ul className="space-y-4">
            {pacientes.map((paciente) => (
              <li key={paciente.id} className="p-4 bg-white shadow rounded-lg">
                <h3 className="text-lg font-semibold">{paciente.nombre}</h3>
                <p>Edad: {paciente.edad}</p>
                <p>Teléfono: {paciente.telefono}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No hay pacientes registrados.</p>
        )}
      </div>
    </div>
  );
};

export default Pacientes;
