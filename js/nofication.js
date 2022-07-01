const noficationContent = document.querySelector(".nofication-content");
const noficationNext = document.querySelector(".nofication-next");

document.body.addEventListener("click", (e) => {
  if (e.target.matches(".nofication")) {
    e.target.parentNode.removeChild(e.target);
  }
});

noficationNext.addEventListener("click", (e) => {
  const parentNode = e.target.parentNode;
  parentNode.parentNode.removeChild(parentNode);
});
