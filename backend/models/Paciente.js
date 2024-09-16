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
  telefono: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  direccion: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  fecha_nacimiento: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  genero: {
    type: DataTypes.ENUM('Femenino', 'Masculino', 'Otro'),
    allowNull: false,
  },
  historial_medico: {
    type: DataTypes.TEXT,
  },
}, {
  timestamps: true, // Agrega createdAt y updatedAt automáticamente
  tableName: 'pacientes', // Nombre de la tabla en la base de datos
});

// Exportar el modelo
module.exports = Paciente;
