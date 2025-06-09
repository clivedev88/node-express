const express = require('express');
const BoloController = require('../controllers/BolosController');

const BolosRouter = express.Router();

const bolosController = new BoloController();

BolosRouter.get('/', bolosController.read);

BolosRouter.get('/:id', bolosController.getById);

BolosRouter.post('/', bolosController.create);

BolosRouter.put('/:id', bolosController.update);

BolosRouter.delete('/:id', bolosController.delete);

module.exports = BolosRouter;