const {createReadStream} = require('fs');

let fileContent = createReadStream('./Files/asyncDataWritten.txt',{encoding:'utf-8'});

let content = fileContent.on('data',(content)=>{
    console.log(content);
})

console.log("-----------------------Content");

// console.log(content);
