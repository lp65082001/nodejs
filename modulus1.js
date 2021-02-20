// 把這裡的 code 寫在 module1.js 中
//let text = "Hello, it is in the module1.js";

// var 和 let 差別 for(var i...) 跳出迴圈i會存在(globel)但let會不存在(block)

 function square(number){

     return number * number;

}

// 像一個接口，當別人引入這個模組時，就會拿到這個值
module.exports = square;

