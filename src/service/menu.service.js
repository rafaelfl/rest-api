
const { fakedb } = require('@model/fakedb');

class MenuService {
    constructor(bd) {
        this._bd = bd;
    }

    getMenu() {
        return this._bd.menu;
    }

    registerPizza(pizza) {
        this._bd.menu.push(pizza);

        return this._bd.menu;
    }
}

const menuService = new MenuService(fakedb);

module.exports = {
    menuService
};