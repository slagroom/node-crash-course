const http = require('http');

const server = http.createServer((req, resp) => {
    resp.write('Hello, world!');
    resp.end();
});

server.listen(12345, null, null, () => {
    console.log('serving...');
});
