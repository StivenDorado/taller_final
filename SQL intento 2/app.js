const express = require('express')
const app = express();
require('dotenv').config(); // se usa para usar el .env
const routerPerro = require('./routes/routesPerro')
const PORT = process.env.PORT


app.use(express.json());

// Adoptante
app.use('/api', );

// Perro
app.use('/api', routerPerro);


app.listen(PORT, () => {
    console.log('Servidor corriendo')
})
