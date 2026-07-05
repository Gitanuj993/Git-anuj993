// footer.js

document.addEventListener("DOMContentLoaded", async () => {
    const footer = document.getElementById("footer");

    try {
        const response = await fetch("components/footer.html");

        if (!response.ok) {
            throw new Error("Failed to load footer.");
        }

        footer.innerHTML = await response.text();
    } catch (error) {
        console.error(error);
    }
});
