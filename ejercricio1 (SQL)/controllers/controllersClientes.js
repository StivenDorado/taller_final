const { Cliente } = require('../models');

// Get
exports.verCliente = async (req, res) => {
    try {
        const resultado = await Cliente.findAll();
        res.json(resultado);
    } catch (e) {
        res.json({ mensaje: 'Error al obtener la lista de Cliente' });
    }
};


