var http = require('http');
var fs = require('fs');

const hostname = 'localhost';
const port = 3000;

const server = http.createServer(function (req, res) {
    /*fs.readFile('index.html', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });
    fs.appendFile('index.txt', 'Hello content', function(err) {
        if(err) throw err;
        console.log('Saved');
    })
    fs.open('index2.txt', 'w', function (err, file) {
        if(err) throw err;
        console.log('Saved');
    });
    fs.writeFile('index3.txt', 'Hello content', function (err) {
        if(err) throw err;
        console.log('Saved');
    });
    fs.appendFile('index.txt', 'Hello World', function (err) {
        if(err) throw err;
        console.log('Updated!');
    });
    fs.writeFile('index3.txt', 'Hello content', function (err) {
        if(err) throw err;
        console.log('Replaced!');
    });
    fs.unlink('index3.txt', function(err) {
        if(err) throw err;
        console.log('File deleted!');
    });
    fs.rename('index2.txt', 'HelloWorld.txt', function(err) {
        if(err) throw err;
        console.log('File Renamed!');
    });*/
    fs.readFile('./index.html', 'utf-8', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    });
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
});