const express = require('express');
const router = express.Router();
const cineController = require('../controllers/cineControllers'); // Asegúrate de que el nombre del archivo sea correcto y coincida con tu estructura de archivos

// Rutas CRUD para Cine
router.get('/', cineController.getCines);
router.post('/', cineController.createCine);
router.put('/:id', cineController.updateCine);
router.delete('/:id', cineController.deleteCine);

module.exports = router;
