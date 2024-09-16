import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Citas = () => {
  const [citas, setCitas] = useState([]);

  useEffect(() => {
    // Llama al backend para obtener las citas
    const fetchCitas = async () => {
      try {
        const response = await axios.get('/api/citas');
        setCitas(response.data);
      } catch (error) {
        console.error('Error al obtener las citas', error);
      }
    };

    fetchCitas();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-semibold text-gray-800">Listado de Citas</h2>
      <div className="mt-6">
        {citas.length > 0 ? (
          <ul className="space-y-4">
            {citas.map((cita) => (
              <li key={cita.id} className="p-4 bg-white shadow rounded-lg">
                <h3 className="text-lg font-semibold">Paciente: {cita.pacienteNombre}</h3>
                <p>Fecha: {new Date(cita.fecha).toLocaleDateString()}</p>
                <p>Hora: {new Date(cita.fecha).toLocaleTimeString()}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No hay citas registradas.</p>
        )}
      </div>
    </div>
  );
};

export default Citas;
