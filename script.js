// Global variables
let activeSection = 'home';
let isScrolled = false;
let visibleElements = new Set();
let observer = null;

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeEventListeners();
    initializeIntersectionObserver();
    initializeAnimations();
    
    // Remove preload class after a short delay
    setTimeout(() => {
        document.body.classList.remove('preload');
    }, 100);
});

// Initialize all event listeners
function initializeEventListeners() {
    // Scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Navigation menu toggle
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }
    
    // Navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetSection = this.getAttribute('href').substring(1);
            scrollToSection(targetSection);
            
            // Close mobile menu if open
            if (navMenu && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (navMenu && navMenu.classList.contains('active')) {
            if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            }
        }
    });
    
    // Form submission
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
    }
    
    // Skill level animations on scroll
    const skillCards = document.querySelectorAll('.skill-card');
    skillCards.forEach((card, index) => {
        card.setAttribute('data-animate', `skill-${index}`);
    });
    
    // Add smooth scrolling behavior to all internal links
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
}

// Handle scroll events
function handleScroll() {
    // Update navbar scroll state
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const navbar = document.getElementById('navbar');
    
    if (scrollTop > 50) {
        if (!isScrolled) {
            isScrolled = true;
            navbar.classList.add('scrolled');
        }
    } else {
        if (isScrolled) {
            isScrolled = false;
            navbar.classList.remove('scrolled');
        }
    }
    
    // Update active nav link based on scroll position
    updateActiveNavLink();
}

// Update active navigation link
function updateActiveNavLink() {
    const sections = ['home', 'about', 'skills', 'projects', 'experience', 'education', 'contact'];
    const scrollPos = window.pageYOffset + 100;
    
    let currentSection = 'home';
    
    sections.forEach(sectionId => {
        const section = document.getElementById(sectionId);
        if (section) {
            const top = section.offsetTop;
            const bottom = top + section.offsetHeight;
            
            if (scrollPos >= top && scrollPos < bottom) {
                currentSection = sectionId;
            }
        }
    });
    
    if (currentSection !== activeSection) {
        activeSection = currentSection;
        
        // Update nav links
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    }
}

// Initialize Intersection Observer for animations
function initializeIntersectionObserver() {
    if ('IntersectionObserver' in window) {
        observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const elementId = entry.target.getAttribute('data-animate');
                        if (elementId && !visibleElements.has(elementId)) {
                            visibleElements.add(elementId);
                            animateElement(entry.target, elementId);
                        }
                    }
                });
            },
            {
                threshold: 0.1,
                rootMargin: '50px 0px -50px 0px',
            }
        );
        
        // Observe all animatable elements
        const animatableElements = document.querySelectorAll('[data-animate]');
        animatableElements.forEach((element) => {
            observer.observe(element);
        });
    } else {
        // Fallback for browsers without IntersectionObserver
        const animatableElements = document.querySelectorAll('[data-animate]');
        animatableElements.forEach((element) => {
            const elementId = element.getAttribute('data-animate');
            if (elementId) {
                setTimeout(() => {
                    animateElement(element, elementId);
                }, 100);
            }
        });
    }
}

// Animate element based on its type
function animateElement(element, elementId) {
    // Determine animation type based on element
    let animationClass = 'animate-fade-in-up';
    
    if (elementId.includes('hero-content')) {
        animationClass = 'animate-fade-in-left';
    } else if (elementId.includes('hero-image')) {
        animationClass = 'animate-fade-in-right';
    } else if (elementId.includes('about-text')) {
        animationClass = 'animate-fade-in-left';
    } else if (elementId.includes('about-image')) {
        animationClass = 'animate-fade-in-right';
    } else if (elementId.includes('skill-')) {
        animationClass = 'animate-bounce-in';
        // Trigger skill level animation
        setTimeout(() => {
            const skillLevel = element.querySelector('.skill-level');
            if (skillLevel) {
                skillLevel.style.animation = 'none';
                skillLevel.offsetHeight; // Trigger reflow
                skillLevel.style.animation = null;
            }
        }, 300);
    } else if (elementId.includes('project-')) {
        animationClass = 'animate-fade-in-up';
    } else if (elementId.includes('experience-')) {
        animationClass = 'animate-fade-in-left';
    } else if (elementId.includes('education-')) {
        animationClass = 'animate-fade-in-right';
    }
    
    // Apply animation
    element.classList.add(animationClass);
    
    // Add staggered delay for multiple elements
    const delay = getStaggeredDelay(elementId);
    if (delay > 0) {
        element.style.animationDelay = `${delay}s`;
    }
}

