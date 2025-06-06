// Select all navbar links and corresponding sections
const links = document.querySelectorAll('.link');
const sections = document.querySelectorAll('section');

let activeLink = 0;

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
    activateSection(0);
});

// Handle clicks on nav links
links.forEach((link, index) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        if (activeLink !== index) {
            activateSection(index);
        }

        // Smooth scroll into view
        sections[index].scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Function to activate the selected section and link
function activateSection(index) {
    // Remove active class from current
    links[activeLink].classList.remove('active');
    sections[activeLink].classList.remove('active');

    // Add active class to new
    links[index].classList.add('active');
    sections[index].classList.add('active');

    // Update tracker
    activeLink = index;
}
