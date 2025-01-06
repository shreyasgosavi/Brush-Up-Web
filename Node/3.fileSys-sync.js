const {writeFileSync, readFileSync} = require('fs');

//Reading file synchronously
const fileContent = readFileSync('./Files/sampleText.txt', 'utf8');
console.log(fileContent);

writeFileSync('./Files/someOtherSample.txt','File create by a js file.');

