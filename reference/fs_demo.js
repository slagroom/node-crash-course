const fs = require('fs');
const path = require('path');

// mkdir: Create a directory
fs.mkdir(path.join(__dirname, 'test'), {}, err => {
    if (err) throw err;
    console.log('Folder created...');

    // writeFile: Create and write to a file (overwrites)
    fs.writeFile(path.join(__dirname, 'test', 'hello.txt'), 'Hello, world!', err => {
        if (err) throw err;
        console.log('File created...');

        // appendFile: Create and write to a file (appends)
        fs.appendFile(path.join(__dirname, 'test', 'hello.txt'), ' I love Node.js!', err => {
            if (err) throw err;
            console.log('File appended to...');

            fs.rename(path.join(__dirname, 'test', 'hello.txt'), path.join(__dirname, 'test', 'greeting.txt'), err => {
                if (err) throw err;
                console.log('File renamed...');

                // readFile: Read from a file
                fs.readFile(path.join(__dirname, 'test', 'greeting.txt'), 'utf8', (err, data) => {
                    if (err) throw err;
                    console.log(data);

                    // unlink: Delete a file
                    fs.unlink(path.join(__dirname, 'test', 'greeting.txt'), err => {
                        if (err) throw err;
                        console.log('File removed...');

                        // rmdir: Delete a directory
                        fs.rmdir(path.join(__dirname, 'test'), err => {
                            if (err) throw err;
                            console.log('Folder removed...');
                        });
                    });
                });
            });
        });
    });
});
