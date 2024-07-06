const express = require('express');
const bodyParser = require('body-parser');

const cineRoutes = require('./routes/cineRoutes');
const peliculaRoutes = require('./routes/peliculaRoute');
const funcionRoutes = require('./routes/funcionRoute');
const salaRoutes = require('./routes/salaRoute');
const filaRoutes = require('./routes/filaRoutes');
const clienteRoutes = require('./routes/clienteRoutes');
const boletaRoutes = require('./routes/boletaRoutes');
const taquilleroRoutes = require('./routes/taquilleroRoute');
const localidadRoutes = require('./routes/localidadRoutes');
const puestoRoutes = require('./routes/puestoRoutes');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());

// Rutas CRUD 
app.use('/api/cines', cineRoutes);
app.use('/api/peliculas', peliculaRoutes);
app.use('/api/funciones', funcionRoutes);
app.use('/api/salas', salaRoutes);
app.use('/api/filas', filaRoutes);
app.use('/api/clientes', clienteRoutes);
app.use('/api/boletas', boletaRoutes);
app.use('/api/taquilleros', taquilleroRoutes);
app.use('/api/localidades', localidadRoutes);
app.use('/api/puestos', puestoRoutes);


// Ruta no encontrada
app.use((req, res) => {
  res.status(404).json({ message: 'Ruta no encontrada' });
});

// Manejador de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Error interno del servidor' });
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
