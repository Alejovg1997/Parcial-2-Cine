const express = require('express');
const router = express.Router();
const boletaController = require('../controllers/boletaControllers');

// Rutas CRUD para Boletas
router.post('/', boletaController.createBoleta);
router.get('/', boletaController.getBoletas);
router.get('/:id', boletaController.getBoletaById);
router.put('/:id', boletaController.updateBoleta);
router.delete('/:id', boletaController.deleteBoleta);

module.exports = router;
