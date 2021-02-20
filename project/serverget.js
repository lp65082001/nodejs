const express = require('express'); //引入 Express
const app = express(); // 這個就是建立 server

app.get("/", function(req, res) {
   res.send("This is /");
});

app.get("/:id", (req, res) => {
    console.log(req.params.id)
    res.send(`This is my id ${req.params.id}`); //:id 可以直接取路徑的參數 用在重複性高的地方
});

app.get("/:id/about", (req, res) => {
    res.send(`This is ${req.params.id}'s introduction`);
});

app.listen(8888, function () { // 使 server 監聽在8888 port
  console.log('Example app listening on port 8888!');
});
