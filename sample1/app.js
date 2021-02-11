const cafeList = document.querySelector('#cafe-list');
const btn = document.querySelector("button");
// create element & render cafe
function addCafe(e){
    e.preventDefault();
    let li = document.createElement('li');
    let name = document.createElement('span');
    let city = document.createElement('span');
    let input = document.querySelectorAll("input");
    name.innerHTML = input[0].value;
    city.innerHTML = input[1].value;
    li.appendChild(name);
    li.appendChild(city);
    cafeList.appendChild(li);
}
btn.onclick = addCafe;