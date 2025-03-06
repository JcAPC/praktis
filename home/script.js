// Select all roadmap items
const roadmapItems = document.querySelectorAll('.roadmap-item');
const tooltip = document.getElementById('tooltip');

// Function to show the tooltip
function showTooltip(event) {
    const tooltipText = event.currentTarget.getAttribute('data-tooltip');
    tooltip.textContent = tooltipText;
    tooltip.style.display = 'block';
    tooltip.style.left = `${event.pageX}px`;
    tooltip.style.top = `${event.pageY - 30}px`; // Adjust position above the cursor
}

// Function to hide the tooltip
function hideTooltip() {
    tooltip.style.display = 'none';
}

// Add event listeners to each roadmap item
roadmapItems.forEach(item => {
    item.addEventListener('mouseenter', showTooltip);
    item.addEventListener('mouseleave', hideTooltip);
    item.addEventListener('click', showTooltip); // Optional: Show tooltip on click
});

// Hide tooltip when clicking anywhere else
document.addEventListener('click', (event) => {
    if (!event.target.classList.contains('roadmap-item')) {
        hideTooltip();
    }
});