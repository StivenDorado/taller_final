const express = require('express');
const router = express.Router();
const perroController = require('../controllers/controllersPerro');


router.get('/adopciones', perroController.verPerro);
router.post('/adopciones', perroController);
router.put('/adopciones/:id', perroController);
router.delete('/adopciones/:id', perroController);

module.exports = router 

