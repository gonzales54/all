const http = require('http');
const hostname = 'localhost';
const port = 3000;

/*
const url = require('url');
const adr = 'https://localhost:8080/default.html?year=2017&month=february';
const q = url.parse(adr, true);

console.log(q.host);
console.log(q.pathname);
console.log(q.search);

const qdata = q.query;
console.log(qdata.month);

*/

const url = require('url');
const fs = require('fs');
/*
const server = http.createServer(function(req, res) {
    let q = url.parse(req.url, true);
    let filename = "." + q.pathname;
    fs.readFile(filename, function(err, data) {
        if(err) {
            res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end('404 Not Found');
        }
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    })
});
*/

const uc = require('upper-case');
const server = http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(uc.upperCase("Hello World"));
    res.end();
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
});
