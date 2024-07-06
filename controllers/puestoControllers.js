const Puesto = require('../models/puesto');

// Almacenamiento en memoria para simular una base de datos
let puestos = [];

// Crear un nuevo puesto
exports.createPuesto = (req, res) => {
    const { idPuesto, numeroPuesto, idFila } = req.body;

    const nuevoPuesto = new Puesto(idPuesto, numeroPuesto, idFila);
    puestos.push(nuevoPuesto);

    res.status(201).json(nuevoPuesto);
};

// Obtener todos los puestos
exports.getPuestos = (req, res) => {
    res.json(puestos);
};

// Obtener un puesto por su ID
exports.getPuestoById = (req, res) => {
    const { id } = req.params;
    const puesto = puestos.find(p => p.idPuesto === id);
    if (puesto) {
        res.json(puesto);
    } else {
        res.status(404).json({ message: 'Puesto no encontrado' });
    }
};

// Actualizar un puesto existente
exports.updatePuesto = (req, res) => {
    const { id } = req.params;
    const { numeroPuesto, idFila } = req.body;

    let puestoActualizado = null;
    puestos = puestos.map(p => {
        if (p.idPuesto === id) {
            p.numeroPuesto = numeroPuesto || p.numeroPuesto;
            p.idFila = idFila || p.idFila;
            puestoActualizado = p;
        }
        return p;
    });

    if (puestoActualizado) {
        res.json(puestoActualizado);
    } else {
        res.status(404).json({ message: 'Puesto no encontrado' });
    }
};

// Eliminar un puesto
exports.deletePuesto = (req, res) => {
    const { id } = req.params;

    const puestoEliminado = puestos.find(p => p.idPuesto === id);
    puestos = puestos.filter(p => p.idPuesto !== id);

    if (puestoEliminado) {
        res.json({ message: 'Puesto eliminado correctamente', puesto: puestoEliminado });
    } else {
        res.status(404).json({ message: 'Puesto no encontrado' });
    }
};
