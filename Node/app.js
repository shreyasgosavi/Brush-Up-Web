const httpModule = require('http');


const httpServer = httpModule.createServer((req,res)=>{

    console.log("Request reached");
    console.log(req.url);
    res.writeHead(200,{'content-type':'text/html'});
    res.end("<h1>HELLO <i>Amazinggg</i></h1>");
});

httpServer.listen(4000);

