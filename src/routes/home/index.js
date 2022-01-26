const { Router } = require('express');

const router = Router();

router.get("/", (req, res) => {
    res.send("Welcome Distributed Systems Pizza Shop!");
});

module.exports = router;