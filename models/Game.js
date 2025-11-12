const mongoose = require('mongoose');

//Define el esquema del juego
const GameSchema = new mongoose.Schema({

    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio' ],
        trim: true,
        uniuqy: true
    },

    Plataforma: {
        type: String,
        required: [true, 'La plataforma es obligatoria' ],
        trim: true
    },

    portada: {
        type: String,
        required: false
    },

    estado: {
        type: String,
        enum: ['Jugando', 'Completado', 'Pendiente', 'Abandonado'],
        default: 'Pendiente'
    },

    horasJugadas: {
        type: Number,
        default: 0,
        min: 0 //Esto evita que se ingresen horas negativas
    }

}, { 
    timestamps: true //Agrega campos createdAt y updatedAt automáticamente
});
module.exports = mongoose.model('Game', GameSchema);

