const Perro = require('../models/perroModel'); // Corrección en la importación

// Controladores de Perros

// Obtener todos los perros
const obtenerPerros = async (req, res) => {
    try {
        const perros = await Perro.find();
        res.json(perros);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al obtener los perros', error: error.message });
    }
};

// Crear un perro
const crearPerro = async (req, res) => {
    try {
        const { nombre, raza, edad, tamaño, estadoAdopcion } = req.body;
        const nuevoPerro = new Perro({ nombre, raza, edad, tamaño, estadoAdopcion });
        await nuevoPerro.save();
        res.json({ mensaje: 'Perro creado con éxito', perro: nuevoPerro });
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al crear el perro', error: error.message });
    }
};

// Actualizar un perro
const actualizarPerro = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, raza, edad, tamaño, estadoAdopcion } = req.body;

        // Verificar que los campos requeridos no estén vacíos
        if (!nombre || !raza || !edad || !tamaño || !estadoAdopcion) {
            return res.status(400).json({ mensaje: "Todos los campos son obligatorios" });
        }

        // Actualizar el perro
        const perroActualizado = await Perro.findByIdAndUpdate(id, { nombre, raza, edad, tamaño, estadoAdopcion }, { new: true });

        if (!perroActualizado) {
            return res.status(404).json({ mensaje: "Perro no encontrado" });
        }

        res.json({ mensaje: "Perro actualizado con éxito", perro: perroActualizado });
    } catch (error) {
        res.status(500).json({ mensaje: "Error al actualizar el perro", error: error.message });
    }
};

// Eliminar un perro
const eliminarPerro = async (req, res) => {
    try {
        const { id } = req.params;
        const perroEliminado = await Perro.findByIdAndDelete(id);

        if (!perroEliminado) {
            return res.status(404).json({ mensaje: "Perro no encontrado" });
        }

        res.json({ mensaje: 'Perro eliminado con éxito', perro: perroEliminado });
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al eliminar el perro', error: error.message });
    }
};

module.exports = { obtenerPerros, crearPerro, actualizarPerro, eliminarPerro };
