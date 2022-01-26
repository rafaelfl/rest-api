const homeRouter = require('@routes/home');
const menuRouter = require('@routes/menu');

const routeModules = app => {
    const apiPrefix = '/api';
  
    app.use(apiPrefix, homeRouter);
    app.use(apiPrefix, menuRouter);
    // TODO: [task] Add the order routes
  
    return app;
};

module.exports = routeModules;