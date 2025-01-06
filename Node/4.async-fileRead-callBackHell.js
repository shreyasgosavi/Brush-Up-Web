const {readFile, writeFile, read} = require('fs');


//Call-back hell
readFile('./Files/sampleText.txt','utf8',(err, data)=>{

    if(err){
        console.log("Some error while reading the file");
        return;
    }
    
    let firstData = data;
    console.log("Data fetched from file 1");

    readFile('./Files/sampleTwoText.txt','utf8',(err, data)=>{
        if(err){
            console.log("Some error wile reading second file.");
        }

        let secondData = data;
        console.log("Data fetched from file 2");

        writeFile('./Files/asyncDataWritten.txt',`Data : ${firstData} : ${secondData}`, (err,data)=>{
            if(err){
                console.log("Error while writing into the file");
                console.log(err);
                return;
            }
            console.log("DONEE");
        });
    });
});