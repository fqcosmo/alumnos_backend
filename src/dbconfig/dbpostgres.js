
const { Pool } = require('pg');

// Cadena de conexión PostgreSQL
const connectionString = "postgres://default:ZCNO8Fbk3cPr@ep-long-thunder-a49asnro.us-east-1.aws.neon.tech:5432/verceldb?sslmode=require";

const pool = new Pool({
    connectionString: connectionString,
});

module.exports = {
    query: (text, params) => pool.query(text, params),
};