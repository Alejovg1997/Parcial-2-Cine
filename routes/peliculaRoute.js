const express = require('express');
const router = express.Router();
const peliculaController = require('../controllers/peliculaController');

// Rutas CRUD para Películas
router.post('/', peliculaController.createPelicula);
router.get('/', peliculaController.getPeliculas);
router.get('/:id', peliculaController.getPeliculaById);
router.put('/:id', peliculaController.updatePelicula);
router.delete('/:id', peliculaController.deletePelicula);

module.exports = router;
