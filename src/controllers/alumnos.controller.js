const { query } = require('../dbconfig/dbpostgres.js');

const listarAlumnos = async (req, res) => {
    try {
        const result = await query('SELECT * FROM alumnos'); // Ejemplo de consulta SQL
        res.json(result.rows); // Devuelve los resultados como JSON
    } catch (error) {
        console.error('Error executing query', error);
        res.status(500).json({ error: 'Error executing query' });
    }
}


const crearAlumnos = async (req, res) => {
    try {
        const { id_alumno, nombre } = req.body;
        if (id_alumno == '' || nombre == '') {
            res.status(400).json('Faltan Campos por llenar')
        }
        const result = await query('INSERT INTO alumnos (id_alumno, nombre) VALUES ($1,$2 )', [id_alumno, nombre]);
        if (result == null) {
            throw new Error('Error al crear alumno')
        }
        res.status(201).json({ message: 'Alumno Creado Correctamente' });
    } catch (error) {
        console.error('Error executing query', error);
        res.status(500).json({ error: 'Error executing query' });
    }
}

const actualizarAlumnos = async (req, res) => {
    try {
        const { id_alumno, nombre } = req.body;
        if (!id_alumno || !nombre) {
            return res.status(400).json({ error: 'Faltan campos por llenar' });
        }

        const result = await query('UPDATE alumnos SET nombre = $2 WHERE id_alumno = $1', [id_alumno, nombre]);

        if (result.rowCount > 0) {
            res.status(200).json({ message: 'Alumno actualizado correctamente' });
        } else {
            throw new Error('No se encontró ningún alumno con ese ID');
        }
    } catch (error) {
        console.error('Error al ejecutar la consulta', error);
        res.status(500).json({ error: 'Error al ejecutar la consulta' });
    }
}

const eliminarAlumnos = async(req,res) => {
    try {
        const {id_alumno} = req.params;
        if(!id_alumno){
            return res.status(400).json({ error: 'Faltan campos por llenar' });
        }

        const result = await query('DELETE FROM alumnos WHERE id_alumno = $1',[id_alumno]);
        if(result.rowCount > 0){
            res.status(200).json({message: 'El alumno se ah eliminado correctamente'})
        }else{
            throw new Error('No se encontró ningún alumno con ese ID');
        }
    } catch (error) {
        console.error('Error al ejecutar la consulta', error);
        res.status(500).json({ error: 'Error al ejecutar la consulta' });
    }
}


module.exports = {
    listarAlumnos,
    crearAlumnos,
    actualizarAlumnos,
    eliminarAlumnos
}