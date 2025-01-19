const express = require('express');

const appServer = express();

const loggerMiddleWare = (req,res,next)=>{
    console.log("Requested URL : "+req.url);  
    next();
};

appServer.get('/',loggerMiddleWare,(req,res)=>{
    res.send("HOME PAGE");
});


appServer.get('/parameterValue/:pVal',loggerMiddleWare,(req,res)=>{
    let {pVal} = req.params;
    res.send("Parameter passed is "+pVal);
});

appServer.listen(5000, ()=>{
    console.log("Server Listening on port 5000");
})