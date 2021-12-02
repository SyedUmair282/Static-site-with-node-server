const http = require('http');
const port = 5000;
const host = '127.0.0.1';
const fs = require('fs')
const path = require('path')
    // const fileContent = fs.readFileSync('index.html')
const server = http.createServer((req, res) => {
    if (req.url == '/') {
        fs.readFile(path.join(__dirname, 'index.html'), function(err, data) {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            res.end();
        });
    }
})
server.listen(port, host, () => {
    console.log('server is listen');
});