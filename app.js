// Smooth section navigation with active link highlight
const links = document.querySelectorAll('nav ul.link-group a');
const sections = document.querySelectorAll('main > section');
let activeIdx = 0;

function activateLink(index) {
  links[activeIdx].classList.remove('active');
  sections[activeIdx].classList.remove('active');
  links[index].classList.add('active');
  sections[index].classList.add('active');
  activeIdx = index;
}

links.forEach((link, idx) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    sections[idx].scrollIntoView({ behavior: 'smooth' });
    activateLink(idx);
  });
});

// Initialize first section as active on DOM load
document.addEventListener('DOMContentLoaded', () => {
  sections.forEach((sec, i) => sec.classList.remove('active'));
  links.forEach(link => link.classList.remove('active'));
  activateLink(0);
});
