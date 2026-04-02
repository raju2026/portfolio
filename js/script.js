// DOM Elements
const navbar = document.querySelector('.navbar');
const navMenu = document.querySelector('.nav-menu');
const hamburger = document.querySelector('.hamburger');
const contactForm = document.querySelector('.contact-form');

// Sticky Navbar
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
});

// Mobile Menu Toggle
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Smooth Scrolling
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

// Intersection Observer for Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(section);
});

// Contact Form Handling
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get form data
    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    // Here you would typically send the data to a server
    // For now, we'll just show an alert
    alert(`Thank you ${name}! Your message has been sent. I'll get back to you soon at ${email}.`);

    // Reset form
    contactForm.reset();
});

// Typing Animation for Hero Subtitle (optional enhancement)
const heroSubtitle = document.querySelector('.hero-subtitle');
const originalText = heroSubtitle.textContent;
let i = 0;

function typeWriter() {
    if (i < originalText.length) {
        heroSubtitle.textContent = originalText.substring(0, i + 1);
        i++;
        setTimeout(typeWriter, 100);
    }
}

// Start typing animation after page load
window.addEventListener('load', () => {
    setTimeout(() => {
        heroSubtitle.textContent = '';
        typeWriter();
    }, 1000);
});

// Skill Tags Animation
document.querySelectorAll('.skill-tag').forEach((tag, index) => {
    tag.style.animationDelay = `${index * 0.1}s`;
    tag.style.animation = 'fadeInUp 0.6s ease-out forwards';
    tag.style.opacity = '0';
    tag.style.transform = 'translateY(20px)';
});

// Project Cards Hover Effect
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px) scale(1.02)';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
    });
});

// Achievement Items Animation
document.querySelectorAll('.achievement-item').forEach((item, index) => {
    item.style.animationDelay = `${index * 0.2}s`;
});

// Responsive adjustments
function handleResize() {
    if (window.innerWidth > 768) {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    }
}

window.addEventListener('resize', handleResize);

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Add loading class to body
    document.body.classList.add('loaded');

    // Initialize any other features
    console.log('Portfolio loaded successfully!');
});
