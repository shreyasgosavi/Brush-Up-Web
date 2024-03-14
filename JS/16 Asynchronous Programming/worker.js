console.log("Worker Script Loaded");

//Listen for message from the main thread

addEventListener("message", (message)=>{

    console.log("Message Object is ");
    console.log(message);

    if(message.data.type == "Console"){
        console.log("Value printed in console");
    }
    else if(message.data.type == "Alert"){
        // window.prompt("This is alert");
    }
    postMessage("Job done");
}
)