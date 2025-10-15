// ===== SMOOTH SCROLL FOR NAV LINKS =====
document.querySelectorAll('.nav-links a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 60,
        behavior: 'smooth'
      });
    }
  });
});

// ===== STICKY NAVBAR ON SCROLL =====
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.style.background = 'rgba(0, 0, 0, 0.95)';
    navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.3)';
  } else {
    navbar.style.background = 'rgba(0, 0, 0, 0.9)';
    navbar.style.boxShadow = 'none';
  }
});

// ===== TYPING ANIMATION =====
const typingText = [
  "Creative Web Developer",
  "UI/UX Enthusiast",
  "Lifelong Learner"
];

let typeIndex = 0;
let charIndex = 0;
const typingSpeed = 120;
const erasingSpeed = 70;
const delayBetween = 1500;

const typingElement = document.createElement('h2');
typingElement.classList.add('typing');
document.querySelector('.hero-content').appendChild(typingElement);

function type() {
  if (charIndex < typingText[typeIndex].length) {
    typingElement.textContent += typingText[typeIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingSpeed);
  } else {
    setTimeout(erase, delayBetween);
  }
}

function erase() {
  if (charIndex > 0) {
    typingElement.textContent = typingText[typeIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingSpeed);
  } else {
    typeIndex++;
    if (typeIndex >= typingText.length) typeIndex = 0;
    setTimeout(type, typingSpeed);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  if (typingText.length) setTimeout(type, delayBetween);
});

// ===== SCROLL TO TOP BUTTON =====
const scrollBtn = document.createElement("button");
scrollBtn.textContent = "↑";
scrollBtn.classList.add("scroll-top-btn");
document.body.appendChild(scrollBtn);

window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    scrollBtn.classList.add("visible");
  } else {
    scrollBtn.classList.remove("visible");
  }
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
