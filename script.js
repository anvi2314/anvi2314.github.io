// ===== Navigation Active Link ===== 
function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Set active link on page load
document.addEventListener('DOMContentLoaded', setActiveNavLink);

// ===== Smooth Scrolling for Anchor Links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===== Mobile Navigation Toggle (Optional) =====
// If you add a hamburger menu in the future, use this code:
// const navToggle = document.querySelector('.nav-toggle');
// const navMenu = document.querySelector('.nav-menu');
// if (navToggle) {
//     navToggle.addEventListener('click', () => {
//         navMenu.classList.toggle('active');
//     });
// }

// ===== Accessibility: Focus Management =====
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        // Close any open menus or modals if needed
        document.activeElement.blur();
    }
});

// ===== Log on Page Load =====
console.log('Welcome to Anvita\'s Corner! 💜');
