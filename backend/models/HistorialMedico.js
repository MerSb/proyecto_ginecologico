const { DataTypes } = require('sequelize');
const sequelize = require('../database/config'); // Conexión a la base de datos

// Definir el modelo HistorialMedico
const HistorialMedico = sequelize.define('HistorialMedico', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  pacienteId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Pacientes', // Asegúrate que el nombre de la tabla sea el correcto
      key: 'id',
    },
  },
  fecha: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  descripcion: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  tratamiento: {
    type: DataTypes.STRING,
  },
  notas: {
    type: DataTypes.TEXT,
  },
}, {
  timestamps: true, // Agregar createdAt y updatedAt
  tableName: 'historiales_medicos',
});

module.exports = HistorialMedico;
