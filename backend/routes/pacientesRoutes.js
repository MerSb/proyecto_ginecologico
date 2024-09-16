const express = require('express');
const router = express.Router();

// Controladores (estos los crearás en una carpeta controllers)
const { getAllPacientes, createPaciente } = require('../controllers/pacientesController');

// Ruta para obtener todos los pacientes
router.get('/', getAllPacientes);

// Ruta para crear un nuevo paciente
router.post('/', createPaciente);

module.exports = router;
