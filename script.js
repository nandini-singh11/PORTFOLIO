// Dark Mode Toggle
document.getElementById("darkModeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Back to Top Button
const backToTop = document.getElementById("backToTop");
window.onscroll = function () {
  backToTop.style.display = (window.scrollY > 300) ? "block" : "none";
};
backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Typing Animation
const typingText = document.getElementById("typing-text");
const words = ["Nandini Singh", "Web Developer", "DevOps Learner"];
let i = 0, j = 0, isDeleting = false;

function type() {
  typingText.textContent = words[i].substring(0, j);

  if (!isDeleting && j < words[i].length) {
    j++;
    setTimeout(type, 100);
  } else if (isDeleting && j > 0) {
    j--;
    setTimeout(type, 60);
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) i = (i + 1) % words.length;
    setTimeout(type, 1000);
  }
}
type();
