const path = require('path');

console.log(`Path seperator is ${path.sep}`);

console.log(`Path joined : ${path.join('one','two\\four','file.txt')}`);
console.log(`Path basename : ${path.basename(path.join('one','two'))}`)

console.log(`Absolute Path joined : ${path.resolve(path.join(path.sep+'one','two\\four','file.txt'))}`);
