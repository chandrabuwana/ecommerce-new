const app = require('express')()
const bodyParser = require('body-parser')
const mongoose =require('mongoose')
const cors = require('cors')
require('dotenv').config()
app.use(cors())

mongoose.connection.openUri(process.env.mongo_url,(err)=>{
  if(err)console.log('database not connected')
  else console.log('database connect')
})

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.set('view engine','html')

const index = require('./routes/index')
const user = require('./routes/user')
const item = require('./routes/item')
const cart = require('./routes/cart')
const transaction = require('./routes/transaction')

app.use('/',index)
app.use('/user',user)
app.use('/item',item)
app.use('/cart',cart)
app.use('/transaction',transaction)

app.listen(3000, ()=>{
  console.log('running at 3000 ayo lari');
})