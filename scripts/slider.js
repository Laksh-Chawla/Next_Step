const slides = document.querySelector(".slides");
const totalSlides = document.querySelectorAll(".slide").length;
let currentIndex = 0;

function showSlide(index) {
  if (index >= totalSlides) currentIndex = 0;
  else if (index < 0) currentIndex = totalSlides - 1;
  else currentIndex = index;

  slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

document
  .querySelector(".next")
  .addEventListener("click", () => showSlide(currentIndex + 1));
document
  .querySelector(".prev")
  .addEventListener("click", () => showSlide(currentIndex - 1));

// Optional auto-slide:
setInterval(() => {
  showSlide(currentIndex + 1);
}, 5000);
