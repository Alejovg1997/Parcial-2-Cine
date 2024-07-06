const Taquillero = require('../models/taquillero');

// Almacenamiento en memoria para simular una base de datos
let taquilleros = [];

// Crear un nuevo taquillero
exports.createTaquillero = (req, res) => {
    const { idTaquillero, nombre, apellido, dni } = req.body;

    const nuevoTaquillero = new Taquillero(idTaquillero, nombre, apellido, dni);
    taquilleros.push(nuevoTaquillero);

    res.status(201).json(nuevoTaquillero);
};

// Obtener todos los taquilleros
exports.getTaquilleros = (req, res) => {
    res.json(taquilleros);
};

// Obtener un taquillero por su ID
exports.getTaquilleroById = (req, res) => {
    const { id } = req.params;
    const taquillero = taquilleros.find(t => t.idTaquillero === id);
    if (taquillero) {
        res.json(taquillero);
    } else {
        res.status(404).json({ message: 'Taquillero no encontrado' });
    }
};

// Actualizar un taquillero existente
exports.updateTaquillero = (req, res) => {
    const { id } = req.params;
    const { nombre, apellido, dni } = req.body;

    let taquilleroActualizado = null;
    taquilleros = taquilleros.map(taquillero => {
        if (taquillero.idTaquillero === id) {
            taquillero.nombre = nombre || taquillero.nombre;
            taquillero.apellido = apellido || taquillero.apellido;
            taquillero.dni = dni || taquillero.dni;
            taquilleroActualizado = taquillero;
        }
        return taquillero;
    });

    if (taquilleroActualizado) {
        res.json(taquilleroActualizado);
    } else {
        res.status(404).json({ message: 'Taquillero no encontrado' });
    }
};

// Eliminar un taquillero
exports.deleteTaquillero = (req, res) => {
    const { id } = req.params;

    const taquilleroEliminado = taquilleros.find(t => t.idTaquillero === id);
    taquilleros = taquilleros.filter(taquillero => taquillero.idTaquillero !== id);

    if (taquilleroEliminado) {
        res.json({ message: 'Taquillero eliminado correctamente', taquillero: taquilleroEliminado });
    } else {
        res.status(404).json({ message: 'Taquillero no encontrado' });
    }
};
