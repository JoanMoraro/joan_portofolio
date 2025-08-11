const roles = ["a Web Developer", "an AI Enthusiast", "a Blockchain Explorer"];
let roleIndex = 0;
let charIndex = 0;
const typingText = document.getElementById("typing-text");

function typeRole() {
  if (charIndex < roles[roleIndex].length) {
    typingText.textContent += roles[roleIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeRole, 100);
  } else {
    setTimeout(eraseRole, 2000);
  }
}

function eraseRole() {
  if (charIndex > 0) {
    typingText.textContent = roles[roleIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseRole, 50);
  } else {
    roleIndex = (roleIndex + 1) % roles.length;
    setTimeout(typeRole, 500);
  }
}

document.addEventListener("DOMContentLoaded", typeRole);


// Skills animation
const fills = document.querySelectorAll(".fill");
window.addEventListener("scroll", () => {
  fills.forEach(fill => {
    const barPosition = fill.getBoundingClientRect().top;
    if (barPosition < window.innerHeight - 50) {
      fill.style.width = fill.getAttribute("data-width");
    }
  });
});

// Dark mode toggle
const toggle = document.getElementById("theme-toggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
  toggle.textContent = document.body.classList.contains("light-mode") ? "☀️" : "🌙";
});

// Scroll reveal
function revealOnScroll() {
    const reveals = document.querySelectorAll(".reveal");
    for (let i = 0; i < reveals.length; i++) {
      const windowHeight = window.innerHeight;
      const revealTop = reveals[i].getBoundingClientRect().top;
      const revealPoint = 150;
  
      if (revealTop < windowHeight - revealPoint) {
        reveals[i].classList.add("active");
      }
    }
  }
  
  window.addEventListener("scroll", revealOnScroll);
  document.addEventListener("DOMContentLoaded", revealOnScroll);
  