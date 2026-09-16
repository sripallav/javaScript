function login(){
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            let loginSuccess = true;
            if(loginSuccess){
                resolve("Login successful");
            }else{
                reject("Login failed");
            }
        },1000);
    });
}
function getProducts(){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            let productAvailable = false;
            if(productAvailable){
                resolve("Products loaded");
            }else{
                reject("Failed to Load products");
            }
        },1000);
    });
}
function placeorder(){
    return new promise((resolve, reject) => {
        setTimeout(() => {
            let orderSuccess = true;
            if(orederSuccess){
                resolve("Order placed successfully");
            }        else{
                reject("Order failed");
            }
        },1000);
    });
}
login()
    .then((message) =>{
        console.log(message);
        return getProducts();
    })
    .then((message) =>{
        console.log(message);
        return placeorder();
    })
    .then((message) =>{
        console.log(message);
    })
    .catch((error) =>{
        console.log("Error:", error);
    });