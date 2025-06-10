require('dotenv').config();
const express = require('express');
const jwt = require('jsonwebtoken');

const AuthController = require('../controllers/AuthController');
const PublicRoutes = express.Router();

PublicRoutes.post('/login', (req, res) => {
    const uniqueToken = process.env.UNIQUE_TOKEN;
    const body = req.body;
    const auth = new AuthController();
    const data = auth.login(body.login, body.senha);

    if (data) {
        const token = jwt.sign({ login: data.login, senha: data.senha}, uniqueToken, { expiresIn: '8h' });
        return res.json({
            token: token
        });
    };
    return res.json({
        message: 'Credenciais inválidas.'
    })
})

module.exports = PublicRoutes;