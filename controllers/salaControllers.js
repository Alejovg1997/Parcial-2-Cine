const Sala = require('../models/sala');

// Array para almacenar las salas en memoria (simulación de base de datos)
let salas = [];

// Crear una nueva sala
exports.createSala = (req, res) => {
    const { idSala, nombreSala, idLocalidad } = req.body;

    // Verificar si la sala ya existe
    const existeSala = salas.find(sala => sala.idSala === idSala);
    if (existeSala) {
        return res.status(400).json({ message: 'Ya existe una sala con ese ID' });
    }

    const nuevaSala = new Sala(idSala, nombreSala, idLocalidad);
    salas.push(nuevaSala);

    res.status(201).json(nuevaSala);
};

// Obtener todas las salas
exports.getSalas = (req, res) => {
    res.json(salas);
};

// Obtener una sala por su ID
exports.getSalaById = (req, res) => {
    const { id } = req.params;
    const sala = salas.find(s => s.idSala === id);
    if (sala) {
        res.json(sala);
    } else {
        res.status(404).json({ message: 'Sala no encontrada' });
    }
};

// Actualizar una sala existente
exports.updateSala = (req, res) => {
    const { id } = req.params;
    const { nombreSala, idLocalidad } = req.body;

    let salaActualizada = null;
    salas = salas.map(sala => {
        if (sala.idSala === id) {
            sala.nombreSala = nombreSala || sala.nombreSala;
            sala.idLocalidad = idLocalidad || sala.idLocalidad;
            salaActualizada = sala;
        }
        return sala;
    });

    if (salaActualizada) {
        res.json(salaActualizada);
    } else {
        res.status(404).json({ message: 'Sala no encontrada' });
    }
};

// Eliminar una sala
exports.deleteSala = (req, res) => {
    const { id } = req.params;

    const salaEliminada = salas.find(s => s.idSala === id);
    salas = salas.filter(sala => sala.idSala !== id);

    if (salaEliminada) {
        res.json({ message: 'Sala eliminada correctamente', sala: salaEliminada });
    } else {
        res.status(404).json({ message: 'Sala no encontrada' });
    }
};
