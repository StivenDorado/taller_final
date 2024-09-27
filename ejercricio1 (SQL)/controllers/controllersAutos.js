const { Auto } = require('../models/autos')


// Get
exports.verAuto = async (req, res) => {
    try {
        const resultado = await Auto.findAll();
        res.json(resultado);
    } catch (e) {
        res.json({ mensaje: 'Error al obtener la lista de Autos' });
    }
};


// Post
exports.crearAuto = async (req, res) => {
    const { nombre, direccion, telefono } = req.body;
    try {
        const p = await Auto.create({ nombre, direccion, telefono });
        res.json(p)
    } catch (e) {
        res.json({ mensaje: 'Error al crear Auto'});
    }
};

// Put
exports.actualizarAuto = async (req, res) => {
    const { id } = req.params;
    const { nombre, direccion, telefono } = req.body;
    try {
        let resBusqueda = await Auto.findByPk(id);
        if (resBusqueda) {
            resBusqueda.nombre = nombre;
            resBusqueda.direccion = direccion;
            resBusqueda.telefono = telefono;
            await resBusqueda.save()
            res.json({ mensaje: 'Actualizado'});
        } else {
            res.json({ mensaje: 'Error Auto no encontrado'});
        }
    } catch (e) {
        res.json({ mensaje: 'Error al actualizar'});
    }
}

// Delete
exports.eliminarAuto = async (req, res) => {
    const { id } = req.params;
    try {
        const busqueda = await Auto.findByPk(id);
        if (busqueda) {
            await busqueda.destroy();
            res.json({ mensaje: 'Auto Eliminado' });
        } else {
            res.json({ mensaje: 'Error Auto no encontrado' });
        }
    } catch (e) {
        res.status(500).json({ mensaje: 'Error al eliminar', error: e.message });
    }
}

