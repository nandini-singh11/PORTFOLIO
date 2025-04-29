const typingText = document.getElementById("typing-text");
const header = document.querySelector("header");
const sections = document.querySelectorAll("section");  // Get all sections
const words = [
  { text: "Nandini Singh", className: "name", bgColor: "#f8bbd0", textColor: "#e91e63" },  // Light Pink
  { text: "Web Developer", className: "web", bgColor: "#bbdefb", textColor: "#2196f3" },    // Light Blue
  { text: "DevOps Learner", className: "devops", bgColor: "#c8e6c9", textColor: "#4caf50" } // Light Green
];

let i = 0, j = 0, isDeleting = false;

function type() {
  const current = words[i];
  const visibleText = current.text.substring(0, j);
  typingText.innerHTML = `<span class="${current.className}">${visibleText}</span>`;

  // Change the header background color
  header.style.backgroundColor = current.bgColor;

  // Change text color in header (for title)
  header.style.color = current.textColor;

  // Change the color of each section's subtitle (h2) and description (p)
  sections.forEach(section => {
    const h2 = section.querySelector("h2");
    const p = section.querySelector("p");

    if (h2) {
      h2.style.color = current.textColor;  // Subtitle color
    }

    if (p) {
      p.style.color = current.textColor;  // Paragraph text color
    }
  });

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
