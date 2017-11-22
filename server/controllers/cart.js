const Item = require('../models/item')

let viewCart = function(req,res){
  Item.find({})
  .then(result=>{
    res.send(result)
  })
  .catch(err=>{
    res.send(err)
  })
}
let insertCart = function(req,res){
  Item.create({
    nameItem: req.body.nameItem,
    image: req.body.image,
    price: req.body.price
  })
  .then(result=>{
    res.send(result)
  })
  .catch(err=>{
    res.send(err)
  })
}

let removeCart = function(req,res){
  Item.findByIdAndRemove(req.params.id)
  .then(result=>{
    res.send('barang di cart sudah di hapus')
  })
  .catch(err=>{
    res.send(err)
  })
}

module.exports = {
  insertCart,
  removeCart,
  viewCart
};