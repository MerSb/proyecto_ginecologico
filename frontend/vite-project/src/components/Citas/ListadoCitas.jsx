import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ListadoCitas = () => {
  const [citas, setCitas] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    // Lógica para obtener las citas del backend
    const fetchCitas = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/citas');
        setCitas(response.data);
      } catch (error) {
        setError('Error al obtener las citas. Intente más tarde.');
        console.error('Error al obtener las citas:', error);
      }
    };

    fetchCitas();
  }, []);

  return (
    <div className="max-w-4xl mx-auto mt-10">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Listado de Citas</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {citas.length > 0 ? (
          citas.map((cita, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-indigo-600 mb-2">Paciente: {cita.paciente}</h3>
              <p className="text-gray-700"><strong>Fecha:</strong> {new Date(cita.fecha).toLocaleDateString()}</p>
              <p className="text-gray-700"><strong>Hora:</strong> {cita.hora}</p>
              <p className="text-gray-700"><strong>Descripción:</strong> {cita.descripcion}</p>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 mt-4">{error || 'No hay citas registradas.'}</p>
        )}
      </div>
    </div>
  );
};

export default ListadoCitas;

