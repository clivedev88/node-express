const jwt = require('jsonwebtoken');
function signToken(login, options = {}) {
    const chaveApi = process.env.CHAVE_API;
    return jwt.sign(login, chaveApi, {
        expiresIn: '8h',
        ...options
    })
}

module.exports = signToken;