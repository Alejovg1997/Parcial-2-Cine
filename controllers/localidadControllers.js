const Localidad = require('../models/localidad');

// Almacenamiento en memoria para simular una base de datos
let localidades = [];

// Crear una nueva localidad
exports.createLocalidad = (req, res) => {
    const { idLocalidad, nombreLocalidad, direccion } = req.body;

    const nuevaLocalidad = new Localidad(idLocalidad, nombreLocalidad, direccion);
    localidades.push(nuevaLocalidad);

    res.status(201).json(nuevaLocalidad);
};

// Obtener todas las localidades
exports.getLocalidades = (req, res) => {
    res.json(localidades);
};

// Obtener una localidad por su ID
exports.getLocalidadById = (req, res) => {
    const { id } = req.params;
    const localidad = localidades.find(loc => loc.idLocalidad === id);
    if (localidad) {
        res.json(localidad);
    } else {
        res.status(404).json({ message: 'Localidad no encontrada' });
    }
};

// Actualizar una localidad existente
exports.updateLocalidad = (req, res) => {
    const { id } = req.params;
    const { nombreLocalidad, direccion } = req.body;

    let localidadActualizada = null;
    localidades = localidades.map(loc => {
        if (loc.idLocalidad === id) {
            loc.nombreLocalidad = nombreLocalidad || loc.nombreLocalidad;
            loc.direccion = direccion || loc.direccion;
            localidadActualizada = loc;
        }
        return loc;
    });

    if (localidadActualizada) {
        res.json(localidadActualizada);
    } else {
        res.status(404).json({ message: 'Localidad no encontrada' });
    }
};

// Eliminar una localidad
exports.deleteLocalidad = (req, res) => {
    const { id } = req.params;

    const localidadEliminada = localidades.find(loc => loc.idLocalidad === id);
    localidades = localidades.filter(loc => loc.idLocalidad !== id);

    if (localidadEliminada) {
        res.json({ message: 'Localidad eliminada correctamente', localidad: localidadEliminada });
    } else {
        res.status(404).json({ message: 'Localidad no encontrada' });
    }
};
