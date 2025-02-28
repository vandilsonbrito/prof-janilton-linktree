// Set the current year in the footer
document.getElementById('current-year').textContent = new Date().getFullYear();

// Add hover effect to links
const links = document.querySelectorAll('.link-button');

links.forEach(link => {
  link.addEventListener('mouseenter', () => {
    link.style.transform = 'translateY(-2px)';
  });

  link.addEventListener('mouseleave', () => {
    link.style.transform = 'translateY(0)';
  });
});
