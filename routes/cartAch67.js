const express = require('express')
const router = express.Router()

var getCartAch67 = require('../controllers/getCartAch67')
var addItemAch67 = require('../controllers/addItemAch67')
var removeItemAch67 = require('../controllers/removeItemAch67')
var checkout = require('../controllers/checkout')

router.get('/', getCartAch67.getCart)
// router.post('/', addItemAch67.addItem)
// router.delete('/', removeItemAch67.)
// router.post('/checkout', checkout.addTwoNumbers)

module.exports = router; 
