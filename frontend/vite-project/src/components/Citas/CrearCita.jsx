import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CrearCita = () => {
  const [pacienteId, setPacienteId] = useState('');
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();  // Inicializa useNavigate

  // Función para manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();

    const nuevaCita = {
      pacienteId,
      fecha,
      hora,
      descripcion,
    };

    try {
      const response = await axios.post('http://localhost:5000/api/citas', nuevaCita);
      setMensaje('Cita creada exitosamente');
      setError('');  // Resetea el mensaje de error si existía

      // Resetear el formulario
      setPacienteId('');
      setFecha('');
      setHora('');
      setDescripcion('');
    } catch (error) {
      setMensaje('');
      setError('Error al crear la cita: ' + error.response?.data?.error || error.message);
    }
  };

  // Función para regresar al Home
  const handleGoHome = () => {
    navigate('/');  // Redirige a la página de Home
  };

  return (
    <div className="crear-cita container mx-auto text-center p-8">
      <h2 className="text-4xl font-extrabold text-pink-600 mb-8">Crear Nueva Cita</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-xl font-semibold text-gray-800">ID del Paciente:</label>
          <input
            type="text"
            value={pacienteId}
            onChange={(e) => setPacienteId(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
        </div>
        <div>
          <label className="block text-xl font-semibold text-gray-800">Fecha:</label>
          <input
            type="date"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
        </div>
        <div>
          <label className="block text-xl font-semibold text-gray-800">Hora:</label>
          <input
            type="time"
            value={hora}
            onChange={(e) => setHora(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
        </div>
        <div>
          <label className="block text-xl font-semibold text-gray-800">Descripción:</label>
          <input
            type="text"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
        </div>

        <div className="flex justify-center space-x-4 mt-6">
          {/* Botón para regresar al Home */}
          <button
            type="button"
            onClick={handleGoHome}
            className="bg-gray-500 text-white py-2 px-8 rounded-lg hover:bg-gray-600 transition duration-300 ease-in-out"
          >
            Regresar al Inicio
          </button>

          {/* Botón para confirmar el envío de la cita */}
          <button
            type="submit"
            className="bg-pink-500 text-white py-2 px-8 rounded-lg hover:bg-pink-600 transition duration-300 ease-in-out"
          >
            Confirmar Cita
          </button>
        </div>
      </form>

      {/* Mensajes de éxito o error */}
      {mensaje && <p className="mt-6 text-green-600 text-lg">{mensaje}</p>}
      {error && <p className="mt-6 text-red-600 text-lg">{error}</p>}
    </div>
  );
};

export default CrearCita;


