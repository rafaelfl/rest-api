const express = require('express');

const routeModules = require('@routes');
const app = express();

app.use(express.json());
routeModules(app);

module.exports = {
    app,
};