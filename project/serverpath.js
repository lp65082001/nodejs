const { EWOULDBLOCK } = require('constants');
const express = require('express'); //引入 Express
const app = express(); // 這個就是建立 server
const path = require('path'); // 使用 path 套件來處理路徑問題！

app.get("/", function(req, res) {
    console.log(__dirname); // 查看當前的目錄在哪裡
    let options = {
        root: path.join(__dirname, 'public'), //把目錄掛在pulic
        dotfiles: 'deny'
    }
    res.sendFile('example.html', options);
});

app.get("/download/",(req,res)=>{
    res.download(`${__dirname}/public/example.html`);
})

 app.get("/google/",(req,res)=>{
    res.redirect("http://www.google.com");
    //if there is a route for public.
    // res.redirect("/public");
    })
app.listen(8888, function () { // 使 server 監聽在8888 port
  console.log('Example app listening on port 8888!');
});