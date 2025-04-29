const typingText = document.getElementById("typing-text");
const header = document.querySelector("header");
const words = [
  { text: "Nandini Singh", className: "name", bgColor: "#f8bbd0" },  // Light Pink
  { text: "Web Developer", className: "web", bgColor: "#bbdefb" },    // Light Blue
  { text: "DevOps Learner", className: "devops", bgColor: "#c8e6c9" } // Light Green
];

let i = 0, j = 0, isDeleting = false;

function type() {
  const current = words[i];
  const visibleText = current.text.substring(0, j);
  typingText.innerHTML = `<span class="${current.className}">${visibleText}</span>`;

  // Change the header background color
  header.style.backgroundColor = current.bgColor;

  if (!isDeleting && j < current.text.length) {
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
