const lodashModule = require('lodash');

let anArray = [3,5,6,[4,2,6]];

let flattenArray = lodashModule.flatMap(anArray);
console.log(flattenArray);