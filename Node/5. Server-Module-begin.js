const httpModule = require('http');

const server = httpModule.createServer((req,res)=>{
    // console.log("Setup");
    console.log(req);
    res.write("HELLO !!");
    res.end();
})

console.log("Listening");
server.listen(5000);