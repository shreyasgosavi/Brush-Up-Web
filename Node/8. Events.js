const EventEmitter = require('events');
const server = require('http');

let eventEmitter = new EventEmitter();

eventEmitter.on('heheEvent',()=>{
    console.log("HEHEHEEHEH!!!!!!!!!!!!!");
    
})

eventEmitter.emit('heheEvent');

// Server using events

const webServerInstance = server.createServer();

webServerInstance.listen(5000, ()=>{
    console.log("Listening on port 5000");
});

webServerInstance.on('request',(req,res)=>{

    if(req.url === '/')
        res.end("HOME PAGE")
    else if(req.url === 'about')
        res.end("About PAGE")
    else{
        res. write(`Page not found.</br><a href="/">Home</a>`);
        res.end();
    }
})