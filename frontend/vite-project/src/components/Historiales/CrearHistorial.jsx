import React, { useState } from 'react';
import axios from 'axios';

const CrearHistorial = () => {
  const [paciente, setPaciente] = useState('');
  const [diagnostico, setDiagnostico] = useState('');
  const [tratamiento, setTratamiento] = useState('');
  const [fecha, setFecha] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const nuevoHistorial = {
      pacienteId,
      descripcion,
      tratamiento,
      notas,
      fecha,
    };

    try {
      const response = await axios.post('http://localhost:5000/api/historiales', nuevoHistorial);
      setMensaje('Historial creado exitosamente');
      // Resetear el formulario
      setPaciente('');
      setDescripcion('');
      setTratamiento('');
      setNotas('');
      setFecha('');
    } catch (error) {
      setMensaje('Error al crear el historial: ' + error.message);
    }
  };

  return (
    <div className="container mx-auto p-8 max-w-2xl">
  <h2 className="text-3xl font-bold text-center text-pink-600 mb-6">Crear Historial Médico</h2>
  <form onSubmit={handleSubmit} className="space-y-6 bg-white shadow-lg rounded-lg p-8 border border-gray-200">
    <div className="flex flex-col">
      <label className="block text-lg font-semibold text-gray-700 mb-2">Paciente:</label>
      <input
        type="text"
        value={paciente}
        onChange={(e) => setPaciente(e.target.value)}
        required
        className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
      />
    </div>
    <div className="flex flex-col">
      <label className="block text-lg font-semibold text-gray-700 mb-2">Diagnóstico:</label>
      <input
        type="text"
        value={descripcion}
        onChange={(e) => setDescripcion(e.target.value)}
        required
        className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
      />
    </div>
    <div className="flex flex-col">
      <label className="block text-lg font-semibold text-gray-700 mb-2">Tratamiento:</label>
      <input
        type="text"
        value={tratamiento}
        onChange={(e) => setTratamiento(e.target.value)}
        required
        className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
      />
    </div>
    <div className="flex flex-col">
      <label className="block text-lg font-semibold text-gray-700 mb-2">Notas:</label>
      <input
        type="text"
        value={notas}
        onChange={(e) => setNotas(e.target.value)}
        required
        className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
      />
    </div>
    <div className="flex flex-col">
      <label className="block text-lg font-semibold text-gray-700 mb-2">Fecha:</label>
      <input
        type="date"
        value={fecha}
        onChange={(e) => setFecha(e.target.value)}
        required
        className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
      />
    </div>
    <button
      type="submit"
      className="bg-pink-500 text-white py-3 px-6 rounded-lg hover:bg-pink-600 transition duration-300 ease-in-out w-full"
    >
      Crear Historial
    </button>
  </form>

  {mensaje && (
    <p className={`mt-6 text-center ${mensaje.includes('Error') ? 'text-red-500' : 'text-green-500'}`}>
      {mensaje}
    </p>
  )}
</div>
  );
};

export default CrearHistorial;


