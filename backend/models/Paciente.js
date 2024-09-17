const { DataTypes } = require('sequelize');
const sequelize = require('../database/config'); // Asegúrate de apuntar a tu archivo de configuración de Sequelize

// Definir el modelo Paciente
const Paciente = sequelize.define('Paciente', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  apellido: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  edad: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  dni: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  obra_social: {
    type: DataTypes.STRING,
  },
  genero: {
    type: DataTypes.ENUM('Femenino', 'Masculino', 'Otro'),
    allowNull: false,
  },
  fecha_ultima_menstruacion: {
    type: DataTypes.DATEONLY,
  },
  gestando: {
    type: DataTypes.BOOLEAN,
  },
  trimestre_gestacion: {
    type: DataTypes.ENUM('Primero', 'Segundo', 'Tercero'),
    allowNull: true,
  },
  hijos: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  partos: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  cesareas: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  abortos: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  papanicolau_ano: {
    type: DataTypes.INTEGER,
  },
  alergica_medicamento: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  notas: {
    type: DataTypes.TEXT,
  },
}, {
  timestamps: true, // Agrega createdAt y updatedAt automáticamente
  tableName: 'pacientes', // Nombre de la tabla en la base de datos
});

// Exportar el modelo
module.exports = Paciente;

