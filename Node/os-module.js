const osModule = require('os')

console.log(osModule.EOL);
console.log(osModule.userInfo());
console.log("OS type "+osModule.type());
console.log(`System up-time is ${osModule.uptime()} seconds`);