let express = require('express');
let app = express();

let get_time = function (req, res, next) {  //要加上next 有用到就要加
  console.log('Time:', Date.now()); //拿當前時間的用法
  next(); //打權限移給下一格中介軟體 要常用function 時使用  1.如果有兩格相同路徑 會找上面那格 2.沒有做回覆的話才會找下一個ex console log  3. 只能有一格握reponse只能有一格握reponse
};
app.use(get_time); //每次call都要做

app.get("/", (req, res) => {
    res.send("/");
});
app.get("/about", (req, res) => {
    res.send("/about");
});
app.listen(8888,()=>{
    console.log("Server listen on port 8888");
});

//reponse 只能一次