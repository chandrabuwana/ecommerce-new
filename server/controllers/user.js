const User = require('../models/user')
require('dotenv').config()
var bcrypt = require('bcryptjs')
var jwt = require('jsonwebtoken')

var findAllUser= (req,res)=>{
  User.find()
  .then(result=>{
    res.send(result)
  })
  .catch(err=>{
    res.stattus(500).send(err)
  })
}

var registerUser = (req,res)=>{
  var salt = bcrypt.genSaltSync(10)
  var hash = bcrypt.hashSync (req.body.password, salt)
  User.create({
    username: req.body.username,
    password: hash,
    name: req.body.name,
    salt: salt,
    email: req.body.email,
    phone: req.body.phone,
    address: req.body.address
  })
  .then(data =>{
    res.send(data)
  })
  .catch(err=>{
    res.status(500).send(err)
  })
}

var loginUser = (req,res)=>{
  User.findOne({
    username: req.body.username
  })
  .then(data=>{
    if(bcrypt.compareSync(req.body.password, data.password)){
      var token = jwt.sign({
        _id : data._id,
        username: data.username,
        phone: data.phone,
        email: data.email,
        address: data.address,
        name : data.name
      },process.env.SECRET_KEY)
      res.send({token})
    }
    else{
      console.log('Invalid Password');
    }
  })
  .catch(err=>{
    res.send('Username dan password does not exist')
  })
}

let decode = function (req,res){
  console.log(req.body.password);
}

module.exports = {
  findAllUser,
  registerUser,
  loginUser
};