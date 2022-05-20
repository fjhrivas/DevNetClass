const os = require('node:os');
console.log(os.platform());
console.log("FREE MEM", os.freemem(), "Bytes");