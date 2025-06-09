class BolosModel {
    static list = [
        {
            id: 1,
            sabor: 'Laranja',
            preco: 12
        },
        {
            id: 2,
            sabor: 'Limao',
            preco: 20
        }
    ]
    static read() {
        return BolosModel.list;
    }
    static getById(id) {
        const bolo = BolosModel.list.filter(item => item.id === Number(id));
        return bolo;
    }
    static create(data) {
        BolosModel.list.push(data);
    }
    static update(id, data) {
        const index = BolosModel.list.findIndex(item => item.id === Number(id));
        BolosModel.list[index] = data;
    }
    static delete(id) {
        const index = BolosModel.list.findIndex(item => item.id === Number(id));
        BolosModel.list.splice(index, 1);
    }
}

module.exports = BolosModel;