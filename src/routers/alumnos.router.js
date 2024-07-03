
const express = require('express');
const alumnos_router = express.Router();
const {listarAlumnos, crearAlumnos, actualizarAlumnos, eliminarAlumnos} = require('../controllers/alumnos.controller.js');
const { loginUser } = require('../controllers/account.controller.js');

// Rutas para la administracion de cuentas de usuario
alumnos_router.post('/login',loginUser)

// Ruta para obtener todos los alumnos
alumnos_router.get('/alumnos',listarAlumnos);
alumnos_router.post('/alumnos/crear',crearAlumnos);
alumnos_router.put('/alumnos/actualizar/:id',actualizarAlumnos);
alumnos_router.delete('/alumnos/eliminar/:id_alumno',eliminarAlumnos)

module.exports = {
    alumnos_router
};
