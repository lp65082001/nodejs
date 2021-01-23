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