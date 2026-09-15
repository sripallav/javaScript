function wish(name,callback)
{
    console.log(name);
    callback();

}

function hello() {
    console.log("good morning");
}

function gt(){

    console.log("welcome to call back functions");
}

wish("siri",gt);