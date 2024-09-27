const Adoptante = require('../models/adoptanteModel');

// adoptante Controllers

// Get all departments
const obtenerDpte = async (req, res) => {
    try {
        const departaments = await adoptante.find();
        res.json(departaments);
    }
    catch (e) {
        res.status(500).json({mensaje:'Error al mostrar adoptante'})
    }
}

// Post all Departaments
const crearDpte = async (req, res) => {
    try {
        const { nombre, correoElectronico, direccion} = req.body;
        const newDpte = new adoptante({nombre, correoElectronico, direccion});
        await newDpte.save();
        res.json({mensaje:newDpte});
    }
    catch (e) {
        res.status(500).json({mensaje:'Error al crear adoptante'})
    }
}


// PUT - Actualizar un adoptante
const actualizarDpte = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, correoElectronico, direccion} = req.body;
        // Verificar que los campos requeridos no estén vacíos
        if (!nombre || !correoElectronico, direccion) {
            return res.status(400).json({ message: "Los campos nombre y descripción son obligatorios" });
        }
        // Actualizar el adoptante
        const dpteActualizado = await adoptante.findByIdAndUpdate(id, { nombre, correoElectronico, direccion}, { new: true });
        if (!dpteActualizado) {
            return res.status(404).json({ message: "adoptante no encontrado" });
        }
        res.json({ message: "adoptante actualizado con éxito", adoptante: dpteActualizado });
    } catch (e) {
        res.status(500).json({ message: "Error al actualizar el adoptante", error: e.message });
    }
};



// Delete all adoptante
const eliminarDpte = async (req, res) => {
    const { id } = req.params;
    let dpteEliminado = await adoptante.findByIdAndDelete(id);
    if (!dpteEliminado) {
        return res.json({msj: "adoptante no encontrado"});
    }
    else {
        res.json({msj:'adoptante eliminado', dpteEliminado})
    }
}


module.exports = {obtenerDpte, crearDpte, actualizarDpte, eliminarDpte}