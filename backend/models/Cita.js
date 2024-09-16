const { DataTypes } = require('sequelize');
const sequelize = require('../database/config'); // Asumiendo que config.js está configurado

const Cita = sequelize.define('Cita', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  fecha: {
    type: DataTypes.DATE,
    allowNull: false
  },
  hora: {
    type: DataTypes.TIME,
    allowNull: false
  },
  pacienteId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Pacientes', // Nombre de la tabla relacionada
      key: 'id'
    }
  },
  descripcion: {
    type: DataTypes.STRING,
    allowNull: true
  },
  estado: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'pendiente'
  }
}, {
  timestamps: false,
  tableName: 'Citas'
});

module.exports = Cita;
