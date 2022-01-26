const { Router } = require('express');
const DataValidation = require('@middleware/dataValidation');

const { menuController } = require('@controller/menu.controller');

const router = Router();

router.get("/menu", menuController.getItems());
router.post("/menu", DataValidation.validate, menuController.register());

module.exports = router;