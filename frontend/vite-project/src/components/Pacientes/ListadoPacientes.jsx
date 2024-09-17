import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ListadoPacientes = () => {
  const [pacientes, setPacientes] = useState([]);
  const [detallesVisibles, setDetallesVisibles] = useState(null); // Estado para controlar qué tarjeta está expandida

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

  // Función para alternar los detalles de un paciente específico
  const toggleDetalles = (index) => {
    setDetallesVisibles(detallesVisibles === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto mt-10">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Listado de Pacientes</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {pacientes.map((paciente, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-indigo-600 mb-2">
              {paciente.nombre} {paciente.apellido}
            </h3>
            <p className="text-gray-700"><strong>Edad:</strong> {paciente.edad} años</p>
            <p className="text-gray-700"><strong>Dirección:</strong> {paciente.direccion}</p>

            {/* Botón para alternar detalles */}
            <button
              onClick={() => toggleDetalles(index)}
              className="mt-4 text-indigo-500 hover:underline"
            >
              {detallesVisibles === index ? 'Ocultar detalles' : 'Ver detalles'}
            </button>

            {/* Mostrar detalles adicionales si los detalles están visibles */}
            {detallesVisibles === index && (
              <div className="mt-4 bg-gray-100 p-4 rounded-lg">
                <p className="text-gray-700"><strong>Email:</strong> {paciente.email}</p>
                <p className="text-gray-700"><strong>DNI:</strong> {paciente.dni}</p>
                <p className="text-gray-700"><strong>Obra Social:</strong> {paciente.obra_social}</p>
                <p className="text-gray-700"><strong>Género:</strong> {paciente.genero}</p>
                {paciente.genero === 'Femenino' && (
                  <>
                    <p className="text-gray-700"><strong>Fecha de Última Menstruación:</strong> {paciente.fecha_ultima_menstruacion}</p>
                    <p className="text-gray-700"><strong>Está gestando:</strong> {paciente.gestando ? 'Sí' : 'No'}</p>
                  </>
                )}
                <p className="text-gray-700"><strong>Teléfono:</strong> {paciente.telefono}</p>
                <p className="text-gray-700"><strong>Fecha de Nacimiento:</strong> {paciente.fecha_nacimiento}</p>
                <p className="text-gray-700"><strong>Historial Médico:</strong> {paciente.historial_medico || 'N/A'}</p>
              </div>
            )}
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



