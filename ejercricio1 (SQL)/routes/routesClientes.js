const express = require('express');
const router = express.Router();
const controllerCliente = require('../controllers/controllersClientes');


router.get('/cliente', controllerCliente.verCliente);
/* router.post('/cliente', controllerCliente);
router.put('/cliente/:id', controllerCliente);
router.delete('/cliente/:id', controllerCliente); */

module.exports = router 