// Get staggered delay for animations
function getStaggeredDelay(elementId) {
    if (elementId.includes('skill-')) {
        const index = parseInt(elementId.replace('skill-', ''));
        return index * 0.1;
    } else if (elementId.includes('project-')) {
        const index = parseInt(elementId.replace('project-', ''));
        return index * 0.1;
    } else if (elementId.includes('education-')) {
        const index = parseInt(elementId.replace('education-', ''));
        return index * 0.2;
    }
    return 0;
}

// Initialize additional animations
function initializeAnimations() {
    // Animate counters in stats
    animateCounters();
    
    // Add hover effects to cards
    addCardHoverEffects();
    
    // Initialize floating elements animation
    initializeFloatingElements();
    
    // Add typing effect to hero title (optional)
    initializeTypingEffect();
}

// Animate counter numbers
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    const animateCounter = (counter) => {
        const target = parseInt(counter.textContent);
        const increment = target / 60; // 60 frames for smooth animation
        let current = 0;
        
        const updateCounter = () => {
            if (current < target) {
                current += increment;
                counter.textContent = Math.ceil(current) + '+';
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target + '+';
            }
        };
        
        updateCounter();
    };
    
    // Use Intersection Observer to trigger counter animation
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                if (!counter.dataset.animated) {
                    counter.dataset.animated = 'true';
                    setTimeout(() => animateCounter(counter), 500);
                }
            }
        });
    }, { threshold: 0.8 });
    
    counters.forEach(counter => {
        counterObserver.observe(counter);
    });
}

// Add hover effects to cards
function addCardHoverEffects() {
    const cards = document.querySelectorAll('.project-card, .skill-card, .experience-card, .education-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Initialize floating elements
function initializeFloatingElements() {
    const floatingElements = document.querySelectorAll('.floating-element');
    
    floatingElements.forEach((element, index) => {
        // Add random movement
        const randomX = Math.random() * 100;
        const randomY = Math.random() * 100;
        const animationDuration = 8 + Math.random() * 4; // 8-12 seconds
        
        element.style.left = `${randomX}%`;
        element.style.top = `${randomY}%`;
        element.style.animationDuration = `${animationDuration}s`;
        element.style.animationDelay = `${index * 2}s`;
    });
}

// Optional typing effect for hero title
function initializeTypingEffect() {
    const titleElement = document.querySelector('.hero-title .gradient-text');
    if (!titleElement) return;
    
    const text = titleElement.textContent;
    titleElement.textContent = '';
    
    let index = 0;
    const typeWriter = () => {
        if (index < text.length) {
            titleElement.textContent += text.charAt(index);
            index++;
            setTimeout(typeWriter, 100);
        }
    };
    
    // Start typing effect after page load
    setTimeout(typeWriter, 1000);
}

// Scroll to section function
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        const offsetTop = section.offsetTop - 80; // Account for fixed navbar
        
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}

// Handle form submission
function handleFormSubmit(event) {
    event.preventDefault();
    
    const form = event.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    
    // Basic form validation
    if (!data.name || !data.email || !data.message) {
        showNotification('Please fill in all fields.', 'error');
        return;
    }
    
    if (!isValidEmail(data.email)) {
        showNotification('Please enter a valid email address.', 'error');
        return;
    }
    
    // Simulate form submission
    const submitBtn = form.querySelector('.submit-btn');
    const originalText = submitBtn.innerHTML;
    
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    submitBtn.disabled = true;
    
    setTimeout(() => {
        // Reset form
        form.reset();
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        
        showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
    }, 2000);
}

// Email validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Show notification
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Style the notification
    Object.assign(notification.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        padding: '1rem 1.5rem',
        borderRadius: '10px',
        color: 'white',
        fontWeight: '600',
        zIndex: '10000',
        transform: 'translateX(100%)',
        transition: 'transform 0.3s ease',
        maxWidth: '300px',
        wordWrap: 'break-word'
    });
    
    // Set background color based on type
    switch (type) {
        case 'success':
            notification.style.background = 'linear-gradient(135deg, #10b981, #059669)';
            break;
        case 'error':
            notification.style.background = 'linear-gradient(135deg, #ef4444, #dc2626)';
            break;
        default:
            notification.style.background = 'linear-gradient(135deg, #3b82f6, #2563eb)';
    }
    
    // Add to DOM
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after delay
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 4000);
}

