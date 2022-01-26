
class DataValidation {
    static validate = (req, res, next) => {
        const pizza = req.body;

        if (!pizza.id) {
            return res.status(400).json({
                status: 400,
                error: 'Pizza needs an ID!!!'
            });
        }

        next();
    }
}

module.exports = DataValidation;