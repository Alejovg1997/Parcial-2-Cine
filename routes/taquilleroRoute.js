const express = require('express');
const router = express.Router();
const taquilleroController=require('../controllers/taquilleroControllers');

// Rutas CRUD para Taquilleros
router.post('/', taquilleroController.createTaquillero);
router.get('/', taquilleroController.getTaquilleros);
router.get('/:id', taquilleroController.getTaquilleroById);
router.put('/:id', taquilleroController.updateTaquillero);
router.delete('/:id', taquilleroController.deleteTaquillero);

module.exports = router;
