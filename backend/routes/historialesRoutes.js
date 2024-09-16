const express = require('express');
const router = express.Router();
const {
  getHistorialesByPaciente,
  createHistorial,
  updateHistorial,
  deleteHistorial
} = require('../controllers/historialesController');

// Ruta para obtener todos los historiales de un paciente
router.get('/:pacienteId', getHistorialesByPaciente);

// Ruta para crear un nuevo historial médico
router.post('/', createHistorial);

// Ruta para actualizar un historial médico
router.put('/:id', updateHistorial);

// Ruta para eliminar un historial médico
router.delete('/:id', deleteHistorial);

module.exports = router;
