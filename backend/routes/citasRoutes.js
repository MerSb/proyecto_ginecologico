const express = require('express');
const router = express.Router();
const citasController = require('../controllers/citasController');

// Definir las rutas
router.get('/', citasController.getAllCitas);
router.post('/', citasController.createCita);
router.put('/:id', citasController.updateCita);
router.delete('/:id', citasController.deleteCita);

module.exports = router;
