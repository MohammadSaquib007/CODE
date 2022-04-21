const express = require('express');
const router = express.Router();

const CowinController = require("../controllers/CowinController")
router.post("/cowin/getOtp", CowinController.getOtp)

module.exports = router;