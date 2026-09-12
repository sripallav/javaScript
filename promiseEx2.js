let order = new Promise(function(resolve, reject) {

    let foodAvailable = true;

    if (foodAvailable) {
        resolve("Food order placed successfully");
    } else {
        reject("Food is not available");
    }

});

order
    .then(function(message) {
        console.log(message);
    })
    .catch(function(error) {
        console.log(error);
    });