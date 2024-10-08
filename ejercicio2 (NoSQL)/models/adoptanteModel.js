const mongoose = require('mongoose');

// Definición del esquema para "Adoptante"
const adoptanteSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true 
    },
    correoElectronico: {
        type: String,
        required: true, 
        unique: true,   
    },
    direccion: {
        type: String,
        required: true 
    }
});

// Crear el modelo con el esquema definido
const Adoptante = mongoose.model('Adoptante', adoptanteSchema);

module.exports = Adoptante;