// Parallax effect for hero section
function initializeParallax() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxSpeed = 0.5;
        
        hero.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
    });
}

// Smooth reveal animation for elements
function revealOnScroll() {
    const reveals = document.querySelectorAll('.project-card, .skill-card, .experience-card, .education-card');
    
    reveals.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('animate-fade-in-up');
        }
    });
}

// Add scroll event for reveal animation
window.addEventListener('scroll', revealOnScroll);

// Initialize on page load
revealOnScroll();

// Add loading animation
function showPageLoader() {
    const loader = document.createElement('div');
    loader.id = 'page-loader';
    loader.innerHTML = `
        <div class="loader-content">
            <div class="loader-ring"></div>
            <div class="loader-text">Loading...</div>
        </div>
    `;
    
    Object.assign(loader.style, {
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        background: 'linear-gradient(135deg, #0a0a0f 0%, #16213e 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: '10000',
        transition: 'opacity 0.5s ease'
    });
    
    document.body.appendChild(loader);
    
    // Hide loader after content is loaded
    window.addEventListener('load', () => {
        setTimeout(() => {
            loader.style.opacity = '0';
            setTimeout(() => {
                if (loader.parentNode) {
                    loader.parentNode.removeChild(loader);
                }
            }, 500);
        }, 1000);
    });
}

// Add CSS for loader animation
const loaderStyles = `
    .loader-ring {
        width: 60px;
        height: 60px;
        border: 4px solid rgba(147, 51, 234, 0.3);
        border-top: 4px solid #9333ea;
        border-radius: 50%;
        animation: spin 1s linear infinite;
        margin-bottom: 1rem;
    }
    
    .loader-text {
        color: #ffffff;
        font-size: 1.2rem;
        font-weight: 600;
    }
    
    .loader-content {
        text-align: center;
    }
    
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`;

// Add loader styles to head
const styleSheet = document.createElement('style');
styleSheet.textContent = loaderStyles;
document.head.appendChild(styleSheet);

// Performance optimization: Throttle scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Apply throttling to scroll handler
window.addEventListener('scroll', throttle(handleScroll, 16)); // ~60fps

// Keyboard navigation support
document.addEventListener('keydown', function(e) {
    // Navigate sections with arrow keys
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        e.preventDefault();
        
        const sections = ['home', 'about', 'skills', 'projects', 'experience', 'education', 'contact'];
        const currentIndex = sections.indexOf(activeSection);
        
        let nextIndex;
        if (e.key === 'ArrowDown') {
            nextIndex = currentIndex < sections.length - 1 ? currentIndex + 1 : 0;
        } else {
            nextIndex = currentIndex > 0 ? currentIndex - 1 : sections.length - 1;
        }
        
        scrollToSection(sections[nextIndex]);
    }
    
    // Close mobile menu with Escape
    if (e.key === 'Escape') {
        const navMenu = document.getElementById('nav-menu');
        const hamburger = document.getElementById('hamburger');
        
        if (navMenu && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        }
    }
});

// Add focus indicators for accessibility
document.addEventListener('DOMContentLoaded', function() {
    const focusableElements = document.querySelectorAll(
        'a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
    );
    
    focusableElements.forEach(element => {
        element.addEventListener('focus', function() {
            this.style.outline = '3px solid #ec4899';
            this.style.outlineOffset = '2px';
        });
        
        element.addEventListener('blur', function() {
            this.style.outline = '';
            this.style.outlineOffset = '';
        });
    });
});

// Console welcome message
console.log(`
🚀 Welcome to Raghavender Reddy's Portfolio!
✨ Built with vanilla HTML, CSS, and JavaScript
🎨 Featuring smooth animations and responsive design
📧 Contact: raghavenderreddy1707@gmail.com
🔗 LinkedIn: https://www.linkedin.com/in/raghavender-reddy-pulakandla-647428318/
💻 GitHub: https://github.com/raghavenderreddy1707
`);

// Export functions for global access (if needed)
window.scrollToSection = scrollToSection;
window.handleFormSubmit = handleFormSubmit;
