
const { menuService } = require('@service/menu.service');

class MenuController {
    getItems() {
        return (req, res) => {
            res.json(menuService.getMenu());
        };
    }

    register() {
        return (req, res) => {
            const pizza = req.body;

            res.json(menuService.registerPizza(pizza));
        };
    }
}

const menuController = new MenuController();

module.exports = {
    menuController
};