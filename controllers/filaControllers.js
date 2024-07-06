const Fila = require('../models/fila');

// Array para almacenar las filas en memoria (simulación de base de datos)
let filas = [];

// Crear una nueva fila
exports.createFila = (req, res) => {
    const { idFila, numeroFila, idSala } = req.body;

    // Verificar si la fila ya existe
    const existeFila = filas.find(fila => fila.idFila === idFila);
    if (existeFila) {
        return res.status(400).json({ message: 'Ya existe una fila con ese ID' });
    }

    const nuevaFila = new Fila(idFila, numeroFila, idSala);
    filas.push(nuevaFila);

    res.status(201).json(nuevaFila);
};

// Obtener todas las filas
exports.getFilas = (req, res) => {
    res.json(filas);
};

// Obtener una fila por su ID
exports.getFilaById = (req, res) => {
    const { id } = req.params;
    const fila = filas.find(f => f.idFila === id);
    if (fila) {
        res.json(fila);
    } else {
        res.status(404).json({ message: 'Fila no encontrada' });
    }
};

// Actualizar una fila existente
exports.updateFila = (req, res) => {
    const { id } = req.params;
    const { numeroFila, idSala } = req.body;

    let filaActualizada = null;
    filas = filas.map(fila => {
        if (fila.idFila === id) {
            fila.numeroFila = numeroFila || fila.numeroFila;
            fila.idSala = idSala || fila.idSala;
            filaActualizada = fila;
        }
        return fila;
    });

    if (filaActualizada) {
        res.json(filaActualizada);
    } else {
        res.status(404).json({ message: 'Fila no encontrada' });
    }
};

// Eliminar una fila
exports.deleteFila = (req, res) => {
    const { id } = req.params;

    const filaEliminada = filas.find(f => f.idFila === id);
    filas = filas.filter(fila => fila.idFila !== id);

    if (filaEliminada) {
        res.json({ message: 'Fila eliminada correctamente', fila: filaEliminada });
    } else {
        res.status(404).json({ message: 'Fila no encontrada' });
    }
};
