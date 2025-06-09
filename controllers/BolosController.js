const BoloModel = require('../models/BolosModel');

class BoloController {
    read(req, res) {
        const bolos = BoloModel.read();
        return res.json(bolos);
    }

    getById(req, res) {
        const id = req.params.id;
        const bolo = BoloModel.getById(id);
        return res.status(200).json(bolo)
    }

    create(req, res) {
        const body = req.body;
        BoloModel.create(body);
        return res.status(201).json({
            message: "Bolo criado com sucesso."
        })
    }

    update(req, res) {
        const id = req.params.id;
        const body = req.body;
        BoloModel.update(id, body);
        return res.json({
            message: "Bolo atualizado com sucesso."
        })
    }

    delete(req, res) {
        const id = req.params.id;
        BoloModel.delete(id);
        return res.json({
            message: "Bolo removido com sucesso."
        })
    }
}

module.exports = BoloController;