// get post delete

const express = require('express');
const router =  express.Router();
const adaptanteController = require('../controllers/adoptanteController') // Ruta de metodos de departamento 


router.get('/adoptante', adaptanteController.obtenerDpte) // PONER BIEN LAS RUTAS

router.post('/adoptante', adaptanteController.crearDpte)

router.put('/adoptante/:id', adaptanteController.actualizarDpte)

router.delete('/adoptante/:id', adaptanteController.eliminarDpte)


module.exports = router;

