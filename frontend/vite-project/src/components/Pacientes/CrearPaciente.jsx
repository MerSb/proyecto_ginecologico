import React, { useState } from 'react';
import axios from 'axios';

const CrearPaciente = () => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [edad, setEdad] = useState('');
  const [dni, setDni] = useState('');
  const [telefono, setTelefono] = useState ('');
  const [obraSocial, setObraSocial] = useState('');
  const [genero, setGenero] = useState('');
  const [fechaUltimaMenstruacion, setFechaUltimaMenstruacion] = useState('');
  const [gestando, setGestando] = useState(false);
  const [trimestreGestacion, setTrimestreGestacion] = useState('');
  const [hijos, setHijos] = useState(0);
  const [partos, setPartos] = useState(0);
  const [cesareas, setCesareas] = useState(0);
  const [abortos, setAbortos] = useState(0);
  const [papanicolauAno, setPapanicolauAno] = useState('');
  const [alergicaMedicamento, setAlergicaMedicamento] = useState(false);
  const [notas, setNotas] = useState('');
  const [direccion, setDireccion] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const nuevoPaciente = {
      nombre,
      apellido,
      edad,
      dni,
      telefono,
      obraSocial,
      genero,
      fechaUltimaMenstruacion,
      gestando,
      trimestreGestacion,
      hijos,
      partos,
      cesareas,
      abortos,
      papanicolauAno,
      alergicaMedicamento,
      notas,
      direccion
    };

    try {
      const response = await axios.post('http://localhost:5000/api/pacientes', nuevoPaciente);
      setMensaje('Paciente creado exitosamente');
      // Resetear el formulario
      setNombre('');
      setApellido('');
      setEdad('');
      setDni('');
      setTelefono('');
      setObraSocial('');
      setGenero('');
      setFechaUltimaMenstruacion('');
      setGestando(false);
      setTrimestreGestacion('');
      setHijos(0);
      setPartos(0);
      setCesareas(0);
      setAbortos(0);
      setPapanicolauAno('');
      setAlergicaMedicamento(false);
      setNotas('');
      setDireccion('');
    } catch (error) {
      setMensaje('Error al crear el paciente: ' + error.message);
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Insertar nuevo Paciente</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Nombre:</label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Apellido:</label>
          <input
            type="text"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Edad:</label>
          <input
            type="number"
            value={edad}
            onChange={(e) => setEdad(e.target.value)}
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">DNI:</label>
          <input
            type="text"
            value={dni}
            onChange={(e) => setDni(e.target.value)}
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Telefono:</label>
          <input
            type="text"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Direccion:</label>
          <input
            type="text"
            value={direccion}
            onChange={(e) => setDireccion(e.target.value)}
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Obra Social:</label>
          <input
            type="text"
            value={obraSocial}
            onChange={(e) => setObraSocial(e.target.value)}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Género:</label>
          <select
            value={genero}
            onChange={(e) => setGenero(e.target.value)}
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
          >
            <option value="">Selecciona una opción</option>
            <option value="Femenino">Femenino</option>
            <option value="Masculino">Masculino</option>
            <option value="Otro">Otro</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Fecha de Última Menstruación:</label>
          <input
            type="date"
            value={fechaUltimaMenstruacion}
            onChange={(e) => setFechaUltimaMenstruacion(e.target.value)}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">¿Está gestando?</label>
          <input
            type="checkbox"
            checked={gestando}
            onChange={(e) => setGestando(e.target.checked)}
            className="mt-1 block"
          />
        </div>
        {gestando && (
          <div>
            <label className="block text-sm font-medium text-gray-700">Trimestre de Gestación:</label>
            <select
              value={trimestreGestacion}
              onChange={(e) => setTrimestreGestacion(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
            >
              <option value="">Selecciona una opción</option>
              <option value="Primero">Primero</option>
              <option value="Segundo">Segundo</option>
              <option value="Tercero">Tercero</option>
            </select>
          </div>
        )}
        <div>
          <label className="block text-sm font-medium text-gray-700">Hijos:</label>
          <input
            type="number"
            value={hijos}
            onChange={(e) => setHijos(e.target.value)}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Partos:</label>
          <input
            type="number"
            value={partos}
            onChange={(e) => setPartos(e.target.value)}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Cesáreas:</label>
          <input
            type="number"
            value={cesareas}
            onChange={(e) => setCesareas(e.target.value)}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Abortos:</label>
          <input
            type="number"
            value={abortos}
            onChange={(e) => setAbortos(e.target.value)}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Año del último Papanicolau:</label>
          <input
            type="number"
            value={papanicolauAno}
            onChange={(e) => setPapanicolauAno(e.target.value)}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">¿Es alérgica a algún medicamento?</label>
          <input
            type="checkbox"
            checked={alergicaMedicamento}
            onChange={(e) => setAlergicaMedicamento(e.target.checked)}
            className="mt-1 block"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Notas:</label>
          <textarea
            value={notas}
            onChange={(e) => setNotas(e.target.value)}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Crear Paciente
        </button>
      </form>
      {mensaje && (
        <p className={`mt-4 text-center ${mensaje.includes('exitosamente') ? 'text-green-500' : 'text-red-500'}`}>
          {mensaje}
        </p>
      )}
    </div>
  );
};

export default CrearPaciente;



