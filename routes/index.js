const express = require('express');
const router = express.Router();
const author = require("./author_route");

router.use("/authors", author);

module.exports = router;