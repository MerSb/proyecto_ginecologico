const Paciente = require('../models/Paciente');

// Obtener todos los pacientes
const getAllPacientes = async (req, res) => {
  try {
    // Usamos Sequelize para obtener todos los pacientes de la base de datos
    const pacientes = await Paciente.findAll();
    res.status(200).json(pacientes);
  } catch (error) {
    console.error('Error al obtener los pacientes:', error);
    res.status(500).json({ error: 'Error al obtener los pacientes' });
  }
};

// Crear un nuevo paciente
const createPaciente = async (req, res) => {
  const { nombre, apellido, edad, email, dni, obra_social, genero, fecha_ultima_menstruacion, gestando, trimestre_gestacion, hijos, partos, cesareas, abortos, papanicolau_ano, alergica_medicamento, telefono, direccion, fecha_nacimiento, notas, historial_medico } = req.body;
  
  try {
    // Crear un nuevo paciente en la base de datos
    const nuevoPaciente = await Paciente.create({
      nombre,
      apellido,
      dni,
      email,
      edad,
      obra_social,
      genero,
      fecha_ultima_menstruacion,
      gestando,
      trimestre_gestacion,
      hijos,
      partos,
      cesareas,
      abortos,
      papanicolau_ano,
      alergica_medicamento,
      telefono,
      direccion,
      fecha_nacimiento,
      notas,
      historial_medico,
    });

    // Responder con el paciente creado
    res.status(201).json(nuevoPaciente);
  } catch (error) {
    console.error('Error al crear el paciente:', error);
    res.status(500).json({ error: 'Error al crear el paciente' });
  }
};

module.exports = {
  getAllPacientes,
  createPaciente,
};

