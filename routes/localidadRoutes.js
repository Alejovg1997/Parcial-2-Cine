const express = require('express');
const router = express.Router();
const localidadController = require('../controllers/localidadControllers');

// Rutas CRUD para Localidades
router.post('/', localidadController.createLocalidad);
router.get('/', localidadController.getLocalidades);
router.get('/:id', localidadController.getLocalidadById);
router.put('/:id', localidadController.updateLocalidad);
router.delete('/:id', localidadController.deleteLocalidad);

module.exports = router;
