
class DataValidation {
    static validate = (req, res, next) => {
        const pizza = req.body;

        if (!pizza.id) {
            return res.status(400).json({
                status: 400,
                error: 'A pizza precisa de um ID!!!'
            });
        }

        next();
    }
}

module.exports = DataValidation;