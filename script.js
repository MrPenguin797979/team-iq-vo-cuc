const navToggle = document.getElementsByClassName("nav-toggle")[0];
const navContent = document.getElementsByClassName("nav-content")[0];

navToggle.addEventListener("click", () => {
	navToggle.classList.toggle("active");
	navContent.classList.toggle("active");
});
