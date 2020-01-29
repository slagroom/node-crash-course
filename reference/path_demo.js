const path = require('path');

// basename: Gets the base file name
console.log(path.basename(__filename));

// dirname: Gets the directory name
console.log(path.dirname(__filename));

// extname: Gets the file extension
console.log(path.extname(__filename));

// parse: Gets an object
console.log(path.parse(__filename));

// join: Concatenate paths
console.log(path.join(__dirname, 'test', 'hello.html'));