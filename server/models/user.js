const mongoose =require('mongoose')
const Schema = mongoose.Schema

var userSchema= new Schema ({
  name: String,
  username:  {
    type:String,
  unique: true
  },
  password : String,
  salt: String,
  email: String,
  phone: Number,
  address: String
})

var User = mongoose.model('User',userSchema)

module.exports = User;