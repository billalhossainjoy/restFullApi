require('dotenv').config()
const express = require('express')
const app = express()
const router = express.Router()


// middlewares
app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.config = {
    port : process.env.port,
    host : '192.168.0.1'
}


router.route('/').get((req,res)=>{
    res.send('billalhossain')
})


app.listen(app.config.port,()=>{
    console.log(`server running on http://${app.config.host}:${app.config.port}`);
})

