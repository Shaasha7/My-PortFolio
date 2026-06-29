function show(id) {
  document.getElementById(id).scrollIntoView({
    behavior: "smooth"
  });
}
function toggleTheme() {
    document.body.classList.toggle("dark");

    const icon = document.getElementById("themeIcon");

    if (document.body.classList.contains("dark")) {
        icon.innerHTML = "☀️";
        localStorage.setItem("theme", "dark");
    } else {
        icon.innerHTML = "🌙";
        localStorage.setItem("theme", "light");
    }
}
// Scroll animation
const elements = document.querySelectorAll('.fade-up');

function revealOnScroll() {
  const triggerBottom = window.innerHeight * 0.85;

  elements.forEach(el => {
    const boxTop = el.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      el.classList.add('show');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
// Multilanguage Welcome Text
const greetings = [
  "Hello 👋",
  "Hola 👋",
  "Bonjour 👋",
  "Hallo 👋",
  "नमस्ते 👋",
  "నమస్కారం 👋",
  "வணக்கம் 👋",
  "ನಮಸ್ಕಾರ 👋",
  "നമസ്കാരം 👋",
  "こんにちは 👋",
  "Ciao 👋"
];

let index = 0;

function changeGreeting() {
  const text = document.getElementById("welcome-text");

  text.style.opacity = 0;

  setTimeout(() => {
    index = (index + 1) % greetings.length;
    text.innerText = greetings[index];
    text.style.opacity = 1;
  }, 300);
}

setInterval(changeGreeting, 2000);
// Apply saved theme when page loads
window.onload = function () {

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark");

        const icon = document.getElementById("themeIcon");
        if (icon) {
            icon.innerHTML = "☀️";
        }
    } else {
        document.body.classList.remove("dark");

        const icon = document.getElementById("themeIcon");
        if (icon) {
            icon.innerHTML = "🌙";
        }
    }
};
