const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/reviewController');

// Rutas CRUD para reviews
router.post('/', reviewController.createReview);         // Crear review
router.get('/', reviewController.getAllReviews);         // Obtener todas
router.get('/:id', reviewController.getReviewById);      // Obtener una por ID
router.put('/:id', reviewController.updateReviewById);   // Actualizar
router.delete('/:id', reviewController.deleteReviewById);// Eliminar

module.exports = router;
