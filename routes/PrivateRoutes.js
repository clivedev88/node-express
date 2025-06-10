const express = require('express');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const UserRoute = require('./UserRoute');
const BolosRouter = require('./BolosRoutes');
const CafesRouter = require('./CafesRoutes');

const PrivateRoutes = express.Router();

PrivateRoutes.use((req, res, next) => {
    const key = process.env.UNIQUE_TOKEN;
    const token = req.headers.token;

    if(!token) {
        return res.status(403).send('Não Autorizado!!!')
    }

    try {
        jwt.verify(token, key);
        next();
    } catch (error) {
        return res.status(403).send('Token inválido ou expirado!');
    }
})

PrivateRoutes.use(UserRoute);
PrivateRoutes.use(BolosRouter);
PrivateRoutes.use(CafesRouter);

module.exports = PrivateRoutes