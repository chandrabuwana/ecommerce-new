const express = require('express')
const router = express.Router()
const item = require('../controllers/item')
router.get('/',item.findItem)
router.post('/', item.insertItem)

module.exports = router;