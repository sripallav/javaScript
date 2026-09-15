const url = "https://jsonplaceholder.typicode.com/users";

async function getUsers() {
    if (!globalThis.fetch) {
        console.error("Fetch is not supported in this environment. Use a modern browser or Node 18+.");
        return;
    }

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Error fetching users:", error.message);
    }
}

getUsers();