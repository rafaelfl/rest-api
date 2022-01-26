require('module-alias/register')
const { app } = require('./app');
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`🚀 We are live on port ${PORT}.`);
});
