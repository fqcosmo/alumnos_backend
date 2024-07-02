
const express = require('express');
const alumnos_router = express.Router();
const { query } = require('../dbconfig/dbpostgres.js'); // Ajusta la ruta según la ubicación de tu archivo dbpostgres.js
const {listarAlumnos} = require('../controllers/alumnos.controller.js')

alumnos_router.get('/prueba',(req,res) => {
    res.send('Hola Prueba')
})

// Ruta para obtener todos los alumnos
alumnos_router.get('/alumnos',listarAlumnos);

module.exports = {
    alumnos_router
};
