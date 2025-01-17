const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const {alumnos_router} = require('./routers/alumnos.router.js');

const PORT = 3100;

const App = express();

const corsOptions = {
    origin: '*',
    optionsSuccessStatus: '200'
}

App.use(express.json());
App.use('/api',alumnos_router);
App.use(morgan('dev'));
App.listen(PORT, () => {
    console.log(`Server Listen in Port: ${PORT}`)
})