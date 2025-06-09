const CafesModel = require('../models/CafesModel');

class CafeController {
    read(req, res) {
        const cafes = CafesModel.read()
        return res.json(cafes);
    };

    getById(req, res) {
        const id = req.params.id;
        const cafe = CafesModel.getByIg(id);
        return res.status(200).json(cafe);
    };

    create(req, res) {
        const body = req.body;
        CafesModel.create(body);
        return res.status(201).json({
            message: "Café criado com sucesso."
        });
    };

    update(req, res) {
        const id = req.params.id; 
        const body = req.body;
        CafesModel.update(id, body);
        return res.json({
            message: "Café atualizado com sucesso."
        });
    };

    delete(req, res) {
        const id = req.params.id;
        CafesModel.delete(id);
        return res.json({
            message: "Café removido com sucesso."
        });
    };
}

module.exports = CafeController;