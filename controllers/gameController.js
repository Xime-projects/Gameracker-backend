const Juego= requiere('../Gamemodels/');

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

export.crearJuego = async (req, res) => {
    try {
        const nuevoJuego = new Juego(req.body);
        await nuevoJuego.save();
        res.status(201).json(nuevoJuego);
    } catch (error) {
        req.status(400).json({ 
            error: 'Error al crear el juego. Verfique los cambios', 
            details: error. message 
        })
    
    }
}