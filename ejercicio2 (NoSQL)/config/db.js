const mongoose = require("mongoose");

const conexionDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://golds9013:stiven@cluster0.gup76.mongodb.net/adoptado?retryWrites=true&w=majority&appName=Cluster0');
        console.log('Conectado a la base de datos');
    } catch (e) {
        console.error('Error al conectar a la base de datos', e);
        process.exit(1); // Opcional, puedes terminar el proceso si no se conecta
    }
}

module.exports = conexionDB;
