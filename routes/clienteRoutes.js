const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteControllers');

// Rutas CRUD para Clientes
router.post('/', clienteController.createCliente);
router.get('/', clienteController.getClientes);
router.get('/:id', clienteController.getClienteById);
router.put('/:id', clienteController.updateCliente);
router.delete('/:id', clienteController.deleteCliente);

module.exports = router;
