const express = require('express');
const router = express.Router();
const controllerAuto = require('../controllers/controllersAutos');


router.get('/auto', controllerAuto.verAuto);
router.post('/auto', controllerAuto.crearAuto);
router.put('/auto/:id', controllerAuto.actualizarAuto);
router.delete('/auto/:id', controllerAuto.eliminarAuto);

module.exports = router 

