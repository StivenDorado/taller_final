const Adoptante = require('../models/AdoptanteModel'); // Corrección aquí

// Controladores de Adoptantes

// Obtener todos los adoptantes
const obtenerAdoptantes = async (req, res) => {
    try {
        const adoptantes = await Adoptante.find();
        res.json(adoptantes);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al obtener los adoptantes' });
    }
};

// Crear un adoptante
const crearAdoptante = async (req, res) => {
    try {
        const { nombre, correoElectronico, direccion } = req.body;
        const nuevoAdoptante = new Adoptante({ nombre, correoElectronico, direccion });
        await nuevoAdoptante.save();
        res.json({ mensaje: 'Adoptante creado con éxito', adoptante: nuevoAdoptante });
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al crear el adoptante' });
    }
};

// Actualizar un adoptante
const actualizarAdoptante = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, correoElectronico, direccion } = req.body;

        // Verificar que los campos requeridos no estén vacíos
        if (!nombre || !correoElectronico || !direccion) {
            return res.status(400).json({ mensaje: "Los campos nombre, correo electrónico y dirección son obligatorios" });
        }

        // Actualizar el adoptante
        const adoptanteActualizado = await Adoptante.findByIdAndUpdate(id, { nombre, correoElectronico, direccion }, { new: true });

        if (!adoptanteActualizado) {
            return res.status(404).json({ mensaje: "Adoptante no encontrado" });
        }

        res.json({ mensaje: "Adoptante actualizado con éxito", adoptante: adoptanteActualizado });
    } catch (error) {
        res.status(500).json({ mensaje: "Error al actualizar el adoptante", error: error.message });
    }
};

// Eliminar un adoptante
const eliminarAdoptante = async (req, res) => {
    try {
        const { id } = req.params;
        const adoptanteEliminado = await Adoptante.findByIdAndDelete(id);

        if (!adoptanteEliminado) {
            return res.status(404).json({ mensaje: "Adoptante no encontrado" });
        }

        res.json({ mensaje: 'Adoptante eliminado con éxito', adoptante: adoptanteEliminado });
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al eliminar el adoptante', error: error.message });
    }
};

module.exports = { obtenerAdoptantes, crearAdoptante, actualizarAdoptante, eliminarAdoptante };
