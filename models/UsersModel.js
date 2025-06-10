class UsersModel {
    static list = [
        {
            id: 1,
            login: 'admin1',
            senha: 'admin123'
        },
        {
            id: 2,
            login: 'admin2',
            senha: 'admin321'
        }
    ];

    static authenticate(login, senha) {
        const index = UsersModel.list.findIndex(item => item.login === login && item.senha === senha);
        return UsersModel.list[index];
    }

    static read() {
        return UsersModel.list();
    }

    static getByIg() {
        const user = UsersModel.list.filter(item => item.id === Number(id));
        return user;
    }

    static create(user) {
        UsersModel.list.push(user);
    }

    static update(id, user) {
        const index = UsersModel.list.findIndex(item => item.id === Number(id));
        UsersModel.list[index] = user;
    }

    static delete(id) {
        const index = UsersModel.list.findIndex(item => item.id === Number(id));
        const data = UsersModel.list.splice(index, 1);
        UsersModel.list = data;
    }
}

module.exports = UsersModel;