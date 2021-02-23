document.addEventListener("DOMContentLoaded", function() {    // 必須等到 DOM load 進來才不會出錯  
    let img = document.createElement('img');
    img.src = "https://i.imgur.com/zsfsQOn.png";
    img.setAttribute("height", "100%px");
    img.setAttribute("width", "100%px");
    let content = document.querySelector('#content');
    content.appendChild(img);
    let cnt = 0;
    img.setAttribute("onclick", "");
    img.onclick = () => {
        if (cnt%4 == 0){
            img.src = "https://i.imgur.com/zsfsQOn.png";
        }
        else if (cnt%4 == 1){
            img.src = "https://i.pinimg.com/564x/76/76/c0/7676c05f8a9d9a57da4bddbc7ea78582.jpg";
        }
        else if (cnt%4 == 2){
            img.src = "https://i.pinimg.com/564x/71/0e/2d/710e2d1cb2c23c1f0f2cd01d15d127eb.jpg";
        }
        else if (cnt%4 == 3){
            img.src = "https://i.pinimg.com/564x/92/9d/8e/929d8e6dfca8dbf0d661224cfb592209.jpg";
        }
        cnt++;
    };
});
