// Roadmap Tooltip Functionality
const roadmapItems = document.querySelectorAll('.roadmap-item');
const tooltip = document.getElementById('tooltip');

roadmapItems.forEach(item => {
    item.addEventListener('mouseenter', (event) => {
        const tooltipText = event.currentTarget.getAttribute('data-tooltip');
        tooltip.textContent = tooltipText;
        tooltip.style.display = 'block';

        const rect = event.currentTarget.getBoundingClientRect();
        tooltip.style.left = `${rect.left + window.scrollX + rect.width / 2 - tooltip.offsetWidth / 2}px`;
        tooltip.style.top = `${rect.top + window.scrollY - tooltip.offsetHeight - 10}px`;
    });

    item.addEventListener('mouseleave', () => {
        tooltip.style.display = 'none';
    });
});
