const Item = require ('../models/item')

var findItem= function(req,res){
  Item.find()
  .then(result =>{
    res.send(result)
  })
  .catch(err=>{
    console.error(err)
  })
}

var insertItem = function (req,res){
  Item.create({
    nameItem: req.body.nameItem,
    quantity : req.body.quantity,
    code: req.body.code,
    image : req.body.image,
    price : req.body.price 
  })
  .then(result =>{
    res.send(result)
  })
  .catch(err =>{
    console.error(err)
  })
}

module.exports = {
  findItem,
  insertItem
};
