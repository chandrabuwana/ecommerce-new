const mongoose = require('mongoose')
const Schema = mongoose.Schema,
ObjectId = Schema.ObjectId

var Transactions = new Schema({
  costumer : { type:Schema.Types.ObjectId, ref: 'User'},
  iteminCart : [{ 
    type:Schema.Types.ObjectId, ref: 'Item'
  }]
})

var dataTransaction = mongoose.model('dataTransaction',Transactions)
module.exports = dataTransaction;