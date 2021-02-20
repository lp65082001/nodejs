var http = require('http');
let count = 0;


http.createServer(function (req, res) {
  count+=1;  
  console.log("count = ",count);
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World!');
}).listen(8080);

console.log("Server running at http://127.0.0.1:8080");