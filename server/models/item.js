const mongoose =  require('mongoose')
const Schema = mongoose.Schema

const itemSchema= new Schema({
  nameItem: String,
  quantity : Number,
  code: String ,
  image: String,
  price: Number
  // quantity: Number
})

const Item = mongoose.model('Item', itemSchema)

module.exports = Item;
