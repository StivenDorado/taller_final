// get post delete

const express = require('express');
const router =  express.Router();
const adaptanteController = require('../controllers/adoptanteController') 


router.get('/adoptante', adaptanteController.obtenerAdoptantes) // PONER BIEN LAS RUTAS

router.post('/adoptante', adaptanteController.crearAdoptante)

router.put('/adoptante/:id', adaptanteController.actualizarAdoptante)

router.delete('/adoptante/:id', adaptanteController.eliminarAdoptante)


module.exports = router;

