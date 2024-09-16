const HistorialMedico = require('../models/HistorialMedico');

// Obtener todos los historiales médicos de un paciente
const getHistorialesByPaciente = async (req, res) => {
  const { pacienteId } = req.params;
  try {
    const historiales = await HistorialMedico.findAll({ where: { pacienteId } });
    res.json(historiales);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los historiales médicos' });
  }
};

// Crear un nuevo historial médico
const createHistorial = async (req, res) => {
  const { pacienteId, fecha, descripcion, tratamiento, notas } = req.body;
  try {
    const nuevoHistorial = await HistorialMedico.create({
      pacienteId,
      fecha,
      descripcion,
      tratamiento,
      notas,
    });
    res.status(201).json(nuevoHistorial);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el historial médico' });
  }
};

// Actualizar un historial médico
const updateHistorial = async (req, res) => {
  const { id } = req.params;
  const { fecha, descripcion, tratamiento, notas } = req.body;
  try {
    const historial = await HistorialMedico.findByPk(id);
    if (!historial) {
      return res.status(404).json({ error: 'Historial no encontrado' });
    }
    historial.fecha = fecha;
    historial.descripcion = descripcion;
    historial.tratamiento = tratamiento;
    historial.notas = notas;
    await historial.save();
    res.json(historial);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el historial médico' });
  }
};

// Eliminar un historial médico
const deleteHistorial = async (req, res) => {
  const { id } = req.params;
  try {
    const historial = await HistorialMedico.findByPk(id);
    if (!historial) {
      return res.status(404).json({ error: 'Historial no encontrado' });
    }
    await historial.destroy();
    res.json({ message: 'Historial eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el historial médico' });
  }
};

module.exports = {
  getHistorialesByPaciente,
  createHistorial,
  updateHistorial,
  deleteHistorial,
};
