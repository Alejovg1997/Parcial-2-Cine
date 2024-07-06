const Boleta = require('../models/boleta');

// Almacenamiento en memoria para simular una base de datos
let boletas = [];

// Crear una nueva boleta
exports.createBoleta = (req, res) => {
    const { idBoleta, idFuncion, idPuesto, idCliente, precio, fechaCompra } = req.body;

    const nuevaBoleta = new Boleta(idBoleta, idFuncion, idPuesto, idCliente, precio, fechaCompra);
    boletas.push(nuevaBoleta);

    res.status(201).json(nuevaBoleta);
};

// Obtener todas las boletas
exports.getBoletas = (req, res) => {
    res.json(boletas);
};

// Obtener una boleta por su ID
exports.getBoletaById = (req, res) => {
    const { id } = req.params;
    const boleta = boletas.find(b => b.idBoleta === id);
    if (boleta) {
        res.json(boleta);
    } else {
        res.status(404).json({ message: 'Boleta no encontrada' });
    }
};

// Actualizar una boleta existente
exports.updateBoleta = (req, res) => {
    const { id } = req.params;
    const { idFuncion, idPuesto, idCliente, precio, fechaCompra } = req.body;

    let boletaActualizada = null;
    boletas = boletas.map(boleta => {
        if (boleta.idBoleta === id) {
            boleta.idFuncion = idFuncion || boleta.idFuncion;
            boleta.idPuesto = idPuesto || boleta.idPuesto;
            boleta.idCliente = idCliente || boleta.idCliente;
            boleta.precio = precio || boleta.precio;
            boleta.fechaCompra = fechaCompra || boleta.fechaCompra;
            boletaActualizada = boleta;
        }
        return boleta;
    });

    if (boletaActualizada) {
        res.json(boletaActualizada);
    } else {
        res.status(404).json({ message: 'Boleta no encontrada' });
    }
};

// Eliminar una boleta
exports.deleteBoleta = (req, res) => {
    const { id } = req.params;

    const boletaEliminada = boletas.find(b => b.idBoleta === id);
    boletas = boletas.filter(boleta => boleta.idBoleta !== id);

    if (boletaEliminada) {
        res.json({ message: 'Boleta eliminada correctamente', boleta: boletaEliminada });
    } else {
        res.status(404).json({ message: 'Boleta no encontrada' });
    }
};
