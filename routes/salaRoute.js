const express = require('express');
const router = express.Router();
const salaController = require('../controllers/salaControllers');

// Rutas CRUD para Salas
router.post('/', salaController.createSala);
router.get('/', salaController.getSalas);
router.get('/:id', salaController.getSalaById);
router.put('/:id', salaController.updateSala);
router.delete('/:id', salaController.deleteSala);

module.exports = router;
