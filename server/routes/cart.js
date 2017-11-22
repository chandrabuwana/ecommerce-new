const express = require('express')
const router = express.Router()
const Cart = require('../controllers/cart')
router.get('/',Cart.viewCart)
router.post('/', Cart.insertCart)
router.delete('/:id',Cart.removeCart)

module.exports = router