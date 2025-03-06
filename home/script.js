document.addEventListener("DOMContentLoaded", () => {
    console.log("Portfolio loaded successfully!");

    const tabs = document.querySelectorAll('.nav-link');

    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            console.log(`Switched to tab: ${tab.textContent}`);
        });
    });
});
