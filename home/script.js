// JavaScript for Roadmap Tooltip Fix
const roadmapItems = document.querySelectorAll('.roadmap-item');
const tooltip = document.getElementById('tooltip');

// Function to show the tooltip at the correct position
function showTooltip(event) {
    const tooltipText = event.currentTarget.getAttribute('data-tooltip');
    tooltip.textContent = tooltipText;
    tooltip.style.display = 'block';
    
    // Position tooltip at the center of the roadmap item
    const rect = event.currentTarget.getBoundingClientRect();
    tooltip.style.left = `${rect.left + rect.width / 2 - tooltip.offsetWidth / 2}px`;
    tooltip.style.top = `${rect.top - tooltip.offsetHeight - 10}px`;
}

// Function to hide the tooltip
function hideTooltip() {
    tooltip.style.display = 'none';
}

// Add event listeners to each roadmap item
roadmapItems.forEach(item => {
    item.addEventListener('mouseenter', showTooltip);
    item.addEventListener('mouseleave', hideTooltip);
});
