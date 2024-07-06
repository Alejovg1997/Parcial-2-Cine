const express = require('express');
const router = express.Router();
const funcionController = require('../controllers/funcionControllers');

// Rutas CRUD para Funciones
router.post('/', funcionController.createFuncion);
router.get('/', funcionController.getFunciones);
router.get('/:id', funcionController.getFuncionById);
router.put('/:id', funcionController.updateFuncion);
router.delete('/:id', funcionController.deleteFuncion);

module.exports = router;
