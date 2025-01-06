const {writeFileSync, readFileSync} = require('fs');


//Reading file synchronously
const fileContent = readFileSync('./Files/sampleText.txt', 'utf-8');

console.log(fileContent);
