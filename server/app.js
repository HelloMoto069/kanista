const express = require('express')
const app = express()
const PORT = 7000
const mongoose = require('mongoose')
const {MONGOURI} = require('./keys')

//Anurudh069
//Anurudh..069

require('./models/users')
require('./models/post')
// mongoose.model('User')


app.use(express.json())
app.use(require('./routes/auth'))
app.use(require('./routes/post'))

mongoose.connect(MONGOURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoose.connection.on('connected', ()=>{
    console.log('connected to mongo... oh yeah..!!!! hello moto')
})

mongoose.connection.on('error', (err)=>{
    console.log('error.. BC..!!! hello moto', err)
})

app.listen(PORT,()=>{
    console.log("server is running on",PORT)
})