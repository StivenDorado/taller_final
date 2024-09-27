const { Perro } = require('../models')

// Get
exports.verPerro = async (req, res) => {
    try {
        const resultado = await Perro.findAll();
        res.json(resultado)
    } catch (e) {
        res.json({ mensaje: 'Error'});
    }
}