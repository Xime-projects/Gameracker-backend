const express = require('express');
const router = express.Router();
const GameController = require('../controllers/gameController');

// Rutas CRUD para juegos
router.post('/games', GameController.createGame);
router.get('/games', GameController.getAllGames);
router.get('/games/:id', GameController.getGameById);
router.put('/games/:id', GameController.updateGameById);
router.delete('/games/:id', GameController.deleteGameById);

module.exports = router;