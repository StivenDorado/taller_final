const mongoose = require('mongoose');

// Definición del esquema para "Adoptante"
const adoptanteSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true // Si `required` es `false`, puedes eliminar esta línea
    },
    correoElectronico: {
        type: String,
        required: true // Si `required` es `false`, puedes eliminar esta línea
    },
    descripcion: {
        type: String,
        required: false
    }
    
    // Otros campos pueden ir aquí
});

// Crear el modelo con el esquema definido
const Adoptante = mongoose.model('Adoptante', adoptanteSchema);

module.exports = Adoptante;
