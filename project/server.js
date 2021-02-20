const express = require('express'); //引入 Express
const app = express(); // 這個就是建立 server
const bodyParser = require('body-parser'); // 以下三行很重要！
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function (request, response) {  // 創建網頁的路徑
    console.log("here!");
    response.send('Hello World!');
});

app.get('/about', function (request, response) {
    //console.log(request.url);
    console.log(request.query.id);
    console.log(request.query.password);
    response.send("You are in path:/about.");
})

app.post('/post', function(request, response) {
    console.log(request.body); //類似 query
    response.send("This is post.");
})


app.listen(8888, function () { // 使 server 監聽在8888 port
    console.log('Example app listening on port 8888!');
});