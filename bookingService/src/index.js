const express = require("express");
const serverConfig = require("./config/serverConfig");
const app=express()

const apiRoutes=require('./routes/index')
const startServer=()=>{

    app.use(express.json())
    app.use('/api',apiRoutes)
    app.listen(PORT,()=>{
        console.log("Running at port ",serverConfig.PORT)
    })

}

startServer()