async function loadUsers() {
    try {
        // Call a public API
        let response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        // Check response
        if (!response.ok) {
            throw new Error("Unable to load users");
        }
        // Convert JSON response into JavaScript data
        let users = await response.json();
        // Display products
        users.forEach(usr => {
            console.log(
                usr.id + " - " + usr.email
            );
        });
    } catch (error) {
        console.log(error.message);
    }
}
async function addUser() {
    try {
        let response = await fetch(
            "https://jsonplaceholder.typicode.com/users",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: "likhitha",email: "likhitha@gmail.com"
                })
            }
        );
        if (!response.ok) {
            throw new Error("Unable to add user");
        }
        let user = await response.json();

        console.log("User added successfully");
        console.log(user);
    } catch (error) {
        console.log(error.message);
    }
}
async function updateUser() {

    try {

        let response = await fetch(
            "https://jsonplaceholder.typicode.com/users/1",
            {
                method: "PUT",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    name: "siri",
                    email: "siri@gmail.com"
                })
            }
        );

        if (!response.ok) {
            throw new Error("Unable to update user");
        }

        let user = await response.json();

        console.log("User updated successfully");
        console.log(user);

    } catch (error) {

        console.log(error.message);

    }
}
async function deleteUser() {

    try {

        let response = await fetch(
            "https://jsonplaceholder.typicode.com/users/1",
            {
                method: "DELETE"
            }
        );

        if (!response.ok) {
            throw new Error("Unable to delete user");
        }

        console.log("User deleted successfully");

    } catch (error) {

        console.log(error.message);

    }
}

loadUsers();
addUser();
updateUser();
deleteUser();