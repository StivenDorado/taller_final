// get post delete

const express = require('express');
const router =  express.Router();
const adaptanteController = require('../controllers/perroController') 


router.get('/perro', adaptanteController.obtenerPerros) // PONER BIEN LAS RUTAS

router.post('/perro', adaptanteController.crearPerro)

router.put('/perro/:id', adaptanteController.actualizarPerro)

router.delete('/perro/:id', adaptanteController.eliminarPerro)


module.exports = router;

