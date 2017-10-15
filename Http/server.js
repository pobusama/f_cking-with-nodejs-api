var path = require('path');
var fs = require('fs');
var http = require('http');
var url = require('url');

var server = http.createServer((req, res) => {
    console.log(req.method + ': ' + req.url);
    var reqUrl = req.url;
    var pathname = url.parse(reqUrl).pathname;
    pathname = pathname === '/' ? '/index.html' : pathname;
    res.writeHead(200, {'Content-type': 'text/html'});
    var body = fs.readFileSync(path.join(__dirname, pathname));
    res.end(body);
});

server.listen(8080);

console.log('Server is running at http://127.0.0.1:8080/');