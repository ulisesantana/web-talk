const http = require('http');
const fs = require('fs');
const port = process.env.PORT || 5000;
const ip = require('ip');

const server = http.createServer((request, response) => {
  if(request.url === '/') request.url = '/index.html';  
  fs.readFile(__dirname+request.url, (err, data) => {
    let ext = request.url.split('.');
    if (err) {
      response.writeHead(200);
      response.end("File not found!");
      return;
    }
    if (ext[ext.length - 1] === 'svg') { 
      response.writeHead(200, {'Content-Type': 'image/svg+xml'});
      response.end(data);
    } else {
      response.writeHead(200);
      response.end(data);
    }
  });
});

server.listen(port, () => {
  console.log(`Escuchando en ${ip.address()}:${port}`);
});


