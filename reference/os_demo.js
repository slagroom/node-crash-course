const os = require('os');

// platform: Get the OS platform
console.log(os.platform());

// arch: Get the CPU arch
console.log(os.arch());

// cpus: Get the CPU info
console.log(os.cpus());

// freemem: Get the free memory
// totalmem: Get the total memory
console.log(`${os.freemem()}/${os.totalmem()}`);

// homedir: Get the home directory
console.log(os.homedir());

// uptime: Get the uptime
console.log(os.uptime());
