const express = require('express');

const PublicRoutes = require('./routes/PublicRoutes');
const PrivateRoutes = require('./routes/PrivateRoutes');

const app = express();

const BoloRoute = require('./routes/BolosRoutes');
const CafeRoute = require('./routes/CafesRoutes');

app.use(express.json());

app.get('/', (req, res) => {
    res.send('API de Bolos funcionando!');
});

app.use(PublicRoutes);
app.use(PrivateRoutes);



app.use('/bolos', BoloRoute);
app.use('/cafes', CafeRoute);

module.exports = app;