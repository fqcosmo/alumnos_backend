const {query} = require('../dbconfig/dbpostgres.js');

const listarAlumnos = async(req,res) => {
    try {
        const result = await query('SELECT * FROM alumnos'); // Ejemplo de consulta SQL
        res.json(result.rows); // Devuelve los resultados como JSON
    } catch (error) {
        console.error('Error executing query', error);
        res.status(500).json({ error: 'Error executing query' });
    }
}


module.exports = {
    listarAlumnos
}