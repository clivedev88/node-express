const express = require('express');
const CafeController = require('../controllers/CafesController');

const CafesRouter = express.Router();

const cafeController = new CafeController();

CafesRouter.get('/', cafeController.read);

CafesRouter.get('/:id', cafeController.getById);

CafesRouter.post('/', cafeController.create);

CafesRouter.put('/:id', cafeController.update);

CafesRouter.delete('/:id', cafeController.delete);

module.exports = CafesRouter;