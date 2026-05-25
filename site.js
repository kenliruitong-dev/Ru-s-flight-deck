// Dropdown menu toggle for touch devices
document.querySelectorAll('.dropdown').forEach((dropdown) => {
  const button = dropdown.querySelector('.dropbtn');
  
  button.addEventListener('click', (e) => {
    // Close other dropdowns
    document.querySelectorAll('.dropdown').forEach((other) => {
      if (other !== dropdown) {
        other.querySelector('.dropdown-content').style.display = 'none';
      }
    });
    
    // Toggle current dropdown
    const content = dropdown.querySelector('.dropdown-content');
    content.style.display = content.style.display === 'flex' ? 'none' : 'flex';
    e.preventDefault();
  });
});

// Close dropdowns when clicking outside
document.addEventListener('click', (e) => {
  if (!e.target.closest('.dropdown')) {
    document.querySelectorAll('.dropdown-content').forEach((content) => {
      content.style.display = 'none';
    });
  }
});

// Scroll animation observer for elements with scroll animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.scroll-pop, .scroll-subtitle').forEach((el) => {
  observer.observe(el);
});