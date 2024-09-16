import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Historiales = () => {
  const [historiales, setHistoriales] = useState([]);

  useEffect(() => {
    // Llama al backend para obtener los historiales médicos
    const fetchHistoriales = async () => {
      try {
        const response = await axios.get('/api/historiales');
        setHistoriales(response.data);
      } catch (error) {
        console.error('Error al obtener los historiales médicos', error);
      }
    };

    fetchHistoriales();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-semibold text-gray-800">Historiales Médicos</h2>
      <div className="mt-6">
        {historiales.length > 0 ? (
          <ul className="space-y-4">
            {historiales.map((historial) => (
              <li key={historial.id} className="p-4 bg-white shadow rounded-lg">
                <h3 className="text-lg font-semibold">Paciente: {historial.pacienteNombre}</h3>
                <p>Descripción: {historial.descripcion}</p>
                <p>Fecha: {new Date(historial.fecha).toLocaleDateString()}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No hay historiales médicos registrados.</p>
        )}
      </div>
    </div>
  );
};

export default Historiales;
