
const { bd } = require('../model/bd');

class CardapioService {
    constructor(bd) {
        this._bd = bd;
    }

    listarCardapio() {
        return this._bd.cardapio;
    }

    cadastrarPizza(pizza) {
        this._bd.cardapio.push(pizza);

        return this._bd.cardapio;
    }
}

const cardapioService = new CardapioService(bd);

module.exports = {
    cardapioService
};