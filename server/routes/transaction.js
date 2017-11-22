const express= require('express')
const router = express.Router()
const transaction = require('../controllers/transaction')

router.get('/', transaction.viewTransaction)
router.get('/:id', transaction.viewOneTransaction)
router.post('/', transaction.insertTrans)
router.delete('/:id', transaction.delOneTransaction)

module.exports = router;