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
    <div className="list">
      {error && <p>Error: {error}</p>}
      {historiales.length > 0 ? (
        historiales.map((historial) => (
          <div key={historial.id} className="card">
            <p><strong>Paciente:</strong> {historial.paciente}</p>
            <p><strong>Diagnóstico:</strong> {historial.diagnostico}</p>
            <p><strong>Tratamiento:</strong> {historial.tratamiento}</p>
            <p><strong>Fecha:</strong> {historial.fecha}</p>
          </div>
        ))
      ) : (
        <p>No hay historiales disponibles</p>
      )}
    </div>
  );
};

export default ListadoHistoriales;
