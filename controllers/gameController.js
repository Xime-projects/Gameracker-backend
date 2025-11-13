const Juego= require('../models/Game');

//CRUD Juegos
// Crear Juego
exports.createGame = async (req, res) => {
    try{
        const nuevoJuego = new Juego(req.body);
        await nuevoJuego.save();
        res.status(201).json(nuevoJuego);   
    } catch (error) {
        res.status(400).json({ mensaje: 'Error al crear el juego', error });
    }
}

// Obtener todos los juegos
exports.getAllGames = async (req, res) => {
    try {
        const juegos = await Juego.find();
        res.status(201).json(juegos);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error interno del servidor', error });
    }
}

// Obtener un juego por ID
exports.getGameById = async (req, res) => {
    try {
        const juego = await Juego.findById(req.params.id);  
        if (!juego) {
            return res.status(404).json({ mensaje: 'Juego no encontrado' });
        } 
        res.status(200).json(juego);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al buscar juego', error });
    }
}    

// Actualizar un juego por ID
exports.updateGameById = async (req, res) => {
    try {
        const juegoActualizado = await Juego.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!juegoActualizado) {
            return res.status(404).json({ mensaje: 'Juego no encontrado' });
        }

        res.status(200).json(juegoActualizado);
    } catch (error) {
        res.status(400).json({
            error: 'Error al actualizar el juego',
            details: error.message
        });
    }
};

//Delete/Eliminar 
exports.deleteGameById = async (req, res) => {
    try {
        const juegoEliminado = await Juego.findByIdAndDelete(req.params.id);

        if (!juegoEliminado) {
            return res.status(404).json({ mensaje: 'Juego no encontrado' });
        }       
            
        res.status(200).json({ mensaje: 'Juego eliminado correctamente' });
    } 
    catch (error) {
        res.status(500).json({ 
            mensaje: 'Error al eliminar el juego', 
            details: error.message 
        });
    }
};
