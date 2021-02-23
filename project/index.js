let express = require('express');
let app = express();
let Fisheep = require('./Fisheep.js');
// let BOB = require('./BOB.js');
// let akk = require('./akk.js');
app.use('/Fisheep', Fisheep); // 可以有很多路徑 並且會先由這邊先找 沒有才在這個APP找 1. 前面代表掛載路徑 2. 所以在module中得跟目錄會被取代
// app.use('/BOB', Fisheep);
// app.use('/akk', Fisheep);


let get_time = function (req, res, next) {
  console.log('Time:', Date.now());
  next();
};
console.log("test");
app.use(get_time);

app.get("/", (req, res) => {
    res.send("/");
});
app.get("/about", (req, res) => {
    res.send("/about");
});
app.listen(8888);