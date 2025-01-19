const express = require('express')

const app = express();
app.listen(5000, ()=>{
    console.log("Server listening on port 5000");
})

//Middle-ware
const logger = (req,res,next)=>{
    console.log(`URL :: ${req.url}`);
    next();
}

app.use(logger);

app.get('/',(req,res)=>{
    res.send("HOME PAGE");
})

app.get('/about',(req,res)=>{
    res.send("About PAGE");
})

app.get('*',(req,res)=>{
    res.status(404).send("Resource not found");
})