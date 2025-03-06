document.addEventListener("DOMContentLoaded", () => {
    const roadmapItems = document.querySelectorAll(".roadmap-item");

    roadmapItems.forEach(item => {
        item.addEventListener("mouseenter", (e) => {
            const tooltip = document.createElement("div");
            tooltip.classList.add("tooltip");
            tooltip.textContent = item.getAttribute("data-tooltip");
            document.body.appendChild(tooltip);

            requestAnimationFrame(() => {
                const rect = item.getBoundingClientRect();
                tooltip.style.left = `${rect.left + rect.width / 2 - tooltip.offsetWidth / 2}px`;
                tooltip.style.top = `${rect.top - tooltip.offsetHeight - 10}px`;
                tooltip.style.display = "block";
            });

            item.addEventListener("mouseleave", () => {
                tooltip.remove();
            });
        });
    });
});
