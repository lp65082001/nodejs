function say(word){
    console.log(word);
}

function execute(someFunction,value){
    someFunction(value);
}

function say2(word){
    console.log("I am say2");

}

execute(say, "Hello");
execute(say2, "Hello");