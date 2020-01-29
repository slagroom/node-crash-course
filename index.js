const fs = require('fs');
const http = require('http');
const path = require('path');

const publicFilesPath = path.join(__dirname, 'public');

function statusFromErr(err) {
    if (err.code === 'ENOENT') {
        return 404;
    }
    return 500;
}

const contentTypes = {
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.css': 'text/css',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
};

function contentTypeFromExt(ext) {
    const contentType = contentTypes[ext];
    return contentType === undefined
        ? 'application/octet-stream'
        : contentType;
}

const server = http.createServer((req, res) => {

    let contentPath = path.join(
        publicFilesPath,
        req.url === '/' ? 'index.html' : req.url);

    const contentExt = path.extname(contentPath);
    const contentType = contentTypeFromExt(contentExt);

    fs.readFile(contentPath, (err, data) => {

        if (err) {

            const serve500 = () => {
                console.log(err);
                res.writeHead(500);
                res.end();
            }

            const status = statusFromErr(err);
            if (status === 404 && contentExt === '.html') {
                fs.readFile(path.join(publicFilesPath, '404.html'), (err, data) => {
                    if (err) {
                        serve500();
                        return;
                    }
                    res.writeHead(404, { 'Content-Type': 'text/html' });
                    res.end(data);
                });
                return;
            }

            serve500();
            return;

        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(data);
        }

    });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, null, null, () => {
    console.log(`listening on port ${PORT}...`);
});