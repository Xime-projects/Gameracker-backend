const Review = require('../models/Reviews');

// Crear Review
exports.createReview = async (req, res) => {
    try {
        const nuevaReview = new Review(req.body);
        await nuevaReview.save();
        res.status(201).json(nuevaReview);   
    } catch (error) {
        res.status(400).json({ mensaje: 'Error al crear la reseña', error });
    }
};

// Obtener todas las Reviews
exports.getAllReviews = async (req, res) => {
    try {
        //Para filtrar reseñas por juego
        const filtro = req.query.gameId ? { game: req.query.gameId } : {};

        //Estro trae el nombre del juego junto con la reseña   
        const reviews = await Review.find(filtro).populate('game', 'nombre');
        res.status(201).json(reviews);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error interno del servidor', error });
    }
};

// Obtener una Review por ID
exports.getReviewById = async (req, res) => {
    try {
        const review = await Review.findById(req.params.id);  
        if (!review) {
            return res.status(404).json({ mensaje: 'Reseña no encontrada' });
        } 
        res.status(200).json(review);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al buscar la reseña', error });
    }
};

// Actualizar una Review por ID
exports.updateReviewById = async (req, res) => {
    try {
        const reviewActualizada = await Review.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!reviewActualizada) {
            return res.status(404).json({ mensaje: 'Reseña no encontrada' });
        }

        res.status(200).json(reviewActualizada);
    } catch (error) {
        res.status(400).json({
            error: 'Error al actualizar la reseña',
            details: error.message
        });
    }
};

// Eliminar una Review por ID
exports.deleteReviewById = async (req, res) => {
    try {
        const reviewEliminada = await Review.findByIdAndDelete(req.params.id);

        if (!reviewEliminada) {
            return res.status(404).json({ mensaje: 'Reseña no encontrada' });
        }       
            
        res.status(200).json({ mensaje: 'Reseña eliminada correctamente' });
    } 
    catch (error) {
        res.status(500).json({ 
            mensaje: 'Error al eliminar la reseña', 
            details: error.message 
        });
    }
};
