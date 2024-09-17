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
      paciente,
      diagnostico,
      tratamiento,
      fecha
    };

    try {
      const response = await axios.post('http://localhost:5000/api/historiales', nuevoHistorial);
      setMensaje('Historial creado exitosamente');
      // Resetear el formulario
      setPaciente('');
      setDiagnostico('');
      setTratamiento('');
      setFecha('');
    } catch (error) {
      setMensaje('Error al crear el historial: ' + error.message);
    }
  };

  return (
    <div className="crear-historial">
      <h2>Crear Historial Médico</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Paciente:</label>
          <input
            type="text"
            value={paciente}
            onChange={(e) => setPaciente(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Diagnóstico:</label>
          <input
            type="text"
            value={diagnostico}
            onChange={(e) => setDiagnostico(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Tratamiento:</label>
          <input
            type="text"
            value={tratamiento}
            onChange={(e) => setTratamiento(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Fecha:</label>
          <input
            type="date"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
            required
          />
        </div>
        <button type="submit">Crear Historial</button>
      </form>
      {mensaje && <p>{mensaje}</p>}
    </div>
  );
};

export default CrearHistorial;

