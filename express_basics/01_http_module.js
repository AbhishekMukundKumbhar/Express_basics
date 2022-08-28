const http = require('http');

const server = http.createServer((req, res) => {
    console.log('user hits server');
    console.log(req.method);
    console.log(req.url);
    if (req.url == '/') {
        res.writeHead(200, { 'content-type': "text/html" });
        res.write('<h1>welcome to Home page</h1>');
        res.end();
    }
    else if (req.url === '/about') {
        res.writeHead(200, { 'content-type': "text/html" });
        res.write('<h1>welcome to About page</h1>');
        res.end();
    }
    else {
        res.writeHead(404, { 'content-type': "text/html" });
        // res.writeHead(404, { 'content-type': "text/css" });
        res.write('<h1>page not found</h1>');
        res.end();
    }

})

server.listen(5000);