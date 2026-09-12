//promise syntax

//what is promise?
//A promise represents a value that will be available
//fulfilled
//rejected

/*Promise syntax
const promise = new Promise(resolve,reject)=>{
setTimeout(()=>{
resolve("Data received");
},1000);
});*/

let promise = new Promise((resolve,reject) =>{
    let success = false;
    if(success){
        resolve("Payment successful");
    }else{
        reject("Payment failed");
    }
});
promise
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });
