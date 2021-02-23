let express = require('express');
let app = express();
app.use(express.static('public')); // 把 public 中的檔案全部丟上來 1. 全部檔案都會被抓到不能選路徑

app.get('/cafe.html', function(req, res) {
    res.end();
  });

app.listen(8888,()=>{
    console.log("Server listen on port 8888");

});