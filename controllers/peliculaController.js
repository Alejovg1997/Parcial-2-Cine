const Pelicula = require('../models/pelicula');

// Array para almacenar las películas en memoria (simulación de base de datos)
let peliculas = [];

// Crear una nueva película
exports.createPelicula = (req, res) => {
    const { idPelicula, titulo, genero, duracion, clasificacion } = req.body;
    
    // Verificar si la película ya existe
    const existePelicula = peliculas.find(pelicula => pelicula.idPelicula === idPelicula);
    if (existePelicula) {
        return res.status(400).json({ message: 'Ya existe una película con ese ID' });
    }

    const nuevaPelicula = new Pelicula(idPelicula, titulo, genero, duracion, clasificacion);
    peliculas.push(nuevaPelicula);

    res.status(201).json(nuevaPelicula);
};

// Obtener todas las películas
exports.getPeliculas = (req, res) => {
    res.json(peliculas);
};

// Obtener una película por su ID
exports.getPeliculaById = (req, res) => {
    const { id } = req.params;
    const pelicula = peliculas.find(p => p.idPelicula === id);
    if (pelicula) {
        res.json(pelicula);
    } else {
        res.status(404).json({ message: 'Pelicula no encontrada' });
    }
};

// Actualizar una película existente
exports.updatePelicula = (req, res) => {
    const { id } = req.params;
    const { titulo, genero, duracion, clasificacion } = req.body;

    let peliculaActualizada = null;
    peliculas = peliculas.map(pelicula => {
        if (pelicula.idPelicula === id) {
            pelicula.titulo = titulo || pelicula.titulo;
            pelicula.genero = genero || pelicula.genero;
            pelicula.duracion = duracion || pelicula.duracion;
            pelicula.clasificacion = clasificacion || pelicula.clasificacion;
            peliculaActualizada = pelicula;
        }
        return pelicula;
    });

    if (peliculaActualizada) {
        res.json(peliculaActualizada);
    } else {
        res.status(404).json({ message: 'Pelicula no encontrada' });
    }
};

// Eliminar una película
exports.deletePelicula = (req, res) => {
    const { id } = req.params;

    const peliculaEliminada = peliculas.find(p => p.idPelicula === id);
    peliculas = peliculas.filter(pelicula => pelicula.idPelicula !== id);

    if (peliculaEliminada) {
        res.json({ message: 'Pelicula eliminada correctamente', pelicula: peliculaEliminada });
    } else {
        res.status(404).json({ message: 'Pelicula no encontrada' });
    }
};
