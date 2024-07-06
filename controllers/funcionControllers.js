const Funcion = require('../models/funcion');

// Array para almacenar las funciones en memoria (simulación de base de datos)
let funciones = [];

// Crear una nueva función
exports.createFuncion = (req, res) => {
    const { idFuncion, fecha, hora, idPelicula, idSala } = req.body;

    // Verificar si la función ya existe
    const existeFuncion = funciones.find(funcion => funcion.idFuncion === idFuncion);
    if (existeFuncion) {
        return res.status(400).json({ message: 'Ya existe una función con ese ID' });
    }

    const nuevaFuncion = new Funcion(idFuncion, fecha, hora, idPelicula, idSala);
    funciones.push(nuevaFuncion);

    res.status(201).json(nuevaFuncion);
};

// Obtener todas las funciones
exports.getFunciones = (req, res) => {
    res.json(funciones);
};

// Obtener una función por su ID
exports.getFuncionById = (req, res) => {
    const { id } = req.params;
    const funcion = funciones.find(f => f.idFuncion === id);
    if (funcion) {
        res.json(funcion);
    } else {
        res.status(404).json({ message: 'Función no encontrada' });
    }
};

// Actualizar una función existente
exports.updateFuncion = (req, res) => {
    const { id } = req.params;
    const { fecha, hora, idPelicula, idSala } = req.body;

    let funcionActualizada = null;
    funciones = funciones.map(funcion => {
        if (funcion.idFuncion === id) {
            funcion.fecha = fecha || funcion.fecha;
            funcion.hora = hora || funcion.hora;
            funcion.idPelicula = idPelicula || funcion.idPelicula;
            funcion.idSala = idSala || funcion.idSala;
            funcionActualizada = funcion;
        }
        return funcion;
    });

    if (funcionActualizada) {
        res.json(funcionActualizada);
    } else {
        res.status(404).json({ message: 'Función no encontrada' });
    }
};

// Eliminar una función
exports.deleteFuncion = (req, res) => {
    const { id } = req.params;

    const funcionEliminada = funciones.find(f => f.idFuncion === id);
    funciones = funciones.filter(funcion => funcion.idFuncion !== id);

    if (funcionEliminada) {
        res.json({ message: 'Función eliminada correctamente', funcion: funcionEliminada });
    } else {
        res.status(404).json({ message: 'Función no encontrada' });
    }
};
