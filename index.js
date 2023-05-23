require('./config/db')
const express = require('express')
const serverConfig = require('./config/config')
const router = require('./routes/user')
const app = express()

//middlewares
app.use('/api/user',router) 

app.listen(serverConfig.port,serverConfig.host,()=>{
    console.log(`server running on http://${serverConfig.host}:${serverConfig.port}`);
})