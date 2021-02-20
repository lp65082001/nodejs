var http = require('http');
var url = require("url");
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  console.log(req.url);
  
//   if(req.url == "/about"){
//       res.end("about")
//   }

  let pathname = url.parse(req.url).pathname;
  if(pathname == "/home"){
    res.end(pathname);
  }
  else if(pathname == "/about"){
    res.end(pathname);
  }
  else{
    res.end(pathname);
  }
  //res.end("Hello world");
}).listen(8080);

console.log("Server running at http://127.0.0.1:8080");