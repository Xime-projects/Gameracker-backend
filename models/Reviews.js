const mongoose = require('mongoose');
const { Schema } = mongoose;

//El esquema de la reseña
const ReviewSchema = new Schema({
 //Relaciona la reseña con un juego específico, conbase al ID
    juego: {
        type: Schema.Types.ObjectId, 
        ref: 'Game',
        required: true
    },
    puntuacion: {
        type: Number,
        required: true,
        min: 1,
        max: 5
    },
    comentario: {
        type: String,
        required: [true, 'El comentario no puede estar vacío']
    },
    autor: {
        type: String,
        default: 'Usuario GameTracker'
    }
}, {
    timestamps: true //Agrega createdAt y updatedAt automáticamente

});
module.exports = mongoose.model('Review', ReviewSchema);