var path = require('path');
var fs = require('fs');
var http = require('http');
var url = require('url');

// 从命令行参数获取root目录，默认是当前目录:
var rootPath = path.resolve(process.argv[2] || __dirname);

var server = http.createServer((req, res) => {
    console.log(req.method + ': ' + req.url);
    var reqUrl = req.url;
    var pathname = url.parse(reqUrl).pathname;
    var src = path.join(rootPath, pathname);
    const doNotFound = () => {
        res.writeHead(404);
        res.end('404 Not Found');
    }
    const doPipe = path => {
        res.writeHead(200);
        var fr = fs.createReadStream(path);
        fr.pipe(res);
    }
    // 获取文件状态:
    fs.stat(src, (err, status) => {
        if (!err && status.isFile()) {
            doPipe(src);
        } else if (status.isDirectory()){
            const defaultPath = `${src}/index.html`;
            fs.stat(defaultPath, (err, status) => {
                if (!err && status.isFile()) {
                    doPipe(defaultPath);
                } else {
                    doNotFound();
                }
            });
        } else {
            doNotFound();
        }
    })
});

server.listen(8080);

console.log('Server is running at http://127.0.0.1:8080/');