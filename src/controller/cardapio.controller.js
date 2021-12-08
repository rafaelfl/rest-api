
const { cardapioService } = require('../service/cardapio.service');

class CardapioController {
    listar() {
        return (req, res) => {
            res.json(cardapioService.listarCardapio());
        };
    }

    cadastrar() {
        return (req, res) => {
            const pizza = req.body;

            res.json(cardapioService.cadastrarPizza(pizza));
        };
    }
}

const cardapioController = new CardapioController();

module.exports = {
    cardapioController
};