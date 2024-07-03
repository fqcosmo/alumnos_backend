const { query } = require('../dbconfig/dbpostgres.js');
const {GenerateJWT} = require('../utils/GenerateToken.js');

const loginUser = async(req, res) => {
    try {
        const { email, password } = req.body;
        console.log(req.body);

        const result = await query('SELECT * FROM persons WHERE email = $1',[email]);

        if (!result.rows || result.rows.length === 0) {
            throw new Error('Credenciales inválidas');
        }

        const token = GenerateJWT(email);

        res.json({
            userData: result.rows, // Suponiendo que solo se espera un usuario con un email único
            token: token
        });

    } catch (error) {
        console.error('Error executing query', error);
        res.status(500).json({ error: 'Error executing query' });
    }
};

module.exports = {
    loginUser
}