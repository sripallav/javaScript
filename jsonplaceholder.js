async function loadProducts() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/users");

        if (!response.ok) {
            throw new Error("Unable to load users");
        }

        let users = await response.json();

        users.forEach(usr => {
            console.log(usr.id + " - " + usr.email);
        });
    } catch (error) {
        console.log(error.message);
    }
}

loadProducts();