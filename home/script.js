const roadmapItems = document.querySelectorAll('.roadmap-item');

roadmapItems.forEach(item => {
  item.addEventListener('click', () => {
    alert(item.dataset.tooltip);
  });
});