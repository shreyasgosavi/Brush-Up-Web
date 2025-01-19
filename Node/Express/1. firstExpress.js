const express = require('express');

const server = express();

server.listen(5000);

server.get('/', (req,res)=>{

    console.log("Landing Path");
    res.writeHead(200,{'content-type':'text/html'});
    res.write('Home Page').end();
});

server.all("*",(req,res)=>{

    res.status(404).send("Page Not Found");

})