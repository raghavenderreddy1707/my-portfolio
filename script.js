// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling for navigation links
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Add click events to navigation links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const href = link.getAttribute('href');
        const sectionId = href.substring(1);
        scrollToSection(sectionId);
    });
});

// Portfolio filtering
const filterButtons = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');
        
        const filterValue = button.getAttribute('data-filter');
        
        portfolioItems.forEach(item => {
            const itemCategory = item.getAttribute('data-category');
            
            if (filterValue === 'all' || itemCategory === filterValue) {
                item.classList.remove('hidden');
                setTimeout(() => {
                    item.style.display = 'block';
                }, 10);
            } else {
                item.classList.add('hidden');
                setTimeout(() => {
                    if (item.classList.contains('hidden')) {
                        item.style.display = 'none';
                    }
                }, 500);
            }
        });
    });
});

// Modal functionality with your project data
const modal = document.getElementById('modal');
const modalBody = document.getElementById('modal-body');

function openModal(projectId) {
    const projectData = {
        project1: {
            title: 'Alcohol Detection System',
            description: 'An innovative IoT-based system designed to detect alcohol levels with real-time monitoring capabilities. This project combines hardware sensors with software programming to create a practical solution for alcohol detection.',
            technologies: ['IoT', 'Python', 'Arduino', 'Sensors'],
            features: [
                'Real-time alcohol level detection',
                'IoT connectivity for remote monitoring',
                'Arduino-based hardware implementation',
                'Python backend for data processing',
                'Alert system for threshold violations'
            ],
            github: '#',
            live: '#'
        },
        project2: {
            title: 'Portfolio Website',
            description: 'A modern, responsive portfolio website showcasing projects and skills with contemporary design principles. Built with clean HTML, CSS, and JavaScript for optimal performance.',
            technologies: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
            features: [
                'Fully responsive design',
                'Modern UI/UX principles',
                'Smooth animations and transitions',
                'Cross-browser compatibility',
                'Optimized performance'
            ],
            github: '#',
            live: '#'
        }
    };

    const project = projectData[projectId];
    if (project) {
        modalBody.innerHTML = `
            <h2>${project.title}</h2>
            <p>${project.description}</p>
            <div class="modal-section">
                <h3>Technologies Used:</h3>
                <div class="modal-tags">
                    ${project.technologies.map(tech => `<span class="tag">${tech}</span>`).join('')}
                </div>
            </div>
            <div class="modal-section">
                <h3>Key Features:</h3>
                <ul>
                    ${project.features.map(feature => `<li>${feature}</li>`).join('')}
                </ul>
            </div>
            <div class="modal-buttons">
                <a href="${project.github}" class="btn-primary" target="_blank">
                    <i class="fab fa-github"></i> View Code
                </a>
                <a href="${project.live}" class="btn-secondary" target="_blank">
                    <i class="fas fa-external-link-alt"></i> Live Demo
                </a>
            </div>
        `;
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// Contact form functionality
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    // Simulate form submission
    const submitBtn = contactForm.querySelector('.submit-btn');
    const originalText = submitBtn.innerHTML;
    
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    submitBtn.disabled = true;
    
    setTimeout(() => {
        submitBtn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
        setTimeout(() => {
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
            contactForm.reset();
        }, 2000);
    }, 2000);
});

// Download CV functionality - updated for Raghavender's CV
function downloadCV() {
    // In a real application, this would download an actual CV file
    const link = document.createElement('a');
    link.href = '#'; // Replace with actual CV file URL
    link.download = 'Raghavender_Reddy_Resume.pdf';
    link.click();
    
    // Show notification
    const notification = document.createElement('div');
    notification.textContent = 'CV download started!';
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #9333ea 0%, #ec4899 100%);
        color: white;
        padding: 1rem 2rem;
        border-radius: 10px;
        z-index: 10000;
        animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Contact modal functionality
function openContactModal() {
    scrollToSection('contact');
}

// Intersection Observer for animations
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

// Observe elements for scroll animations
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.skill-card, .portfolio-card, .approach-item, .contact-item');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
});

// Skill level animation on scroll
const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const skillLevel = entry.target.querySelector('.skill-level::after');
            if (skillLevel) {
                entry.target.classList.add('animate-skill');
            }
        }
    });
}, { threshold: 0.5 });

// Observe skill cards for animation
document.addEventListener('DOMContentLoaded', () => {
    const skillCards = document.querySelectorAll('.skill-card');
    skillCards.forEach(card => {
        skillObserver.observe(card);
    });
    
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Typing effect for hero title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing effect when page loads
window.addEventListener('load', () => {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.innerHTML;
        typeWriter(heroTitle, originalText.replace(/<[^>]*>/g, ''), 50);
    }
});

// Particle effect for hero section
function createParticle() {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.cssText = `
        position: absolute;
        width: 4px;
        height: 4px;
        background: linear-gradient(135deg, #9333ea 0%, #ec4899 100%);
        border-radius: 50%;
        pointer-events: none;
        opacity: 0.6;
        animation: particleFloat 8s linear infinite;
    `;
    
    particle.style.left = Math.random() * 100 + '%';
    particle.style.animationDelay = Math.random() * 8 + 's';
    
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.appendChild(particle);
        
        setTimeout(() => {
            particle.remove();
        }, 8000);
    }
}

// Add particle animation CSS
const particleStyle = document.createElement('style');
particleStyle.textContent = `
    @keyframes particleFloat {
        0% {
            transform: translateY(100vh) rotate(0deg);
            opacity: 0;
        }
        10% {
            opacity: 0.6;
        }
        90% {
            opacity: 0.6;
        }
        100% {
            transform: translateY(-100px) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(particleStyle);

// Create particles periodically
setInterval(createParticle, 3000);

// Add modal styles
const modalStyle = document.createElement('style');
modalStyle.textContent = `
    .modal-section {
        margin: 1.5rem 0;
    }
    
    .modal-section h3 {
        color: #ec4899;
        margin-bottom: 1rem;
        font-size: 1.2rem;
    }
    
    .modal-tags {
        display: flex;
        gap: 0.5rem;
        flex-wrap: wrap;
        margin-bottom: 1rem;
    }
    
    .modal-section ul {
        color: #a1a1aa;
        padding-left: 1.5rem;
    }
    
    .modal-section li {
        margin-bottom: 0.5rem;
        line-height: 1.6;
    }
    
    .modal-buttons {
        display: flex;
        gap: 1rem;
        margin-top: 2rem;
        flex-wrap: wrap;
    }
    
    .modal-buttons .btn-primary,
    .modal-buttons .btn-secondary {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        text-decoration: none;
        padding: 0.8rem 1.5rem;
        border-radius: 50px;
        font-weight: 600;
        transition: all 0.3s ease;
    }
    
    .modal-buttons .btn-primary {
        background: linear-gradient(135deg, #9333ea 0%, #ec4899 100%);
        color: #ffffff;
    }
    
    .modal-buttons .btn-secondary {
        background: transparent;
        color: #ffffff;
        border: 2px solid rgba(255, 255, 255, 0.2);
    }
    
    .modal-buttons .btn-primary:hover,
    .modal-buttons .btn-secondary:hover {
        transform: translateY(-3px);
        box-shadow: 0 10px 30px rgba(236, 72, 153, 0.3);
    }
`;
document.head.appendChild(modalStyle);

console.log('Raghavender Reddy Portfolio loaded successfully!');
