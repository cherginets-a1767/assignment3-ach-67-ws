const express = require('express')
const router = express.Router()

var getInventory = require('../controllers/getInventory')

router.get('/', getInventory.getInv);

module.exports = router; 