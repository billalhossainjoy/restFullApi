const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        unique:true
    },
    password:{
        type:String
    }
})

const Users = ('User',userSchema)

module.exports = Users