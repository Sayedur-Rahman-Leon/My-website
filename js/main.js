// Typing Animation
const words = ["Developer", "Designer", "Freelancer"];
let i = 0;
let j = 0;
let currentWord = "";
let isDeleting = false;
const typingElement = document.getElementById("typing");

function type() {
  if (!typingElement) return;

  currentWord = words[i];

  if (isDeleting) {
    typingElement.textContent = currentWord.substring(0, j--);
  } else {
    typingElement.textContent = currentWord.substring(0, j++);
  }

  if (!isDeleting && j === currentWord.length + 1) {
    isDeleting = true;
    setTimeout(type, 1000);
    return;
  }

  if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % words.length;
  }

  setTimeout(type, isDeleting ? 50 : 100);
}
type();


// Animated Counter
const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {
  const updateCount = () => {
    const target = +counter.getAttribute("data-target");
    const count = +counter.innerText;
    const increment = target / 200;

    if (count < target) {
      counter.innerText = Math.ceil(count + increment);
      setTimeout(updateCount, 10);
    } else {
      counter.innerText = target;
    }
  };
  updateCount();
});


// Circular Skill Progress
document.querySelectorAll(".circle").forEach(circle => {
  let percent = circle.getAttribute("data-percent");
  let degree = percent * 3.6;
  circle.style.background = `conic-gradient(#0d6efd ${degree}deg, #eee ${degree}deg)`;
});
