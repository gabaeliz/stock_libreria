const { addStock } = require("../controllers/stock");
const { Router } = require("express");
const router = Router();

router.post("/addStock", addStock);


module.exports = { router };