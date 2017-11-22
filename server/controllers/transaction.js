const Transaction = require('../models/transaction')

let insertTrans = function(req,res){
  Transaction.create({
    costumer : req.body.costumer,
    iteminCart : req.body
  }, function(err,result){
    if(!err){
      res.send(result)
    }else{
      res.send(err)
    }
  })
}

let viewTransaction = function(req,res){
  Transaction.find({})
  .populate('costumer')
  .populate('iteminCart')
  .then(result=>{
    res.send(result)
  })
  .catch(err=>{
    res.send(err)
  })
}

let viewOneTransaction = function(req,res){
  Transaction.findById({_id:req.params.id})
  .then(result=>{
    res.send(result)
  })
  .catch(err=>{
    res.send(err)
  })
}

let delOneTransaction = function(req,res){
  Transaction.findByIdAndRemove({_id: req.params.id })

  .then(result=>{
    res.send('data Sudah dihapus')
  })
  .catch(err=>{
    res.send(err)
  })
}
module.exports = {
  insertTrans,
  viewTransaction,
  viewOneTransaction,
  delOneTransaction
};