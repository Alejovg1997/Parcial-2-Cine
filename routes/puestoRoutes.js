const express = require('express');
const router = express.Router();
const puestoController = require('../controllers/puestoControllers');

// Rutas CRUD para Puestos
router.post('/', puestoController.createPuesto);
router.get('/', puestoController.getPuestos);
router.get('/:id', puestoController.getPuestoById);
router.put('/:id', puestoController.updatePuesto);
router.delete('/:id', puestoController.deletePuesto);

module.exports = router;
