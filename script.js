const navToggle = document.querySelector(".nav-toggle");
const navContent = document.querySelector(".nav-content");

navToggle.addEventListener("click", () => {
  navToggle.classList.toggle("active");
  navContent.classList.toggle("active");
});
