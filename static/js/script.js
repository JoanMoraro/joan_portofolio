const aboutExtra = document.getElementById('about-extra');
const readMoreBtn = document.getElementById('read-more-btn');

if (readMoreBtn && aboutExtra) {
  readMoreBtn.addEventListener('click', () => {
    aboutExtra.classList.toggle('expanded');
    const expanded = aboutExtra.classList.contains('expanded');
    readMoreBtn.textContent = expanded ? 'Read less ↑' : 'Read more ↓';
  });
}