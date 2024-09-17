import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ListadoHistoriales = () => {
  const [historiales, setHistoriales] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const obtenerHistoriales = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/historiales');
        setHistoriales(response.data);
      } catch (error) {
        setError(error.message);
      }
    };

    obtenerHistoriales();
  }, []);

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-3xl font-bold text-center text-pink-600 mb-6">Listado de Historiales Médicos</h2>

      {error && (
        <p className="text-red-500 text-center mb-4">
          Error al cargar los historiales: {error}
        </p>
      )}

      {historiales.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {historiales.map((historial) => (
            <div key={historial.id} className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
              <p className="text-lg font-semibold text-gray-800 mb-2"><strong>Paciente:</strong> {historial.paciente}</p>
              <p className="text-gray-600 mb-2"><strong>Diagnóstico:</strong> {historial.diagnostico}</p>
              <p className="text-gray-600 mb-2"><strong>Tratamiento:</strong> {historial.tratamiento}</p>
              <p className="text-gray-600"><strong>Fecha:</strong> {historial.fecha}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-700 text-center">No hay historiales disponibles</p>
      )}
    </div>
  );
};

export default ListadoHistoriales;

