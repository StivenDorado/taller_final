//db
const conexionDB = require('./config/db');

// express
const express = require('express');
const app = express();
const port = 4000;

// Rutas a Usar
const adoptanteRouter = require('./routes/adoptanteRouter')
const perroRouter = require('./routes/perroRouter')



// Uso de Rutas
app.use(express.json())


app.use('/api', adoptanteRouter)


app.use('/api', perroRouter)



// Conectar con Base de datos 
conexionDB().then(() => {
    // Conexion a servidor
    app.listen(port, () =>{
        console.log('Servidor corriendo')
});
}).catch((error) => {
    console.log('no se pudo iniciar el servidor devido a un error de conexion en la base dde datos', error);
});

