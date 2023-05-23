require('dotenv').config()
const mongoose = require('mongoose')

mongoUrl = process.env.mongoUrl

mongoose.connect(mongoUrl).then(()=>console.log('mongo server connected...')).catch((error)=> console.log(error))

module.exports = mongoose