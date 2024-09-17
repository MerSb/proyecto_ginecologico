const { DataTypes } = require('sequelize');
const sequelize = require('../database/config'); // Asegúrate de tener la configuración correcta de la conexión

const HistorialMedico = sequelize.define('HistorialMedico', {
  pacienteId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  fecha: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  descripcion: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  tratamiento: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  notas: {
    type: DataTypes.TEXT,
  }
}, {
  tableName: 'historiales_medicos' // Asegúrate de que el nombre de la tabla coincida
});

module.exports = HistorialMedico;
