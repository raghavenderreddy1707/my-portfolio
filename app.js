// Select all the navbar links and sections
const links = document.querySelectorAll('.link');
const sections = document.querySelectorAll('section');

// Track the currently active section index
let activeLink = 0;

// Function to handle the click event on the links
links.forEach((link, i) => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default anchor behavior

        // If the clicked link is not the currently active link
        if (activeLink !== i) {
            // Remove active class from the previous active link and section
            links[activeLink].classList.remove('active');
            sections[activeLink].classList.remove('active');

            // Add active class to the clicked link and corresponding section
            link.classList.add('active');
            sections[i].classList.add('active');

            // Update activeLink to the new index
            activeLink = i;
        }

        // Smooth scrolling to the section (optional)
        sections[i].scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Optionally, handle page load to make the first section and link active
document.addEventListener('DOMContentLoaded', () => {
    links[0].classList.add('active');
    sections[0].classList.add('active');
});
