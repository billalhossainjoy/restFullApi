require('dotenv').config()
const express = require('express')
const app = express()
const router = express.Router()


// middlewares
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(router)

//configaration file 
app.config = {
    port : process.env.port,
    host : '192.168.0.1'
}

app.listen(app.config.port,()=>{
    console.log(`server running on http://${app.config.host}:${app.config.port}`);
})

