let express = require('express');
let app = express();
let func1 = function (req, res, next) {
  console.log('func1');
  next();
}

let func2 = function (req, res, next) {
  console.log('func2');
  next();
}

let func3 = function (req, res) {
  res.send('This is Func3, End!');
}
app.get('/test', [func1, func2, func3]);
app.listen(8888,()=>{
    console.log("Server is on port 8888");

});