const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if (req.url === '/data.json'){
        res.end(fs.readFileSync('data.json');
    } else if (req.rl === '/style.css'){
        res.setHeader('Content-Type','text/css');
        res.end(fs.readFileSync('style.css'));
    } else if (req.rl === '/script.js'){
        res.end(fs.readFileSync('script.js'));
    } else {
        res.end(fs.readFileSync('index.html'));
    }
});

server.listen(process.env.PORT || 3000);
