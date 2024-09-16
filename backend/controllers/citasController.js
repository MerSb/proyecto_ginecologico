const Cita = require('../models/Cita');

// Obtener todas las citas
const getAllCitas = async (req, res) => {
  try {
    const citas = await Cita.findAll();
    res.status(200).json(citas);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener las citas' });
  }
};

// Crear una nueva cita
const createCita = async (req, res) => {
  const { fecha, hora, pacienteId, descripcion } = req.body;
  try {
    const nuevaCita = await Cita.create({
      fecha,
      hora,
      pacienteId,
      descripcion
    });
    res.status(201).json(nuevaCita);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear la cita' });
  }
};

// Actualizar una cita
const updateCita = async (req, res) => {
  const { id } = req.params;
  const { fecha, hora, descripcion, estado } = req.body;
  try {
    const cita = await Cita.findByPk(id);
    if (!cita) {
      return res.status(404).json({ error: 'Cita no encontrada' });
    }
    cita.fecha = fecha || cita.fecha;
    cita.hora = hora || cita.hora;
    cita.descripcion = descripcion || cita.descripcion;
    cita.estado = estado || cita.estado;

    await cita.save();
    res.status(200).json(cita);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar la cita' });
  }
};

// Eliminar una cita
const deleteCita = async (req, res) => {
  const { id } = req.params;
  try {
    const cita = await Cita.findByPk(id);
    if (!cita) {
      return res.status(404).json({ error: 'Cita no encontrada' });
    }
    await cita.destroy();
    res.status(200).json({ message: 'Cita eliminada correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar la cita' });
  }
};

module.exports = {
  getAllCitas,
  createCita,
  updateCita,
  deleteCita
};
