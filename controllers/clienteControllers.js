const Cliente = require('../models/cliente');

// Array para almacenar los clientes en memoria (simulación de base de datos)
let clientes = [];

// Crear un nuevo cliente
exports.createCliente = (req, res) => {
    const { idCliente, nombre, apellido, dni } = req.body;

    // Verificar si el cliente ya existe
    const existeCliente = clientes.find(cliente => cliente.idCliente === idCliente);
    if (existeCliente) {
        return res.status(400).json({ message: 'Ya existe un cliente con ese ID' });
    }

    const nuevoCliente = new Cliente(idCliente, nombre, apellido, dni);
    clientes.push(nuevoCliente);

    res.status(201).json(nuevoCliente);
};

// Obtener todos los clientes
exports.getClientes = (req, res) => {
    res.json(clientes);
};

// Obtener un cliente por su ID
exports.getClienteById = (req, res) => {
    const { id } = req.params;
    const cliente = clientes.find(c => c.idCliente === id);
    if (cliente) {
        res.json(cliente);
    } else {
        res.status(404).json({ message: 'Cliente no encontrado' });
    }
};

// Actualizar un cliente existente
exports.updateCliente = (req, res) => {
    const { id } = req.params;
    const { nombre, apellido, dni } = req.body;

    let clienteActualizado = null;
    clientes = clientes.map(cliente => {
        if (cliente.idCliente === id) {
            cliente.nombre = nombre || cliente.nombre;
            cliente.apellido = apellido || cliente.apellido;
            cliente.dni = dni || cliente.dni;
            clienteActualizado = cliente;
        }
        return cliente;
    });

    if (clienteActualizado) {
        res.json(clienteActualizado);
    } else {
        res.status(404).json({ message: 'Cliente no encontrado' });
    }
};

// Eliminar un cliente
exports.deleteCliente = (req, res) => {
    const { id } = req.params;

    const clienteEliminado = clientes.find(c => c.idCliente === id);
    clientes = clientes.filter(cliente => cliente.idCliente !== id);

    if (clienteEliminado) {
        res.json({ message: 'Cliente eliminado correctamente', cliente: clienteEliminado });
    } else {
        res.status(404).json({ message: 'Cliente no encontrado' });
    }
};
