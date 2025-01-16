const serverModule = require('http');

//Event-loop

// It off-loads the task and registers a callback which is called after completing the task

console.log("Started");

setTimeout(()=>{
    console.log("Executed after 2 seconds of break");
    
},2000);

console.log("Executed before the off-loaded task.");
console.log("Executed before the off-loaded task. Another");

//Server-module using eventlooping


const server = serverModule.createServer((req,res)=>{

    if(req){
        console.log("ERROR Occurred");
    }
    res.end("Here is the response !!");

});

server.listen(5000, ()=>{
    console.log("Listining on port 5000");
    
})
