//Math.random() => 0~1 隨機小數
//Math.floor() => 無條件捨去小數

//var number = Math.floor(Math.random()*100);

// if (number%2==0){
//     console.log("even");
//     console.log(number);
// }
// else {
//     console.log("odd");
//     console.log(number);
// }

//for 介紹

// for (var i=1;i<=100;i++){
//     console.log("i = ",i," s");

// }

// for (var i = 0,j = 10 ; i < 10 && j >= 0; i++,j--){
//     //console.log("i = ",i);
//     //console.log("j = ",j);
//     console.log(`i = ${i}, j = ${j}`);
// }

//while 介紹

// var i = 0;
// while (i < 10){
    
    
//     if (i == 5){
//         break;
//     }
//     else if (i == 4){ 
//         i++;
//         continue;
//     }
//     console.log(i);

//     i++;
// }

//印出所有質數

// for (var i = 1 ; i <= 100 ; i++){
//     var num = 0;
//     for(var j = 2; j < i ; j++){
//         if(i % j == 0){
//             num++   
//         }
//     }
//     if(num == 0){
//         console.log(i);
//     }

// }

// 矩陣
//也是從0開始

//var arr = [1,2,3,4];
// console.log(arr[0]);  //取值
// console.log(arr.length); //取長度
// console.log(arr[arr.length-1]); //找最後

// for(var i=0;i<=arr.length-1;i++){  //用for print
//     console.log(arr[i]);
// }

// var b = arr;
// b.push(5); //增加數字
// console.log(b);
// b.pop(); //拿掉最後的東西
// console.log(b);

// var pos = arr.indexOf(2);  //get index
// console.log(pos);


// object : key, value

//let obj = {"ambrose": 27,"Alice":60,"Tommy":20,"all":"people"}; //var也可以

// console.log(obj["all"]);

// let obj2 = {ambrose: 27,Alice:60,Tommy:20,all:"people"}; //另一種方法

// console.log(obj2.all);

// for(let i in obj){
//     console.log(i, obj[i]);
// }


//function
// var 和 let 差別 for(var i...) 跳出迴圈i會存在(globel)但let會不存在(block)

// function square(number){

//     return number * number;

// }

// var a = 10;
// var b = square(a);
// console.log(b);

// let obj3 = {ambrose: 27,Alice:60,Tommy:20,all:"people",introduciton: function() {
//     console.log(`hello, i am ${this.all}, and my brother is ${this.ambrose}`);
// }};

// console.log(obj3.ambrose);
// obj3.introduciton();


//等價宣告
//1. 
// let square = function(num) {
//     console.log(num*num);
// }
//2.
// function square(num){
//     console.log(num*num);
// }
//
//3. array function 可省略function
// let square = (num) => {
//     console.log(num*num);
// }


// structure 物件容器
// function myfunction(a1,a2) {
//     this.f_n = a1;
//     this.l_n = a2;
// }
// var x = new myfunction("John","Deo");
// console.log(x.f_n, x.l_n);
