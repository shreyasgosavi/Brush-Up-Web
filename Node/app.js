//Event-loop

// It off-loads the task and registers a callback which is called after completing the task

console.log("Started");

setTimeout(()=>{
    console.log("Executed after 2 seconds of break");
    
},2000);

console.log("Executed before the off-loaded task.");
console.log("Executed before the off-loaded task. Another");