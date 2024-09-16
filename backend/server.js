const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const sequelize = require('./database/config');

// Cargar las variables de entorno desde el archivo .env
dotenv.config();

// Inicializar la app de Express
const app = express();

// Middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json()); // Para poder recibir y procesar JSON en las solicitudes

// Rutas básicas
app.get('/', (req, res) => {
  res.send('API del Consultorio Ginecológico');
});

// Rutas de la API
const pacientesRoutes = require('./routes/pacientesRoutes');
const citasRoutes = require('./routes/citasRoutes');
const historialesRoutes = require('./routes/historialesRoutes');

// Usar las rutas
app.use('/api/pacientes', pacientesRoutes);
app.use('/api/citas', citasRoutes);
app.use('/api/historiales', historialesRoutes);

// Manejar rutas no encontradas
app.use((req, res, next) => {
  res.status(404).json({ error: 'Ruta no encontrada' });
});

// Manejar errores globales
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Error del servidor' });
});

// Conexión a la Base de Datos
sequelize.sync({ force: false }) // No forza la recreación de la base de datos
  .then(() => {
    console.log('Base de datos sincronizada correctamente');
  })
  .catch(error => {
    console.error('Error al sincronizar la base de datos:', error);
  });

// Configurar el puerto
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});

