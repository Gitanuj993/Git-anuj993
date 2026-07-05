// navbar.js

document.addEventListener("DOMContentLoaded", async () => {
    const navbar = document.getElementById("navbar");

    try {
        const response = await fetch("components/navbar.html");

        if (!response.ok) {
            throw new Error("Failed to load navbar.");
        }

        navbar.innerHTML = await response.text();
    } catch (error) {
        console.error(error);
    }
});
