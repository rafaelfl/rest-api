const { bd } = require('./model/bd');

const DataValidation = require('./middleware/dataValidation');

const { cardapioController } = require('./controller/cardapio.controller');

const express = require('express');

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Bem vindo à Pizzaria SD");
});

app.get("/cardapio", cardapioController.listar());

app.post("/cardapio", DataValidation.validate, cardapioController.cadastrar());

// --> REQ -->     MIDDLEWARE1 --> MW2 --> MW3 --> ....   --> EXEC

module.exports = {
    app,
};