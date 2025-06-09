class CafesModel {
    static list = [
        {
            id: 1,
            tipo:  "tradicional",
            tamanho: "M"
        },
        {
            id: 2,
            tipo:  "extra-forte",
            tamanho: "G"
        }
    ];

    static read () {
        return CafesModel.list;
    };

    static getByIg(id) {
        const cafe = CafesModel.list.filter(item => item.id === Number (id));
        return cafe;
    }

    static create(cafe) {
        return CafesModel.list.push(cafe);
    };

    static update(id, cafe) {
        const index = CafesModel.list.findIndex(item => item.id === Number(id));
        CafesModel.list[index] = cafe;
    }

    static delete(id) {
        const index = CafesModel.list.findIndex(item => item.id === Number(id));
        CafesModel.list.splice(index, 1);
    }
}

module.exports = CafesModel;