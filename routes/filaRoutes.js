const express = require('express');
const router = express.Router();
const filaController = require('../controllers/filaControllers');

// Rutas CRUD para Filas
router.post('/', filaController.createFila);
router.get('/', filaController.getFilas);
router.get('/:id', filaController.getFilaById);
router.put('/:id', filaController.updateFila);
router.delete('/:id', filaController.deleteFila);

module.exports = router;
