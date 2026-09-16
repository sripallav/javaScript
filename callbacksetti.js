function getData(callback)
{
    setTimeout(()=>{
        console.log("Data recevied");
        callback();
    },2000);
}
function displayData(){
    console.log("Display data");
}
getData(displayData);