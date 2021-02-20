let http = require('http');
let url = require('url');
http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    // 使用 parse 來分析 url 
    let test = url.parse(request.url, true);
    if(test.pathname != "/favicon.ico"){ 
        console.log(test.query["id"]);
        console.log(test.query["password"]);
        response.end(`Hello ,${test.query["id"]}`);
    }
    
}).listen(8888);

console.log('Server running at http://127.0.0.1:8888/');

// url.parse 解新路徑變成物件