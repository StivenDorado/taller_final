const mongoose = require('mongoose');

// Definición del esquema para "Adoptante"
const adoptanteSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true 
    },
    raza: {
        type: String,
        required: true, 
        unique: true,   
    },
    edad: {
        type: Number,
        required: true,
    },
    tamaño: {
        type: String,
        required: true,
    },
    estadoAdopcion: {
        type: String,
        required: true,
    }
});

// Crear el modelo con el esquema definido
const Perro = mongoose.model('Perros', adoptanteSchema);

module.exports = Perro;
