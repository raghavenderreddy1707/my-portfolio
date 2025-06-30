
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Inter', sans-serif;
    background: #0a0a0f;
    color: #ffffff;
    overflow-x: hidden;
    line-height: 1.6;
}

/* Scrollbar */
::-webkit-scrollbar {
    width: 8px;
}

::-webkit-scrollbar-track {
    background: #1a1a2e;
}

::-webkit-scrollbar-thumb {
    background: linear-gradient(180deg, #9333ea 0%, #ec4899 100%);
    border-radius: 4px;
}

/* Navigation */
.navbar {
    position: fixed;
    top: 0;
    width: 100%;
    background: rgba(10, 10, 15, 0.9);
    backdrop-filter: blur(20px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    z-index: 1000;
    transition: all 0.3s ease;
}

.navbar.scrolled {
    background: rgba(10, 10, 15, 0.95);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.nav-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 1rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.nav-logo {
    font-size: 1.5rem;
    font-weight: 600;
    color: #ffffff;
}

.nav-logo strong {
    background: linear-gradient(135deg, #9333ea 0%, #ec4899 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.nav-menu {
    display: flex;
    list-style: none;
    gap: 2rem;
}

.nav-link {
    color: #ffffff;
    text-decoration: none;
    font-weight: 500;
    transition: all 0.3s ease;
    position: relative;
}

.nav-link:hover {
    color: #ec4899;
}

.nav-link::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(135deg, #9333ea 0%, #ec4899 100%);
    transition: width 0.3s ease;
}

.nav-link:hover::after {
    width: 100%;
}

.nav-link.active {
    color: #ec4899;
}

.nav-link.active::after {
    width: 100%;
}

.hamburger {
    display: none;
    flex-direction: column;
    cursor: pointer;
}

.bar {
    width: 25px;
    height: 3px;
    background: #ffffff;
    margin: 3px 0;
    transition: 0.3s;
}

/* Hero Section */
.hero {
    min-height: 100vh;
    display: flex;
    align-items: center;
    position: relative;
    background: radial-gradient(ellipse at center, rgba(147, 51, 234, 0.1) 0%, transparent 50%);
}

.hero-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;
}

.social-links {
    display: flex;
    gap: 1rem;
    margin-bottom: 2rem;
}

.social-link {
    width: 40px;
    height: 40px;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffffff;
    text-decoration: none;
    transition: all 0.3s ease;
    backdrop-filter: blur(10px);
}

.social-link:hover {
    background: linear-gradient(135deg, #9333ea 0%, #ec4899 100%);
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(236, 72, 153, 0.3);
}

.hero-title {
    font-size: 3.5rem;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 1rem;
}

.gradient-text {
    background: linear-gradient(135deg, #9333ea 0%, #ec4899 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.hero-subtitle {
    font-size: 1.2rem;
    color: #a1a1aa;
    margin-bottom: 2rem;
}

.cta-button {
    background: linear-gradient(135deg, #9333ea 0%, #ec4899 100%);
    border: none;
    padding: 1rem 2rem;
    border-radius: 50px;
    color: #ffffff;
    font-weight: 600;
    font-size: 1rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    transition: all 0.3s ease;
    box-shadow: 0 10px 30px rgba(236, 72, 153, 0.3);
    width: fit-content;
}

.cta-button:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 40px rgba(236, 72, 153, 0.4);
}

.hero-image {
    display: flex;
    justify-content: center;
    align-items: center;
}

.profile-container {
    position: relative;
    width: 400px;
    height: 400px;
}

.profile-ring {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 3px solid transparent;
    border-radius: 50%;
    background: linear-gradient(135deg, #9333ea 0%, #ec4899 100%);
    background-clip: padding-box;
    animation: rotate 10s linear infinite;
}

.profile-img {
    width: 90%;
    height: 90%;
    object-fit: cover;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 5px solid #0a0a0f;
}

@keyframes rotate {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}

.floating-elements {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
}

.floating-element {
    position: absolute;
    width: 20px;
    height: 20px;
    background: linear-gradient(135deg, #9333ea 0%, #ec4899 100%);
    border-radius: 50%;
    opacity: 0.6;
    animation: float 6s ease-in-out infinite;
}

.floating-element:nth-child(2) {
    animation-delay: -2s;
}

.floating-element:nth-child(3) {
    animation-delay: -4s;
}

@keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
}

/* Container */
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
}

/* Section Headers */
.section-header {
    text-align: center;
    margin-bottom: 4rem;
}

.section-title {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
}

.section-subtitle {
    font-size: 1.2rem;
    color: #a1a1aa;
}

/* About Section */
.about {
    padding: 100px 0;
    background: linear-gradient(135deg, rgba(147, 51, 234, 0.05) 0%, rgba(236, 72, 153, 0.05) 100%);
}

.about-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;
}

.about-text h3 {
    font-size: 2rem;
    margin-bottom: 0.5rem;
}

.about-text h4 {
    color: #ec4899;
    margin-bottom: 1rem;
    font-size: 1.2rem;
}

.about-text p {
    color: #a1a1aa;
    margin-bottom: 2rem;
    line-height: 1.8;
}

.about-stats {
    display: flex;
    gap: 2rem;
    margin-bottom: 2rem;
}

.stat {
    text-align: center;
}

.stat-number {
    display: block;
    font-size: 2rem;
    font-weight: 700;
    background: linear-gradient(135deg, #9333ea 0%, #ec4899 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.stat-label {
    color: #a1a1aa;
    font-size: 0.9rem;
}

.about-buttons {
    display: flex;
    gap: 1rem;
}

.btn-primary {
    background: linear-gradient(135deg, #9333ea 0%, #ec4899 100%);
    border: none;
    padding: 0.8rem 1.5rem;
    border-radius: 50px;
    color: #ffffff;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.btn-primary:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 30px rgba(236, 72, 153, 0.3);
}

.btn-secondary {
    background: transparent;
    border: 2px solid rgba(255, 255, 255, 0.2);
    padding: 0.8rem 1.5rem;
    border-radius: 50px;
    color: #ffffff;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.btn-secondary:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateY(-3px);
}

.about-image-section {
    display: flex;
    justify-content: center;
    align-items: center;
}

.about-img-container {
    width: 250px;
    height: 300px;
    position: relative;
    border-radius: 20px;
    overflow: hidden;
    background: linear-gradient(135deg, #9333ea 0%, #ec4899 100%);
    padding: 5px;
}

.about-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 15px;
    border: 3px solid #0a0a0f;
}

/* Skills Section */
.skills {
    padding: 100px 0;
    background: linear-gradient(135deg, rgba(147, 51, 234, 0.05) 0%, rgba(236, 72, 153, 0.05) 100%);
}

.skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 2rem;
}

.skill-card {
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    padding: 2rem 1.5rem;
    border-radius: 15px;
    text-align: center;
    transition: all 0.3s ease;
    position: relative;
}

.skill-card:hover {
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.1);
}

.skill-card i {
    font-size: 3rem;
    color: #ec4899;
    margin-bottom: 1rem;
}

.skill-card span {
    font-weight: 600;
    font-size: 1.2rem;
    display: block;
    margin-bottom: 1rem;
}

.skill-level {
    height: 8px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 4px;
    overflow: hidden;
    position: relative;
    margin-top: 1rem;
}

.skill-level::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    background: linear-gradient(135deg, #9333ea 0%, #ec4899 100%);
    border-radius: 4px;
    width: 0;
    transition: width 2s ease-in-out;
}

.html-skill .skill-level::after { width: 98%; }
.css-skill .skill-level::after { width: 88%; }
.js-skill .skill-level::after { width: 70%; }
.python-skill .skill-level::after { width: 63%; }
.c-skill .skill-level::after { width: 55%; }
.java-skill .skill-level::after { width: 61%; }

/* Portfolio Section */
.portfolio {
    padding: 100px 0;
}

.portfolio-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2rem;
    margin-bottom: 4rem;
}

.portfolio-item {
    opacity: 1;
    transform: scale(1);
    transition: all 0.5s ease;
}

.portfolio-card {
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 20px;
    overflow: hidden;
    transition: all 0.3s ease;
}

.portfolio-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

.portfolio-image {
    position: relative;
    overflow: hidden;
}

.portfolio-image img {
    width: 100%;
    height: 250px;
    object-fit: cover;
    transition: all 0.3s ease;
}

.portfolio-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    opacity: 0;
    transition: all 0.3s ease;
}

.portfolio-card:hover .portfolio-overlay {
    opacity: 1;
}

.portfolio-card:hover .portfolio-image img {
    transform: scale(1.1);
}

.view-btn, .link-btn {
    width: 50px;
    height: 50px;
    background: linear-gradient(135deg, #9333ea 0%, #ec4899 100%);
    border: none;
    border-radius: 50%;
    color: #ffffff;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
}

.view-btn:hover, .link-btn:hover {
    transform: scale(1.1);
}

.portfolio-content {
    padding: 1.5rem;
}

.portfolio-content h3 {
    font-size: 1.3rem;
    margin-bottom: 0.5rem;
}

.portfolio-content p {
    color: #a1a1aa;
    margin-bottom: 1rem;
    line-height: 1.6;
}

.portfolio-tags {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
}

.tag {
    background: rgba(147, 51, 234, 0.2);
    color: #ec4899;
    padding: 0.3rem 0.8rem;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: 500;
}

/* Resume Section */
.resume {
    padding: 100px 0;
}

.resume-content {
    margin-top: 3rem;
}

.resume-cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-bottom: 4rem;
}

.resume-card {
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    padding: 2rem;
    border-radius: 20px;
    transition: all 0.3s ease;
}

.resume-card:hover {
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.1);
}

.resume-card h3 {
    color: #ec4899;
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    font-weight: 700;
    border-bottom: 2px solid #ec4899;
    padding-bottom: 0.5rem;
}

.resume-item {
    margin-bottom: 1.5rem;
}

.resume-item h4 {
    color: #ffffff;
    font-weight: 600;
    margin-bottom: 0.5rem;
}

.resume-item .duration {
    color: #9333ea;
    font-weight: 500;
    font-size: 0.9rem;
    display: block;
    margin-bottom: 0.5rem;
}

.resume-item p {
    color: #a1a1aa;
    line-height: 1.6;
}

.timeline-section {
    margin-top: 4rem;
    text-align: center;
}

.timeline-section h3 {
    font-size: 2rem;
    margin-bottom: 3rem;
}

.timeline {
    position: relative;
    max-width: 800px;
    margin: 0 auto;
}

.timeline::before {
    content: '';
    position: absolute;
    width: 2px;
    background: linear-gradient(135deg, #9333ea 0%, #ec4899 100%);
    top: 0;
    bottom: 0;
    left: 50%;
    margin-left: -1px;
}

.timeline-item {
    padding: 10px 40px;
    position: relative;
    background-color: inherit;
    width: 50%;
}

.timeline-item::after {
    content: '';
    position: absolute;
    width: 25px;
    height: 25px;
    right: -17px;
    background: linear-gradient(135deg, #9333ea 0%, #ec4899 100%);
    border: 4px solid #0a0a0f;
    top: 15px;
    border-radius: 50%;
    z-index: 1;
}

.timeline-item:nth-child(even) {
    left: 50%;
}

.timeline-item:nth-child(even)::after {
    left: -16px;
}

.timeline-date {
    color: #ec4899;
    font-weight: 600;
    margin-bottom: 0.5rem;
}

.timeline-content {
    padding: 20px 30px;
    background: rgba(255, 255, 255, 0.05);
    position: relative;
    border-radius: 15px;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
}

/* Contact Section */
.contact {
    padding: 100px 0;
    background: linear-gradient(135deg, rgba(147, 51, 234, 0.05) 0%, rgba(236, 72, 153, 0.05) 100%);
}

.contact-subtitle {
    font-size: 1.8rem;
    margin-bottom: 2rem;
    color: #ec4899;
}

.contact-content {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 4rem;
    margin-bottom: 3rem;
}

.contact-item {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 2rem;
    background: rgba(255, 255, 255, 0.05);
    padding: 1.5rem;
    border-radius: 15px;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
}

.contact-item i {
    width: 40px;
    height: 40px;
    background: linear-gradient(135deg, #9333ea 0%, #ec4899 100%);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffffff;
}

.contact-item div span {
    display: block;
    color: #a1a1aa;
    font-size: 0.9rem;
}

.contact-item div a {
    color: #ffffff;
    text-decoration: none;
    font-weight: 600;
}

.contact-form {
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    padding: 2rem;
    border-radius: 20px;
}

.form-group {
    margin-bottom: 1.5rem;
}

.form-group input,
.form-group textarea {
    width: 100%;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 10px;
    padding: 1rem;
    color: #ffffff;
    font-family: inherit;
    font-size: 1rem;
    transition: all 0.3s ease;
}

.form-group input:focus,
.form-group textarea:focus {
    outline: none;
    border-color: #ec4899;
    background: rgba(255, 255, 255, 0.1);
}

.form-group input::placeholder,
.form-group textarea::placeholder {
    color: #a1a1aa;
}

.submit-btn {
    background: linear-gradient(135deg, #9333ea 0%, #ec4899 100%);
    border: none;
    padding: 1rem 2rem;
    border-radius: 50px;
    color: #ffffff;
    font-weight: 600;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    transition: all 0.3s ease;
    width: 100%;
    justify-content: center;
}

.submit-btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 40px rgba(236, 72, 153, 0.4);
}

.footer-social {
    text-align: center;
    padding-top: 2rem;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.footer-social p {
    color: #a1a1aa;
    margin-bottom: 1rem;
}

/* Modal */
.modal {
    display: none;
    position: fixed;
    z-index: 10000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(10px);
}

.modal-content {
    background: rgba(10, 10, 15, 0.95);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    margin: 5% auto;
    padding: 2rem;
    border-radius: 20px;
    width: 90%;
    max-width: 600px;
    position: relative;
    max-height: 80vh;
    overflow-y: auto;
}

.close {
    color: #a1a1aa;
    float: right;
    font-size: 2rem;
    font-weight: bold;
    cursor: pointer;
    position: absolute;
    top: 1rem;
    right: 1.5rem;
}

.close:hover {
    color: #ec4899;
}

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

.modal-buttons .btn-primary:hover,
.modal-buttons .btn-secondary:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 30px rgba(236, 72, 153, 0.3);
}

/* Responsive Design */
@media (max-width: 768px) {
    .hamburger {
        display: flex;
    }

    .nav-menu {
        position: fixed;
        left: -100%;
        top: 70px;
        flex-direction: column;
        background-color: rgba(10, 10, 15, 0.95);
        backdrop-filter: blur(20px);
        width: 100%;
        text-align: center;
        transition: 0.3s;
        box-shadow: 0 10px 27px rgba(0, 0, 0, 0.05);
        padding: 2rem 0;
    }

    .nav-menu.active {
        left: 0;
    }

    .hero-container {
        grid-template-columns: 1fr;
        text-align: center;
        gap: 2rem;
    }

    .hero-title {
        font-size: 2.5rem;
    }

    .profile-container {
        width: 300px;
        height: 300px;
    }

    .about-content {
        grid-template-columns: 1fr;
        gap: 2rem;
    }

    .about-stats {
        justify-content: center;
    }

    .skills-grid {
        grid-template-columns: repeat(2, 1fr);
    }

    .portfolio-grid {
        grid-template-columns: 1fr;
    }

    .contact-content {
        grid-template-columns: 1fr;
        gap: 2rem;
    }

    .about-buttons {
        flex-direction: column;
        align-items: center;
    }

    .section-title {
        font-size: 2rem;
    }

    .timeline::before {
        left: 20px;
    }

    .timeline-item {
        flex-direction: column;
        align-items: flex-start;
        margin-left: 40px;
        width: auto;
    }

    .timeline-item::after {
        left: 3px;
    }

    .timeline-item:nth-child(even) {
        left: 0;
    }

    .timeline-item:nth-child(even)::after {
        left: 3px;
    }
}

@media (max-width: 480px) {
    .nav-container {
        padding: 1rem;
    }

    .container {
        padding: 0 1rem;
    }

    .hero-container {
        padding: 1rem;
    }

    .hero-title {
        font-size: 2rem;
    }

    .profile-container {
        width: 250px;
        height: 250px;
    }

    .skills-grid {
        grid-template-columns: 1fr;
    }

    .about-stats {
        flex-direction: column;
        gap: 1rem;
    }

    .modal-content {
        margin: 10% auto;
        width: 95%;
        padding: 1.5rem;
    }

    .about-img-container {
        width: 250px;
        height: 300px;
        margin: 0 auto;
    }

    .portfolio-grid {
        grid-template-columns: 1fr;
    }
}

/* Smooth scrolling */
html {
    scroll-behavior: smooth;
}

/* Animation delays for staggered effects */
.portfolio-item:nth-child(1) { animation-delay: 0.1s; }
.portfolio-item:nth-child(2) { animation-delay: 0.2s; }
.portfolio-item:nth-child(3) { animation-delay: 0.3s; }
.portfolio-item:nth-child(4) { animation-delay: 0.4s; }

.skill-card:nth-child(1) { animation-delay: 0.1s; }
.skill-card:nth-child(2) { animation-delay: 0.2s; }
.skill-card:nth-child(3) { animation-delay: 0.3s; }
.skill-card:nth-child(4) { animation-delay: 0.4s; }
.skill-card:nth-child(5) { animation-delay: 0.5s; }
.skill-card:nth-child(6) { animation-delay: 0.6s; }
