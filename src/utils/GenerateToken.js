const jwt = require('jsonwebtoken');


const GenerateJWT = (username) => {
    const Payload= {
        username: username
    }
    const claveSecreta = "claveSecretaSuperSegura"
    const token = jwt.sign(Payload,claveSecreta);
    return token;
}

module.exports = {
    GenerateJWT
}