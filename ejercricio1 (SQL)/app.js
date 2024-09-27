const express = require('express')
const app = express();
require('dotenv').config(); // se usa para usar el .env
const PORT = process.env.PORT
const routesAuto = require('./routes/routesAutos');
const routerCliente = require('./routes/routesClientes');




app.use(express.json());

// Aautito
app.use('/api', routesAuto);

// Cliente
app.use('/api', routerCliente);

/* // Reserva
app.use('/api', );  */

app.listen(PORT, () => {
    console.log('Servidor corriendo')
})
