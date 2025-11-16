const express = require('express');
const router = express.Router();
const GameController = require('../controllers/gameController');
const { createGamesBulk } = require('../controllers/gameController');


// Rutas CRUD para juegos
router.post('/', GameController.createGame);
router.get('/', GameController.getAllGames);
router.get('/:id', GameController.getGameById);
router.put('/:id', GameController.updateGameById);
router.delete('/:id', GameController.deleteGameById);

// Crear varios juegos a la vez
router.post('/bulk', GameController.createGamesBulk);

module.exports = router;