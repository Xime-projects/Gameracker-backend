//Importación bibliotecas y creación de constantes
require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI; // 👈 CORREGIDO

// Middleware para procesar JSON
app.use(express.json());

// Conexión a la BD y manejo de errores
mongoose.connect(MONGO_URI) // 👈 CORREGIDO
  .then(() => {
    console.log('Conexión exitosa a MongoDB Atlas');
  })
  .catch((err) => {
    console.log('Error de conexión:', err.message);
    process.exit(1);
  });

// Rutas
const gameRoutes = require('./routes/gameRoutes');
app.use('/games', gameRoutes);

const reviewRoutes = require('./routes/reviewsRoutes');
app.use('/api/Reviews', reviewRoutes);

app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});


//mongodb+srv://jacobogarcesoquendo:aFJzVMGN3o7fA38A@cluster0.mqwbn.mongodb.net/{nombre}