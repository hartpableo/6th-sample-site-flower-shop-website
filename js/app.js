// auto-update year in footer 
const year = document.querySelector('.year');
year.innerHTML = new Date().getFullYear();

// back-to-top button
const backToTop = document.querySelector('.backToTopBtn');

window.addEventListener('scroll',function() {
    const scrollHeight = window.pageYOffset;

    if (scrollHeight > 480) {
        backToTop.classList.add('active');
    } else {
        backToTop.classList.remove('active');
    }
});

// navbar toggle or hamburger menu
const toggleBtn = document.querySelector('.toggleBtn');
const navbar = document.querySelector('.mainHeader');
const closeBtn = document.querySelector('.closeBtn');
const navLinks = document.querySelectorAll('.navbar ul li a');
const socialLinks = document.querySelectorAll('.socialLinks a');

toggleBtn.addEventListener('click',function() {
    navbar.classList.add('show');
});

closeBtn.addEventListener('click',function() {
    navbar.classList.remove('show');
});

navLinks.forEach(function(link) {
    link.addEventListener('click',function() {
        navbar.classList.remove('show');
    });
});

socialLinks.forEach(function(link) {
    link.addEventListener('click',function() {
        navbar.classList.remove('show');
    });
});